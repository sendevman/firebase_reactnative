/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

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
    fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: 0.11,
    lineHeight: 19
  },
  divider: {
    width: width - 20,
    height: 1,
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  // Content Box
  contentBox: {
    width: width - 20,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imageBox: {
    width: '100%',
    height: 196,
    borderRadius: 6,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF'
  },
  itemImage: {
    width: width - 40,
    height: 176
  },
  // Detail Box
  detailBox: {
    marginTop: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  titleText: {
    marginBottom: 10,
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 19
  },
  descriptionText: {
    marginTop: 14,
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 21
  },
  // Buy Button
  textBuyBtn: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    textAlign: 'center'
  },
  buyBtn: {
    width: width - 20,
    height: 48,
    backgroundColor: '#1181FF',
    borderRadius: 6,
    marginVertical: 24
  }
});
