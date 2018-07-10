/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// My Customs
import AccsListModal from '../components/AccsModal/List/AccsList';
import AccsDetailModal from '../components/AccsModal/Detail/AccsDetail';

// My Screens
import AccessoriesScreen from '../screens/AccessoriesScreen';

const AccessoriesStack = createStackNavigator(
  {
    Accs: {
      screen: props => <AccessoriesScreen {...props} />
    },
    AccsList: {
      screen: props => <AccsListModal {...props} />
    },
    AccsDetail: {
      screen: props => <AccsDetailModal {...props} />
    }
  },
  {
    initialRouteName: 'Accs',
    mode: 'modal',
    headerMode: 'none'
  }
);

export default AccessoriesStack;
