/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { connect } from 'react-redux';

// My Styles
import styles from './css/InfoSpecsScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import SkeletonLoading from './components/SkeletonLoading';

// My Actions
import { updateHeaderNav } from '../actions/Common';

const InfoSpecsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={220}>
      <Rect x="0" y="0" rx="3" ry="3" width="90%" height="10"/>
      <Rect x="0" y="15" rx="3" ry="3" width="100%" height="10"/>
      <Rect x="0" y="30" rx="3" ry="3" width="80%" height="10"/>

      <Rect x="0" y="50" rx="3" ry="3" width="40" height="10"/>
      <Rect x="50" y="54" rx="2" ry="2" width="250" height="2"/>

      <Rect x="40" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="100" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="160" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="220" y="70" rx="5" ry="5" width="40" height="70"/>

      <Rect x="0" y="150" rx="3" ry="3" width="60" height="10"/>
      <Rect x="70" y="154" rx="2" ry="2" width="230" height="2"/>

      <Rect x="0" y="170" rx="3" ry="3" width="80" height="10"/>
      <Rect x="90" y="170" rx="3" ry="3" width="120" height="10"/>
      <Rect x="220" y="170" rx="3" ry="3" width="80" height="10"/>
      <Rect x="0" y="185" rx="3" ry="3" width="100%" height="10"/>
      <Rect x="0" y="200" rx="3" ry="3" width="160" height="10"/>
      <Rect x="170" y="200" rx="3" ry="3" width="130" height="10"/>
    </SkeletonLoading>
  </View>
);

class InfoSpecsScreen extends Component {
  constructor(props) {
    super(props);

    handleScroll = (event) => {
      const { dispatch } = this.props;
      var value = event.nativeEvent.contentOffset.y;

      if ((value >= 0) && (value <= 56)) {
        let newValue = this.setNewValue(false, 56 - value, false, 166);
        dispatch(updateHeaderNav(newValue));
      } else if ((value >= 57) && (value <= 222)) {
        let newValue = this.setNewValue(true, 0, false, 166 - (value - 56));
        dispatch(updateHeaderNav(newValue));
      } else {
        let newValue = this.setNewValue(true, 0, true, 0);
        dispatch(updateHeaderNav(newValue));
      }
    };
  }

  setNewValue(a, b, c, d) {
    return {
      customHeaderNav: {
        hideHeader: a,
        heightHeader: b,
        hideSlide: c,
        heightSlide: d
      }
    }
  }

  renderColors() {
    const { colors } = this.props.infoSpecs;

    if (typeof colors != "undefined" && colors.length > 0) {
      return (
        <View style={{ paddingBottom: 10 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Colors</Text>

          <View style={styles.colorItemBox}>
            { colors.map((item, index) => {
                return (
                  <View key={index} style={styles.colorItem}>
                    <Image style={styles.colorImage} source={{ uri: item.img }} />
                    <Text style={styles.colorTitle}>{item.name}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
      );
    }
  }

  renderStorage() {
    const { deviceOptions } = this.props.infoSpecs;

    if (deviceOptions && deviceOptions.length > 0) {
      return (
        <View style={{ paddingBottom: 18 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Storage</Text>

          <View style={styles.storageBox}>
            {
              deviceOptions.map((item, index) => {
                return (
                  <View key={index} style={styles.storageItem}>
                    <Text style={styles.storageGB}>{item.storage}GB</Text>
                    <Text style={styles.storagePrice}>${item.price}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
      );
    }
  }

  renderDisplay() {
    const { display } = this.props.infoSpecs;

    if (Object.keys(display).length !== 0 && display.constructor === Object) {
      return (
        <View style={{ paddingBottom: 14 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Display</Text>

          <View style={[styles.storageBox, styles.displayBox]}>
            <View style={styles.displaySizeItem}>
              <View style={styles.displaySizeHr}></View>
              <Text style={styles.displaySize}>{display.size}"</Text>
            </View>

            <View style={styles.displayTextItem}>
              <Text style={styles.displayText}>{display.description} ({display.resolution})</Text>
              <Text style={styles.displayText}>{display.ppi} ppi</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  renderCamera() {
    const { camera } = this.props.infoSpecs;

    if (Object.keys(camera).length !== 0 && camera.constructor === Object) {
      const { features, front, rear } = camera;

      return (
        <View style={{ paddingBottom: 5 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Camera</Text>

          { (Object.keys(front).length !== 0 || Object.keys(rear).length !== 0) &&
            <View style={styles.storageBox}>
              { Object.keys(front).length !== 0 &&
                <View style={styles.cameraItem}>
                  <Text style={styles.cameraTitle}>FRONT CAMERA</Text>
                  <Text style={styles.cameraText}>{front.sensor} sensor</Text>
                  <Text style={styles.cameraText}>{front.aperture} aperture</Text>
                </View>
              }

              { Object.keys(rear).length !== 0 &&
                <View style={styles.cameraItem}>
                  <Text style={styles.cameraTitle}>REAR CAMERA</Text>
                  <Text style={styles.cameraText}>{rear.sensor} sensor</Text>
                  <Text style={styles.cameraText}>{rear.aperture} aperture</Text>
                </View>
              }
            </View>
          }

          { (features && features.length > 0) &&
            <View>
              <View style={styles.cameraList}>
                {
                  features.map((item, index) => {
                    return (
                      <View key={index} style={styles.cameraListItem}>
                        <View style={styles.cameraListDot}></View>
                        <Text style={[styles.cameraText, styles.cameraListText]}>{item}</Text>
                      </View>
                    );
                  })
                }
              </View>
            </View>
          }
        </View>
      );
    }
  }

  renderPerformance() {
    const { memory, processor } = this.props.infoSpecs;
    const memoryEmpty = (!memory || !memory.trim() || 0 === memory.length);

    if (Object.keys(processor).length !== 0 || memoryEmpty) {
      return (
        <View style={{ paddingBottom: 8 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Performance</Text>

          <View style={styles.performanceBox}>
            { Object.keys(processor).length !== 0 &&
              <View style={styles.performanceItem}>
                <View style={styles.performanceViewImage}>
                  <Icon name="Processor" viewBox="0 -7 45 45" />
                </View>
                <View style={styles.performanceViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>PROCESSOR</Text>
                  <Text style={styles.performanceText}>{processor.long}</Text>
                </View>
              </View>
            }

            { !memoryEmpty &&
              <View style={styles.performanceItem}>
                <View style={styles.performanceViewImage}>
                  <Icon name="Memory" viewBox="-3 -7 40 40" />
                </View>
                <View style={styles.performanceViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>MEMORY</Text>
                  <Text style={styles.performanceText}>{memory}GB</Text>
                </View>
              </View>
            }
          </View>
        </View>
      );
    }
  }

  renderExpandableStorage() {
    const { sim } = this.props.infoSpecs;

    if (typeof sim == "undefined") return;
    if (Object.keys(sim).length !== 0 && sim.constructor === Object) {
      const { simOptions, type } = sim;
      const simOptionsNoEmpty = (simOptions && simOptions.length > 0);
      const typeEmpty = (!type || !type.trim() || 0 === type.length);

      const { expandableStorage } = this.props.infoSpecs;
      if (typeof expandableStorage == "undefined") {
        var expandableAvailable = false;
      } else {
        const expandableStorageEmpty = (Object.keys(expandableStorage).length === 0 && expandableStorage.constructor === Object);
        var expandableAvailable = (!expandableStorageEmpty && expandableStorage.available);
      }

      if (!typeEmpty && simOptionsNoEmpty) {
        return (
          <View style={{ paddingBottom: 6 }}>
            <View style={styles.hrDivider}></View>
            <Text style={styles.titleDivider}>Expandable Storage & SIM Card</Text>

            { simOptions.length == 2 &&
              <View style={[styles.performanceBox, styles.expandableBox]}>
                <View style={styles.expandableViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>SINGLE SIM MODEL</Text>
                  { expandableAvailable &&
                    <Text style={styles.performanceText}>One {type} SIM and one {expandableStorage.type} slot</Text>
                  }
                  { !expandableAvailable &&
                    <Text style={styles.performanceText}>One {type} SIM</Text>
                  }
                </View>

                <View style={styles.expandableViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>DUAL SIM MODEL</Text>
                  { expandableAvailable &&
                    <Text style={styles.performanceText}>Two {type} SIM or one {expandableStorage.type} slot</Text>
                  }
                  { !expandableAvailable &&
                    <Text style={styles.performanceText}>Two {type} SIM</Text>
                  }
                </View>
              </View>
            }

            { simOptions.length == 1 &&
              <View style={[styles.performanceBox, styles.expandableBox]}>
                <View style={styles.expandableViewText}>
                  <Text style={[styles.performanceText, styles.performanceTitle]}>SINGLE SIM MODEL</Text>
                  { expandableAvailable &&
                    <Text style={styles.performanceText}>One {type} SIM and one {expandableStorage.type} slot</Text>
                  }
                  { !expandableAvailable &&
                    <Text style={styles.performanceText}>One {type} SIM</Text>
                  }
                </View>
              </View>
            }
          </View>
        );
      }
    }
  }

  renderBattery() {
    const { battery } = this.props.infoSpecs;

    if (Object.keys(battery).length !== 0 && battery.constructor === Object) {
      const { capacity, life } = battery;
      const capacityEmpty = (!capacity || !capacity.trim() || 0 === capacity.length);
      const lifeEmpty = (Object.keys(life).length === 0 && life.constructor === Object);
      const talkTimeEmpty = (!life.talkTime || !life.talkTime.trim() || 0 === life.talkTime.length);
      const videoEmpty = (!life.video || !life.video.trim() || 0 === life.video.length);
      const audioEmpty = (!life.audio || !life.audio.trim() || 0 === life.audio.length);
      const internetWifiEmpty = (!life.internetWifi || !life.internetWifi.trim() || 0 === life.internetWifi.length);
      const internetL4GEmpty = (!life.internetL4G || !life.internetL4G.trim() || 0 === life.internetL4G.length);
      const batteryLifeEmpty = (talkTimeEmpty && videoEmpty && audioEmpty && internetWifiEmpty && internetL4GEmpty);
      const chargingNoEmpty = (!lifeEmpty &&
        (life.chargingWired || life.chargingWireless ||
          (life.wirelesChargingType && life.wirelesChargingType.length > 0)));

      return (
        <View style={{ paddingBottom: 12 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Battery</Text>

          <View style={[styles.performanceBox, styles.expandableBox]}>
            { !capacityEmpty &&
              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>BATTERY CAPACITY</Text>
                <Text style={styles.performanceText}>{capacity}</Text>
              </View>
            }

            { !batteryLifeEmpty &&
              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>BATTERY LIFE</Text>

                <View>
                  { !talkTimeEmpty &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>Talk time: up to {life.talkTime}</Text>
                    </View>
                  }

                  { !videoEmpty &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>Video playback: up to {life.video}</Text>
                    </View>
                  }

                  { !audioEmpty &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>MP3 playback (AOD off): up to {life.audio}</Text>
                    </View>
                  }

                  { !internetWifiEmpty &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>Internet use (Wi-Fi): up to {life.internetWifi}</Text>
                    </View>
                  }

                  { !internetL4GEmpty &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>Internet use (4G): up to {life.internetL4G}</Text>
                    </View>
                  }
                </View>
              </View>
            }

            { chargingNoEmpty &&
              <View style={styles.expandableViewText}>
                <Text style={[styles.performanceText, styles.performanceTitle]}>CHARGING</Text>

                <View>
                  { (life.chargingWired || life.chargingWireless) &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      { (life.chargingWired && life.chargingWireless) &&
                        <Text style={[styles.cameraText, styles.cameraListText]}>Fast Charging on wired and wireless</Text>
                      }
                      { (!(life.chargingWired && life.chargingWireless) && life.chargingWired) &&
                        <Text style={[styles.cameraText, styles.cameraListText]}>Fast Charging on wired</Text>
                      }
                      { (!(life.chargingWired && life.chargingWireless) && life.chargingWireless) &&
                        <Text style={[styles.cameraText, styles.cameraListText]}>Fast Charging on wireless</Text>
                      }
                    </View>
                  }

                  { (life.wirelesChargingType && life.wirelesChargingType.length > 0) &&
                    <View style={styles.cameraListItem}>
                      <View style={styles.cameraListDot}></View>
                      <Text style={[styles.cameraText, styles.cameraListText]}>Wireless charging compatible with {life.wirelesChargingType.join(' and ')}</Text>
                    </View>
                  }
                </View>
              </View>
            }
          </View>
        </View>
      );
    }
  }

  renderContent() {
    const { infoSpecs } = this.props;

    if (Object.keys(infoSpecs).length === 0 && infoSpecs.constructor === Object) {
      return ( <InfoSpecsSkeleton /> );
    } else {
      return (
        <View style={styles.infoSpecBox}>
          <Text style={styles.description}>
            { infoSpecs.description }
          </Text>

          { this.renderColors() }
          { this.renderStorage() }
          { this.renderDisplay() }
          { this.renderCamera() }
          { this.renderPerformance() }
          { this.renderExpandableStorage() }
          { this.renderBattery() }
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} onScroll={handleScroll.bind(this)} scrollEventThrottle={16}>
        { this.renderContent() }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { infoSpecs: current.product, customHeaderNav: common.customHeaderNav };
}

export default connect(mapStateToProps)(InfoSpecsScreen);
