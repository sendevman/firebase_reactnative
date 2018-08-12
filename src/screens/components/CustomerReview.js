/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';

import firebase from 'react-native-firebase';
// My Styles
import styles from '../css/ReviewsScreenCss';

class CustomerReview extends Component<props> {
  constructor(props) {
    super(props);

    this.state = { readMore: false };
  }

  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
    if(!this.state.readMore){
      console.log("reviewViewed ======= : ", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":this.props.model, "pDeviceManufacture":this.props.manufacture, "pReviewType":"customer"});
      firebase.analytics().logEvent("reviewViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":this.props.model, "pDeviceManufacture":this.props.manufacture, "pReviewType":"customer"});
    }
  }

  render() {
    const { item } = this.props;
    const { readMore } = this.state;

    let readMoreText = readMore ? "- Collapse" : "+ Read more";
    let numberOfLines = readMore ? 0 : 3;

    return (
      <View>
        <View style={styles.reviewItemBox}>
          <View style={styles.headerReview}>
            <Text style={styles.authorReview}>{item.name}</Text>
            <Rating
              type='custom'
              ratingColor='#3498db'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={15}
              readonly
              startingValue={item.stars}
            />
          </View>

          <Text style={styles.textReview} numberOfLines={numberOfLines}>
            {item.review}
          </Text>
        </View>

        <TouchableOpacity style={styles.contentReadMore} onPress={this.toggleReadMore}>
          <Text style={styles.textReadMore}>{readMoreText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { firebaseid: common.firebaseid };
}
export default connect(mapStateToProps)(CustomerReview);
