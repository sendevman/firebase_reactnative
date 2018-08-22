/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { 
    // backgroundColor: '#009FDB',
    backgroundColor: 'transparent',
  },
  infoSpecBox: { paddingHorizontal: 10 },
  // - - Skeleton Loading Box - -
  skeletonLoading: {
    height: '100%',
    backgroundColor: 'transparent',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  // - - Description Box - -
  descriptionItemBox: {
    backgroundColor: '#FFFFFFBF',
    marginTop:20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  description: {
    backgroundColor: 'transparent',
    marginLeft:15,
    marginTop: 16,
    marginBottom: 20,
    textAlign: 'left',
    // fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22
  },
  hrDivider: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 0,
    marginBottom: 10
  },
  titleDivider: {
    position: 'absolute',
    top: 1,
    paddingRight: 10,
    backgroundColor: '#FFF',
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  // - - Color Box - -
  colorItemBox: {
    backgroundColor: '#FFFFFFBF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorItem: {
    alignItems: 'center',
    width: 70,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colorImage: {
    height: 85,
    width: 40
  },
  colorTitle: {
    height: 28,
    width: 50,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 14,
    textAlign: 'center',
    marginVertical: 15
  },
  // - - Storage Box - -
  storageBox: {
    backgroundColor: '#FFFFFFBF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    minWidth: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    backgroundColor: '#FFFFFF'
  },
  storageGB: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  storagePrice: {
    color: '#AEBECD',
    // fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 21
  },
  // - - Display Box - -
  displayBox: {
    backgroundColor: '#FFFFFFBF',
    marginTop: 0,
    justifyContent: 'space-evenly'
  },
  displaySizeItem: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displaySizeHr: {
    position: 'absolute',
    height: '110%',
    width: 2,
    backgroundColor: '#E3E9EF',
    transform: [{ rotate: '45deg' }]
  },
  displaySize: {
    // backgroundColor: 'white',
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 20,
    letterSpacing: 0.17,
    lineHeight: 22
  },
  displayTextItem: {
    height: 70,
    maxWidth: '76%',
    justifyContent: 'center'
  },
  displayText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  },
  // - - Camera Box - -
  cameraBox: {
    marginTop:80,
    width:'100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraItem: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  cameraTitle: {
    color: '#CC7800',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  cameraTextBold: {
    color: '#000',
    // fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 16
  },
  cameraText: {
    color: '#000',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.10,
    lineHeight: 16
  },
  cameraDetails: {
    marginTop:120,
    width:'100%',
    paddingHorizontal:30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'

  },
  cameraDetailsDivide: {
    height:2,
    width:'100%',
    backgroundColor:'red'
  },
  // - - Camera Box - List - -
  cameraList: {
    width: width - 15,
    marginHorizontal: -2.5,
    marginTop: 11,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  cameraListItem: {
    height: 85,
    width: 110,
    borderRadius: 6,
    marginBottom: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraListDot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#1181FF'
  },
  cameraListText: { marginLeft: 5 },
  // - - Performance Box - -
  performanceBox: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  performanceItem: {
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  performanceViewImage: {
    height: 30,
    width: 30,
    transform: [{ rotate: '90deg' }]
  },
  performanceViewText: { width: width - 30 },
  performanceText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
  },
  performanceTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  // - - Expandable Storage Box - -
  expandableBox: {
    backgroundColor: '#FFFFFFBF',
    marginTop: 0
  },
  expandableViewText: { marginBottom: 8 },
  // Feature Box
  featuresBox: {
    marginBottom: 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  featureBox: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  // Feature Item Box
  featureItemBattery: {
    backgroundColor:'#4CA90C',
    width: 40,
    height: 8,
    marginLeft:13,
  },
  featureItemBox: {
    borderColor:'#4CA90C',
    borderWidth:2,
    margin: 3,
    marginTop: 0,
    flexGrow: 1,
    height: 85,
    minWidth: 60,
    maxWidth: 60,
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureItemTitle: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 14
  },
  featureItemMount: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 24,
    letterSpacing: 0.24,
    lineHeight: 28,
    marginTop: 4
  },
  featureItemHour: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 14
  },
  // Charging Type Box
  chagingTypeBox: {
    marginTop: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  chagingItemBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chagingItemText: {
    marginLeft: 5,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 11,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
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
  }
});
