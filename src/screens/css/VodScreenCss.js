/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 8
  },
  // - - Skeleton Loading Box - -
  skeletonLoading: { height: '100%' },
  sectionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  // Featured Section
  featuredText: {
    color: '#6B92BF',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    marginTop: 2,
    marginLeft: -1
  },
  featuredBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  /* If 375px of width
    - height: 190 - width: 345
    - if (375px = 100%) -> 190px = 50.666666667
  */
  featuredImg: {
    height: width * 0.5,
    width: width - 30,
    borderRadius: 6,
    marginVertical: 8
  },
  featuredTitle: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 19,
    paddingHorizontal: 1
  },
  featuredSubTitle: {
    color: 'rgba(255, 255, 255, 0.29)',
    // fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
    paddingHorizontal: 1
  },
  // Category Section
  categoryText: {
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14
  },
  horizontalScrollBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  categoryItemBox: {
    width: 101,
    marginRight: 8
  },
  categoryItemFlex: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  categoryImg: {
    height: 132,
    width: 101,
    borderRadius: 6
  },
  categoryTitle: {
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 8
  }
});
