/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Dimensions, Linking, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  viewBox: {
    width: width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleTextBtn: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 18,
    textAlign: 'center'
  },
  styleBtn: {
    width: width - 40,
    height: 48,
    backgroundColor: '#1181FF',
    borderRadius: 6,
    marginLeft:-20,
    marginTop: 10,
    marginBottom: 20
  }
});

class FeedbackSurvey extends Component {
  handleClick = () => {
    Linking.canOpenURL('https://att.surveymonkey.com/r/retailcompanion').then(supported => {
      if (supported)
        Linking.openURL('https://att.surveymonkey.com/r/retailcompanion');
      else
        console.log("Don't know how to open URI: " + 'https://att.surveymonkey.com/r/retailcompanion');
    });
  }

  render() {
    return (
      <View style={styles.viewBox}>
        <Button
          title='Feedback Survey'
          textStyle={styles.styleTextBtn}
          buttonStyle={styles.styleBtn}
          onPress={this.handleClick}
        />
      </View>
    );
  }
}

export default FeedbackSurvey;
