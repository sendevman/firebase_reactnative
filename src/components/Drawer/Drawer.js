/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './DrawerCss';
import Icon from '../../assets/images/Icon';

const MyDrawer = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={ styles.header }>
        <Icon name="Globe" width="36" height="36" fill="#1181FF" viewBox="0 0 50 50" />
        <View style={{ marginLeft: 8 }}>
          <Text style={ styles.title }>AT&T</Text>
          <Text style={ styles.subTitle }>Retail Companion</Text>
        </View>
      </View>
      <View style={ styles.itemsBox }>
        <View>
          <DrawerItems itemStyle={ styles.itemStyle } labelStyle={ styles.labelStyle } {...props} />
        </View>
        <View style={ styles.footer }>
          <Text style={ styles.signOut }
            onPress={ () => 
              Alert.alert(
                'Alert Title',
                'You want to sign out?',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }>
            Sign out
          </Text>
        </View>
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default MyDrawer;
