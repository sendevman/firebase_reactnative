/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { backgroundColor: '#009FDB' },
  reviewsBox: { paddingHorizontal: 10 },
  // - - Skeleton Loading Box - -
  skeletonLoading: {
    height: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  // - - Description Box - -
  headerPrincipal: {
    marginTop: 18,
    marginBottom: 16
  },
  textTitleUno: {
    textAlign: 'center',
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    lineHeight: 22
  },
  textSubtitle: {
    textAlign: 'center',
    color: '#FFF',
    // fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 25
  },
  // - - Card Container Box - -
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
    borderRadius: 6,
    marginBottom: 14
  },
  headerCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10
  },
  logoReview: { height: 22 },
  titleReview: {
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    marginLeft: 8
  },
  // Review Item Box
  reviewItemBox: {
    marginTop: 10,
    marginHorizontal: 16
  },
  headerReview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 6
  },
  authorReview: {
    color: '#AEBECD',
    // fontFamily: 'Rubik',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    marginRight: 4
  },
  textReview: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 19,
    marginBottom: 8
  },
  contentReadMore: {
    borderColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 11
  },
  textReadMore: {
    color: '#1181FF',
    // fontFamily: 'Roboto',
    fontSize: 13,
    letterSpacing: 0.09,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  // Reviews for Around the web Section
  webReviewTitle: {
    marginTop: 2,
    marginBottom: 8,
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.12,
    lineHeight: 17
  },
  textReviewBig: {
    marginHorizontal: 16,
    color: '#3E3F42',
    // fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22,
    marginVertical: 8
  },
  separador: {
    borderTopColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 16
  },
  textListItem: {
    color: '#D60000',
    // fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.08,
    lineHeight: 14,
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 2,
  },
  prosConsItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10
  },
  prosConsDot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#D60000'
  },
  prosConsText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 25,
    marginLeft: 4
  },
  // Video Container
  videoContainer: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    borderRadius: 6,
    marginBottom: 14
  },
  videoBox: {
    position: 'relative',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
    height: 200,
    width: '100%'
  },
  videoItem: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    width: '100%'
  },
  videoAuthor: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.08,
    lineHeight: 14,
    marginBottom: 12,
    marginHorizontal: 16
  }
});
