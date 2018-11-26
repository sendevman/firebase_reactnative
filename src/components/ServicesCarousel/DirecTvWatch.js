/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

// My Styles
import styles, { itemWidth, sliderWidth } from './DirecTvWatchCss';

class DirecTvWatchCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  _renderItem({ item, index }) {
    if (item.type === 'bullets') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />
          <View style={styles.cardContainer}>
            <Text style={styles.txtBody}>{item.body}</Text>

            { (item.bullets && item.bullets.length > 0) &&
              <View style={styles.bulletsContainer}>
                {item.bullets.map((bullet, index) => {
                  return (
                    <View key={index} style={styles.bulletBox}>
                      <Image style={styles.bulletImg} resizeMode="cover" source={{ uri: bullet.img }} />
                      <Text style={styles.bulletText}>{bullet.text}</Text>
                    </View>
                  )
                })}
              </View>
            }
          </View>
        </View>
      );
    } else if (item.type === 'destination') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />
          <View style={styles.cardContainer}>
            <View style={styles.destBox}>
              <AutoHeightImage width={itemWidth - 60} source={{ uri: item.destinationImg }} />
            </View>

            <Text style={styles.txtBody}>{item.body}</Text>
            <Text style={styles.destLegal}>{item.legal}</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    const { product } = this.props;
    const { currentSlide } = this.state;

    const carouselData = (Object.keys(product).length === 0) ? [] : product.carouselData;

    return (
      <View style={styles.container}>
        <View style={{ maxWidth: 400, width: '100%' }}>
          <Carousel
            data={carouselData}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => this.setState({ currentSlide: index })}
          />
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

export default connect(mapStateToProps)(DirecTvWatchCarousel);
