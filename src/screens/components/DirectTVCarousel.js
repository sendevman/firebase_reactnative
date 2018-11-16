/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

// My FakeData
// import { FakeDirecTv } from '../../store/DirecTvFakeData';

// My Styles
import styles, { itemWidth, sliderWidth } from '../css/DirecTVCarouselCss';

class DirecTVCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      readMoreBody: false,
    };
  }

  toggleReadMoreBody = () => {
    this.setState({ readMoreBody: !this.state.readMoreBody });
  };

  _renderItem({ item, index }) {
    const { readMoreBody } = this.state;

    let readMoreBodyText = readMoreBody ? '- View less' : '+ View more';

    return (
      <View key={index}>
        <Image style={styles.hangOffImg} resizeMode="contain" source={{ uri: item.heroImg }} />
        <View style={styles.cardContainer}>
          <Text style={styles.txtTitle}>{item.title}</Text>

          <Text style={styles.txtBody}>{item.body}</Text>

          {/* numberOfLines={readMoreBody ? 0 : 3} <TouchableWithoutFeedback onPress={this.toggleReadMoreBody}>
            <View style={styles.readMoreBox}>
              <Text style={styles.readMoreText}>{readMoreBodyText}</Text>
            </View>
          </TouchableWithoutFeedback> */}
        </View>
      </View>
    );
  }
  render() {
    const { product } = this.props;
    const { currentSlide } = this.state;

    const carouselData = (Object.keys(product).length === 0) ? [] : product.carouselData;
    const legalText = (carouselData.length > 0) ? carouselData[currentSlide].legal : '';

    // To use fake data, comment lines 58 & 59, and uncomment lines 13 & 62 & 63.
    // const carouselData = FakeDirecTv.carouselData;
    // const legalText = (carouselData.length > 0) ? carouselData[currentSlide].legal : '';

    return (
      <View style={styles.container}>
        <Carousel
          data={carouselData}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => this.setState({ currentSlide: index })}
        />

        <View style={styles.legalBox}>
          <Text style={styles.txtLegal}>{legalText}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { current } = state;

  return {
    product: current.product,
  };
}

export default connect(mapStateToProps)(DirecTVCarousel);
