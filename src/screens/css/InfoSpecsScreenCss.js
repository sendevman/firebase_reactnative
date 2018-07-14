/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { backgroundColor: '#FFF' },
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
  description: {
    marginTop: 16,
    marginBottom: 14,
    textAlign: 'left',
    // fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22
  },
  hrDivider: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#1181FF',
    marginTop: 10,
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
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
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
    marginVertical: 5
  },
  // - - Storage Box - -
  storageBox: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginTop: 8,
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
    backgroundColor: 'white',
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 20,
    letterSpacing: 0.17,
    lineHeight: 22
  },
  displayTextItem: {
    height: 50,
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
  cameraItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    minWidth: '48%',
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
  cameraText: {
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20
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
  expandableBox: { marginTop: 10 },
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  // Feature Item Box
  featureItemBox: {
    margin: 2,
    flexGrow: 1,
    height: 85,
    minWidth: 56,
    maxWidth: 66,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureItemTitle: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
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
    marginLeft: 8,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
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
  performanceStorageContentBox: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  performanceStorageTitle: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
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
    height: 70,
    width: 120,
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storageBlueTitle: {
    color: '#FFFFFF',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 20
  },
  storageBlueText: {
    marginTop: 4,
    color: '#FFFFFF',
    // fontFamily: 'Roboto'
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  }
});
