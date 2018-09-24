/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions, Keyboard, Modal, Platform, SectionList, Text,
  TextInput, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// var Analytics = require('react-native-firebase-analytics');

// My Styles
import styles from './CompareModalCss';

// My Customs
import Icon from '../../assets/images/Icon';
import SkeletonLoading from '../../screens/components/SkeletonLoading';

// My Actions
import { setCompareInfo } from '../../actions/Current';

var { width } = Dimensions.get('window');

const ProductsSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={210}>
      <Rect x="0" y="0" rx="3" ry="3" width="140" height="15"/>
      <Rect x="0" y="35" rx="2" ry="2" width={width - 32} height="1"/>

      <Rect x="0" y="56" rx="3" ry="3" width="100" height="15"/>
      <Rect x="0" y="91" rx="2" ry="2" width={width - 32} height="1"/>

      <Rect x="0" y="112" rx="3" ry="3" width="160" height="15"/>
      <Rect x="0" y="147" rx="2" ry="2" width={width - 32} height="1"/>

      <Rect x="0" y="168" rx="3" ry="3" width="150" height="15"/>
      <Rect x="0" y="203" rx="2" ry="2" width={width - 32} height="1"/>
    </SkeletonLoading>
  </View>
);

class CompareModal extends Component {
  constructor(props) {
    super(props);

    this.state = { keyboardSpace: 0, searchText: '' };

    Keyboard.addListener('keyboardDidShow', (frames) => {
      if (!frames.endCoordinates) return;
      this.setState({ keyboardSpace: - (frames.endCoordinates.height/2) });
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.setState({ keyboardSpace: 0 });
    });
  };

  _onPressButton(key) {
    let selectedIndex = this.props.itemValue;
    let is_Update = true;
    for(i=0; i < this.props.compares.length; i++){
      let tmpCompare = this.props.compares[i];
      if(tmpCompare.item === selectedIndex && key === tmpCompare.product.id){
        is_Update = false;
        this.setState({searchText : ''});
        this.props.onHideModal();
        return;
      }
    }
    let product;
    if(this.state.searchText){
      product = this.props.productsAll.filter(obj => { return (obj.id == key) })[0];
    } else {
      product = this.props.productsNear.filter(obj => { return (obj.id == key) })[0];
    }
    this.props.dispatch(setCompareInfo({ item: this.props.itemValue, product: product }));
    this.setState({searchText : ''});
    this.props.onHideModal();

    if(this.props.compares.length === 2){
      let product1 = this.props.compares.filter(obj => { return (obj.item === 1) })[0];
      let product2 = this.props.compares.filter(obj => { return (obj.item === 2) })[0];
      console.log("devicesCompared----------", {"pFirebaseId":this.props.firebaseid, "pDeviceModel1":product1.product.model, "pDeviceManufacture1":product1.product.manufacture,
      "pDeviceModel2":product2.product.model, "pDeviceManufacture2":product2.product.manufacture});
      firebase.analytics().logEvent("devicesCompared", {"pFirebaseId":this.props.firebaseid, "pDeviceModel1":product1.product.model, "pDeviceManufacture1":product1.product.manufacture,
          "pDeviceModel2":product2.product.model, "pDeviceManufacture2":product2.product.manufacture});
    }
  }

  _onChangeText(text) {
    this.setState({ searchText: text.toLowerCase() });
  }

  searchItems() {
    if (this.state.searchText) {
      return this.props.productsAll.filter(obj => {
        let fullName = (obj.manufacture + " " + obj.model).toLowerCase();
        return fullName.indexOf(this.state.searchText) > -1;
      });
    } else { return this.props.productsNear.filter(item => {
      if(item.title === "title") return false;
      return (typeof item != "undefined"); }); } // && Object.keys(item).length !== 0); }); }
  }

  renderProductItem(section) {
    return (
      <TouchableHighlight onPressOut={() => this._onPressButton(section.key)} underlayColor='#1181FF'>
        <Text style={styles.textProduct}>{section.fullName}</Text>
      </TouchableHighlight>
    );
  }

  renderProductList() {
    const allItems = this.searchItems();
    let allItemsWithoutEmpty = allItems.filter(item => { return (typeof item != "undefined"); });// && Object.keys(item).length !== 0); });
    const items = allItemsWithoutEmpty.map((obj) => { return { key: obj.id, fullName: obj.manufacture + " " + obj.model, data: [''] }})

    if (typeof items != "undefined" && items.length > 0) {
      return (
        <View style={styles.listContainer}>
          <SectionList
            sections={items}
            renderItem={({section}) => this.renderProductItem(section)}
            keyExtractor={(item) => item.key} />
        </View>
      );
    } else {
      return (
        <View style={styles.listContainer}>
          <ProductsSkeleton />
        </View>
      );
    }
  }

  renderContent() {
    return (
      <View style={[styles.containerDetail, { bottom: this.state.keyboardSpace }]}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Choose products to compare</Text>

          <TouchableOpacity onPress={() => { this.props.onHideModal() }} style={[styles.headerBtn, { borderTopRightRadius: 16 }]}>
            <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputBox}>
          <TextInput style={styles.textInput}
            onSubmitEditing={Keyboard.dismiss}
            placeholder='eg. iPhone X'
            placeholderTextColor='#AEBECD'
            underlineColorAndroid='transparent'
            onChangeText={(text) => this._onChangeText(text)} />
        </View>

        <View style={styles.productListBox}>
          <Text style={styles.productListTitle}>Products near you</Text>

          { this.renderProductList() }

          <View style={{ width: '100%', height: 10 }}></View>
        </View>
      </View>
    );
  }

  render() {
    const { onHideModal, showModal } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        visible={showModal}
        onRequestClose={() => { onHideModal() }}>
        <View style={styles.containerModal}>
          { this.renderContent() }
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { common, current, productsNear } = state;
  return { compares: current.compare, firebaseid: common.firebaseid, productsNear: productsNear.productsNear, productsAll: productsNear.productsAll };
}

export default connect(mapStateToProps)(CompareModal);
