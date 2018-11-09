/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class CameraComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { camera } = this.props;
    const viewWidth = width - 34;
    const { features, front, rear } = camera;
    const featuretext = features.join(' | ');
    const ifFront = typeof front != 'undefined' ? true : false;
    const ifRear = typeof rear != 'undefined' ? true : false;
    return (
      <View
        style={{
          paddingBottom: 10,
          marginBottom: 20,
        }}
      >
        <View style={styles.hrDivider} />
        <View style={{ width: viewWidth, marginLeft: 6, position: 'relative' }}>
          <Image
            style={{ width: viewWidth, height: viewWidth * 336 / 1080, position: 'absolute' }}
            source={require('../../assets/images/files/camera.png')}
          />

          {(ifFront || ifRear) && (
            <View style={[ styles.cameraBox, { height: viewWidth * 336 / 1080 } ]}>
              {ifFront && (
                <View style={styles.cameraItem}>
                  <Text style={styles.cameraTextBold}>{front.sensor} </Text>
                  <Text style={styles.cameraTextBold}>{front.aperture} aperture</Text>
                </View>
              )}

              {ifRear && (
                <View style={styles.cameraItem}>
                  <Text style={styles.cameraTextBold}>{rear.sensor} sensor</Text>
                  <Text style={styles.cameraTextBold}>{rear.aperture} aperture</Text>
                </View>
              )}
            </View>
          )}
          {features &&
          features.length > 0 && (
            <View
              style={[
                styles.storageBox,
                {
                  width: viewWidth,
                  paddingHorizontal: 5,
                  position: 'relative',
                  // backgroundColor: 'white',
                  // opacity: 0.5,
                },
              ]}
            >
              <Image
                style={{ width: viewWidth, position: 'absolute', top: 0, height: features.length * 16 + 20 }}
                source={require('../../assets/images/files/empty.png')}
                resizeMode="stretch"
              />
              {features.map(feature => (
                <Text
                  key={feature}
                  style={[
                    styles.cameraText,
                    { maxWidth: '60%', textAlign: 'left', marginBottom: 0, marginTop: 3, marginLeft: 50 },
                  ]}
                >
                  {'\u2022 ' + feature}
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hrDivider: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 0,
    marginBottom: 10,
  },
  storageBox: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cameraBox: {
    paddingTop: 67,
    width: '100%',
    //position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraItem: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  cameraTitle: {
    color: '#CC7800',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20,
  },
  cameraTextBold: {
    color: '#000',
    // fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 16,
  },
  cameraText: {
    color: '#000',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 16,
  },
  cameraDetails: {
    marginTop: 110,
    backgroundColor: '#FFFFFFBF',
    width: '100%',
    paddingHorizontal: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraDetailsDivide: {
    height: 2,
    width: '100%',
    backgroundColor: 'red',
  },
  // - - Camera Box - List - -
  cameraList: {
    width: width - 15,
    marginHorizontal: -2.5,
    marginTop: 11,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cameraListItem: {
    height: 85,
    width: 110,
    borderRadius: 6,
    marginBottom: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraListDot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#1181FF',
  },
  cameraListText: { marginLeft: 5 },
});
export default CameraComponent;
