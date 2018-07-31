/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  // Container Modal Box
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  // - - Skeleton Loading Box - -
  skeletonLoading: {
    height: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 20
  },
  // Container Detail Box
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
  // Input Box
  inputBox: {
    backgroundColor: '#EEF1F4',
    height: 54,
    width: '100%',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 38,
    width: '100%',
    borderRadius: 21,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E3E9EF',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 9,
    paddingBottom: 9,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.11,
    lineHeight: 19
  },
  // Content Box
  productListBox: {
    width: '100%',
    paddingTop: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  productListTitle: {
    marginHorizontal: 16,
    color: '#1181FF',
    // fontFamily: 'Rubik',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  listContainer: { height: 250 },
  textProduct: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    marginTop: 16,
    marginHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: '#E3E9EF',
    borderBottomWidth: 1
  }
});
