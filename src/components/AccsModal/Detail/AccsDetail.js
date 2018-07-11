/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Button as ButtonBuy } from 'react-native-elements';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';

// My Styles
import styles from './AccsDetailCss';

// My Customs
import Icon from '../../../assets/images/Icon';

class AccsDetailModal extends Component {
  constructor(props) {
    super(props);
  };

  setItem() {
    const { navigation } = this.props;

    const itemId = navigation.getParam('itemId');
    const itemCategory = navigation.getParam('itemCategory');

    const { compatibleAccessories } = this.props.product;
    if ((typeof compatibleAccessories == "undefined") || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return false;

    const fullList = compatibleAccessories.fullList;
    if (typeof fullList == "undefined" || fullList.length <= 0) return false;

    let byCategory = fullList.filter((obj) => { return (obj.name === itemCategory); });
    if ((typeof byCategory == "undefined") || (Object.keys(byCategory).length === 0 && byCategory.constructor === Object)) return false;

    const items = byCategory[0].items;
    if (typeof items == "undefined" || items.length <= 0) return false;

    let item = items.filter((obj) => { return (obj.id === itemId); })[0];
    if (typeof item == "undefined" || item.length <= 0) return false;

    return item;
  }

  setFormatToNumber(number) {
    let nSplit = String(number).split('.');

    if (nSplit.length === 2) {
      if (nSplit[1].length === 2) return `${nSplit[0]}.${nSplit[1]}`;
      return `${nSplit[0]}.${nSplit[1]}0`;
    }
    return `${nSplit[0]}.00`;
  }

  renderContent() {
    const { navigation } = this.props;

    let item = this.setItem();
    if (!item) navigation.goBack();

    let price = this.setFormatToNumber(item.price);

    return (
      <View style={styles.containerDetail}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.headerBtn, { borderTopLeftRadius: 16 }]}>
            <Icon name="ArrowLeft" width="10" height="16" viewBox="0 0 10 16" fill="#1181FF" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Details</Text>

          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.headerBtn, { borderTopRightRadius: 16 }]}>
            <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.contentBox}>
          <View style={styles.imageBox}>
            <Image style={styles.itemImage} resizeMode={Image.resizeMode.contain} source={{ uri: item.img }} />
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.titleText} numberOfLines={1}>{item.title}</Text>

            <Rating
              type='custom'
              ratingColor='#3498db'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={20}
              readonly
              startingValue={item.stars} />

            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>

          <ButtonBuy
            title={`Buy - $${item.price}`}
            textStyle={styles.textBuyBtn}
            buttonStyle={styles.buyBtn}
            onPress={() => Alert.alert(
              'Alert Title',
              `Go to Buy! $${item.price}`,
              [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        visible={true}
        onRequestClose={() => { this.props.navigation.navigate('Accs'); }}>
        <View style={styles.containerModal}>
          { this.renderContent() }
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return { product: current.product };
}

export default connect(mapStateToProps)(AccsDetailModal);
