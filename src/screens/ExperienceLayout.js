/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

class ExperienceLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0 };
}

export default connect(mapStateToProps)(ExperienceLayout);
