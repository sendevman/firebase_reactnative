/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './Svgs';

const Icon = (props) => <SvgIcon {...props} svgs={svgs} />;

Icon.defaultProps = {
  fill: '#AEBECD',
  viewBox: '0 0 50 50'
};

export default Icon;
