/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

// My Styles
import styles from '../css/ReviewsScreenCss';

class VideoContent extends Component<props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.videoContainer}>
        <View style={styles.videoBox}>
          <WebView
            style={styles.videoItem}
            source={{uri: item.src}}
          />
        </View>

        <Text style={[styles.textReviewBig, { marginTop: 16 }]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.videoAuthor}>{item.author}</Text>
      </View>
    );
  }
}

export default VideoContent;
