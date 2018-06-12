/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from './css/HomeScreenCss';

import Carousel from 'react-native-carousel-view';


import Icon from '../assets/images/Icon';

import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';


      // style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}

// const GradientHeader = props => (
//   <View style={{ backgroundColor: '#eee' }}>
//     <LinearGradient
//       colors={['#222A33', '#43597D']}
//     >
//       <Header {...props} />
//     </LinearGradient>
//   </View>
// );

/*  <View style={{ backgroundColor: '#eee' }}>
    <LinearGradient
      colors={['#222A33', '#43597D']}
    >
      <Header {...props} />
    </LinearGradient>
  </View>
*/
/*<Text>
  Sign in with Facebook
</Text>*/


/*<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}

  {...props}
/>*/
const GradientHeader = props => (
  <LinearGradient colors={['#222A33', '#43597D']}  >
    <Header {...props} />
  </LinearGradient>
);
    // <View style={{ flex: 1}}>
    // </View>


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={ styles.headerBox }>
        <Icon name="ConsumerReports" width="44" height="44" fill="#FFF" viewBox="0 0 50 50" />
        <Text style={ styles.headerTitle }>Retail Companion</Text>
      </View>
    );
  }
}


class HomeScreen extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerStyle: {
  //     // backgroundColor: '#f4511e',
  //     // backgroundColor: '180deg, #222A33 0%, #43597D 100%',
  //     // backgroundColor: [{ linearGradient: '180deg, #222A33 0%, #43597D 100%' }],
  //     // transform: [{ rotate: '45deg' }]
  //     // transform: '45deg'
  //     // linearGradient: '180deg, #222A33 0%, #43597D 100%'
  //   },
  //   // headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   }
  // };


  static navigationOptions = {
    // title: 'Homess',
    // headerTitle: 'Muaja',
    headerTitle: <LogoTitle />,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent',
      backgroundColor: 'red',
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      // <Button title="+1" color="blue" />
      // <Icon name="Processor" fill="#FFF" viewBox="0 0 50 50" />
      <Button title="+1" color="blue"
        onPress={() => Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )}
      />
    ),
    headerLeft: (
      <Button title="+1" color="grey" />
        // onPress={() => alert('This is a button!')}
        // onPress={props => props.navigation.openDrawer()}
    ),
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="Processor" width="20" height="20" fill="#FFF" viewBox="0 0 50 50" />
    ),
  };

      // <Button
      //   title="hey"
      //   color="blue"
      //   onPress={ ({ navigation }) => (
      //     console.log(navigation);
      //   )}
      // />
        // {(props) => Alert.alert(
        //   'Alert Title',
        //   'My Alert Msg',
        //   [
        //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'OK', onPress: () => console.dir(`${this.props}`)},
        //   ],
        //   { cancelable: false }
        // )}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Screen!
        </Text>
        <Button
          title="Go to Info & Specs Details"
          onPress={() => this.props.navigation.navigate('InfoSpecs')}
        />

        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

        <Button
          title="Go to Reviews"
          onPress={() => this.props.navigation.navigate('Reviews')}
        />

        <Button onPress={() => this.props.navigation.openDrawer()} title="Open drawer" />

        <Carousel
          width={375}
          height={300}
          delay={2000}
          indicatorAtBottom={false}
          indicatorSize={20}
          indicatorText="✽"
          indicatorColor="red"
          >
          <View style={styles.sliderBox}>
            <Text style={styles.welcome}>Page 1</Text>
          </View>
          <View style={styles.sliderBox}>
            <Text style={styles.welcome}>Page 2</Text>
          </View>
          <View style={styles.sliderBox}>
            <Text style={styles.welcome}>Page 3</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { testing: 0 };
}

export default connect(mapStateToProps)(HomeScreen);
