/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  // Container Box
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  containerDetail: {
    width: '100%',
    maxHeight: height - 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  // Header Box
  headerBox: {
    width: width,
    height: 52,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerBtn: {
    width: 46,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    flex: 1,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: 0.11,
    lineHeight: 19,
    marginLeft: 16
  },
  divider: {
    width: width - 20,
    height: 1,
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  // Content Box
  verticalScroll: { marginTop: 12 },
  categoryBox: {
    marginTop: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  categoryTitle: {
    marginLeft: 16,
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  containerBox: {
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 14,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  // Item Box
  containerItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemBox: {
    height: 149,
    width: 120,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#AEBECD',
    marginHorizontal: 6
  },
  frameImage: {
    height: 86,
    width: 106,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 7
  },
  itemImage: {
    height: 86,
    width: 106
  },
  separator: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  itemText: {
    marginTop: 8,
    marginHorizontal: 10,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 15
  }
});
