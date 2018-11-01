/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import CustomerReview from '../../screens/components/CustomerReview';
import { Button } from 'react-native-elements';
var { width } = Dimensions.get('window');

// My Customs
import Icon from '../../assets/images/Icon';

class CustomerReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { readMore: false };
  }
  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
  }
  render() {
    const { item } = this.props;
    const { readMore } = this.state;

    let readMoreText = readMore ? "- Collapse" : "+ Read more";
    let numberOfLines = readMore ? 0 : 3;
    const { customerReviews, model, manufacture } = this.props;
    let star5 = 0; let star4 = 0; let star3 = 0; let star2 = 0; let star1 = 0;
    let starTotal = 0; let starFinal = 0; let starCount = customerReviews.length;
    for (i = 0; i < starCount; i++) {
      starTotal += parseInt(customerReviews[i].stars);
      if (parseInt(customerReviews[i].stars) === 5) star5++;
      else if (parseInt(customerReviews[i].stars) === 4) star4++;
      else if (parseInt(customerReviews[i].stars) === 3) star3++;
      else if (parseInt(customerReviews[i].stars) === 2) star2++;
      else star1++;
    }
    starFinal = parseFloat((starTotal / starCount).toFixed(2));
    return (
      <View>
        <Text style={styles.webReviewTitle}>Reviews from myAT&T</Text>

        <View style={[styles.cardContainer, { borderTopColor: '#1181FF' }]}>
          <View style={styles.headerCard}>
            <Image style={[styles.logoReview, { width: 60 }]} source={require('../../assets/images/files/myAtt.jpg')} />
            <Text style={[styles.titleReview, { marginTop: -4 }]}>Customer Reviews</Text>
          </View>
          <View style={styles.ratingView}>
            <View style={{ flexDirection: 'row' }}>
              <Rating
                type='custom'
                ratingColor='#fd650b'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                imageSize={20}
                readonly
                fractions={2}
                startingValue={starFinal}
              />
              <Text style={styles.ratingStar}>{starFinal} stars</Text>
            </View>
            <Text style={styles.ratingDescription}>Rating Description ({starCount}reviews)</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.ratingText}>5 Star</Text>
              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBar, { width: 200 * star5 / starCount }]} />
              </View>
              <Text style={styles.ratingCountText}>{star5}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.ratingText}>4 Star</Text>
              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBar, { width: 200 * star4 / starCount }]} />
              </View>
              <Text style={styles.ratingCountText}>{star4}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.ratingText}>3 Star</Text>
              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBar, { width: 200 * star3 / starCount }]} />
              </View>
              <Text style={styles.ratingCountText}>{star3}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.ratingText}>2 Star</Text>
              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBar, { width: 200 * star2 / starCount }]} />
              </View>
              <Text style={styles.ratingCountText}>{star2}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.ratingText}>1 Star</Text>
              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBar, { width: 200 * star1 / starCount }]} />
              </View>
              <Text style={styles.ratingCountText}>{star1}</Text>
            </View>
            <Text style={styles.recommendText}>8 out of 10 (80%) of reviewers would recommed this product to a friend</Text>
          </View>


        <TouchableOpacity style={styles.contentReadMore} onPress={this.toggleReadMore}>
          <Text style={styles.textReadMore}>{readMoreText}</Text>
        </TouchableOpacity>
          {readMore && customerReviews.map((item, index) => {
            return <CustomerReview key={index} index={index} item={item} model={model} manufacture={manufacture} />;
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  contentReadMore: {
    borderColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 0,
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
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
    borderRadius: 6,
    marginBottom: 14
  },
  webReviewTitle: {
    marginTop: 2,
    marginBottom: 8,
    color: '#FFF',
    // fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 0.12,
    lineHeight: 17
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

  ratingView: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 20
  },
  ratingStar: {
    color: '#0a0a0a',
    // fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.12,
    marginLeft: 8
  },
  ratingDescription: {
    color: '#0a0a0a',
    // fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 25,
    marginTop: 8
  },
  ratingBarBackground: {
    width: 200,
    height: 20,
    marginLeft: 15,
    borderColor: '#3E3F42',
    borderWidth: 1,
    backgroundColor: '#FFF'
  },
  ratingBar: {
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    backgroundColor: '#fd650b'
  },
  ratingText: {
    width: 42,
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
  },
  ratingCountText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    marginLeft: 10
  },
  recommendText: {
    color: '#3E3F42',
    // fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 20,
    marginTop: 10

  }
})
export default CustomerReviewComponent;
