/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// My Customs
import AccsModal from '../components/AccsModal/AccsModal';

// My Screens
import AccessoriesScreen from '../screens/AccessoriesScreen';

const AccessoriesStack = createStackNavigator(
  {
    Accs: {
      screen: props => <AccessoriesScreen {...props} />
    },
    AccsModal: {
      screen: props => <AccsModal {...props} />
    }
  },
  {
    initialRouteName: 'Accs',
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { backgroundColor: 'transparent' }
  }
);

export default AccessoriesStack;
