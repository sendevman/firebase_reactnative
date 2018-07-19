/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingLeft:15
  },
  textFeatured: {
    color: '#6B92BF',
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'left',
  },
  containerMovie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerTrailer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 8,
  },
  textTitle: {
    marginTop: 8,
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    marginLeft: 1
  },
  textSubtitle: {
    marginTop: 4,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(255,255,255,0.29)',
    marginLeft: 1
  },
  textDirectv: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'left',
  },
  containerAttDirectv: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerDirectv: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginRight: 8
  },
  containerVideo: {
    height: 132,
    width: 101,
    borderRadius: 6
  },
  nameVideo: {
    color: '#FFFFFF',
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 8
  },
  
});