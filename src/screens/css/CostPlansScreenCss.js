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
    marginBottom: 14
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
  }
});
