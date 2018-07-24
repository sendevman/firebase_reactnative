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
import styles from './css/VodScreenCss';

// My Customs
import Icon from '../assets/images/Icon';


class VodScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#222A33', '#43597D']} >
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text style={styles.textFeatured}>FEATURED</Text>
              <ScrollView horizontal={true}>
                <View style={styles.containerMovie}>
                  <View style={styles.containerTrailer}>
                    <View>
                      <Image style={{height: 187, width: 332, borderRadius: 6, resizeMode: Image.resizeMode.contain, }} source={require('../assets/images/files/peakyBlinders.jpg')} />
                    </View>
                    <Text style={styles.textTitle}>Peaky Blinders Season 5 exclusive trailer</Text>
                    <Text style={styles.textSubtitle}>Premieres on BBC Two, Monday May 30th</Text>
                  </View>
                  <View style={styles.containerTrailer}>
                    <View>
                      <Image style={{height: 187, width: 332, borderRadius: 6, resizeMode: Image.resizeMode.contain, }} source={require('../assets/images/files/peakyBlinders.jpg')} />
                    </View>
                    <Text style={styles.textTitle}>Peaky Blinders Season 5 exclusive trailer</Text>
                    <Text style={styles.textSubtitle}>Premieres on BBC Two, Monday May 30th</Text>
                  </View>
                </View>
              </ScrollView>

            <Text style={styles.textDirectv}>AT&T DIRECTV</Text>
              <ScrollView horizontal={true}>
                <View style={styles.containerAttDirectv}>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/fargo.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Fargo</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/familyGuy.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Family Guy</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/americanGods.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>American Gods</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/gameThrones.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Game</Text>
                  </View>
                </View>
              </ScrollView>

            <Text style={styles.textDirectv}>ORIGINAL CONTENT</Text>
              <ScrollView horizontal={true}>
                <View style={styles.containerAttDirectv}>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/fargo.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Fargo</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/familyGuy.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Family Guy</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/americanGods.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>American Gods</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/gameThrones.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Game</Text>
                  </View>
                </View>
              </ScrollView>

            <Text style={styles.textDirectv}>EXCLUSIVE TRAILERS</Text>
              <ScrollView horizontal={true}>
                <View style={styles.containerAttDirectv}>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/fargo.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Fargo</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/familyGuy.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Family Guy</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/americanGods.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>American Gods</Text>
                  </View>
                  <View style={styles.containerDirectv}>
                    <View style={styles.containerVideo}>
                      <Image style={{height: 132, width: 101, borderRadius: 6, resizeMode: Image.resizeMode.cover, }} source={require('../assets/images/files/gameThrones.jpg')} />
                    </View>
                    <Text style={styles.nameVideo}>Game</Text>
                  </View>
                </View>
              </ScrollView>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
function mapStateToProps(state) {
  return { compare: 0 };
}

export default connect(mapStateToProps)(VodScreen);