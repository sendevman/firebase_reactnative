/**
 * Conexus-Tech - Reatail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#F5FCFF',
const styles = StyleSheet.create({
  container: { backgroundColor: '#FFF' },
  infoSpecBox: { paddingHorizontal : 10 },
  description: {
    marginVertical: 10,
    textAlign: 'left',
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22
  },
  hrDivider: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 10,
    marginBottom: 10
  },
  titleDivider: {
    top: -20,
    width: 50,
    backgroundColor: '#FFF',
    color: '#1181FF',
    fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  colorItemBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorItem: {
    width: 70,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    height: 85,
    width: 40,
    marginLeft: 5
  },
  title: {
    height: 28,
    width: 50,
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14,
    textAlign: 'center',
    marginVertical: 5
  },
  storageBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    minWidth: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF'
  },
  storageGB: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  storagePrice: {
    color: '#AEBECD',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  cameraItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    minWidth: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF'
  },
  cameraTitle: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  cameraText: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  }
});

class InfoSpecsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoSpecBox}>
          <Text style={styles.description}>
            Discovery Galaxy S9 and S9+ and the revolutionary camera that adapts like the human eye.
          </Text>

          <View style={{ marginBottom: 15 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Colors</Text>

            <View style={styles.colorItemBox}>
              <View style={styles.colorItem}>
                <Image style={styles.image} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.title}>Lilac Purple</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.image} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.title}>Midnight Black</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.image} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.title}>Titanium Gray</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.image} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.title}>Coral Blue</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Storage</Text>

            <View style={styles.storageBox}>
              <View style={styles.storageItem}>
                <Text style={styles.storageGB}>64GB</Text>
                <Text style={styles.storagePrice}>$799</Text>
              </View>

              <View style={styles.storageItem}>
                <Text style={styles.storageGB}>128GB</Text>
                <Text style={styles.storagePrice}>$899</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Display</Text>

            <View style={styles.storageBox}>
              <View style={styles.storageItem}>
                <Text style={styles.storageGB}>64GB</Text>
                <Text style={styles.storagePrice}>$799</Text>
              </View>

              <View style={styles.storageItem}>
                <Text style={styles.storageGB}>128GB</Text>
                <Text style={styles.storagePrice}>$899</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Camera</Text>

            <View style={styles.storageBox}>
              <View style={styles.cameraItem}>
                <Text style={styles.cameraTitle}>FRONT CAMERA</Text>
                <Text style={styles.cameraText}>8MP AF sensor</Text>
                <Text style={styles.cameraText}>F1.7 aperture</Text>
              </View>

              <View style={styles.cameraItem}>
                <Text style={styles.cameraTitle}>REAR CAMERA</Text>
                <Text style={styles.cameraText}>12MP AF sensor</Text>
                <Text style={styles.cameraText}>F1.5 aperture</Text>
              </View>
            </View>
          </View>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { infoSpecs: 0 };
}

export default connect(mapStateToProps)(InfoSpecsScreen);
