/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

// My Styles
import styles from './css/InfoSpecsScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import SkeletonLoading from './components/SkeletonLoading';
import Offer from '../components/LimitedTimeOffer/Offer';
import FeedbackSurvey from './components/FeedbackSurvey';

// My Routes
import RoutesAccessories from '../routes/Accessories';

// My Actions
import { updateHeaderNav } from '../actions/Common';

var { width } = Dimensions.get('window');

const getWidth = (number) => {
  return ((width - 20) - number);
};

const InfoSpecsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={220}>
      <Rect x="0" y="0" rx="3" ry="3" width="90%" height="10"/>
      <Rect x="0" y="15" rx="3" ry="3" width="100%" height="10"/>
      <Rect x="0" y="30" rx="3" ry="3" width="80%" height="10"/>

      <Rect x="0" y="50" rx="3" ry="3" width="40" height="10"/>
      <Rect x="50" y="54" rx="2" ry="2" width={getWidth(50)} height="2"/>

      <Rect x="40" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="100" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="160" y="70" rx="5" ry="5" width="40" height="70"/>
      <Rect x="220" y="70" rx="5" ry="5" width="40" height="70"/>

      <Rect x="0" y="150" rx="3" ry="3" width="60" height="10"/>
      <Rect x="70" y="154" rx="2" ry="2" width={getWidth(70)} height="2"/>

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
      // const { dispatch } = this.props;
      // var value = event.nativeEvent.contentOffset.y;

      // if ((value >= 0) && (value <= 56)) {
      //   let newValue = this.setNewValue(false, 56 - value, false, 166);
      //   dispatch(updateHeaderNav(newValue));
      // } else if ((value >= 57) && (value <= 222)) {
      //   let newValue = this.setNewValue(true, 0, false, 166 - (value - 56));
      //   dispatch(updateHeaderNav(newValue));
      // } else {
      //   let newValue = this.setNewValue(true, 0, true, 0);
      //   dispatch(updateHeaderNav(newValue));
      // }
    };
  }

  setNewValue(a, b, c, d) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d
    }
  }

  renderOffer() {
    const { offer } = this.props.infoSpecs;

    if (typeof offer == "undefined" || (Object.keys(offer).length === 0 && offer.constructor === Object)) return false;

    return (
      <View style={{ marginTop: 16 }}>
        <Offer offer={offer} />
      </View>
    );
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

    if (typeof camera != "undefined" && (Object.keys(camera).length !== 0 && camera.constructor === Object)) {
      const { features, front, rear } = camera;

      return (
        <View style={{ paddingBottom: 5 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Camera</Text>

          { (Object.keys(front).length !== 0 || Object.keys(rear).length !== 0) &&
            <View style={styles.storageBox}>
              { Object.keys(front).length !== 0 &&
                <LinearGradient colors={['#FFAB00', '#FF9200']} style={styles.cameraItem}>
                  <Text style={styles.cameraTitle}>FRONT CAMERA</Text>
                  <Text style={styles.cameraText}>{front.sensor} sensor</Text>
                  <Text style={styles.cameraText}>{front.aperture} aperture</Text>
                </LinearGradient>
              }

              { Object.keys(rear).length !== 0 &&
                <LinearGradient colors={['#FFAB00', '#FF9200']} style={styles.cameraItem}>
                  <Text style={styles.cameraTitle}>REAR CAMERA</Text>
                  <Text style={styles.cameraText}>{rear.sensor} sensor</Text>
                  <Text style={styles.cameraText}>{rear.aperture} aperture</Text>
                </LinearGradient>
              }
            </View>
          }

          { (features && features.length > 0) &&
            <View>
              <View style={styles.cameraList}>
                { features.map((item, index) => {
                    return (
                      <LinearGradient key={index} colors={['#FFAB00', '#FF9200']} style={styles.cameraListItem}>
                        <Text numberOfLines={4} style={[styles.cameraText, { maxWidth: 80, textAlign: 'center' }]}>{item}</Text>
                      </LinearGradient>
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

  renderPerformanceAndStorage() {
    const { deviceOptions, expandableStorage, memory, processor } = this.props.infoSpecs;

    const memoryEmpty = (!memory || !memory.trim() || 0 === memory.length);
    const processorEmpty = (typeof processor == "undefined" || (Object.keys(processor).length === 0 && processor.constructor === Object));
    const doIsValid = (typeof deviceOptions == "undefined" || deviceOptions.length <= 0) ? false : true;
    const esIsValid = (typeof expandableStorage == "undefined" || Object.keys(expandableStorage).length === 0) ? false : true;

    var isAvailable = false;
    if (esIsValid) isAvailable = (typeof expandableStorage.available == "undefined") ? false : expandableStorage.available;
    else isAvailable = false;

    const mpChangeStyle = (memoryEmpty && processorEmpty);
    const changeStyle = (!isAvailable && !doIsValid);

    return (
      <View style={{ paddingBottom: 8 }}>
        <View style={styles.hrDivider}></View>
        <Text style={styles.titleDivider}>Performance & Storage</Text>

        { (!memoryEmpty || !processorEmpty) &&
          <View style={[styles.performanceStorageBox, changeStyle ? { marginBottom: 4 } : {}]}>
            { !processorEmpty &&
              <View style={styles.performanceStorageItem}>
                <Icon name="ProcessorBlue" width="138" height="138" fill="#6F4EE6" viewBox="18 55 138 138" />

                <View style={styles.performanceStorageContentBox}>
                  <Text style={styles.performanceStorageTitle}>PROCESSOR</Text>
                  <Text style={styles.performanceStorageText} numberOfLines={4}>{processor.short}</Text>
                </View>
              </View>
            }

            { !memoryEmpty &&
              <View style={styles.performanceStorageItem}>
                <Icon name="MemoryBlue" width="120" height="121" fill="#6F4EE6" viewBox="197 63 120 121" />

                <View style={styles.performanceStorageContentBox}>
                  <Text style={styles.performanceStorageTitle}>MEMORY</Text>
                  <Text style={styles.performanceStorageText}>{memory}GB</Text>
                </View>
              </View>
            }
          </View>
        }

        { (isAvailable || doIsValid) &&
          <View style={[styles.performanceStorageBox, mpChangeStyle ? {} : { marginTop: 20 }, { marginBottom: 6 }]}>
            { isAvailable &&
              <LinearGradient colors={['#6F4EE6', '#3D2AD1']} style={styles.storageBlueBox}>
                <Image style={{ position: 'absolute', top: 0, left: 0 }} source={require('../assets/images/files/whiteCorner.png')} />
                <Text style={styles.storageBlueTitle}>SD CARD SLOT</Text>
                <Text style={styles.storageBlueText}>Available</Text>
              </LinearGradient>
            }

            { doIsValid &&
              <LinearGradient colors={['#6F4EE6', '#3D2AD1']} style={styles.storageBlueBox}>
                <Text style={styles.storageBlueTitle}>STORAGE</Text>
                <Text style={styles.storageBlueText}>{deviceOptions.map((obj) => {return `${obj.storage}Gb`}).join(' or ')}</Text>
              </LinearGradient>
            }
          </View>
        }
      </View>
    );
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

          <View style={[styles.featuresBox, styles.expandableBox]}>
            { !batteryLifeEmpty &&
              <View style={styles.featureBox}>
                { !talkTimeEmpty &&
                  <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>CALLING</Text>
                    <Text style={styles.featureItemMount}>{life.talkTime.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </LinearGradient>
                }

                { !videoEmpty &&
                  <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>VIDEO</Text>
                    <Text style={styles.featureItemMount}>{life.video.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </LinearGradient>
                }

                { !audioEmpty &&
                  <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>AUDIO</Text>
                    <Text style={styles.featureItemMount}>{life.audio.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </LinearGradient>
                }

                { !internetWifiEmpty &&
                  <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>WI-FI</Text>
                    <Text style={styles.featureItemMount}>{life.internetWifi.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </LinearGradient>
                }

                { !internetL4GEmpty &&
                  <LinearGradient colors={['#39E80E', '#00FFB4']} style={styles.featureItemBox}>
                    <Text style={styles.featureItemTitle}>LTE</Text>
                    <Text style={styles.featureItemMount}>{life.internetL4G.replace(' hrs', '')}</Text>
                    <Text style={styles.featureItemHour}>hours</Text>
                  </LinearGradient>
                }
              </View>
            }

            { chargingNoEmpty &&
              <View style={styles.chagingTypeBox}>
                { life.chargingWired &&
                  <View style={styles.chagingItemBox}>
                    <Icon name="WiredCharging" width="34" height="34" viewBox="0 0 34 34" />
                    <Text style={styles.chagingItemText}>Wired charging</Text>
                  </View>
                }

                { life.chargingWireless &&
                  <View style={styles.chagingItemBox}>
                    <Icon name="WifiCharging" width="45" height="26" viewBox="0 0 45 26" />
                    <Text style={styles.chagingItemText}>Wireless charging</Text>
                  </View>
                }
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
          { this.renderOffer() }

          <Text style={styles.description}>
            { infoSpecs.description }
          </Text>

          { this.renderColors() }
          { this.renderDisplay() }
          { this.renderCamera() }
          { this.renderPerformanceAndStorage() }
          { this.renderBattery() }
        </View>
      );
    }
  }

  renderAccessories() {
    const { compatibleAccessories } = this.props.infoSpecs;

    if ((typeof compatibleAccessories == "undefined") || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return;

    return (
      <View style={{ height: 204 }}>
        { <RoutesAccessories /> }
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} onScroll={handleScroll.bind(this)} scrollEventThrottle={16}>
        { this.renderContent() }
        { this.renderAccessories() }
        <FeedbackSurvey />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { infoSpecs: current.product, customHeaderNav: common.customHeaderNav };
}

export default connect(mapStateToProps)(InfoSpecsScreen);
