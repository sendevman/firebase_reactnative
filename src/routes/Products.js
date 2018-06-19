/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Button, ScrollView, StatusBar, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';

// Screens
import InfoSpecsScreen from '../screens/InfoSpecsScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import CostPlansScreen from '../screens/CostPlansScreen';

const MyNavScreen = ({ navigation, banner }) => (
  <View style={{}}>
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 14}}>{banner}</Text>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
        <Button
          onPress={() => navigation.navigate('NotifSettings')}
          title="Open other screen"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </ScrollView>
  </View>
);

// Top Tab Navigator - Screens
const TestScreen = ({ navigation }) => (
  <MyNavScreen banner={'Test Screen'} navigation={navigation} />
);

const TopTabNav = createMaterialTopTabNavigator(
  {
    InfoSpecs: {
      screen: InfoSpecsScreen,
      navigationOptions: { title: 'Info & Specs' }
    },
    Reviews: {
      screen: ReviewsScreen,
      navigationOptions: { title: 'Reviews' }
    },
    CostPlans: {
      screen: CostPlansScreen,
      navigationOptions: { title: 'Cost & Plans' }
    }
  },
  {
    initialRouteName: 'InfoSpecs',
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: '#1181FF',
      activeBackgroundColor: '#FFF',
      inactiveTintColor: '#3E3F42',
      inactiveBackgroundColor: '#FFF',
      style: {
        height: 42,
        backgroundColor: '#FFF'
      },
      labelStyle: {
        marginTop: 4,
        fontSize: 14,
        letterSpacing: 0.13
      },
      indicatorStyle: { backgroundColor: '#1181FF' }
    }
  }
);

export default TopTabNav;
