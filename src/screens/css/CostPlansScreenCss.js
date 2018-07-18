/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { backgroundColor: '#EEF1F4' },
  costPlansBox: {
    paddingHorizontal: 10,
    marginBottom: 14,
    marginTop: 24,
  },
  // - - Skeleton Loading Box - -
  skeletonLoading: {
    height: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  // Card Box
  cardBox: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    borderRadius: 6,
    elevation: 2
  },
  titleCard: {
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 2,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.15,
    lineHeight: 22
  },
  subTitleCard: {
    marginLeft: 16,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.2,
    lineHeight: 14
  },
  separatorCard: {
    height: 1,
    backgroundColor: '#E3E9EF',
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 10
  },
  // Data Card Box
  dataCardBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16
  },
  dataBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataValue: {
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 3
  },
  dataText: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.15,
    lineHeight: 14,
    textAlign: 'center'
  },
  dataDivisor: {
    height: 36,
    width: 1,
    backgroundColor: '#E3E9EF',
    borderStyle: 'solid'
  },
  // Title for Shipping Available
  shippingBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 6
  },
  availableText: {
    marginLeft: 8,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: 18
  },
  titleDevice: {
    marginTop: 16,
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17,
    textAlign: 'left'
  },
  // Divider Line
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
    backgroundColor: '#EEF1F4',
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
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
  // SD Card Box
  sdCardBox: {
    marginTop: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sdCardText: {
    marginLeft: 8,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center'
  },
  // View More Plans
  contentReadMore: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    zIndex: 9999999999,
    marginTop: -4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 11
  },
  textReadMore: {
    color: '#1181FF',
    // fontFamily: 'Roboto',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center'
  }
});
