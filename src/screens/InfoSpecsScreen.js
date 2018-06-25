/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/InfoSpecsScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class InfoSpecsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoSpecBox}>
          <Text style={styles.description}>
            Discovery Galaxy S9 and S9+ and the revolutionary camera that adapts like the human eye.
          </Text>

          <View style={{ paddingBottom: 10 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Colors</Text>

            <View style={styles.colorItemBox}>
              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/files/Bitmap.png')} />
                <Text style={styles.colorTitle}>Lilac Purple</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/files/Bitmap.png')} />
                <Text style={styles.colorTitle}>Midnight Black</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/files/Bitmap.png')} />
                <Text style={styles.colorTitle}>Titanium Gray</Text>
              </View>

              <View style={styles.colorItem}>
                <Image style={styles.colorImage} source={require('../assets/images/files/Bitmap.png')} />
                <Text style={styles.colorTitle}>Coral Blue</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingBottom: 18 }}>
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

          <View style={{ paddingBottom: 14 }}>
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

          <View style={{ paddingBottom: 5 }}>
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

          <View style={{ paddingBottom: 8 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Performance</Text>

            <View style={styles.performanceBox}>
              <View style={styles.performanceItem}>
                <View style={styles.performanceViewImage}>
                  <Icon name="Processor" viewBox="0 -7 45 45" />
                </View>
                <View style={styles.performanceViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>PROCESSOR</Text>
                  <Text style={styles.performanceText}>10nm 64-bit Octa-Core Processor 2.8GHz + 1.7GHz (Maximum Clock Speed, Performance Core + Efficiency Core)</Text>
                </View>
              </View>

              <View style={styles.performanceItem}>
                <View style={styles.performanceViewImage}>
                  <Icon name="Memory" viewBox="-3 -7 40 40" />
                </View>
                <View style={styles.performanceViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>MEMORY</Text>
                  <Text style={styles.performanceText}>4GB</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingBottom: 6 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Expandable Storage & SIM Card</Text>

            <View style={[styles.performanceBox, styles.expandableBox]}>
              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>SINGLE SIM MODEL</Text>
                <Text style={styles.performanceText}>One Nano SIM and one MicroSD slot (up to 400GB)</Text>
              </View>

              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>DUAL SIM MODEL</Text>
                <Text style={styles.performanceText}>Two Nano SIM or one MicroSD slot (up to 400GB)</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingBottom: 12 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Battery</Text>

            <View style={[styles.performanceBox, styles.expandableBox]}>
              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>BATTERY CAPACITY</Text>
                <Text style={styles.performanceText}>3000mAh</Text>
              </View>

              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>BATTERY LIFE</Text>

                <View>
                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Talk time: up to 22 hrs</Text>
                  </View>

                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Video playback: up to 16 hrs</Text>
                  </View>

                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>MP3 playback (AOD off): up to 80 hrs</Text>
                  </View>

                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Internet use (Wi-Fi): up to 14 hrs</Text>
                  </View>

                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Internet use (4G): up to 12 hrs</Text>
                  </View>
                </View>
              </View>

              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>CHARGING</Text>

                <View>
                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Fast Charging on wired and wireless</Text>
                  </View>
                  <View style={styles.cameraListItem}>
                    <View style={styles.cameraListDot}></View>
                    <Text style={[styles.cameraText, styles.cameraListText]}>Wireless charging compatible with WPC and PMA</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { infoSpecs: 0 };
}

export default connect(mapStateToProps)(InfoSpecsScreen);
