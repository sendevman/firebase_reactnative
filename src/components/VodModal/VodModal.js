import React, { Component } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Spinkit from 'react-native-spinkit';
import Video from 'react-native-video';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

import { setReplaceURL } from '../../actions/Common';
// My Styles
import styles from './VodModalCss';

// My Customs
import Icon from '../../assets/images/Icon';

// My Actions
import { setCompareInfo } from '../../actions/Current';

class VodModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreen: false,
      showFullScreenBtn: false,
      canStop: false,
      notPlaying: true,
      pauseVideo: true,
      playerInfo: {},
      showSpinkit: false,
      showVideo: false,
      storeData: {},
      vodPlayerIdRef: firebase.database().ref('vod/player_id')
    };
  };

  componentDidMount() {
    console.log("-- -- component did mount -- -- ");
    firebase.database().ref('storeData/').once('value')
      .then((snapshot) => { this.setState({ storeData: snapshot.val() }); });

    this.state.vodPlayerIdRef.on('value', (snapshot) => { this.setVodPlayerInfo(snapshot); });
  }

  componentWillUnmount() {
    console.log("-- -- component will unmount -- -- ");
    this.state.vodPlayerIdRef.off();
  }

  setVodPlayerInfo(snapshot) {
    let playerData = snapshot.val();
    console.log("-- -- palyer info -- -- ", playerData);

    // if (playerData.floor_id !== this.props.location.floor_id) this.setState({ playerInfo: {} });
    // else this.setState({ playerInfo: playerData });
    this.setState({ playerInfo: playerData });
    if (playerData.status === "available") this.setState({ canStop: false, notPlaying: true });
  }

  getNewMediaUrl(mediaURL) {
    // if (this.props.network.connectionType == "wifi" && this.props.network.ssid == this.state.storeData.ssid) {
    //   return mediaURL.replace('https://firebasestorage.googleapis.com', this.state.storeData.superLumensUrl);
    // }
    return mediaURL;
  }

  inStore() {
    return (this.props.network.connectionType == "wifi" && this.props.network.ssid == this.state.storeData.ssid);
  }

  eventlog(method) {
    console.log("log event ======= : ", { "pFirebaseId": this.props.firebaseid, "pVodContentTitle": this.props.vodInfo.title, "pVodContentUrl": this.props.vodInfo.mediaURL, "pVodContentType": this.props.vodInfo.categoryName, "pVodViewedOn": method });
    firebase.analytics().logEvent("vodPlayed", { "pFirebaseId": this.props.firebaseid, "pVodContentTitle": this.props.vodInfo.title, "pVodContentUrl": this.props.vodInfo.mediaURL, "pVodContentType": this.props.vodInfo.categoryName, "pVodViewedOn": method });
  }

  _onWatchTrailer() {
    this.setState({ pauseVideo: false, showFullScreenBtn: true, showVideo: true });
    // this.eventlog('device');
  }

  _onWatchBigScreen(mediaURL) {
    firebase.database().ref('vod/player_id').update({
      firebase_id: "JxdUhtSKlGZzcwr9E2myvZ8CNKo2", // Place Auth User ID.
      floor_id_app: this.props.location.floor_id,
      status: "play",
      url: mediaURL
    });

    this.setState({ canStop: true, notPlaying: false });
    this.eventlog('cast');
  }

  _onStopVideo() {
    firebase.database().ref('vod/player_id').update({
      firebase_id: "",
      floor_id_app: "",
      status: "available",
      url: ""
    });

    this.setState({ canStop: false, notPlaying: true });
    this.player.seek(0);
  }

  _onFullScreen(prevState) {
    this.setState({ fullScreen: !prevState });
  }

  isEmpty(str) { return (!str || !str.trim() || 0 === str.length); }

  renderContent() {
    const { location, vodInfo } = this.props;
    const { canStop, fullScreen, notPlaying, playerInfo, showFullScreenBtn } = this.state;

    let locationValid = (typeof location != 'undefined');// && Object.keys(location).length !== 0 && location.constructor === Object);
    let inAttStore = true; // (locationValid && typeof location.floor_id != 'undefined' && location.floor_id === playerInfo.floor_id);
    let playerAvailable = (playerInfo.status === "available") ? true : false;
    let fullScreenStyle = fullScreen ? styles.fullScreenStyle : styles.normalScreenStyle;
    let videoSource = this.inStore() ? (this.isEmpty(vodInfo.superLumensUrl) ? vodInfo.mediaURL : vodInfo.superLumensUrl) : vodInfo.mediaURL;
    if(showFullScreenBtn) {
      videoSource = this.getNewMediaUrl(videoSource);
    }

    return (
      <View style={styles.containerDetail}>
        <View style={styles.detailBox}>
          <View style={styles.imgAndVideoBox}>
            <Video
              source={{ uri: videoSource, cache: false}}
              ref={(ref) => { this.player = ref }} // Store reference
              paused={this.state.pauseVideo}
              repeat={false}
              onLoadStart={() => {
                // Callback function that is called when the media starts loading.
                this.setState({ showSpinkit: true });
                console.log("-- -- video load start -- --", videoSource);
              }}
              onLoad={() => {
                // Callback when the media is loaded and ready to play.
                this.setState({ showSpinkit: false });
                console.log("-- -- video load done -- --");
              }}
              onEnd={() => {
                // Callback when playback finishes
                this.setState({ fullScreen: false, showFullScreenBtn: false, pauseVideo: true, showSpinkit: false, showVideo: false });
                console.log("-- -- video end -- --");
              }}
              onError={() => {
                // Callback when video cannot be loaded
                this.setState({ fullScreen: false, showFullScreenBtn: false, pauseVideo: true, showSpinkit: false, showVideo: false });
                console.log("-- -- video error -- --");
              }}
              resizeMode="cover"
              style={[styles.backgroundVideo, { opacity: this.state.showVideo ? 1 : 0 }, fullScreenStyle]}
            />
            <Spinkit style={styles.spinner} isVisible={this.state.showSpinkit} type={'Circle'} color={'#1181FF'} size={30} />

            <Image style={[styles.detailImg, { opacity: !this.state.showVideo ? 1 : 0 }]} resizeMode={Image.resizeMode.cover} source={{ uri: vodInfo.imgDetailUrl }} />

            {showFullScreenBtn &&
              <TouchableOpacity style={[styles.fullScreenBtn, { right: fullScreen ? -13 : 2 }]} onPress={() => this._onFullScreen(fullScreen)} activeOpacity={0.4}>
                {!fullScreen && <Icon name="ToFullScreen" width="18" height="18" viewBox="0 0 357 357" />}
                {fullScreen && <Icon name="ToFullScreenExit" width="18" height="18" viewBox="0 0 357 357" />}
              </TouchableOpacity>
            }
          </View>
          {!fullScreen && <Text numberOfLines={1} style={styles.detailTitle}>{vodInfo.detailTitle}</Text>}
          {!fullScreen && <Text numberOfLines={1} style={styles.detailSubTitle}>{vodInfo.detailSubtitle}</Text>}
          {!fullScreen && <Text numberOfLines={6} style={styles.detailDescription}>{vodInfo.detailDescription}</Text>}
        </View>

        {(!fullScreen && inAttStore) &&
          <TouchableOpacity style={styles.watchBtn} onPress={() => this._onWatchTrailer()} activeOpacity={0.4}>
            <Image style={styles.watchBtnIcon} source={require('../../assets/images/files/playButton.png')} />
            <Text style={styles.watchBtnText}>Watch trailer</Text>
          </TouchableOpacity>
        }

        {(!fullScreen && inAttStore && notPlaying) &&
          <TouchableOpacity disabled={!playerAvailable} style={styles.watchBigScreenBtn} onPress={() => this._onWatchBigScreen(vodInfo.mediaURL)} activeOpacity={0.4}>
            <Icon name="Panorama" width="26" height="26" viewBox="0 0 24 24" fill={playerAvailable ? "#FFF" : "#CF2A2A"} />
            <Text style={[styles.watchBtnText, { textDecorationLine: 'underline', color: playerAvailable ? "#FFF" : "#CF2A2A" }]}>Watch on the big screen</Text>
          </TouchableOpacity>
        }

        {/* <Text style={[styles.watchBtnText, { textDecorationLine: 'underline', color: playerAvailable ? "#FFF" : "#CF2A2A" }]}>{videoSource}</Text> */}

        {(inAttStore && !notPlaying && canStop) &&
          <TouchableOpacity style={styles.watchBigScreenBtn} onPress={() => this._onStopVideo()} activeOpacity={0.4}>
            <Image style={styles.watchBtnIcon} source={require('../../assets/images/files/stopButton.png')} />
            <Text style={[styles.watchBtnText, { textDecorationLine: 'underline' }]}>Stop</Text>
          </TouchableOpacity>
        }

        {!inAttStore &&
          <View style={styles.noInAttStoreBox}>
            <Text style={styles.noInAttStoreText}>Sorry, you have to be at AT&T to see this exclusive content</Text>
          </View>
        }
      </View>
    );
  }

  render() {
    const { onHideModal, showModal, vodInfo } = this.props;

    let vodInfoValid = (typeof vodInfo != 'undefined');// && Object.keys(vodInfo).length !== 0 && vodInfo.constructor === Object);

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
              this._onStopVideo();
              this.setState({ fullScreen: false, showFullScreenBtn: false, pauseVideo: true, showSpinkit: false, showVideo: false });
              this.props.onHideModal();
            }} style={styles.headerBtn}>
              <Icon name="CloseXWhite" width="14" height="14" viewBox="0 0 14 14" />
            </TouchableOpacity>
          </View>

          {vodInfoValid && this.renderContent()}
        </View>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setReplaceURL: (data) => {
      return dispatch(setReplaceURL(data))
    }
  };
}
const mapStateToProps = state => {
  const { common, current, vod } = state;

  return { featured: vod.featured, firebaseid: common.firebaseid, fullList: vod.fullList, location: current.position, network: common.network };
}

export default connect(mapStateToProps)(VodModal);
