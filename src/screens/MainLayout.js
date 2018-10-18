/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
// Action
import { setLocationAllInfo } from '../actions/Locations';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.getCurrentLocationData();
  }

  getCurrentLocationData() {
    const locationtRef = firebase.firestore().collection('locations');
    locationtRef.get()
      .then(snapshot => {
        const ref_path = snapshot.docs.map(doc => doc.ref.path);
        const locationList = snapshot.docs.map(doc => doc.data());
        var locations = [];
        for (i = 0; i < locationList.length; i++) {
          var data = locationList[i];
          data.id = ref_path[i].split("/")[1];
          locations.push(data);
        }
        this.getLocationCollectionData(locations);
      })
  }

  getLocationCollectionData = (locations) => {
    Promise.all(
      locations.map(location => new Promise((resolve, reject) => {
        Promise.all(
          ['zones', 'directv-preview', 'vod'].map(property => new Promise((resolve1, reject1) => {
            const zoneid = 'locations/' + location.id + '/' + property;
            const zonesRef = firebase.firestore().collection(zoneid);
            zonesRef.get()
              .then(snapshot1 => {
                const propertyList = snapshot1.docs.map(doc => doc.data());
                location[property] = propertyList;
                resolve1(propertyList);
              })
              .catch(err => { console.log('Error getting documents', err); });
          }))
        )
          .then(propertis => {
            resolve(location);
          })
          .catch(err => { console.log('Error getting documents', err); });
      })
      )
    ).then(results => {
      this.props.dispatch(setLocationAllInfo(results));
      console.log("****", results);
    })
      .catch(error => { })
  }


  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: '#FFF' }}>
        <View style={{ width: '100%', height: '100%' }}>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { current, common } = state;

  return { compareLayout: 0 };
}

export default connect(mapStateToProps)(MainLayout);
