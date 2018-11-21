import React from 'react';
import {
  AsyncStorage,
  Button,
  NetInfo,
  ScrollView,
  StatusBar,
  Text,
  View,
  NativeEventEmitter,
  NativeModules,
  YellowBox,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import VodLayout from './VodLayout';
import ProductLayout from './ProductLayout';
import Icon from '../assets/images/Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: 50,
    flexDirection: 'row',
    display: 'flex',
  },
  oneButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  oneButtonContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tintText: {
    color: '#3E3F42',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.13,
    lineHeight: 13,
    textAlign: 'center',
  },
  activeTintText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.13,
    lineHeight: 13,
    textAlign: 'center',
  },
});

class BottomTabNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }
  renderHomeButton() {
    return (
      <TouchableOpacity
        style={styles.oneButtonContainer}
        onPress={() => {
          this.props.navigation.goBack();
        }}
      >
        <View style={styles.oneButtonContent}>
          <Icon name="SharedSession" width="22" height="22" fill={'#3E3F42'} viewBox="0 0 22 22" />
          <Text style={styles.tintText}>Discover</Text>
        </View>
      </TouchableOpacity>
    );
  }
  renderEntertainButton() {
    const { tab } = this.state;
    return (
      <TouchableOpacity
        style={[ styles.oneButtonContainer, { backgroundColor: tab === 0 ? 'white' : '#1181ff' } ]}
        onPress={() => this.setState({ tab: 1 })}
      >
        <View style={styles.oneButtonContent}>
          {tab === 0 ? (
            <Icon name="ExclusiveVodUnFill" width="22" height="18" viewBox="0 0 22 18" fill={'#3E3F42'} />
          ) : (
            <Icon name="ExclusiveVodFill" width="22" height="18" viewBox="0 0 22 18" />
          )}
          <Text style={tab === 0 ? styles.tintText : styles.activeTintText}>Entertain</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>{this.state.tab === 0 ? <ProductLayout /> : <VodLayout />}</View>

        <View style={styles.bottom}>
          {this.renderHomeButton()}
          {this.renderEntertainButton()}
        </View>
      </View>
    );
  }
}

export default BottomTabNav;
