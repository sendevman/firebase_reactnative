/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

// My Styles
import styles, { itemWidth, sliderWidth } from './InternetCss';

class InternetCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  _renderSubCard = (subCard, index) => {
    return (
      <View key={index} style={styles.subCardBox}>
        <AutoHeightImage width={150} source={{ uri: subCard.img }} />

        <Text style={styles.subCardTitle}>{subCard.title}</Text>

        { (subCard.bullets && subCard.bullets.length > 0) &&
          <View style={styles.bulletsBox}>
            {subCard.bullets.map((bullet, index) => {
              return (
                <Text key={index} style={styles.bulletText}>{bullet}</Text>
              )
            })}
          </View>
        }

        <Text style={styles.subCardLegal}>{subCard.legal}</Text>
      </View>
    );
  };

  _renderItem({ item, index }) {
    if (item.type === 'title_body') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />

          <View style={styles.cardContainer}>
            <Text style={styles.txtTitle}>{item.title}</Text>

            <Text style={styles.txtBody}>{item.body}</Text>
          </View>
        </View>
      );
    } else if (item.type === 'sub_cards') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />

          <View style={styles.cardContainer}>
            <Text style={styles.txtBody}>{item.body}</Text>

            { (item.subCards && item.subCards.length > 0) &&
              <View style={styles.subCardsContainer}>
                {item.subCards.map((subCard, index) => this._renderSubCard(subCard, index))}
              </View>
            }
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

export default connect(mapStateToProps)(InternetCarousel);
