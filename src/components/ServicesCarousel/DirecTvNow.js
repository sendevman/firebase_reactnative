/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

// My Customs
import Icon from '../../assets/images/Icon';

// My Styles
import styles, { itemWidth, sliderWidth } from './DirecTvNowCss';

class DirecTvNowCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  _renderSubCard = (subCard, index) => {
    return (
      <View key={index} style={styles.subCardBox}>
        {(subCard.type === 'premium_channels') && <Icon name="PremiumChannels" width="54" height="34.5" viewBox="0 0 72 46" />}
        {(subCard.type === 'spanish_add_ons') && <Icon name="SpanishAddOns" width="48.5" height="34.5" viewBox="0 0 94 67" />}
        {(subCard.type === 'true_cloud_dvr') && <Icon name="TrueCloudDvr" width="50.5" height="34.5" viewBox="0 0 28 19" />}
        {(subCard.type === 'multi_streaming') && <Icon name="MultiStreaming" width="60" height="34.5" viewBox="0 0 28 16" />}
        <Text style={styles.subCardTitle}>{subCard.title}</Text>
        <Text style={styles.subCardBody}>{subCard.body}</Text>
      </View>
    );
  };

  _renderIntSubCard = (subCard, index) => {
    return (
      <View key={index} style={styles.intSubCardBox}>
        <Text style={styles.intSubCardTitle}>{subCard.title}</Text>
        <Text style={styles.intSubCardChannels}>{subCard.channels} channels</Text>

        <View style={styles.intSubCardPriceBox}>
          <Text style={styles.intSubCardPrice}>$</Text>
          <Text style={[styles.intSubCardPrice, styles.intSubCardPriceNumber]}>{subCard.price}</Text>
          <Text style={styles.intSubCardPrice}>/mo</Text>
        </View>

        <Text style={styles.intSubCardExtraText}>Includes these live and on-demand channels:</Text>

        <View style={styles.intSubCardImgBox}>
          { (subCard.type === 'vietnamese') &&
            <Image style={styles.intSubCardImg} source={require('../../assets/images/files/IntVietnamese.png')} />
          }
          { (subCard.type === 'brazilian') &&
            <Image style={styles.intSubCardImg} source={require('../../assets/images/files/IntBrazilian.png')} />
          }
        </View>
      </View>
    );
  };

  _renderItem({ item, index }) {
    if (item.type === 'bullets') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />
          <View style={styles.cardContainer}>
            <Text style={styles.txtTitle}>{item.title}</Text>

            { (item.bullets && item.bullets.length > 0) &&
              <View style={styles.bulletsContainer}>
                {item.bullets.map((bullet, index) => {
                  return (
                    <View key={index} style={styles.bulletBox}>
                      <Icon name="CheckMark" width="18" height="18" viewBox="0 0 490.05 490.05" />
                      <Text style={styles.bulletText}>{bullet}</Text>
                    </View>
                  )
                })}
              </View>
            }
          </View>
        </View>
      );
    } else if (item.type === 'sub_cards') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />
          <View style={styles.cardContainer}>
            { (item.subCards && item.subCards.length > 0) &&
              <View style={styles.subCardsContainer}>
                {item.subCards.map((subCard, index) => this._renderSubCard(subCard, index))}
              </View>
            }
          </View>
        </View>
      );
    } else if (item.type === 'international') {
      return (
        <View key={index}>
          <Image style={styles.hangOffImg} resizeMode="cover" source={{ uri: item.heroImg }} />
          <View style={styles.cardContainer}>
            { (item.subCards && item.subCards.length > 0) &&
              <View style={styles.intSubCardsContainer}>
                {item.subCards.map((subCard, index) => this._renderIntSubCard(subCard, index))}
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
    const legalText = (carouselData.length > 0) ? carouselData[currentSlide].legal : '';

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

          {/* <View style={styles.legalBox}>
            <Text style={styles.txtLegal}>{legalText}</Text>
          </View> */}
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

export default connect(mapStateToProps)(DirecTvNowCarousel);
