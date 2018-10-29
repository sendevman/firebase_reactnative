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
  accessoriesBackground1: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
  },
  accessoriesBackground: {
  },
  // - - Storage Box - -
  storageBox: {
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
    // backgroundColor: '#FFFFFFBF',
    marginTop: 0
  },
  expandableViewText: { marginBottom: 8 },

});
