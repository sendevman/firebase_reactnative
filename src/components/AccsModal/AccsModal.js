/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './AccsModalCss';

// My Customs
import Icon from '../../assets/images/Icon';

class AccsModal extends Component {
  constructor(props) {
    super(props);
  };

  renderCategory(item) {
    const { navigation } = this.props;

    const items = item.items;
    if (typeof items == "undefined" || items.length <= 0) return false;

    return (
      <View style={styles.categoryBox}>
        <Text style={styles.categoryTitle}>{item.name}</Text>

        <ScrollView horizontal={true}>
          <View style={styles.containerBox}>
            { items.map((item, index) => {
                return (
                  <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('AccsDetail', { itemId: item.id, itemCategory: item.category })} style={styles.containerItem}>
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
          </View>
        </ScrollView>
      </View>
    );
  }

  renderCategories() {
    const { product, navigation } = this.props;

    if ((typeof product == "undefined") || (Object.keys(product).length === 0 && product.constructor === Object)) return false;
    const { compatibleAccessories } = product;

    if ((typeof compatibleAccessories == "undefined") || (Object.keys(compatibleAccessories).length === 0 && compatibleAccessories.constructor === Object)) return false;
    const items = compatibleAccessories.fullList;

    if (typeof items == "undefined" || items.length <= 0) return false;

    return (
      <ScrollView contentContainerStyle={styles.verticalScroll}>
        { items.map((item, index) => {
            return (
              <View key={index}>
                { this.renderCategory(item) }
              </View>
            );
          })
        }
      </ScrollView>
    );
  }

  renderContent() {
    const { navigation } = this.props;

    return (
      <View style={styles.containerDetail}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Compatible accessories</Text>

          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.headerBtn, { borderTopRightRadius: 16 }]}>
            <Icon name="CloseX" width="14" height="14" viewBox="0 0 14 14" fill="#1181FF" />
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>

        { this.renderCategories() }

        <View style={{ height: 10, width: '100%' }}></View>
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

export default connect(mapStateToProps)(AccsModal);
