/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native';

// My Styles
import styles from './OfferCss';

// My Customs
import Icon from '../../assets/images/Icon';

class Offer extends Component {
  constructor(props) {
    super(props);
  }

  goToOffer() {
    Alert.alert(
      'LIMITED TIME OFFER',
      'Go to Offer!',
      [
        {text: 'Go', onPress: () => console.log('Go to Offer')},
        {text: 'Cancel', onPress: () => console.log('Go to Cancel'), style: 'cancel'}
      ],
      { cancelable: false }
    );
  }

  render() {
    const { offer } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.goToOffer()}>
        <View style={styles.container}>
          <View style={styles.contentBox}>
            <View style={styles.iconAndTitleBox}>
              <Icon name="Offer" width="18" height="18" viewBox="0 0 18 18" />
              <Text style={styles.title} numberOfLines={1}>{offer.title}</Text>
            </View>
            <Text style={styles.description} numberOfLines={1}>{offer.description}</Text>
          </View>

          <View style={styles.arrowBox}>
            <Icon name="ArrowRight" width="8" height="12" fill="#3E3F42" viewBox="0 0 8 12" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Offer;
