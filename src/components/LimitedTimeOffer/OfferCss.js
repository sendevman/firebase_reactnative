/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#EEF1F4',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Content Box
  contentBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  iconAndTitleBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#536C88',
    // fontFamily: 'DIN Alternate',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    marginLeft: 8
  },
  titleThin: {
    width: 70,
    color: '#536C88',
    // fontFamily: 'DIN Alternate',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    marginTop: 4
  },
  description: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 8
  },
  // Content Box
  arrowBox: {
    width: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
