/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Button, ScrollView, StatusBar, Text, View } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';

// My Customs
import MyDrawer from '../components/Drawer/Drawer';
import Icon from '../assets/images/Icon';

// My Layouts
import ProductLayout from '../screens/ProductLayout';
import CompareLayout from '../screens/CompareLayout';
import ExclusiveVodLayout from '../screens/ExclusiveVodLayout';
import OnBoardingLayout from '../screens/OnBoardingLayout';

const MyNavScreen = ({ navigation, banner }) => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 14}}>{banner}</Text>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
        <Button
          onPress={() => navigation.navigate('Email')}
          title="Open other screen"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </ScrollView>
  </View>
);

// Drawer Navigator - Screens
const AboutRetailCompanion = ({ navigation }) => (
  <MyNavScreen banner={'About Retail Companion'} navigation={navigation} />
);

const Experiences = ({ navigation }) => (
  <MyNavScreen banner={'Experiences'} navigation={navigation} />
);

const Events = ({ navigation }) => (
  <MyNavScreen banner={'Events'} navigation={navigation} />
);

const AccountSettings = ({ navigation }) => (
  <MyNavScreen banner={'Account Settings'} navigation={navigation} />
);

// Bottom Tab Navigator - Screens
const SharedSession = ({ navigation }) => (
  <MyNavScreen banner={'Shared Session'} navigation={navigation} />
);

class Hidden extends Component {
  render() {
    return null;
  }
}

const BottomTabNav = createBottomTabNavigator(
  {
    Products: {
      screen: ProductLayout,
      navigationOptions: {
        title: 'Shopping',
        tabBarIcon: ({tintColor}) => {
          if (tintColor === "#3E3F42")
            return <Icon name="ProductsUnFill" width="23" height="18" viewBox="0 0 23 18" />;
          else
            return <Icon name="ProductsFill" width="23" height="18" viewBox="0 0 23 18" />;
        }
      }
    },
    Compare: {
      screen: CompareLayout,
      navigationOptions: {
        title: 'Compare',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="Compare" width="22" height="22" fill={tintColor} viewBox="0 0 22 22" />;
        }
      }
    },
    ExclusiveVod: {
      screen: ExclusiveVodLayout,
      navigationOptions: {
        title: 'Exclusive VOD',
        tabBarIcon: ({tintColor}) => {
          if (tintColor === "#3E3F42")
            return <Icon name="ExclusiveVodUnFill" width="22" height="18" viewBox="0 0 22 18" />;
          else
            return <Icon name="ExclusiveVodFill" width="22" height="18" viewBox="0 0 22 18" />;
        }
      }
    },
    SharedSession: {
      screen: SharedSession,
      navigationOptions: {
        title: 'Shared Session',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="SharedSession" width="22" height="22" fill={tintColor} viewBox="0 0 22 22" />;
        }
      }
    }
  },
  {
    initialRouteName: 'Products',
    tabBarOptions: {
      activeTintColor: '#FFF',
      activeBackgroundColor: '#1181FF',
      inactiveTintColor: '#3E3F42',
      style: { height: 55 },
      labelStyle: {
        marginTop: -4,
        marginBottom: 8,
        // fontFamily: 'SF Pro Text',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 0.13,
        lineHeight: 13,
        textAlign: 'center'
      }
    }
  }
);

const DrawerNav = createDrawerNavigator(
  {
    Shopping: {
      screen: BottomTabNav,
      navigationOptions: { title: 'Shopping' }
    },
    AboutRetailCompanion: {
      screen: AboutRetailCompanion,
      navigationOptions: { title: 'About Retail Companion' }
    },
    Experiences: {
      screen: Experiences,
      navigationOptions: { title: 'Experiences' }
    },
    Events: {
      screen: Events,
      navigationOptions: { title: 'Events' }
    },
    AccountSettings: {
      screen: AccountSettings,
      navigationOptions: {
        title: 'Account Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name="SettingsApp" width="14" height="14" fill={tintColor} viewBox="3 1 20 20" />
        )
      }
    },
    OnBoarding: {
      screen: OnBoardingLayout,
      navigationOptions: {
        title: 'OnBoarding',
        drawerLabel: <Hidden />
      }
    }
  },
  {
    initialRouteName: 'OnBoarding',
    contentOptions: {
      activeTintColor: '#1181FF',
      activeBackgroundColor: '#EEF1F4',
      inactiveTintColor: '#3E3F42',
      itemsContainerStyle: { marginTop: 26 },
      iconContainerStyle: {
        marginLeft: 0,
        height: 16,
        width: 16,
        marginRight: 5
      }
    },
    contentComponent: props => <MyDrawer {...props} />
  }
);

export default DrawerNav;
