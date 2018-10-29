/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

// My Routes
import RoutesAccessories from '../../routes/Accessories';

class AccessoriesComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { compatibleAccessories } = this.props;
    const viewWidth = width - 34;

    const { featured, fullList } = compatibleAccessories;
    let featuredEmpty = (typeof featured == "undefined" || featured.length <= 0);
    let fullListEmpty = (typeof fullList == "undefined" || fullList.length <= 0);

    if (featuredEmpty && fullListEmpty) return false;

    return (
      <View>
        {/* <Icon name="Heading_accessories" width={viewWidth} height={viewWidth / 1080 * 210} fill="#1181FF" viewBox="0 0 1080 210" style={{ marginLeft: 6 }} /> */}
        <View style={[styles.accessoriesBackground1, { width: viewWidth, marginLeft: 6, marginTop: 30 }]}>
          <Image style={[styles.accessoriesBackground, { width: viewWidth, height: viewWidth * 210 / 1080, marginLeft: 0 }]} source={require('../../assets/images/files/accessories.png')} />
        </View>
        <View style={[styles.accessoriesBox, { width: viewWidth }]}>
          {<RoutesAccessories />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  hrDivider: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 0,
    marginBottom: 10
  },
  storageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // - - Accessories Box - -
  accessoriesBackground1: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
  },
  accessoriesBackground: {
  },
  accessoriesBox: {
    height: 165,
    marginLeft: 6,
    marginTop: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
})
export default AccessoriesComponent;
