/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class PerformanceComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { deviceOptions, expandableStorage, memory, processor, subType } = this.props;
    const viewWidth = width - 34;
    const memoryEmpty = (!memory || !memory.trim() || 0 === memory.length);
    const processorEmpty = (typeof processor == "undefined");// || (Object.keys(processor).length === 0 && processor.constructor === Object));
    const doIsValid = (typeof deviceOptions == "undefined" || deviceOptions.length <= 0) ? false : true;
    const esIsValid = (typeof expandableStorage == "undefined") ? false : true; // || Object.keys(expandableStorage).length === 0) ? false : true;

    var isAvailable = false;
    if (esIsValid) isAvailable = (typeof expandableStorage.available == "undefined") ? false : expandableStorage.available;
    else isAvailable = false;

    const mpChangeStyle = (memoryEmpty && processorEmpty);
    const changeStyle = (!isAvailable && !doIsValid);

    return (
      <View style={{ paddingBottom: 8, marginTop: 10 }}>
        <View style={styles.hrDivider}></View>
        <Image style={[styles.colorBackground, { width: viewWidth, height: viewWidth * 210 / 1080, marginLeft: 6, }]} source={require('../../assets/images/files/performance.png')} />


        {(!memoryEmpty || !processorEmpty) &&
          <View style={[styles.performanceStorageBox, changeStyle ? { marginBottom: 4 } : {}]}>
            {!processorEmpty &&
              <View style={styles.performanceStorageItem}>
                <Icon name="ProcessorBlue" width="138" height="138" fill="#FFFFFF73" viewBox="18 55 138 138" />

                <View style={styles.performanceProcessorContentBox}>
                  <Text style={styles.performanceStorageTitle}>PROCESSOR</Text>
                  <Text style={styles.performanceStorageText} numberOfLines={4}>{processor.short}</Text>
                </View>
              </View>
            }

            {!memoryEmpty &&
              <View style={styles.performanceStorageItem}>
                <Icon name="MemoryBlue" width="120" height="121" fill="#FFFFFF73" viewBox="197 63 120 121" />

                <View style={styles.performanceStorageContentBox}>
                  <Text style={styles.performanceStorageTitle}>MEMORY</Text>
                  <Text style={styles.performanceStorageText}>{memory}GB</Text>
                </View>
              </View>
            }
          </View>
        }

        {(isAvailable || doIsValid) &&
          <View style={[styles.performanceStorageBox, mpChangeStyle ? {} : { marginTop: 20 }, { marginBottom: 20 }]}>
            {isAvailable &&
              <View style={styles.storageBlueBox}>
                <Icon name="StorageBackground" width="135" height="90" fill="#FFFFFFBB" viewBox="0 0 270 180" />
                <Text style={styles.storageBlueTitle}>SD CARD SLOT</Text>
                <Text style={styles.storageBlueText}>Available</Text>
              </View>
            }

            {doIsValid &&
              <View style={styles.storageBlueBox}>
                <Icon name="SDCardBackground" width="135" height="90" fill="#FFFFFFBB" viewBox="0 0 270 180" />
                <Text style={styles.storageBlueTitle}>STORAGE</Text>
                <Text style={[styles.storageBlueText, { fontSize: (deviceOptions.length < 3 ? 14 : 12) }]}>{deviceOptions.map((obj) => { return `${obj.storage}Gb` }).join(' | ')}</Text>
              </View>
            }
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

  hrDivider: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 0,
    marginBottom: 10
  },
  storageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // - - Performance Box - -
  performanceStorageBox: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  performanceStorageItem: {
    height: 140,
    width: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  performanceProcessorContentBox: {
    backgroundColor: '#FFFFFFBF',
    width:118,
    height:120,
    borderRadius:6,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  performanceStorageContentBox: {
    backgroundColor: '#FFFFFFBF',
    width:118,
    height:77,
    borderRadius:6,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  performanceStorageTitle: {
    color: '#000000',
    // fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  performanceStorageText: {
    marginTop: 4,
    maxWidth: 110,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  },
  storageBlueBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storageBlueTitle: {
    color: '#000000',
    // fontFamily: 'Roboto',
    marginTop: -70,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  storageBlueText: {
    marginTop: 4,
    color: '#000000',
    // fontFamily: 'Roboto'
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  },
})
export default PerformanceComponent;
