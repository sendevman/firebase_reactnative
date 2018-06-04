/**
 * Conexus-Tech - Reatail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Screen!
        </Text>
        <Button
          title="Go to Info & Specs Details"
          onPress={() => this.props.navigation.navigate('InfoSpecs')}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { testing: 0 };
}

export default connect(mapStateToProps)(HomeScreen);
