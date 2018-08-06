/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

// My Screens
import VodScreen from '../screens/VodScreen';

// My Actions
import { setFeaturedInfo, setFullListInfo, setVodInfo } from '../actions/Vod';

const RoutesVod = createStackNavigator(
  {
    Root: { screen: props => <VodScreen {...props} /> }
  },
  {
    headerMode: 'none'
  }
);

class VodLayout extends Component {
  constructor(props) {
    super(props);

    // this.getVodInfo();
  }

  getVodInfo() {
    const vodRef = firebase.firestore().collection('vods');

    /* - - Get simple data - - */
    /*vodRef.doc('featured').get()
    .then(doc => {
      if (!doc.exists) return false;
      const featuredData = doc.data();
      featuredData.id = doc.id;
      this.props.dispatch(setFeaturedInfo(featuredData));
    })
    .catch(err => { console.log('Error getting documents', err); });*/

    /*vodRef.get()
    .then(snapshot => {
      var vodFullList = [];
      snapshot.forEach(doc => {
        if (!doc.exists) return false;
        const vodItemData = doc.data();
        vodItemData.id = doc.id;
        vodFullList.push(vodItemData);
      });
      this.props.dispatch(setFullListInfo(vodFullList));
    })
    .catch(err => { console.log('Error getting documents', err); });*/

    /* - - Get realtime updates - - */
    vodRef.doc('featured').onSnapshot(snapshot => {
      if (!snapshot.exists) return false;
      const featuredData = snapshot.data();
      featuredData.id = snapshot.id;
      this.props.dispatch(setFeaturedInfo(featuredData));
    }, err => { console.log('Error getting documents', err); });

    vodRef.onSnapshot(snapshot => {
      var vodFullList = [];
      snapshot.forEach(doc => {
        if (!doc.exists) return false;
        const vodItemData = doc.data();
        vodItemData.id = doc.id;
        vodFullList.push(vodItemData);
      });
      this.props.dispatch(setFullListInfo(vodFullList));
    }, err => { console.log('Error getting documents', err); });
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <RoutesVod />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { vod } = state;

  return { vod: vod };
}

export default connect(mapStateToProps)(VodLayout);
