/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import moment from 'moment';
import { connect } from 'react-redux';

// My Styles
import styles from './css/CostPlansScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import SkeletonLoading from './components/SkeletonLoading';
import FeedbackSurvey from './components/FeedbackSurvey';

// My Routes
import RoutesAccessories from '../routes/Accessories';

// My Actions
import { updateHeaderNav } from '../actions/Common';

const CostPlansSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={240}>
      <Rect x="0" y="0" rx="5" ry="5" width="100%" height="80"/>

      <Rect x="0" y="95" rx="3" ry="3" width="30" height="30"/>
      <Rect x="40" y="95" rx="3" ry="3" width="180" height="10"/>
      <Rect x="40" y="115" rx="3" ry="3" width="150" height="10"/>
      <Rect x="0" y="140" rx="3" ry="3" width="100" height="10"/>

      <Rect x="0" y="155" rx="5" ry="5" width="100%" height="80"/>
    </SkeletonLoading>
  </View>
);

class CostPlansScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMoreInsurance: false,
      viewMorePlans: false
    };
  }

  toggleViewMorePlans = () => {
    this.setState({ viewMorePlans: !this.state.viewMorePlans });
  }

  toggleViewMoreInsurance = () => {
    this.setState({ viewMoreInsurance: !this.state.viewMoreInsurance });
  }

  setNewValue(a, b, c, d, e) {
    return {
      hideHeader: a,
      heightHeader: b,
      hideSlide: c,
      heightSlide: d,
      heightScrolled: e
    }
  }

  handleScroll(event) {
    console.log(event, event.nativeEvent.contentOffset)
    const { dispatch, customHeaderNav } = this.props;
    var value = event.nativeEvent.contentOffset.y;

    // if (!customHeaderNav.heightScrolled && value > 60) {
    if (value > 10) {
      let newValue = this.setNewValue(false, 0, false, 0, true);
      // dispatch(updateHeaderNav(newValue));
    }
    // if (customHeaderNav.heightScrolled && value < 60) {
    if (value <= 0) {
      let newValue = this.setNewValue(false, 0, false, 0, false);
      // dispatch(updateHeaderNav(newValue));
    }
    //   if ((value >= 0) && (value <= 56)) {
    //     let newValue = this.setNewValue(false, 56 - value, false, 166);
    //     dispatch(updateHeaderNav(newValue));
    //   } else if ((value >= 57) && (value <= 222)) {
    //     let newValue = this.setNewValue(true, 0, false, 166 - (value - 56));
    //     dispatch(updateHeaderNav(newValue));
    //   } else {
    //     let newValue = this.setNewValue(true, 0, true, 0);
    //     dispatch(updateHeaderNav(newValue));
    //   }
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
    const esIsValid = (typeof expandableStorage == "undefined" || Object.keys(expandableStorage).length === 0) ? false : true;

    var isAvailable = false;
    if (esIsValid) isAvailable = (typeof expandableStorage.available == "undefined") ? false : expandableStorage.available;
    else isAvailable = false;

    if (deviceOptions && deviceOptions.length > 0) {
      return (
        <View style={{ paddingBottom: 0 }}>
          <View style={styles.hrDivider}></View>
          <Text style={styles.titleDivider}>Device options</Text>

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

          { isAvailable &&
            <View style={styles.sdCardBox}>
              <Icon name="SDCard" width="18" height="23" viewBox="0 0 18 23" />
              <Text style={styles.sdCardText}>SD card slot available</Text>
            </View>
          }
        </View>
      );
    }
  }

  renderCostNext() {
    const { cost } = this.props.costplans;

    if ((typeof cost == "undefined") || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if ((typeof cost.next == "undefined") || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object)) return;

    return (
      <View style={[ styles.cardBox, { marginTop: 16 }]}>
        <Text style={styles.titleCard}>{cost.next.title}</Text>
        <Text style={styles.subTitleCard}>{cost.next.description}</Text>

        <View style={styles.separatorCard}></View>

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.next.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.next.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

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

    if ((typeof cost == "undefined") || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if ((typeof cost.nextEveryYear == "undefined") || (Object.keys(cost.nextEveryYear).length === 0 && (cost.nextEveryYear).constructor === Object)) return;

    let preNextEmpty = ((typeof cost.next == "undefined") || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object));

    return (
      <View style={[ styles.cardBox, { marginTop: preNextEmpty ? 16 : 8 }]}>
        <Text style={styles.titleCard}>{cost.nextEveryYear.title}</Text>
        <Text style={styles.subTitleCard}>{cost.nextEveryYear.description}</Text>

        <View style={styles.separatorCard}></View>

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.nextEveryYear.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.nextEveryYear.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

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

    if ((typeof cost == "undefined") || (Object.keys(cost).length === 0 && cost.constructor === Object)) return;
    if ((typeof cost.noContract == "undefined") || (Object.keys(cost.noContract).length === 0 && (cost.noContract).constructor === Object)) return;

    let preNextEmpty = ((typeof cost.next == "undefined") || (Object.keys(cost.next).length === 0 && (cost.next).constructor === Object));
    let preNextTEmpty = ((typeof cost.nextEveryYear == "undefined") || (Object.keys(cost.nextEveryYear).length === 0 && (cost.nextEveryYear).constructor === Object));
    let newValue = (preNextEmpty && preNextTEmpty) ? 16 : 8;

    return (
      <View style={[ styles.cardBox, { marginTop: newValue }]}>
        <Text style={styles.titleCard}>{cost.noContract.title}</Text>
        <Text style={styles.subTitleCard}>{cost.noContract.description}</Text>

        <View style={styles.separatorCard}></View>

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.noContract.dueToday)}</Text>
            <Text style={styles.dataText}>DUE TODAY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>${this.setFormatToNumber(cost.noContract.monthly)}</Text>
            <Text style={styles.dataText}>MONTHLY</Text>
          </View>

          <View style={styles.dataDivisor}></View>

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
        { (key == "mobileInsurance") && <Text style={styles.titleCard}>AT&T Mobile Insurance</Text> }
        { (key == "mobileProtection") && <Text style={styles.titleCard}>AT&T Mobile Protection Pack</Text> }
        { (key == "mobileProtectionMulit") && <Text style={styles.titleCard}>AT&T Multi-Device Protection Pack</Text> }

        <View style={styles.separatorCard}></View>

        <View style={styles.dataCardBox}>
          <View style={styles.dataBox}>
            <Text style={styles.dataValue}>{mount}</Text>
            <Text style={styles.dataText}>DEVICE{ (key == "mobileProtectionMulit") && "S" } PROTECTED</Text>
          </View>

          <View style={styles.dataDivisor}></View>

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

    if ((typeof insurance == "undefined") || (Object.keys(insurance).length === 0 && insurance.constructor === Object)) return;

    let mInsurance = insurance.mobileInsurance;
    let mInsuranceEmpty = ((typeof mInsurance == "undefined") || (Object.keys(mInsurance).length === 0 && mInsurance.constructor === Object));

    let mProtection = insurance.mobileProtection;
    let mProtectionEmpty = ((typeof mProtection == "undefined") || (Object.keys(mProtection).length === 0 && mProtection.constructor === Object));

    let mProtectionMulti = insurance.mobileProtectionMulit;
    let mProtectionMultiEmpty = ((typeof mProtectionMulti == "undefined") || (Object.keys(mProtectionMulti).length === 0 && mProtectionMulti.constructor === Object));

    let viewMoreInsuranceText = viewMoreInsurance ? "- Collapse" : "+ View more plans";
    let showInsurance = viewMoreInsurance;

    return (
      <View>
        <Text style={styles.titleDevice}>Device protection</Text>

        { !mInsuranceEmpty && this.setItem('mobileInsurance', mInsurance) }

        { showInsurance &&
          <View>
            { !mProtectionEmpty && this.setItem('mobileProtection', mProtection) }
            { !mProtectionMultiEmpty && this.setItem('mobileProtectionMulit', mProtectionMulti) }
          </View>
        }

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

    if (typeof releaseDate == "undefined" || !releaseDate.trim() || releaseDate.length === 0) return;

    const dateRelease = moment(releaseDate).format("ll");
    const dateInAdvance = moment(releaseDate).add(4, 'days').format("ll");

    return(
      <View style={styles.shippingBox}>
        <Icon name="ShippingTruck" width="18" height="13" viewBox="0 0 18 13" />
        <View>
          <Text style={[styles.availableText, { fontWeight: '300' }]}>Available in-store on {dateRelease}</Text>
        </View>
      </View>
    );
  }

  renderContent() {
    const { costplans } = this.props;
    const { viewMoreInsurance, viewMorePlans } = this.state;

    let viewMorePlansText = viewMorePlans ? "- Collapse" : "+ View more plans";
    let showPlans = viewMorePlans;

    if (Object.keys(costplans).length === 0 && costplans.constructor === Object) {
      return ( <CostPlansSkeleton /> );
    } else {
      return (
        <View style={styles.costPlansBox}>
          { this.renderStorage() }
          { this.renderCostNext() }

          { showPlans &&
            <View>
              { this.renderCostNextYear() }
              { this.renderCostNoContract() }
            </View>
          }

          <TouchableWithoutFeedback onPress={this.toggleViewMorePlans}>
            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>{viewMorePlansText}</Text>
            </View>
          </TouchableWithoutFeedback>

          { this.renderShippingInfo() }
          { this.renderDeviceProtection() }
        </View>
      );
    }
  }

  renderAccessories() {
    const { compatibleAccessories } = this.props.costplans;

    if ((typeof compatibleAccessories == "undefined") || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return;

    return (
      <View style={{ height: 190 }}>
        { <RoutesAccessories /> }
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}  scrollEventThrottle={16}>
        { this.renderContent() }
        { this.renderAccessories() }
        <FeedbackSurvey />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { costplans: current.product, customHeaderNav: common.customHeaderNav };
}

export default connect(mapStateToProps)(CostPlansScreen);
