/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

// My Actions
import { setSelectDiscover } from '../../actions/Current';

// My Customs
import DirecTVHeader from './DirecTVHeader';
import DirecTVNowHeader from './DirecTVNowHeader';
import WatchTVHeader from './WatchTVHeader';

// My Styles
import styles, { itemWidth, sliderWidth, viewportWidth } from './ServiceZoneSlideCss';

console.disableYellowBox = true;

class ServiceZoneHead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: 0,
      headerArr: [ DirecTVHeader, DirecTVNowHeader, WatchTVHeader ]
    };
  }

  _renderItem() {
    const { sliderActiveSlide } = this.state;

    return (
      <View>
        {
          sliderActiveSlide === 0 ?
            <DirecTVHeader />
            : sliderActiveSlide === 1 ?
            <DirecTVNowHeader />
            : <WatchTVHeader />
        }
      </View>
    )

  }

  get gradient() {
    return (
      <LinearGradient
        colors={['#000000', '#000000']}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const { headerArr } = this.state;

    return (
      <View style={{ width: viewportWidth, height: 220, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center' }}>
        {this.gradient}
        <View>
          <Carousel
            ref={c => this._carouselRef = c}
            data={headerArr}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layout={'stack'}
            removeClippedSubviews={false}
            onSnapToItem={index => {
              this.setState({ sliderActiveSlide: index });
              this.props.dispatch(setSelectDiscover(index));
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return { position: current.position };
}

export default connect(mapStateToProps)(ServiceZoneHead);
