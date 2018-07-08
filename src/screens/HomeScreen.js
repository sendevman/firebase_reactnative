/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

// My Styles
import styles from './css/HomeScreenCss';

// My Customs
import Icon from '../assets/images/Icon';
import ProductsNearSlide from '../components/ProductsNearSlide/ProductsNear'; 

class LogoTitle extends Component {
  render() {
    return (
      <View style={ styles.headerBox }>
        <Icon name="ConsumerReports" width="44" height="44" fill="#FFF" viewBox="0 0 50 50" />
        <Text style={ styles.headerTitle }>Retail Companion</Text>
      </View>
    );
  }
}

const GradientHeader = props => (
  <LinearGradient colors={['#222A33', '#43597D']}  >
    <Header {...props} />
  </LinearGradient>
);

class HomeScreen extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerStyle: {
  //     // backgroundColor: '#f4511e',
  //     // transform: [{ rotate: '45deg' }]
  //     // transform: '45deg'
  //   },
  //   // headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   }
  // };

  static navigationOptions = {
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
      <Button title="+1" color="grey" onPress={() => alert('This is a button!')} />
        // onPress={() => alert('This is a button!')}
        // onPress={props => props.navigation.openDrawer()}
    ),
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="Processor" width="20" height="20" fill="#FFF" viewBox="0 0 50 50" />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 20 }}>
          {/* <ProductsNearSlide /> */}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { testing: 0 };
}

export default connect(mapStateToProps)(HomeScreen);
