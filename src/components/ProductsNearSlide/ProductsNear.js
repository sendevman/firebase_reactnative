/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import moment from 'moment';
import { Animated, Image, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-carousel-view';
import Spinkit from 'react-native-spinkit';
import { connect } from 'react-redux';

// My Styles
import styles from './ProductsNearCss';

// My Customs
import Icon from '../../assets/images/Icon';
import ButtonCompare from './ButtonCompare';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Class RCTCxxModule']);

class ProductsNear extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const areaData = this.props.areaData || {};
    const { currentProducts, position } = this.props;

    const getProduct = (productId) => {
      const match = currentProducts.filter(product => product.id === productId);
      return match.length > 0 ? match[0] : null;
    };

    console.log("-=-=-=", currentProducts, this.props);
    const matching = {};
    (areaData.products || []).forEach(element => {
      matching[element] = getProduct(element);
    });

    let titleItem = {
      transform: [
        {
          translateX: this.props.animatedValue.interpolate({
            inputRange: [0, 166],
            outputRange: [0, -108],
            extrapolate: 'clamp'
          })
        },
        {
          translateY: this.props.animatedValue.interpolate({
            inputRange: [0, 166],
            outputRange: [0, 34],
            extrapolate: 'clamp'
          })
        }
      ],
      width: this.props.animatedValue.interpolate({
        inputRange: [0, 166],
        outputRange: [216, 206],
        extrapolate: 'clamp'
      })
    };

    let btnBox = {
      transform: [
        {
          translateX: this.props.animatedValue.interpolate({
            inputRange: [0, 166],
            outputRange: [0, 92],
            extrapolate: 'clamp'
          })
        },
        {
          translateY: this.props.animatedValue.interpolate({
            inputRange: [0, 166],
            outputRange: [0, -33],
            extrapolate: 'clamp'
          })
        }
      ],
      width: this.props.animatedValue.interpolate({
        inputRange: [0, 166],
        outputRange: [216, 140],
        extrapolate: 'clamp'
      })
    };

    let fastOpacity = {
      opacity: this.props.animatedValue.interpolate({
        inputRange: [0, 35],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    };

    const headerHeight = this.props.animatedValue.interpolate({
      inputRange: [0, 166],
      outputRange: [120, 52],
      extrapolate: 'clamp'
    });

    return (
      <LinearGradient colors={['#2b3748', '#43597D']} height={166}>
        <TouchableOpacity onPress={this.props.zone}>
          <Text style={styles.title}>PRODUCTS NEAR YOU ({(position && position.zone_id) ? position.zone_id : '---'})</Text>
        </TouchableOpacity>
        { (currentProducts || []).length > 0 ?
            <Carousel
              animate={false}
              // height={136}
              indicatorOffset={4}
              indicatorColor={'#FFF'}
              indicatorSize={6}
              inactiveIndicatorColor={'rgba(255, 255, 255, 0.3)'}
              indicatorSpace={8}
              onPageChange={(index) =>
                (areaData.products) ?
                  this.props.onProductIdChange(areaData.products[index])
                  : null}
            >
              { (areaData.products || []).map((productId, index) => (
                  <View style={styles.itemContainer} key={index}>
                    <Animated.View style={[styles.itemBox, { height: headerHeight }]}>
                      <Animated.View style={[styles.imageBox, fastOpacity]}>
                        <Image style={styles.itemImage} resizeMode={Image.resizeMode.contain} source={{ uri: matching[productId] ? matching[productId].img : "" }} />
                      </Animated.View>

                      <View style={styles.detailsBox}>
                        <Animated.Text numberOfLines={1} style={[styles.titleItem, titleItem]}>{matching[productId] ? matching[productId].manufacture + " " + matching[productId].model : ""}</Animated.Text>

                        <Animated.View style={[styles.hrDivider, fastOpacity]}></Animated.View>

                        <Animated.View style={[styles.deviceOptionsBox, fastOpacity]}>
                          <View style={styles.deviceOptionItem}>
                            <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                            <Text style={styles.deviceOptionText}>{matching[productId] ? matching[productId].deviceOptions[0].storage : 0}GB</Text>
                          </View>
                          <View style={styles.deviceOptionItem}>
                            <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                            <Text style={styles.deviceOptionText}>{matching[productId] ? matching[productId].battery.life.video.replace(' ', '') : 0}</Text>
                          </View>
                          <View style={styles.deviceOptionItem}>
                            <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                            <Text style={styles.deviceOptionText}>{matching[productId] ? matching[productId].camera.front.sensor + " " + matching[productId].camera.rear.sensor : ""}</Text>
                          </View>
                        </Animated.View>

                        <Animated.View style={[ btnBox ]}>
                          <ButtonCompare />
                        </Animated.View>
                      </View>
                    </Animated.View>
                  </View>
                ))
              }
            </Carousel>
            :
            <View style={styles.itemContainer}>
              { !areaData.products ?
                  null
                  :
                  <View style={styles.loadingBox}>
                    <Spinkit isVisible={true} type={'Circle'} color={'gray'} size={20} />
                  </View>
              }
            </View>
        }
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { areaData: current.allAreas[0], position: current.position };
}

export default connect(mapStateToProps)(ProductsNear);
