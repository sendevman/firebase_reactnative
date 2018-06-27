/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';

// My Styles
import styles from './css/ReviewsScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class ReviewsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.reviewsBox}>
          <View style={styles.headerPrincipal}>
            <Text style={styles.textTitleUno}>Make an informed decision.</Text>
            <Text style={styles.textSubtitle}>Read what the reviews are saying.</Text>
          </View>

          <View style={[styles.cardContainer, { borderTopColor: '#1181FF' }]}>
            <View style={styles.headerCard}>
              <Image style={[styles.logoReview, { width: 60 }]} source={require('../assets/images/files/myAtt.jpg')} />
              <Text style={[styles.titleReview, { marginTop: -4 }]}>Customer Reviews</Text>
            </View>

            <View>
              <View style={styles.reviewItemBox}>
                <View style={styles.headerReview}>
                  <Text style={styles.authorReview}>Karin M.</Text>
                  <Rating
                    type='custom'
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    imageSize={15}
                    onFinishRating={this.ratingCompleted}
                  />
                </View>

                <Text style={styles.textReview}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
                </Text>
              </View>

              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>
                  + Read more
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.reviewItemBox}>
                <View style={styles.headerReview}>
                  <Text style={styles.authorReview}>Karin M.</Text>
                  <Rating
                    type='custom'
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    imageSize={15}
                    onFinishRating={this.ratingCompleted}
                  />
                </View>

                <Text style={styles.textReview}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
                </Text>
              </View>

              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>
                  + Read more
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.reviewItemBox}>
                <View style={styles.headerReview}>
                  <Text style={styles.authorReview}>Karin M.</Text>
                  <Rating
                    type='custom'
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    imageSize={15}
                    onFinishRating={this.ratingCompleted}
                  />
                </View>

                <Text style={styles.textReview}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
                </Text>
              </View>

              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>
                  + Read more
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.webReviewTitle}>Reviews from around the web</Text>

          <View style={[styles.cardContainer, { borderTopColor: '#00AF48' }]}>
            <View style={styles.headerCard}>
              <Icon height="22" width="80" name="ConsumerReports" viewBox="0 0 684 180" />
            </View>

            <Text style={styles.textReviewBig}>
              The Galaxy S9 is all of the good and all of the bad we' ve come to expect from Samsung
            </Text>

            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                + Read more
              </Text>
            </View>
          </View>

          <View style={[styles.cardContainer, { borderTopColor: '#D60000' }]}>
            <View style={styles.headerCard}>
              <Icon height="22" width="22" name="CNet" viewBox="0 0 100 100" />
            </View>

            <Text style={styles.textReviewBig}>
              The Galaxy S9 is a nice incremental upgrade, but its low-light camera isn't a game changer and some new features fall far behind the iPhone X. S8 owners can skip, but it's a good upgrade from older Androids.
            </Text>

            <View style={styles.separador}></View>

            <View>
              <Text style={styles.textListItem}>PROS</Text>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Great design</Text>
              </View>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Beautiful display</Text>
              </View>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Fast performance</Text>
              </View>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Capable camera</Text>
              </View>
            </View>

            <View style={{ marginBottom: 6 }}>
              <Text style={styles.textListItem}>CONS</Text>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Average battery life</Text>
              </View>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Gimmicks galore</Text>
              </View>

              <View style={styles.prosConsItem}>
                <View style={styles.prosConsDot}></View>
                <Text style={styles.prosConsText}>Samsung has a poor history of updating its phones</Text>
              </View>
            </View>

            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                - Collapse
              </Text>
            </View>
          </View>

          <View style={[styles.cardContainer, { borderTopColor: '#0094DD' }]}>
            <View style={styles.headerCard}>
              <Image style={[styles.logoReview, { width: 112 }]} source={require('../assets/images/files/digitalTrends.png')} />
            </View>

            <Text style={styles.textReviewBig}>
              The Galaxy S9 is a nice incremental upgrade, but its low-light camera isn't a game changer and some new features fall far behind the iPhone X. S8 owners can skip, but it's a good upgrade from older Androids.
            </Text>

            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                + Read more
              </Text>
            </View>
          </View>

          <View style={styles.videoContainer}>
            <View style={styles.videoBox}>
              <WebView
                style={styles.videoItem}
                source={{uri: 'https://www.youtube.com/watch?v=kB8g3TOAdqA&list=PLQeg8yfG9MRxzEqL9zk4EWdGHDmch00vj&index=11'}}
              />
            </View>

            <Text style={[styles.textReviewBig, { marginTop: 16 }]}>The perfect ... Samsung!</Text>
            <Text style={styles.videoAuthor}>MKBHD</Text>
          </View>

          <View style={styles.videoContainer}>
            <View style={styles.videoBox}>
              <WebView
                style={styles.videoItem}
                source={{uri: 'https://www.youtube.com/watch?v=kB8g3TOAdqA&list=PLQeg8yfG9MRxzEqL9zk4EWdGHDmch00vj&index=11'}}
              />
            </View>

            <Text style={[styles.textReviewBig, { marginTop: 16 }]}>10 Things Before Buying!</Text>
            <Text style={styles.videoAuthor}>Jonathan Morrison</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { current } = state;

  return { reviews: current.product };
}

export default connect(mapStateToProps)(ReviewsScreen);
