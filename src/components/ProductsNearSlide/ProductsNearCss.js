/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    color: '#6B92BF',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    marginTop: 10,
    marginBottom: 6,
    paddingHorizontal: 14
  },
  itemContainer: { paddingHorizontal: 10 },
  itemBox: {
    backgroundColor: '#FFF',
    height: 120,
    maxWidth: 344,
    width: '100%',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageBox: {
    backgroundColor: 'transparent',
    height: '100%',
    width: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    borderRadius: 6,
    paddingTop: 14,
    paddingHorizontal: 8
  },
  detailsBox: {
    flex: 1,
    paddingLeft: 8
  },
  titleItem: {
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 18,
    lineHeight: 22,
    paddingVertical: 6
  },
  hrDivider: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#E3E9EF',
    marginBottom: 7
  },
  deviceOptionsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  deviceOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  deviceOptionText: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 3
  }
});
