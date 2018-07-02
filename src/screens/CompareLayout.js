/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Button, ScrollView, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// My Customs
import Icon from '../assets/images/Icon';
import LogoTitleCompare from './components/LogoTitleCompare';
import GradientHeader from './components/GradientHeader';

class CompareLayoutScreen extends Component {
  constructor(props) {
    super(props);
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitleCompare />,
      header: props => <GradientHeader {...props} />,
      headerStyle: { backgroundColor: 'transparent', overflow: 'hidden', height: 56 },
      headerLeft: (
        <TouchableHighlight style={{ marginLeft: 16 }} onPress={() => navigation.openDrawer()}>
          <Icon name="Menu" width="24" height="24" fill="#FFF" viewBox="0 0 24 24" />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableHighlight style={{ marginRight: 16 }} >
          <Icon name="Menu" width="24" height="24" fill="transparent" viewBox="0 0 24 24" />
        </TouchableHighlight>
      )
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
            <Text style={{ fontSize: 14}}>Compare</Text>
            <Button onPress={() => this.props.navigation.openDrawer()} title="Open drawer" />
            <Text style={{ fontSize: 14}}></Text>
            <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
          </SafeAreaView>
          <StatusBar barStyle="default" />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { customHeaderNav: common.customHeaderNav };
}

const CompareLayout = createStackNavigator({
  Root: { screen: connect(mapStateToProps)(CompareLayoutScreen) }
});

export default CompareLayout;
