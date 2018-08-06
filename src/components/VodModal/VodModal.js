/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Spinkit from 'react-native-spinkit';
import Video from 'react-native-video';
import { connect } from 'react-redux';

// My Styles
import styles from './VodModalCss';

// My Customs
import Icon from '../../assets/images/Icon';

// My Actions
import { setCompareInfo } from '../../actions/Current';

class VodModal extends Component {
  constructor(props) {
    super(props);

    this.state = { pauseVideo: true, showSpinkit: false, showVideo: false };
  };

  _onWatchTrailer() { this.setState({ pauseVideo: false, showVideo: true }); }
  _onWatchBigScreen() { console.log('Watch On The Big Screen'); }

  renderContent() {
    const { location, vodInfo } = this.props;

    let locationValid = (typeof location != 'undefined' && Object.keys(location).length !== 0 && location.constructor === Object);
    let inAttStore = (locationValid && typeof location.floor_id != 'undefined')

    return (
      <View style={styles.containerDetail}>
        <View style={styles.detailBox}>
          <View style={styles.imgAndVideoBox}>
            <Video
              source={{ uri: vodInfo.mediaURL }}
              ref={(ref) => { this.player = ref }} // Store reference
              paused={this.state.pauseVideo}
              repeat={true}
              onLoadStart={() => {
                // Callback function that is called when the media starts loading.
                this.setState({ showSpinkit: true });
              }}
              onLoad={() => {
                // Callback when the media is loaded and ready to play.
                this.setState({ showSpinkit: false });
              }}
              onEnd={() => {
                // Callback when playback finishes
                this.setState({ pauseVideo: true, showSpinkit: false, showVideo: false });
              }}
              onError={() => {
                // Callback when video cannot be loaded
                this.setState({ pauseVideo: true, showSpinkit: false, showVideo: false });
              }}
              resizeMode="cover"
              style={[styles.backgroundVideo, { opacity: this.state.showVideo ? 1 : 0 }]} />
            <Spinkit style={styles.spinner} isVisible={this.state.showSpinkit} type={'Circle'} color={'#1181FF'} size={30} />

            <Image style={[styles.detailImg, { opacity: !this.state.showVideo ? 1 : 0 }]} resizeMode={Image.resizeMode.cover} source={{ uri: vodInfo.imgDetailUrl }} />
          </View>
          <Text numberOfLines={1} style={styles.detailTitle}>{vodInfo.detailTitle}</Text>
          <Text numberOfLines={1} style={styles.detailSubTitle}>{vodInfo.detailSubtitle}</Text>
          <Text numberOfLines={6} style={styles.detailDescription}>{vodInfo.detailDescription}</Text>
        </View>

        { inAttStore &&
          <TouchableOpacity style={styles.watchBtn} onPress={() => this._onWatchTrailer()} activeOpacity={0.4}>
            <Image style={styles.watchBtnIcon} source={require('../../assets/images/files/playButton.png')} />
            <Text style={styles.watchBtnText}>Watch trailer</Text>
          </TouchableOpacity>
        }

        { inAttStore &&
          <TouchableOpacity style={styles.watchBigScreenBtn} onPress={() => this._onWatchBigScreen()} activeOpacity={0.4}>
            <Icon name="Panorama" width="26" height="26" viewBox="0 0 24 24" fill="#FFF" />
            <Text style={[styles.watchBtnText, { textDecorationLine: 'underline' }]}>Watch on the big screen</Text>
          </TouchableOpacity>
        }

        { !inAttStore &&
          <View style={styles.noInAttStoreBox}>
            <Text style={styles.noInAttStoreText}>Sorry, you have to be at AT&T to see this exclusive content</Text>
          </View>
        }
      </View>
    );
  }

  render() {
    const { onHideModal, showModal, vodInfo } = this.props;

    let vodInfoValid = (typeof vodInfo != 'undefined' && Object.keys(vodInfo).length !== 0 && vodInfo.constructor === Object);

    return (
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        visible={showModal}
        onRequestClose={() => { onHideModal() }}>
        <View style={styles.containerModal}>
          <View style={styles.headerBox}>
            <TouchableOpacity onPress={() => {
              this.setState({ pauseVideo: true, showSpinkit: false, showVideo: false });
              this.props.onHideModal() }} style={styles.headerBtn}>
              <Icon name="CloseXWhite" width="14" height="14" viewBox="0 0 14 14" />
            </TouchableOpacity>
          </View>

          { vodInfoValid && this.renderContent() }
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { current, vod } = state;

  return { featured: vod.featured, fullList: vod.fullList, location: current.position };
}

export default connect(mapStateToProps)(VodModal);
