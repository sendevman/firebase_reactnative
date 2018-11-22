/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Dimensions, Image, Platform, Text, View, TouchableOpacity, YellowBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spinkit from 'react-native-spinkit';
import { connect } from 'react-redux';

// My Styles
import styles, { itemWidth, sliderWidth } from './ProductsNearCss';

// My Customs
import Icon from '../../assets/images/Icon';
import ButtonCompare from './ButtonCompare';

const { width: viewportWidth } = Dimensions.get('window');

YellowBox.ignoreWarnings([ 'Warning: isMounted(...) is deprecated', 'Class RCTCxxModule' ]);

class ProductsNear extends Component {
  constructor(props) {
    super(props);

    this.state = { sliderActiveSlide: 0 };
  }

  _renderItem({ item, index }) {
    const { areaData, currentProducts } = this.props;

    let titleItem = {
      transform: [
        {
          translateX: this.props.animatedValue.interpolate({
            inputRange: [ 0, 120 ],
            outputRange: [ 0, 0 ],
            extrapolate: 'clamp',
          }),
        },
        {
          translateY: this.props.animatedValue.interpolate({
            inputRange: [ 0, 120 ],
            outputRange: [ 0, 40 ],
            extrapolate: 'clamp',
          }),
        },
      ],
      // width: this.props.animatedValue.interpolate({
      //   inputRange: [0, 120],
      //   outputRange: [itemWidth - 188, 160],
      //   extrapolate: 'clamp'
      // })
    };

    let btnBox = {
      transform: [
        {
          translateX: this.props.animatedValue.interpolate({
            inputRange: [ 0, 120 ],
            outputRange: [ -13, 0 ],
            extrapolate: 'clamp',
          }),
        },
        {
          translateY: this.props.animatedValue.interpolate({
            inputRange: [ 0, 120 ],
            outputRange: [ 0, -40 ],
            extrapolate: 'clamp',
          }),
        },
      ],
      width: this.props.animatedValue.interpolate({
        inputRange: [ 0, 120 ],
        outputRange: [ itemWidth - 162, itemWidth - 122 ],
        extrapolate: 'clamp',
      }),
      height: this.props.animatedValue.interpolate({
        inputRange: [ 0, 120 ],
        outputRange: [ 40, 30 ],
        extrapolate: 'clamp',
      }),
      padding: this.props.animatedValue.interpolate({
        inputRange: [ 0, 120 ],
        outputRange: [ 3, 1 ],
        extrapolate: 'clamp',
      }),
    };

    let fastOpacity = {
      opacity: this.props.animatedValue.interpolate({
        inputRange: [ 0, 35 ],
        outputRange: [ 1, 0 ],
        extrapolate: 'clamp',
      }),
    };

    const itemBoxHeight = this.props.animatedValue.interpolate({
      inputRange: [ -40, 0, 120 ],
      outputRange: [ 200, 180, 100 ],
      extrapolate: 'clamp',
    });

    const imageBox1 = {
      width: this.props.animatedValue.interpolate({
        inputRange: [ 0, 120 ],
        outputRange: [ 164, 80 ],
        extrapolate: 'clamp',
      }),
      height: this.props.animatedValue.interpolate({
        inputRange: [ 0, 120 ],
        outputRange: [ 164, 80 ],
        extrapolate: 'clamp',
      }),
    };

    if (item === 'titleCard') {
      return (
        <View style={styles.itemContainer} key={index}>
          <Animated.View style={[ styles.itemBox, { height: itemBoxHeight } ]}>
            <Image style={styles.bgImage} source={{ uri: areaData.titleCard.img }} />

            <Animated.Image
              style={styles.titleCardArrow}
              resizeMode={Image.resizeMode.cover}
              source={require('../../assets/images/files/titleCardArrow.png')}
            />

            <TouchableOpacity>
              <View style={styles.titleCardBox}>
                <Icon height="30" width="30" name="ManIcon" viewBox="0 0 127 125" fill="#000" />
                <Text numberOfLines={1} style={styles.titleCard}>
                  {areaData.titleCard.title}
                </Text>
              </View>

              <Text numberOfLines={1} style={styles.subTitleCard}>
                Swipe to see what's around you
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    } else {
      const arrPivot = currentProducts.filter(product => product.id === item);
      const product = (arrPivot.length > 0) ? arrPivot[0] : null;

      return (
        <View style={styles.itemContainer} key={index}>
          <Animated.View style={[ styles.itemBox, { height: itemBoxHeight } ]}>
            <Animated.View style={[ styles.imageBox, imageBox1 ]}>
              <Image
                style={styles.itemImage}
                resizeMode={Image.resizeMode.contain}
                source={{ uri: product ? product.img : '' }}
              />
            </Animated.View>

            <View style={styles.detailsBox}>
              <Animated.Text numberOfLines={1} style={[ styles.titleItem, titleItem ]}>
                {product ? product.manufacture : ''}
              </Animated.Text>

              <Animated.Text numberOfLines={1} style={[ styles.titleItem, { paddingBottom: 6 }, titleItem ]}>
                {product ? product.model : ''}
              </Animated.Text>

              <Animated.View style={[ styles.hrDivider, fastOpacity ]} />

              <Animated.View style={[ styles.deviceOptionsBox, fastOpacity ]}>
                <View style={styles.deviceOptionItem}>
                  <Icon height="14" width="14" name="Storage" viewBox="0 0 24 24" />
                  <Text style={styles.deviceOptionText}>
                    {product ? product.deviceOptions[0].storage : 0}GB
                  </Text>
                </View>
              </Animated.View>

              <Animated.View style={[ styles.deviceOptionsBox, fastOpacity ]}>
                <View style={styles.deviceOptionItem}>
                  <Icon height="14" width="14" name="BatteryInclined" viewBox="0 0 20 20" />
                  {product.battery.life.video && (
                    <Text style={styles.deviceOptionText}>
                      {product ? product.battery.life.video.replace(' ', '') : 0}
                    </Text>
                  )}
                </View>
              </Animated.View>

              <Animated.View style={[ styles.deviceOptionsBox, fastOpacity ]}>
                <View style={styles.deviceOptionItem}>
                  <Icon height="14" width="14" name="Camera" viewBox="0 0 24 24" />
                  <Text style={styles.deviceOptionText}>
                    {product && product.camera ? (
                      product.camera.front.sensor + ' ' + product.camera.rear.sensor
                    ) : (
                      ''
                    )}
                  </Text>
                </View>
              </Animated.View>

              <Animated.View style={[ btnBox ]}>
                <ButtonCompare product={product} onGoToCompareBtn={() => this.props.onGoToCompare()} />
              </Animated.View>
            </View>
          </Animated.View>
        </View>
      );
    }
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[ '#000000', '#000000' ]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const { areaData, currentProducts } = this.props;
    const { sliderActiveSlide } = this.state;

    let areaDataEmpty = typeof areaData == 'undefined'; /// || (Object.keys(areaData).length === 0 && areaData.constructor === Object));

    let firstItem = (Platform.OS === 'android') ? (currentProducts.length - 1) : 0;
    let data = currentProducts.map(item => {
      return (Object.keys(item).length > 0 && item.id) ? item.id : 'titleCard';
    });

    return (
      <View style={{ width: viewportWidth, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center' }}>
        {this.gradient}
        {(currentProducts || []).length > 0 ? (
          <View>
            <Carousel
              ref={c => (this._carouselRef = c)}
              data={data}
              renderItem={this._renderItem.bind(this)}
              firstItem={firstItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout={'stack'}
              removeClippedSubviews={false}
              onSnapToItem={index => {
                this.setState({ sliderActiveSlide: index });
                index === firstItem ? this.props.onFirstSelect(firstItem) : this.props.onProductIdChange(currentProducts[index].id);
              }}
            />
          </View>
        ) : (
          <View
            style={[
              styles.itemContainer,
              { maxHeight: 202, width: itemWidth, marginHorizontal: (viewportWidth - itemWidth) / 2 },
            ]}
          >
            {areaDataEmpty && (
              <TouchableOpacity style={styles.loadingBox} onPress={this.props.zone}>
                <Text style={styles.title}>Explore the store and we will show you what’s near</Text>
              </TouchableOpacity>
            )}
            {!areaDataEmpty && (
              <View style={styles.loadingBox}>
                <Spinkit isVisible={true} type={'Circle'} color={'#FFF'} size={20} />
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { areaData: current.allAreas[0], position: current.position };
};

export default connect(mapStateToProps)(ProductsNear);
