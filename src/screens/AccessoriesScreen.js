/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableWithoutFeedback, View, WebView } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/AccessoriesScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class AccessoriesScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    const { product, navigation } = this.props;

    if ((typeof product == "undefined") || (Object.keys(product).length === 0 && product.constructor === Object)) return false;
    const { compatibleAccessories } = product;

    if ((typeof compatibleAccessories == "undefined") || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return false;
    const items = compatibleAccessories.featured;

    if (typeof items == "undefined" || items.length <= 0) return false;

    return (
      <View style={styles.containerBox}>
        { items.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('AccsDetail', { isDetail: true, itemId: item.id, itemCategory: item.category })} style={styles.containerItem}>
                <View style={styles.itemBox}>
                  <View style={styles.frameImage}>
                    <Image style={styles.itemImage} resizeMode={Image.resizeMode.contain} source={{ uri: item.img }} />
                  </View>

                  <View style={styles.separator}></View>

                  <View><Text style={styles.itemText} numberOfLines={2}>{item.title}</Text></View>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }

        <TouchableWithoutFeedback onPress={() => navigation.navigate('AccsModal', { isDetail: false })}>
          <View style={styles.containerAdd}>
            <Icon height="37" width="37" name="AddBtn" viewBox="0 0 37 37" fill="#1181FF" />
            <Text style={styles.addText}>View more accessories</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Compatible accessories</Text>

        <ScrollView horizontal={true}>
          { this.renderContent() }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return { product: current.product };
}

export default connect(mapStateToProps)(AccessoriesScreen);
