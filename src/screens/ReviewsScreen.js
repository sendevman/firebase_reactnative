/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { connect } from 'react-redux';

// My Styles
import styles from './css/ReviewsScreenCss';

// My Customs
import SkeletonLoading from './components/SkeletonLoading';
import CustomerReview from './components/CustomerReview';
import WebReview from './components/WebReview';
import VideoContent from './components/VideoContent';
import FeedbackSurvey from './components/FeedbackSurvey';

// My Actions
import { updateHeaderNav } from '../actions/Common';

var { width } = Dimensions.get('window');

const getWidth = (number) => {
  return (((width - 20)/2) - number);
};

const ReviewsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={235}>
      <Rect x={getWidth(100)} y="0" rx="3" ry="3" width="200" height="10"/>
      <Rect x={getWidth(90)} y="15" rx="3" ry="3" width="180" height="10"/>
      <Rect x="0" y="40" rx="5" ry="5" width="100%" height="80"/>

      <Rect x="0" y="130" rx="3" ry="3" width="120" height="10"/>
      <Rect x="0" y="145" rx="5" ry="5" width="100%" height="80"/>
    </SkeletonLoading>
  </View>
);

class ReviewsScreen extends Component {
  constructor(props) {
    super(props);
  }

  setNewValue(a, b, c, d, e) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d,
      heightScrolled: e
    }
  }

  handleScroll(event) {
    console.log(event, event.nativeEvent.contentOffset)
    const { dispatch, customHeaderNav } = this.props;
    var value = event.nativeEvent.contentOffset.y;

    // if (!customHeaderNav.heightScrolled && value > 60) {
    if (value > 10) {
      let newValue = this.setNewValue(false, 0, false, 0, true);
      // dispatch(updateHeaderNav(newValue));
    }
    // if (customHeaderNav.heightScrolled && value < 60) {
    if (value <= 0) {
      let newValue = this.setNewValue(false, 0, false, 0, false);
      // dispatch(updateHeaderNav(newValue));
    }
    //   if ((value >= 0) && (value <= 56)) {
    //     let newValue = this.setNewValue(false, 56 - value, false, 166);
    //     dispatch(updateHeaderNav(newValue));
    //   } else if ((value >= 57) && (value <= 222)) {
    //     let newValue = this.setNewValue(true, 0, false, 166 - (value - 56));
    //     dispatch(updateHeaderNav(newValue));
    //   } else {
    //     let newValue = this.setNewValue(true, 0, true, 0);
    //     dispatch(updateHeaderNav(newValue));
    //   }
  }

  renderCustomerReviews() {
    const { customerReviews } = this.props.reviews;

    if (typeof customerReviews != "undefined" && customerReviews.length > 0) {
      return (
        <View>
          <Text style={styles.webReviewTitle}>Reviews from myAT&T</Text>

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
        </View>
      );
    }
  }

  renderWebReviews() {
    const { webReviews } = this.props.reviews;

    if (typeof webReviews != "undefined" && webReviews.length > 0) {
      return (
        <View>
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

          { this.renderWebReviews() }
          { this.renderCustomerReviews() }
          { this.renderVideoContent() }
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={16}>
        { this.renderContent() }
        <FeedbackSurvey />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { reviews: current.product, customHeaderNav: common.customHeaderNav };
}

export default connect(mapStateToProps)(ReviewsScreen);
