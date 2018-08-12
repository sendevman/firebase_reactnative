/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView, Modal, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

// My Styles
import styles from './css/VodModalCss';

// My Customs
import Icon from '../assets/images/Icon';

class VodModal extends Component {
  render() {
    return (
      <ScrollView>
        <LinearGradient colors={['#222A33', '#43597D']} style={styles.container} >
          <View>
            <View style={styles.closeVod}>
              <Icon name="CloseVodX" width="14" height="14" fill="#FFF" viewBox="0 0 14 14" />
            </View>
            <View style={styles.containerImage}>
              <Image style={{ height: 194, borderRadius: 6, backgroundColor: 'rgba(0,0,0,0.16)', resizeMode: Image.resizeMode.contain, }} source={require('../assets/images/files/peakyBlinders.jpg')}/>
            </View>
            <View>
              <View style={styles.containerTrailer}>
                <Text style={styles.textTitle}>Peaky Blinders Season 5 exclusive trailer</Text>
                <Text style={styles.textSubtitle}>Premieres on BBC Two, Monday May 30th</Text>
              </View>
              <View>
                <Text style={styles.textTrailer}>Britain is a mixture of despair and hedonism in 1919 in the aftermath of the Great War. Returning soldiers, newly minted revolutions and criminal gangs are fighting for survival in a nation rocked by economic upheaval.</Text>
              </View>
            </View>
            <View>
              <TouchableHighlight  style={styles.playButton} onPress={() =>{}}>
                <View>
                 <View style={styles.containerWatch}>
                  <Image style={styles.imagePlay} source={require('../assets/images/files/playButton.png')} />
                  <Text style={styles.textWatch}>Watch trailer</Text>
                 </View>
                </View>
              </TouchableHighlight>
            </View>
            <View>
              <View style={styles.containerBigScreen}>
                <Icon name="Panorama" width="24" height="24" fill="#FFF" viewBox="0 0 24 24" />
                <Text style={styles.textBigScreen}>Watch on the big screen</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(VodModal);