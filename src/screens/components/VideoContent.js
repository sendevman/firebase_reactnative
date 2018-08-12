/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, WebView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
// My Styles
import styles from '../css/ReviewsScreenCss';

class VideoContent extends Component<props> {
  constructor(props) {
    super(props);
  }
  onPressfunc= () => {
    console.log("reviewVideo ======= : ", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":this.props.model, "pDeviceManufacture":this.props.manufacture,
     "pReviewContentTitle":this.props.item.title, "pReviewContentUrl":this.props.item.src, "pReviewContentType":"video_review"});
    firebase.analytics().logEvent("reviewVideo", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":this.props.model,
     "pDeviceManufacture":this.props.manufacture, "pReviewContentTitle":this.props.item.title, "pReviewContentUrl":this.props.item.src, "pReviewContentType":"video_review"});

   }
  render() {
    const { item } = this.props;

    return (
      <View style={styles.videoContainer}>
        <TouchableOpacity style={styles.videoBox} onPress={this.onPressfunc}>
          <WebView
            style={styles.videoItem}
            source={{uri: item.src}}
          />
          </TouchableOpacity>

        <Text style={[styles.textReviewBig, { marginTop: 16 }]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.videoAuthor}>{item.author}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;
  return { firebaseid: common.firebaseid };
}
export default connect(mapStateToProps)(VideoContent);
