/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { connect } from 'react-redux';

// My Styles
import styles from './css/ReviewsScreenCss';

// My Customs
import SkeletonLoading from './components/SkeletonLoading';
import CustomerReview from './components/CustomerReview';
import WebReview from './components/WebReview';
import VideoContent from './components/VideoContent';

// My Actions
import { updateHeaderNav } from '../actions/Common'

const ReviewsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={235}>
      <Rect x="50" y="0" rx="3" ry="3" width="200" height="10"/>
      <Rect x="60" y="15" rx="3" ry="3" width="180" height="10"/>
      <Rect x="0" y="40" rx="5" ry="5" width="100%" height="80"/>

      <Rect x="0" y="130" rx="3" ry="3" width="120" height="10"/>
      <Rect x="0" y="145" rx="5" ry="5" width="100%" height="80"/>
    </SkeletonLoading>
  </View>
);

class ReviewsScreen extends Component {
  constructor(props) {
    super(props);

    handleScroll = (event) => {
      const { dispatch, customHeaderNav } = this.props;
      var value = event.nativeEvent.contentOffset.y;

      if ((value >= 0) && (value <= 56)) {
        let newValue = this.setNewValue(false, 56 - value, false, 166);
        dispatch(updateHeaderNav(newValue));
        return;
      } else if ((value >= 57) && (value <= 222)) {
        let newValue = this.setNewValue(true, 0, false, 166 - (value - 56));
        dispatch(updateHeaderNav(newValue));
        return;
      } else {
        let newValue = this.setNewValue(true, 0, true, 0);
        dispatch(updateHeaderNav(newValue));
        return;
      }
    };
  }

  setNewValue(a, b, c, d) {
    return {
      customHeaderNav: {
        hideHeader: a,
        heightHeader: b,
        hideSlide: c,
        heightSlide: d
      }
    }
  }

  renderCustomerReviews() {
    const { customerReviews } = this.props.reviews;

    if (typeof customerReviews != "undefined" && customerReviews.length > 0) {
      return (
        <View style={[styles.cardContainer, { borderTopColor: '#1181FF' }]}>
          <View style={styles.headerCard}>
            <Image style={[styles.logoReview, { width: 60 }]} source={require('../assets/images/files/myAtt.jpg')} />
            <Text style={[styles.titleReview, { marginTop: -4 }]}>Customer Reviews</Text>
          </View>

          { customerReviews.map((item, index) => {
              return <CustomerReview key={index} index={index} item={item} />;
            })
          }
        </View>
      );
    }
  }

  renderWebReviews() {
    const { webReviews } = this.props.reviews;

    if (typeof webReviews != "undefined" && webReviews.length > 0) {
      return (
        <View>
          <Text style={styles.webReviewTitle}>Reviews from around the web</Text>

          { webReviews.map((item, index) => {
              return <WebReview key={index} index={index} item={item} />;
            })
          }
        </View>
      );
    }
  }

  renderVideoContent() {
    const { videoContent } = this.props.reviews;

    if (typeof videoContent != "undefined" && videoContent.length > 0) {
      return (
        <View>
          { videoContent.map((item, index) => {
              return <VideoContent key={index} index={index} item={item} />;
            })
          }
        </View>
      );
    }
  }

  renderContent() {
    const { reviews } = this.props;

    if (Object.keys(reviews).length === 0 && reviews.constructor === Object) {
      return ( <ReviewsSkeleton /> );
    } else {
      return (
        <View style={styles.reviewsBox}>
          <View style={styles.headerPrincipal}>
            <Text style={styles.textTitleUno}>Make an informed decision.</Text>
            <Text style={styles.textSubtitle}>Read what the reviews are saying.</Text>
          </View>

          { this.renderCustomerReviews() }
          { this.renderWebReviews() }
          { this.renderVideoContent() }
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} onScroll={handleScroll.bind(this)} scrollEventThrottle={16}>
        { this.renderContent() }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { reviews: current.product, customHeaderNav: common.customHeaderNav };
}

export default connect(mapStateToProps)(ReviewsScreen);
