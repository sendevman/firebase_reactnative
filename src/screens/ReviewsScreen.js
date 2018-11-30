/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Styles
import styles from './css/ReviewsScreenCss';

// My Customs
import CustomerReviewComponent from '../components/DeviceComponents/CustomerReviewComponent';
import SkeletonLoading from './components/SkeletonLoading';
import WebReview from './components/WebReview';
import VideoContent from './components/VideoContent';
import FeedbackSurvey from './components/FeedbackSurvey';

var { width, height } = Dimensions.get('window');

const getWidth = number => {
  return (width - 20) / 2 - number;
};

const ReviewsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={235}>
      <Rect x={getWidth(100)} y="0" rx="3" ry="3" width="200" height="10" />
      <Rect x={getWidth(90)} y="15" rx="3" ry="3" width="180" height="10" />
      <Rect x="0" y="40" rx="5" ry="5" width="100%" height="80" />

      <Rect x="0" y="130" rx="3" ry="3" width="120" height="10" />
      <Rect x="0" y="145" rx="5" ry="5" width="100%" height="80" />
    </SkeletonLoading>
  </View>
);

class ReviewsScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTab === 1 && nextProps.reviews.model != undefined) {
      firebase
        .analytics()
        .logEvent('deviceViewed', {
          pFirebaseId: this.props.firebaseid,
          pDeviceModel: nextProps.reviews.model,
          pDeviceManufacture: nextProps.reviews.manufacture,
          pResearchTab: 'reviews',
        });
    }
  }

  setNewValue(a, b, c, d, e) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d,
      heightScrolled: e,
    };
  }

  renderCustomerReviews() {
    const { customerReviews, model, manufacture } = this.props.reviews;

    if (typeof customerReviews != 'undefined' && customerReviews.length > 0) {
      return <CustomerReviewComponent customerReviews={customerReviews} model={model} manufacture={manufacture} />;
    }
  }

  renderWebReviews() {
    const { manufacture, model, webReviews } = this.props.reviews;

    if (typeof webReviews != 'undefined' && webReviews.length > 0) {
      return (
        <View>
          {webReviews.map((item, index) => {
            return (
              <WebReview
                key={index}
                index={index}
                item={item}
                model={model}
                manufacture={manufacture}
                publication={webReviews[index].publication}
              />
            );
          })}
        </View>
      );
    }
  }

  renderVideoContent() {
    const { manufacture, model, videoContent } = this.props.reviews;

    if (typeof videoContent != 'undefined' && videoContent.length > 0) {
      return (
        <View>
          {videoContent.map((item, index) => {
            return <VideoContent key={index} index={index} item={item} model={model} manufacture={manufacture} />;
          })}
        </View>
      );
    }
  }

  renderContent() {
    const { reviews } = this.props;
    let reviewsEmpty = typeof reviews == 'undefined'; // || (Object.keys(reviews).length === 0 && reviews.constructor === Object));

    const isTitle = reviews.title === 'title' ? true : false;
    if (isTitle) {
      return (
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: 'black',
          }}
        >
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('../assets/images/files/backgroundSD.png')}
          />
        </View>
      );
    }
    if (Object.keys(reviews).length === 0) {
      return <ReviewsSkeleton />;
    } else {
      return (
        <View>
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('../assets/images/files/backgroundHD.png')}
          />
          <View style={styles.reviewsBox}>
            <View style={styles.headerPrincipal}>
              <Text style={styles.textTitleUno}>Make an informed decision.</Text>
              <Text style={styles.textSubtitle}>Read what the reviews are saying.</Text>
            </View>

            {this.renderCustomerReviews()}
            {this.renderWebReviews()}
            {this.renderVideoContent()}
            {!reviewsEmpty && <FeedbackSurvey />}
          </View>
        </View>
      );
    }
  }

  _animateScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < -3) {
      let yy = y * y / 80;
      if (yy > 40) yy = 40;
      this.props.onScrollCustom.setValue(-yy);
    } else if (y > -3 && y < 3) {
    } else {
      let yy = y * y / 300;
      if (yy > 120) yy = 120;
      this.props.onScrollCustom.setValue(yy);
    }
  };
  _onScrollEndSnapToEdge = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < 80) this.props.onScrollCustom.setValue(0);
    else this.props.onScrollCustom.setValue(120);
  };

  render() {
    const { reviews } = this.props;

    return (
      <Animated.ScrollView
        contentContainerStyle={styles.container}
        scrollEventThrottle={1}
        onScroll={this._animateScroll}
        onScrollEndDrag={this._onScrollEndSnapToEdge}
      >
        {this.renderContent()}
      </Animated.ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { firebaseid: common.firebaseid, reviews: current.product, selectedTab: common.selectedTab };
};

export default connect(mapStateToProps)(ReviewsScreen);
