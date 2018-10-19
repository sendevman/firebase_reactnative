/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions, Image, ScrollView,
  Text, View, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Rect } from 'react-native-svg';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Styles
import styles from './css/VodScreenCss';

// My Customs
import VodModal from '../components/VodModal/VodModal';
import SkeletonLoading from './components/SkeletonLoading';

var { width } = Dimensions.get('window');

const VodSkeleton = () => (
  <View style={styles.skeletonLoading}>
    <SkeletonLoading height={520}>
      <Rect x="0" y="0" rx="3" ry="3" width="50" height="10"/>
      <Rect x="0" y="20" rx="6" ry="6" width={width - 30} height="170"/>

      <Rect x="0" y="200" rx="3" ry="3" width={width - 80} height="10"/>
      <Rect x="0" y="215" rx="3" ry="3" width={width - 120} height="10"/>

      <Rect x="0" y="250" rx="3" ry="3" width="70" height="10"/>
      <Rect x="0" y="270" rx="6" ry="6" width="85" height="100"/>
      <Rect x="95" y="270" rx="6" ry="6" width="85" height="100"/>
      <Rect x="190" y="270" rx="6" ry="6" width="85" height="100"/>
      <Rect x="285" y="270" rx="6" ry="6" width="85" height="100"/>

      <Rect x="0" y="395" rx="3" ry="3" width="100" height="10"/>
      <Rect x="0" y="415" rx="6" ry="6" width="85" height="100"/>
      <Rect x="95" y="415" rx="6" ry="6" width="85" height="100"/>
      <Rect x="190" y="415" rx="6" ry="6" width="85" height="100"/>
      <Rect x="285" y="415" rx="6" ry="6" width="85" height="100"/>
    </SkeletonLoading>
  </View>
);

class VodScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { vodInfo: {}, showModal: false, superLumensUrl: "" };
  }

  componentDidMount() {
    firebase.database().ref('storeData/superLumensUrl').once('value')
    .then((snapshot) => { this.setState({ superLumensUrl: snapshot.val() }); });
  }

  setSuperLumensUrl(item) {
    return item.mediaURL.replace('https://firebasestorage.googleapis.com', this.state.superLumensUrl);
  }

  getVodInfo(itemId, categoryId) {
    const { featured, fullList } = this.props;

    if (itemId == "featured") {
      featured.superLumensUrl = this.setSuperLumensUrl(featured);
      return featured;
    }

    let selectedCategory = fullList.filter((obj) => { return (obj.type === categoryId); })[0];
    // return selectedCategory.items.filter((obj) => { return (obj.id === itemId); })[0];
    let vodInfoPivot = selectedCategory.items.filter((obj) => { return (obj.id === itemId); })[0];
    vodInfoPivot.superLumensUrl = this.setSuperLumensUrl(vodInfoPivot);
    return vodInfoPivot;
  }

  hideModal = () => { this.setState({ vodInfo: {}, showModal: false }); }
  showModal = (value) => { this.setState({ vodInfo: this.getVodInfo(value.itemId, value.categoryId), showModal: true }); }

  renderFeatured() {
    const { featured } = this.props;

    return (
      <TouchableWithoutFeedback
        style={[styles.sectionContainer, { paddingRight: 15 }]}
        onPress={() => this.showModal({ itemId: featured.id, categoryId: featured.category })}>
        <View>
          <Text style={styles.featuredText}>FEATURED</Text>
          <View style={styles.featuredBox}>
            <Image style={styles.featuredImg} resizeMode={Image.resizeMode.cover} source={{ uri: featured ? featured.imgDetailUrl : "" }} />
            <Text numberOfLines={1} style={styles.featuredTitle}>{featured.detailTitle}</Text>
            <Text numberOfLines={1} style={styles.featuredSubTitle}>{featured.detailSubtitle}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderFullList() {
    const { fullList } = this.props;

    return (
      <View>
        { fullList.map((category, index) => {
            return (
              <View key={index} style={[styles.sectionContainer, { marginTop: 24, marginBottom: 10 }]}>
                <Text style={styles.categoryText}>{category.name.toUpperCase()}</Text>

                <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollBox}>
                  { category.items.map((item, indexItem) => {
                      return (
                        <TouchableOpacity key={indexItem} style={styles.categoryItemBox} onPress={() => this.showModal({ itemId: item.id, categoryId: item.category })} activeOpacity={0.75}>
                          <Image style={styles.categoryImg} resizeMode={Image.resizeMode.cover} source={{ uri: item.imgListUrl }} />
                          <Text numberOfLines={1} style={styles.categoryTitle}>{item.title}</Text>
                        </TouchableOpacity>
                      );
                    })
                  }
                </ScrollView>
              </View>
            );
          })
        }
      </View>
    );
  }

  renderContent() {
    const { featured, fullList } = this.props;

    let featuredValid = (typeof featured != 'undefined');// && Object.keys(featured).length !== 0 && featured.constructor === Object);
    let fullListValid = (typeof fullList != 'undefined' && fullList.length > 0);

    return (
      <ScrollView>
        { (!featuredValid && !fullListValid) && <VodSkeleton /> }
        { featuredValid && this.renderFeatured() }
        { fullListValid && this.renderFullList() }
      </ScrollView>
    );
  }

  render() {
    return (
      <LinearGradient colors={['#000', '#000']} style={styles.linearGradient}>
        { this.renderContent() }

        <VodModal onHideModal={this.hideModal} showModal={this.state.showModal} vodInfo={this.state.vodInfo} />
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const { vod } = state;

  return { featured: vod.featured, fullList: vod.fullList };
}

export default connect(mapStateToProps)(VodScreen);
