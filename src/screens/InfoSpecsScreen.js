/**
 * Conexus-Tech - Reatail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './css/HomeScreenCss';

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
                <Image style={styles.colorImage} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.colorTitle}>Lilac Purple</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.colorTitle}>Midnight Black</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.colorTitle}>Titanium Gray</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.colorTitle}>Coral Blue</Text>
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

            <View style={[styles.storageBox, styles.displayBox]}>
              <View style={styles.displaySizeItem}>
                <View style={styles.displaySizeHr}></View>
                <Text style={styles.displaySize}>5.8"</Text>
              </View>

              <View style={styles.displayTextItem}>
                <Text style={styles.displayText}>Quad HD+ Super AMOLED (2960x1440)</Text>
                <Text style={styles.displayText}>570 ppi</Text>
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

            <View>
              <View style={styles.cameraList}>
                <View style={styles.cameraListItem}>
                  <View style={styles.cameraListDot}></View>
                  <Text style={[styles.cameraText, styles.cameraListText]}>4k video recording at 30 fps or 60 fps</Text>
                </View>
                <View style={styles.cameraListItem}>
                  <View style={styles.cameraListDot}></View>
                  <Text style={[styles.cameraText, styles.cameraListText]}>Super Slow-mo video support 720p at 960 fps</Text>
                </View>
                <View style={styles.cameraListItem}>
                  <View style={styles.cameraListDot}></View>
                  <Text style={[styles.cameraText, styles.cameraListText]}>Slow motion video support 1080p at 240 fps</Text>
                </View>
                <View style={styles.cameraListItem}>
                  <View style={styles.cameraListDot}></View>
                  <Text style={[styles.cameraText, styles.cameraListText]}>Hyperlapse video support 1080p</Text>
                </View>
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
