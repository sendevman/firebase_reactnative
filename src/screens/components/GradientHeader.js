/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

class GradientHeader extends Component<props> {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <LinearGradient colors={['#242d39', '#2b3748']}>
        <Header {...this.props} />
      </LinearGradient>
    );
  }
}

export default GradientHeader;
