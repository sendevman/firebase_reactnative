/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

// My Actions
import { setCompareInfo, setLastCompareInfo } from '../../actions/Current';

// My Customs
import Icon from '../../assets/images/Icon';

const { width: viewportWidth } = Dimensions.get('window');

class ButtonCompare extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    const { compares, lastCompare, product } = this.props;

    if (!product) {
      this.props.onGoToCompareBtn();
      return;
    }

    const productPivot = compares.filter(obj => { return obj.product.id === product.id });
    if (productPivot.length > 0) {
      this.props.onGoToCompareBtn();
      return;
    }

    let newItem = 0;
    if (compares.length === 1) {
      newItem = (compares[0].item === 1) ? 2 : 1;
    } else {
      newItem = (lastCompare === 1) ? 2 : 1;
    }

    this.props.dispatch(setLastCompareInfo(newItem));
    this.props.dispatch(setCompareInfo({ item: newItem, product: product }));
    this.props.onGoToCompareBtn();
  }

  render() {
    return (
      <Button
        raised
        icon={ (viewportWidth <= 340 ? null : { name: 'compare-arrows', style: { marginRight: 8 } }) }
        title='Compare'
        color="#FFF"
        borderRadius={18}
        backgroundColor="#1181FF"
        textStyle={{
          // fontFamily: 'Rubik',
          fontSize: 14,
          lineHeight: 17
        }}
        buttonStyle={{ padding: 6}}
        onPress={() => this._onPressButton()}
      />
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return {
    compares: current.compare,
    lastCompare: current.lastCompare,
  };
}

export default connect(mapStateToProps)(ButtonCompare);
