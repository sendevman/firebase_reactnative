/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-carousel-view';
import OpenSettings from 'react-native-open-settings';

// My Styles
import styles from './css/OnBoardingScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

// Slides
const OnBoardingOne = () => (
  <View>
    <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
      <View style={styles.containerPhone}>
        <Image style={styles.imagePhoneSmall} source={require('../assets/images/files/shadowLeft.png')} />
        <Image style={styles.imagePhoneMiddle} source={require('../assets/images/files/shadowMedium.png')} />

        <Icon name="PhoneOrig" width={78} height={150} viewBox="0 0 86 164" />

        <Image style={styles.imagePhoneMiddle} source={require('../assets/images/files/shadowMedium.png')} />
        <Image style={styles.imagePhoneSmall} source={require('../assets/images/files/shadowRight.png')} />
      </View>
    </View>

    <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Relevant information at a glance</Text>

        <View style={{}}>
          <Text style={styles.subTitle}>AT&T Retail Companion allows you to make informed decisions when shopping for a new device.</Text>
          <Text style={styles.subTitle}>Simply walk around the store and we'll show you relevant information about nearby products.</Text>
        </View>
      </View>
    </View>
  </View>
);

const OnBoardingTwo = () => (
  <View>
    <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
      <View style={[styles.containerPhone, { justifyContent: 'center' } ]}>
        <View>
          <Image style={styles.imageOnBList} source={require('../assets/images/files/onBList.png')} />
        </View>
      </View>
    </View>

    <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Don't take our word for it</Text>

        <View style={{ maxWidth: 314 }}>
          <Text style={styles.subTitle}>Every device comes with curated reviews from reputable reviewer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sodales ligula.</Text>
        </View>
      </View>
    </View>
  </View>
);

const OnBoardingThree = () => (
  <View>
    <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
      <View style={[styles.containerPhone, { justifyContent: 'center' } ]}>
        <View>
          <Icon name="PhoneOrig" width={86} height={164} viewBox="0 0 86 164" />
        </View>
        <View style={{ marginHorizontal: 16 }}>
          <Icon name="Vs" width={27} height={43} viewBox="0 0 27 43" />
        </View>
        <View>
          <Icon name="PhoneCompare" width={93} height={171} viewBox="0 0 93 171" />
        </View>
      </View>
    </View>

    <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Compare products</Text>

        <View style={{ maxWidth: 314 }}>
          <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sodales ligula. Nunc sit amet massa sem. Sed venenatis velit commodo, mattis nulla ut, sodales eros.</Text>
        </View>
      </View>
    </View>
  </View>
);

class OnBoardingFour  extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalVisible: false
    }
  }

  render () {
    return (
    <View>
    <View style={[styles.fiftyBox, { alignItems: 'flex-end' }]}>
      <View style={styles.containerPhone}>
        <View>
          <Image style={styles.imageFourLeft} source={require('../assets/images/files/imageLeft.png')} />
        </View>
        <View>
          <Image style={styles.imageFourCenter} source={require('../assets/images/files/imageCenter.png')} />
        </View>
        <View>
          <Image style={styles.imageFourRight} source={require('../assets/images/files/imageRight.png')} />
        </View>
      </View>
    </View>

    <View style={[styles.fiftyBox, { alignItems: 'flex-start' }]}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Exclusive video-on-demand</Text>

        <View style={{ maxWidth: 314 }}>
          <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sodales ligula. Nunc sit amet massa sem. Sed venenatis velit commodo, mattis nulla ut, sodales eros.</Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modalView}>
            <View style={{alignItems: 'center'}}>
              <Image style={{marginTop: 56}} source={require('../assets/images/files/allowBle.png')} />
              <View style={{width: 315, marginTop: 25}}>
                <Text style={styles.modalInnerText}>In order for AT&T Retail Companion™
                  to work, you need to grant it permission
                  to use your device’s Bluetooth.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Turn On Bluetooth To Allow "AT&T Retail Companion" to Connect to Accesorries',
                    '',
                    [
                      {text: 'Settings', onPress: () => OpenSettings.openSettings()
},
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                    ],
                    { cancelable: false }
                  )
                }}>
                <View style={[styles.modalInnerTextView, {backgroundColor: '#0087ff', borderRadius: 28, marginTop: 24}]}>
                  <Text style={[styles.modalInnerText, {color: 'white'}]}>Allow</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                <View style={styles.modalInnerTextView}>
                  <Text style={[styles.modalInnerText, {textDecorationLine: 'underline'}]}>Decline</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.getStartedBtn}
         
          onPress={() => {
            this.setState({modalVisible: true})
          }}>
          <Text style={styles.getStartedBtnText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
  }
} 

class OnBoardingScreen extends Component {
  
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} style={styles.container}>
        <Carousel
          animate={false}
          height={'100%'}
          indicatorOffset={32}
          indicatorColor={'#FFF'}
          indicatorSize={8}
          inactiveIndicatorColor={'rgba(255, 255, 255, 0.3)'}
          indicatorSpace={28}
          >
          <View style={styles.container}>
            <OnBoardingOne />
          </View>

          <View style={styles.container}>
            <OnBoardingTwo />
          </View>

          <View style={styles.container}>
            <OnBoardingThree />
          </View>

          <View style={styles.container}>
            <OnBoardingFour/>
          </View>
        </Carousel>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return { OnBoardingOne: 0 };
}

export default connect(mapStateToProps)(OnBoardingScreen);
