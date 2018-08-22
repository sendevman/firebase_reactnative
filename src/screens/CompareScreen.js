/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/CompareScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import CompareModal from '../components/CompareModal/CompareModal';
import { OfferThin } from '../components/LimitedTimeOffer/Offer';

class CompareScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { itemValue: 0, showModal: false };
  }

  hideModal = () => { this.setState({ itemValue: 0, showModal: false }); }
  showModal = (value) => { this.setState({ itemValue: value.item, showModal: true }); }

  renderAddProduct(withData, item, img) {
    return (
      <View style={styles.addProductBox}>
        { !withData &&
          <TouchableOpacity onPress={() => this.showModal({ item: item })} activeOpacity={0.75} style={styles.addBtn}>
            <Icon name="AddBtn" width="37" height="37" fill="#1181FF" viewBox="0 0 37 37" />
            <Text style={styles.titleAdd}>Add product</Text>
          </TouchableOpacity>
        }
        { withData &&
          <Image style={styles.itemImage} resizeMode={Image.resizeMode.contain} source={{ uri: img }} />
        }
      </View>
    );
  }

  renderDetails(itemLeft, itemRight) {
    return (
      <View>
        { this.renderTitleAndBtn(itemLeft, itemRight) }
        { this.renderOffer(itemLeft, itemRight) }

        { this.renderPrice(itemLeft, itemRight) }
        { this.renderStorage(itemLeft, itemRight) }
        { this.renderDisplay(itemLeft, itemRight) }
        { this.renderCamera(itemLeft, itemRight) }
        { this.renderPerformance(itemLeft, itemRight) }
        { this.renderBattery(itemLeft, itemRight) }
        { this.renderHeadphone(itemLeft, itemRight) }
        { this.renderGeekbench(itemLeft, itemRight) }
      </View>
    );
  }

  renderTitleAndBtn(itemLeft, itemRight) {
    return (
      <View style={styles.compareItemBox}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <View style={styles.detailFlex}>
              <Text numberOfLines={2} style={styles.titleProduct}>{itemLeft.product.manufacture} {itemLeft.product.model}</Text>

              <TouchableOpacity onPress={() => this.showModal({ item: 1 })} activeOpacity={0.6} style={styles.changeBtn}>
                <Text style={styles.changeBtnText}>Change</Text>
              </TouchableOpacity>
            </View>
          }
        </View>

        <View style={styles.vsBox}></View>

        <View style={styles.detailBox}>
          { itemRight &&
            <View style={styles.detailFlex}>
              <Text numberOfLines={2} style={styles.titleProduct}>{itemRight.product.manufacture} {itemRight.product.model}</Text>

              <TouchableOpacity onPress={() => this.showModal({ item: 2 })} activeOpacity={0.6} style={styles.changeBtn}>
                <Text style={styles.changeBtnText}>Change</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    );
  }

  renderOffer(itemLeft, itemRight) {
    return (
      <View style={styles.compareItemBox}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <View style={styles.detailFlex}>
              { ((typeof itemLeft.product.offer != "undefined") && (Object.keys(itemLeft.product.offer).length > 0)) &&
                <OfferThin offer={itemLeft.product.offer} />
              }
            </View>
          }
        </View>

        <View style={styles.vsBox}></View>

        <View style={styles.detailBox}>
          { itemRight &&
            <View style={styles.detailFlex}>
              { ((typeof itemRight.product.offer != "undefined") && (Object.keys(itemRight.product.offer).length > 0)) &&
                <OfferThin offer={itemRight.product.offer} />
              }
            </View>
          }
        </View>
      </View>
    );
  }

  setFormatToPrice(price) { return String(price).split('.')[0]; }

  renderPrice(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <Text style={styles.featureDescription}>${this.setFormatToPrice(itemLeft.product.cost.noContract.dueToday)}</Text>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}>
          <Text style={styles.featureTitle}>Price</Text>
        </View>

        <View style={styles.detailBox}>
          { itemRight &&
            <Text style={styles.featureDescription}>${this.setFormatToPrice(itemRight.product.cost.noContract.dueToday)}</Text>
          }
        </View>
      </View>
    );
  }

  renderStorage(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <View style={styles.detailFlex}>
              { (typeof itemLeft.product.deviceOptions != "undefined") && itemLeft.product.deviceOptions.map((item, index) => {
                  return <Text key={index} style={styles.featureDescription}>{item.storage}GB</Text>;
                })
              }
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}></View>
        <View style={styles.textAbsolute}>
          <Text style={styles.featureTitle}>Storage</Text>
        </View>

        <View style={styles.detailBox}>
          { itemRight &&
            <View style={styles.detailFlex}>
              { (typeof itemRight.product.deviceOptions != "undefined") && itemRight.product.deviceOptions.map((item, index) => {
                  return <Text key={index} style={styles.featureDescription}>{item.storage}GB</Text>;
                })
              }
            </View>
          }
        </View>
      </View>
    );
  }

  renderDisplay(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <View style={styles.detailFlex}>
              <Text style={[styles.featureDescription, { width: 100 }]}>{itemLeft.product.display.description}</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.display.resolution}</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.display.ppi}ppi</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}>
          <Text style={styles.featureTitle}>Display</Text>
        </View>

        <View style={styles.detailBox}>
          { itemRight &&
            <View style={styles.detailFlex}>
              <Text style={[styles.featureDescription, { width: 100 }]}>{itemRight.product.display.description}</Text>
              <Text style={styles.featureDescription}>{itemRight.product.display.resolution}</Text>
              <Text style={styles.featureDescription}>{itemRight.product.display.ppi}ppi</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderCamera(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { (itemLeft && (typeof itemLeft.product.camera != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>FRONT CAMERA</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.camera.front.sensor} sensor</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.camera.front.aperture} aperture</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>REAR CAMERA</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.camera.rear.sensor} sensor</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.camera.rear.aperture} aperture</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}></View>
        <View style={styles.textAbsolute}>
          <Text style={styles.featureTitle}>Camera</Text>
        </View>

        <View style={styles.detailBox}>
          { (itemRight && (typeof itemRight.product.camera != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>FRONT CAMERA</Text>
              <Text style={styles.featureDescription}>{itemRight.product.camera.front.sensor} sensor</Text>
              <Text style={styles.featureDescription}>{itemRight.product.camera.front.aperture} aperture</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>REAR CAMERA</Text>
              <Text style={styles.featureDescription}>{itemRight.product.camera.rear.sensor} sensor</Text>
              <Text style={styles.featureDescription}>{itemRight.product.camera.rear.aperture} aperture</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderPerformance(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { (itemLeft && (typeof itemLeft.product.processor != "undefined")) &&
            <View style={[styles.detailFlex, { flex: 1 }]}>
              <Text style={styles.featureSubTitle}>PROCESSOR</Text>
              <Text numberOfLines={2} style={[styles.featureDescription, { width: 90, height: 40 }]}>{itemLeft.product.processor.short}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>MEMORY</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.memory}GB</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}></View>
        <View style={styles.textAbsolute}>
          <Text style={styles.featureTitle}>Performance</Text>
        </View>

        <View style={styles.detailBox}>
          { (itemRight && (typeof itemRight.product.processor != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>PROCESSOR</Text>
              <Text numberOfLines={2} style={[styles.featureDescription, { width: 90, height: 40 }]}>{itemRight.product.processor.short}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>MEMORY</Text>
              <Text style={styles.featureDescription}>{itemRight.product.memory}GB</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderBattery(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { (itemLeft && (typeof itemLeft.product.battery != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>CAPACITY</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.battery.capacity}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>TALK TIME</Text>
              <Text style={styles.featureDescription}>Up to {itemLeft.product.battery.life.talkTime}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>INTERNET USE 4G</Text>
              <Text style={styles.featureDescription}>Up to {itemLeft.product.battery.life.internetL4G}</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}>
          <Text style={styles.featureTitle}>Battery</Text>
        </View>

        <View style={styles.detailBox}>
          { (itemRight && (typeof itemRight.product.battery != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>CAPACITY</Text>
              <Text style={styles.featureDescription}>{itemRight.product.battery.capacity}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>TALK TIME</Text>
              <Text style={styles.featureDescription}>Up to {itemRight.product.battery.life.talkTime}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>INTERNET USE 4G</Text>
              <Text style={styles.featureDescription}>Up to {itemRight.product.battery.life.internetL4G}</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderHeadphone(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { itemLeft &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureDescription}>{itemLeft.product.headphoneJack ? 'Yes' : 'No'}</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9, height: 40 }]}></View>
        <View style={styles.textAbsolute}>
          <Text style={[styles.featureTitle, { height: 40 }]}>Headphone Jack</Text>
        </View>

        <View style={styles.detailBox}>
          { itemRight &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureDescription}>{itemRight.product.headphoneJack ? 'Yes' : 'No'}</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderGeekbench(itemLeft, itemRight) {
    return (
      <View style={[styles.compareItemBox, styles.whitBorder]}>
        <View style={styles.detailBox}>
          { (itemLeft && (typeof itemLeft.product.geekbench != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>SINGLE CORE</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.geekbench.singleCore}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>MULTI-CORE</Text>
              <Text style={styles.featureDescription}>{itemLeft.product.geekbench.multiCore}</Text>
            </View>
          }
        </View>

        <View style={[styles.vsBox, { marginTop: 9 }]}></View>
        <View style={styles.textAbsolute}>
          <Text style={styles.featureTitle}>Geekbench Score</Text>
        </View>

        <View style={styles.detailBox}>
          { (itemRight && (typeof itemRight.product.geekbench != "undefined")) &&
            <View style={styles.detailFlex}>
              <Text style={styles.featureSubTitle}>SINGLE CORE</Text>
              <Text style={styles.featureDescription}>{itemRight.product.geekbench.singleCore}</Text>

              <Text style={[styles.featureSubTitle, { marginTop: 16 }]}>MULTI-CORE</Text>
              <Text style={styles.featureDescription}>{itemRight.product.geekbench.multiCore}</Text>
            </View>
          }
        </View>
      </View>
    );
  }

  renderContent() {
    const { compare } = this.props;

    if (compare.length == 2) {
      var zero = compare[0];
      var one = compare[1];
    }
    if (compare.length == 1) {
      var zero = compare[0];
      var one = { item: 0, product: {} };
    }
    if (typeof compare == "undefined" || compare.length <= 0) {
      var zero = { item: 0, product: {} };
      var one = { item: 0, product: {} };
    }

    let itemLeft = (zero.item == 1) ? zero : ((one.item == 1) ? one : false);
    let itemRight = (zero.item == 2) ? zero : ((one.item == 2) ? one : false);

    return (
      <View style={styles.compareBox}>
        <View style={styles.compareItemBox}>
          { itemLeft && this.renderAddProduct(true, 1, itemLeft.product.img) }
          { !itemLeft && this.renderAddProduct(false, 1, null) }

          <View style={styles.vsBox}>
            <Text style={styles.titleVs}>VS</Text>
          </View>

          { itemRight && this.renderAddProduct(true, 2, itemRight.product.img) }
          { !itemRight && this.renderAddProduct(false, 2, null) }
        </View>

        { (itemLeft || itemRight) && this.renderDetails(itemLeft, itemRight) }
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        { this.renderContent() }

        <CompareModal onHideModal={this.hideModal} showModal={this.state.showModal} itemValue={this.state.itemValue} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return { compare: current.compare };
}

export default connect(mapStateToProps)(CompareScreen);
