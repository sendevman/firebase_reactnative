/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Image, Button, Text, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Rating, AirbnbRating} from 'react-native-ratings';

import styles from './css/ReviewsScreenCss';
import Icon from '../assets/images/Icon';


class ReviewsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.reviewsBox}>
          <View>
            <Text style={styles.textTitleUno}>Make an informed decision.</Text>
            <Text style={styles.textSubtitle}>Read what the reviews are saying.</Text>
          </View>
          
          <View style={[styles.containerCustomer,{borderTopColor: '#1181FF'}]}>            
            <View style={styles.alinearHear}>
              <Image style={styles.logoImage} source={require('../assets/images/myatt_logo_small.jpg')} />
              <Text style={styles.customerReviews}>Customer Reviews</Text>
            </View>

            <View style={styles.alinearHear}>
              <Text style={styles.contentList}>Karin M.</Text>
                <Rating
                  type='custom'
                  ratingColor='#3498db'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  imageSize={15}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }} 
                />
            </View>
            <View>
              <Text style={styles.textCustomer}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
              </Text>
            </View>
            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                + Read more
              </Text>
            </View>

            <View style={styles.alinearHear}>
              <Text style={styles.contentList}>Karin M.</Text>
                <Rating
                  type='custom'
                  ratingColor='#3498db'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  imageSize={15}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
            </View>
            <View>
              <Text style={styles.textCustomer}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
              </Text>
            </View>
            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                + Read more
              </Text>
            </View>

            <View style={styles.alinearHear}>
              <Text style={styles.contentList}>Karin M.</Text>
                <Rating
                  type='custom'
                  ratingColor='#3498db'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  imageSize={15}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
            </View>
            <View>
              <Text style={styles.textCustomer}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent vulputate nibh ante, in efficitur tellus mattis sit amet. Nam tempus lectus quis...
              </Text>
            </View>
            <View style={styles.contentReadMore}>
              <Text style={styles.textReadMore}>
                + Read more
              </Text>
            </View>
          </View> 
        
          <Text style={styles.textTitleDos}>Reviews from around the web</Text>
          
          <View style={[styles.containerCustomer,{borderTopColor: '#00AF48'}]}>            
              <Image style={styles.logoImage} source={require('../assets/images/myatt_logo_small.jpg')} />
              <Text style={styles.textReviews}>
                The Galaxy S9 is all of the good and all of the bad we' ve come to expect from Samsung
              </Text>
              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>
                  + Read more
                </Text>
              </View>
          </View>

          <View style={[styles.containerCustomer,{borderTopColor: '#D60000'}]}>            
              <Image style={styles.logoImage} source={require('../assets/images/myatt_logo_small.jpg')} />
              <Text style={styles.textReviews}>
               The Galaxy S9 is a nice incremental upgrade, but its low-light camera isn't a game changer and some new features fall far behind the iPhone X. S8 owners can skip, but it's a good upgrade from older Androids. 
              </Text>
              <View style={styles.separador}></View>
              <View >
                <Text style={styles.textListItem}>PROS</Text>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Great design</Text>
                  </View>
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Beautiful display</Text>
                  </View>
                  </View>                  
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Fast performance</Text>
                  </View>
                  </View>
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Capable camera</Text>
                  </View>
                  </View>
              </View>

              <View >
                <Text style={styles.textListItem}>CONS</Text>
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Average battery life</Text>
                  </View>
                  </View>
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Gimmicks galore</Text>
                  </View>
                  </View>
                  <View>
                  <View style={styles.alinearHear}>
                  <View style={styles.listDot}></View>
                  <Text style={[styles.listText, styles.listaText]}>Samsung has a poor history of updating its phones</Text>
                  </View>
                  </View>
              </View>
          <View style={styles.contentReadMore}>
            <Text style={styles.textReadMore}>
              - Collapse
            </Text>
          </View>
          </View>
 
          <View style={[styles.containerCustomer,{borderTopColor: '#0094DD'}]}>            
              <Image style={styles.logoImage} source={require('../assets/images/myatt_logo_small.jpg')} />
              <Text style={styles.textReviews}>
               The Galaxy S9 is a nice incremental upgrade, but its low-light camera isn't a game changer and some new features fall far behind the iPhone X. S8 owners can skip, but it's a good upgrade from older Androids. 
              </Text> 
              <View style={styles.contentReadMore}>
                <Text style={styles.textReadMore}>
                  + Read more
                </Text>
              </View>
          </View>

          <View style={styles.containerVideo}>
            <WebView style={styles.videoItem} source={{uri: 'https://www.youtube.com/watch?v=kB8g3TOAdqA&list=PLQeg8yfG9MRxzEqL9zk4EWdGHDmch00vj&index=11'}} 
            />
            <Text style={[styles.textReviews,{marginTop: 16}]}>The perfect ... Samsung!</Text>      
            <Text style={styles.textVideo}>MKBHD</Text>
          </View>

          <View style={styles.containerVideo}>
            <WebView style={styles.videoItem} source={{uri:'https://www.youtube.com/watch?v=kB8g3TOAdqA&list=PLQeg8yfG9MRxzEqL9zk4EWdGHDmch00vj&index=11'}} 
            />
            <Text style={[styles.textReviews,{marginTop: 16}]}>10 Things Before Buying!</Text>      
            <Text style={styles.textVideo}>Jonathan Morrison</Text>
          </View>

          <View>
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>

        </View>

      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { reviews: 0 };
}

export default connect(mapStateToProps)(ReviewsScreen);