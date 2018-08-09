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
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Header Box
  headerBox: {
    width: width,
    height: 52,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  },
  headerBtn: {
    width: 46,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: width,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  // Detail Section
  detailBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  /* If 375px of width
    - height: 190 - width: 345
    - if (375px = 100%) -> 190px = 50.666666667
  */
  detailImg: {
    height: width * 0.5,
    width: width - 30,
    borderRadius: 6,
    marginVertical: 8
  },
  detailTitle: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    paddingHorizontal: 1
  },
  detailSubTitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    // fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
    paddingHorizontal: 1
  },
  detailDescription: {
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16
  },
  // Watch Section
  watchBtn: {
    height: 58,
    width: width - 30,
    borderRadius: 6,
    backgroundColor: '#2E2F32',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  watchBtnIcon: {
    height: 42,
    width: 42
  },
  watchBtnText: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    marginLeft: 10
  },
  watchBigScreenBtn: {
    height: 58,
    width: width - 30,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14
  },
  // No In AT&T Store Section
  noInAttStoreBox: {
    height: 58,
    width: width - 30,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(207, 42, 42, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(207, 42, 42, 0.12)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  noInAttStoreText: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    textAlign: 'center'
  },
  // Video Section
  imgAndVideoBox: { position: 'relative' },
  backgroundVideo: {
    position: 'absolute',
    height: width * 0.5,
    width: width - 30,
    borderRadius: 6,
    marginVertical: 8
  },
  spinner: {
    position: 'absolute',
    top: ((width * 0.5)/2) - 5,
    left: ((width - 30)/2) - 15
  }
});
