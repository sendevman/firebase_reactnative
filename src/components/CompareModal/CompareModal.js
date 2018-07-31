/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions, Keyboard, Modal, SectionList, Text, TextInput,
  TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { connect } from 'react-redux';

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
    let product = this.props.productsNear.filter(obj => { return (obj.id == key) })[0];
    this.props.dispatch(setCompareInfo({ item: this.props.itemValue, product: product }));
    this.props.onHideModal();
  }

  _onChangeText(text) {
    this.setState({ searchText: text.toLowerCase() });
  }

  searchItems() {
    if (this.state.searchText) {
      return this.props.productsNear.filter(obj => {
        let fullName = (obj.manufacture + " " + obj.model).toLowerCase();
        return fullName.indexOf(this.state.searchText) > -1;
      });
    } else { return this.props.productsNear; }
  }

  renderProductItem(section) {
    return (
      <TouchableHighlight onPressOut={() => this._onPressButton(section.key)} underlayColor='#1181FF'>
        <Text style={styles.textProduct}>{section.fullName}</Text>
      </TouchableHighlight>
    );
  }

  renderProductList() {
    const { productsNear } = this.props;
    const allItems = this.searchItems(productsNear);
    const items = allItems.map((obj) => { return { key: obj.id, fullName: obj.manufacture + " " + obj.model, data: [''] }})

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
  const { productsNear } = state;

  return { productsNear: productsNear.productsNear };
}

export default connect(mapStateToProps)(CompareModal);
