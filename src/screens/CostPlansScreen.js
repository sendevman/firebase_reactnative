/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, ScrollView, Text, TouchableWithoutFeedback, View, Image, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import moment from 'moment';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Styles
import styles from './css/CostPlansScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import SkeletonLoading from './components/SkeletonLoading';
import FeedbackSurvey from './components/FeedbackSurvey';

var { width, height } = Dimensions.get('window');
// My Routes
import RoutesAccessories from '../routes/Accessories';

const CostPlansSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={240}>
      <Rect x="0" y="0" rx="5" ry="5" width="100%" height="80" />

      <Rect x="0" y="95" rx="3" ry="3" width="30" height="30" />
      <Rect x="40" y="95" rx="3" ry="3" width="180" height="10" />
      <Rect x="40" y="115" rx="3" ry="3" width="150" height="10" />
      <Rect x="0" y="140" rx="3" ry="3" width="100" height="10" />

      <Rect x="0" y="155" rx="5" ry="5" width="100%" height="80" />
    </SkeletonLoading>
  </View>
);

class CostPlansScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMoreInsurance: false,
      viewMorePlans: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTab === 2 && nextProps.costplans.model != undefined) {
      firebase
        .analytics()
        .logEvent('deviceViewed', {
          pFirebaseId: this.props.firebaseid,
          pDeviceModel: nextProps.costplans.model,
          pDeviceManufacture: nextProps.costplans.manufacture,
          pResearchTab: 'price',
        });
    }
  }

  toggleViewMorePlans = () => {
    this.setState({ viewMorePlans: !this.state.viewMorePlans });
  };

  toggleViewMoreInsurance = () => {
    this.setState({ viewMoreInsurance: !this.state.viewMoreInsurance });
  };

  setNewValue(a, b, c, d, e) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d,
      heightScrolled: e,
    };
  }

  setFormatToNumber(number) {
    let nSplit = String(number).split('.');

    if (nSplit.length === 2) {
      if (nSplit[1].length === 2) return `${nSplit[0]}.${nSplit[1]}`;
      return `${nSplit[0]}.${nSplit[1]}0`;
    }
    return `${nSplit[0]}.00`;
  }

  renderStorage() {
    const { deviceOptions, expandableStorage } = this.props.costplans;
    const esIsValid = typeof expandableStorage == 'undefined' ? false : true; // || Object.keys(expandableStorage).length === 0) ? false : true;

    var isAvailable = false;
    if (esIsValid)
      isAvailable = typeof expandableStorage.available == 'undefined' ? false : expandableStorage.available;
    else isAvailable = false;

    if (deviceOptions && deviceOptions.length > 0) {
      return (
        <View style={{ paddingBottom: 0 }}>
          <View style={styles.hrDivider} />
          <Text style={styles.titleDivider}>Device options</Text>

          <ScrollView horizontal={true} contentContainerStyle={styles.storageScrollViewBox}>
            <View style={styles.storageBox}>
              {deviceOptions.map((item, index) => {
                return (
                  <View key={index} style={styles.storageItem}>
                    <Text style={styles.storageGB}>{item.storage}GB</Text>
                    <Text style={styles.storagePrice}>${item.price}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>

          {/* {isAvailable &&
            <View style={styles.sdCardBox}>
              <Icon name="SDCard" width="18" height="23" viewBox="0 0 18 23" />
              <Text style={styles.sdCardText}>SD card slot available</Text>
            </View>
          } */}
        </View>
      );
    }
  }

  renderCostNext() {
    const { cost } = this.props.costplans;

    if (typeof cost == 'undefined') return false; // || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if (typeof cost.next == 'undefined') return false; // || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object)) return;

    return (
      <View style={[ styles.cardBox, { marginTop: 16 } ]}>
        <Text style={styles.titleCard}>{cost.next.title}</Text>
        <Text style={styles.subTitleCard}>{cost.next.description}</Text>

        <View style={styles.separatorCard} />

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.next.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.next.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>{cost.next.tradeIn}</Text>
            <Text style={styles.dataText}>TRADE-IN</Text>
          </View>
        </View>
      </View>
    );
  }

  renderCostNextYear() {
    const { cost } = this.props.costplans;

    if (typeof cost == 'undefined') return false; // || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if (typeof cost.nextEveryYear == 'undefined') return false; // || (Object.keys(cost.nextEveryYear).length === 0 && (cost.nextEveryYear).constructor === Object)) return;

    let preNextEmpty = typeof cost.next == 'undefined'; // || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object));

    return (
      <View style={[ styles.cardBox, { marginTop: preNextEmpty ? 16 : 8 } ]}>
        <Text style={styles.titleCard}>{cost.nextEveryYear.title}</Text>
        <Text style={styles.subTitleCard}>{cost.nextEveryYear.description}</Text>

        <View style={styles.separatorCard} />

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.nextEveryYear.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.nextEveryYear.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>{cost.nextEveryYear.tradeIn}</Text>
            <Text style={styles.dataText}>TRADE-IN</Text>
          </View>
        </View>
      </View>
    );
  }

  renderCostNoContract() {
    const { cost } = this.props.costplans;

    if (typeof cost == 'undefined') return false; // || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if (typeof cost.noContract == 'undefined') return false; // || (Object.keys(cost.noContract).length === 0 && (cost.noContract).constructor === Object)) return;

    let preNextEmpty = typeof cost.next == 'undefined'; // || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object));
    let preNextTEmpty = typeof cost.nextEveryYear == 'undefined'; // || (Object.keys(cost.nextEveryYear).length === 0 && (cost.nextEveryYear).constructor === Object));
    let newValue = preNextEmpty && preNextTEmpty ? 16 : 8;

    return (
      <View style={[ styles.cardBox, { marginTop: newValue } ]}>
        <Text style={styles.titleCard}>{cost.noContract.title}</Text>
        <Text style={styles.subTitleCard}>{cost.noContract.description}</Text>

        <View style={styles.separatorCard} />

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.noContract.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.noContract.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataText}>UPGRADE</Text>
            <Text style={styles.dataText}>ANYTIME</Text>
          </View>
        </View>
      </View>
    );
  }

  setItem(key, obj) {
    let mount = obj.deviceProtected;
    let price = obj.monthlyCost;

    return (
      <View style={styles.cardBox}>
        {key == 'mobileInsurance' && <Text style={styles.titleCard}>AT&T Mobile Insurance</Text>}
        {key == 'mobileProtection' && <Text style={styles.titleCard}>AT&T Mobile Protection Pack</Text>}
        {key == 'mobileProtectionMulit' && <Text style={styles.titleCard}>AT&T Multi-Device Protection Pack</Text>}

        <View style={styles.separatorCard} />

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>{mount}</Text>
            <Text style={styles.dataText}>DEVICE{key == 'mobileProtectionMulit' && 'S'} PROTECTED</Text>
          </View>

          <View style={styles.dataDivisor} />

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(price)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>
        </View>
      </View>
    );
  }

  renderDeviceProtection() {
    const { insurance } = this.props.costplans;
    const { viewMoreInsurance } = this.state;

    if (typeof insurance == 'undefined') return false; // || (Object.keys(insurance).length === 0 && insurance.constructor === Object)) return;

    let mInsurance = insurance.mobileInsurance;
    let mInsuranceEmpty = typeof mInsurance == 'undefined'; // || (Object.keys(mInsurance).length === 0 && mInsurance.constructor === Object));

    let mProtection = insurance.mobileProtection;
    let mProtectionEmpty = typeof mProtection == 'undefined'; // || (Object.keys(mProtection).length === 0 && mProtection.constructor === Object));

    let mProtectionMulti = insurance.mobileProtectionMulit;
    let mProtectionMultiEmpty = typeof mProtectionMulti == 'undefined'; // || (Object.keys(mProtectionMulti).length === 0 && mProtectionMulti.constructor === Object));

    let viewMoreInsuranceText = viewMoreInsurance ? '- Collapse' : '+ View more plans';
    let showInsurance = viewMoreInsurance;

    return (
      <View>
        <Text style={styles.titleDevice}>Device protection</Text>
        {!mProtectionEmpty && this.setItem('mobileProtection', mProtection)}

        {showInsurance && (
          <View>
            {!mProtectionMultiEmpty && this.setItem('mobileProtectionMulit', mProtectionMulti)}
            {!mInsuranceEmpty && this.setItem('mobileInsurance', mInsurance)}
          </View>
        )}

        <TouchableWithoutFeedback onPress={this.toggleViewMoreInsurance}>
          <View style={styles.contentReadMore}>
            <Text style={styles.textReadMore}>{viewMoreInsuranceText}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderShippingInfo() {
    const { releaseDate } = this.props.costplans;

    if (typeof releaseDate == 'undefined' || !releaseDate.trim() || releaseDate.length === 0) return;

    const dateRelease = moment(releaseDate).format('ll');
    const dateInAdvance = moment(releaseDate).add(4, 'days').format('ll');

    return (
      <View style={styles.shippingBox}>
        <Icon name="ShippingTruck" width="18" height="13" viewBox="0 0 18 13" fill="#FFF" />
        <View>
          <Text style={[ styles.availableText, { fontWeight: 'bold' } ]}>Available in-store on {dateRelease}</Text>
        </View>
      </View>
    );
  }

  renderContent() {
    const { costplans } = this.props;
    const { viewMoreInsurance, viewMorePlans } = this.state;

    let viewMorePlansText = viewMorePlans ? '- Collapse' : '+ View more plans';
    let showPlans = viewMorePlans;
    let costplansEmpty = typeof costplans == 'undefined'; // || (Object.keys(costplans).length === 0 && costplans.constructor === Object));

    const isTitle = costplans.title === 'title' ? true : false;
    if (isTitle) {
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
              justifyContent: 'flex-start',
            }}
            source={require('../assets/images/files/backgroundSD.png')}
          />
        </View>
      );
    }
    if (Object.keys(costplans).length === 0) {
      // if (Object.keys(costplans).length === 0 && costplans.constructor === Object) {
      return <CostPlansSkeleton />;
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
          <View style={styles.costPlansBox}>
            {this.renderShippingInfo()}

            {this.renderStorage()}
            {this.renderCostNext()}

            {showPlans && (
              <View>
                {this.renderCostNextYear()}
                {this.renderCostNoContract()}
              </View>
            )}

            <TouchableWithoutFeedback onPress={this.toggleViewMorePlans}>
              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>{viewMorePlansText}</Text>
              </View>
            </TouchableWithoutFeedback>
            {this.renderDeviceProtection()}
            {this.renderAccessories()}
            {!costplansEmpty && <FeedbackSurvey />}
          </View>
        </View>
      );
    }
  }

  renderAccessories() {
    const { compatibleAccessories } = this.props.costplans;

    if (typeof compatibleAccessories == 'undefined') return false; // || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return;

    const { featured, fullList } = compatibleAccessories;
    let featuredEmpty = typeof featured == 'undefined' || featured.length <= 0;
    let fullListEmpty = typeof fullList == 'undefined' || fullList.length <= 0;

    if (featuredEmpty && fullListEmpty) return false;

    return <View style={styles.accessoriesBox}>{<RoutesAccessories />}</View>;
  }

  _animateScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < -3) {
      let yy = y * y / 80;
      if (yy > 40) yy = 40;
      this.props.onScrollCustom.setValue(-yy);
    } else if (y > -3 && y < 3) {
    } else {
      let yy = y * y / 300;
      if (yy > 120) yy = 120;
      this.props.onScrollCustom.setValue(yy);
    }
  };
  _onScrollEndSnapToEdge = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < 80) this.props.onScrollCustom.setValue(0);
    else this.props.onScrollCustom.setValue(120);
  };
  render() {
    const { costplans } = this.props;

    return (
      <Animated.ScrollView
        contentContainerStyle={styles.container}
        scrollEventThrottle={
          1
        } /*,
            listener: event => {
              const offsetY = event.nativeEvent.contentOffset.y
              this.props.onScrollCustom(offsetY);
            }* /
          }
        )}*/
        /*onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.props.onScrollCustom } } }],
          {
            /*useNativeDriver: true*/
        //onScroll={this._animateScroll}
        //onScrollEndDrag={this._onScrollEndSnapToEdge}
      >
        {this.renderContent()}
      </Animated.ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { costplans: current.product, firebaseid: common.firebaseid, selectedTab: common.selectedTab };
};

export default connect(mapStateToProps)(CostPlansScreen);
