/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class FitnessComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fitness } = this.props;
    const viewWidth = width - 34;
    return (
      <View style={{ paddingBottom: 10 }}>
        <ImageBackground
          style={[ styles.colorBackground, { width: viewWidth, marginLeft: 6 } ]}
          source={require('../../assets/images/files/fitness.png')}
        >
          <View
            style={[ styles.storageBox, { width: viewWidth - 1, marginLeft: 6, marginTop: viewWidth / 1080 * 210 } ]}
          >
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.fitnessRowView}>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/pedometer.png')} />
                  <Text style={styles.fitnessRowText}>Pedometer</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/run.png')} />
                  <Text style={styles.fitnessRowText}>Run Tracking</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/heart.png')} />
                  <Text style={styles.fitnessRowText}>Heart Rate Monitor</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/activity.png')} />
                  <Text style={styles.fitnessRowText}>Activity Tracker</Text>
                </View>
              </View>
              <View style={styles.fitnessRowView}>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/gps.png')} />
                  <Text style={styles.fitnessRowText}>GPS Tracking</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/music.png')} />
                  <Text style={styles.fitnessRowText}>Stand Alone Music</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/heart.png')} />
                  <Text style={styles.fitnessRowText}>EKG</Text>
                </View>
                <View style={styles.fitnessRowItem}>
                  <Image style={styles.fitnessRowImage} source={require('../../assets/images/files/tracking.png')} />
                  <Text style={styles.fitnessRowText}>Fitness Tracking</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // - - FITNESS Box --
  colorBackground: {
    borderRadius: 6,
  },
  storageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fitnessRowView: {
    height: 80,
    marginTop: 2,
    marginLeft: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fitnessRowItem: {
    flexDirection: 'column',
    width: (width - 60) / 4,
    height: 55,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  fitnessRowImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  fitnessRowText: {
    // width: 80,
    textAlign: 'center',
    color: '#3E3F42',
    fontSize: 11,
  },
});
export default FitnessComponent;
