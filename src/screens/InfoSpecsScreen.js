/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

//Device Components
import ColorComponent from '../components/DeviceComponents/ColorComponent';
import DisplayComponent from '../components/DeviceComponents/DisplayComponent';
import FitnessComponent from '../components/DeviceComponents/FitnessComponent';
import CameraComponent from '../components/DeviceComponents/CameraComponent';
import BatteryComponent from '../components/DeviceComponents/BatteryComponent';
import PerformanceComponent from '../components/DeviceComponents/PerformanceComponent';
import AccessoriesComponent from '../components/DeviceComponents/AccessoriesComponent';
// My Styles
import styles from './css/InfoSpecsScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import SkeletonLoading from './components/SkeletonLoading';
import Offer from '../components/LimitedTimeOffer/Offer';
import FeedbackSurvey from './components/FeedbackSurvey';

var { width, height } = Dimensions.get('window');

const getWidth = number => {
  return width - 20 - number;
};

const InfoSpecsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={220}>
      <Rect x="0" y="0" rx="3" ry="3" width="90%" height="10" />
      <Rect x="0" y="15" rx="3" ry="3" width="100%" height="10" />
      <Rect x="0" y="30" rx="3" ry="3" width="80%" height="10" />

      <Rect x="0" y="50" rx="3" ry="3" width="40" height="10" />
      <Rect x="50" y="54" rx="2" ry="2" width={getWidth(50)} height="2" />

      <Rect x="40" y="70" rx="5" ry="5" width="40" height="70" />
      <Rect x="100" y="70" rx="5" ry="5" width="40" height="70" />
      <Rect x="160" y="70" rx="5" ry="5" width="40" height="70" />
      <Rect x="220" y="70" rx="5" ry="5" width="40" height="70" />

      <Rect x="0" y="150" rx="3" ry="3" width="60" height="10" />
      <Rect x="70" y="154" rx="2" ry="2" width={getWidth(70)} height="2" />

      <Rect x="0" y="170" rx="3" ry="3" width="80" height="10" />
      <Rect x="90" y="170" rx="3" ry="3" width="120" height="10" />
      <Rect x="220" y="170" rx="3" ry="3" width="80" height="10" />
      <Rect x="0" y="185" rx="3" ry="3" width="100%" height="10" />
      <Rect x="0" y="200" rx="3" ry="3" width="160" height="10" />
      <Rect x="170" y="200" rx="3" ry="3" width="130" height="10" />
    </SkeletonLoading>
  </View>
);

class InfoSpecsScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTab === 0 && nextProps.infoSpecs.model != undefined) {
      firebase.analytics().logEvent('deviceViewed', {
        pFirebaseId: this.props.firebaseid,
        pDeviceModel: nextProps.infoSpecs.model,
        pDeviceManufacture: nextProps.infoSpecs.manufacture,
        pResearchTab: 'info',
      });
    }
  }

  setNewValue(a, b, c, d, e) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d,
      heightScrolled: e,
    };
  }

  makeCameraFeatureTest(features) {
    var result = '';
    features.map((item, index) => {
      if (index === 1) result += ' or ';
      if (index === 2) result += '. with ';
      result += item;
    });
    return result;
  }

  renderOffer() {
    const { offer } = this.props.infoSpecs;

    if (typeof offer == 'undefined') return false;

    return (
      <View style={{ marginTop: 16 }}>
        <Offer offer={offer} />
      </View>
    );
  }

  renderColors() {
    const { colors } = this.props.infoSpecs;
    if (typeof colors != 'undefined' && colors.length > 0) {
      return <ColorComponent colors={colors} />;
    }
  }

  renderDisplay() {
    const { display } = this.props.infoSpecs;

    if (typeof display !== 'undefined') {
      return <DisplayComponent display={display} />;
    }
  }
  renderFitness() {
    const { fitness } = this.props.infoSpecs;

    if (typeof fitness !== 'undefined') {
      return <FitnessComponent fitness={fitness} />;
    }
  }

  renderCamera() {
    const { camera } = this.props.infoSpecs;
    if (typeof camera != 'undefined') {
      return <CameraComponent camera={camera} />;
    }
  }

  renderPerformanceAndStorage() {
    const { deviceOptions, expandableStorage, memory, processor, subType } = this.props.infoSpecs;
    return (
      <PerformanceComponent
        deviceOptions={deviceOptions}
        expandableStorage={expandableStorage}
        memory={memory}
        processor={processor}
        subType={subType}
      />
    );
  }

  renderBattery() {
    const { battery, subType } = this.props.infoSpecs;

    if (typeof battery !== 'undefined') {
      return <BatteryComponent battery={battery} subType={subType} />;
    }
  }

  renderAccessories() {
    const { compatibleAccessories } = this.props.infoSpecs;

    if (typeof compatibleAccessories == 'undefined') return;

    return <AccessoriesComponent compatibleAccessories={compatibleAccessories} />;
  }

  renderContent() {
    const { infoSpecs } = this.props;
    const viewWidth = width - 34;
    const isTitle = infoSpecs.title !== 'title' ? true : false;

    if (!isTitle) {
      return (
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: 'black',
          }}
        >
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('../assets/images/files/backgroundSD.png')}
          />
        </View>
      );
    }

    if (Object.keys(infoSpecs).length === 0) {
      return <InfoSpecsSkeleton />;
    } else {
      return (
        <View>
          <Image
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('../assets/images/files/backgroundHD.png')}
          />
          <View style={styles.infoSpecBox}>
            {this.renderOffer()}

            <View style={[ styles.descriptionItemBox, { width: viewWidth, marginLeft: 6 } ]}>
              <Text style={[ styles.description, { width: viewWidth - 30 } ]}>{infoSpecs.description}</Text>
            </View>

            {this.renderColors()}
            {this.renderDisplay()}
            {this.renderFitness()}
            {this.renderCamera()}
            {this.renderPerformanceAndStorage()}
            {this.renderBattery()}
            {this.renderAccessories()}
            <FeedbackSurvey />
          </View>
        </View>
      );
    }
  }

  _animateScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < 60) this.props.onScrollCustom.setValue(y * 2);
    else this.props.onScrollCustom.setValue(120);
  };
  _onScrollEndSnapToEdge = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < 80) this.props.onScrollCustom.setValue(0);
    else this.props.onScrollCustom.setValue(120);
  };

  render() {
    const { infoSpecs } = this.props;

    let infoSpecsEmpty = typeof infoSpecs == 'undefined'; // || (Object.keys(infoSpecs).length === 0 && infoSpecs.constructor === Object));

    return (
      <Animated.ScrollView contentContainerStyle={styles.container} scrollEventThrottle={16}>
        {this.renderContent()}
      </Animated.ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { infoSpecs: current.product, firebaseid: common.firebaseid, selectedTab: common.selectedTab };
};

export default connect(mapStateToProps)(InfoSpecsScreen);
