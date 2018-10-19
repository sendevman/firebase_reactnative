/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

// My Styles
import styles from '../css/ReviewsScreenCss';

// My Customs
import Icon from '../../assets/images/Icon';

class WebReview extends Component<props> {
  constructor(props) {
    super(props);

    this.state = { readMore: false };
  }

  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
    if(!this.state.readMore){
      firebase.analytics().logEvent("reviewViewed", {"pFirebaseId":this.props.firebaseid, "pDeviceModel":this.props.model, "pDeviceManufacture":this.props.manufacture, "pReviewType":this.props.publication});
    }
  }

  renderLogo(publicationType) {
    if (publicationType === 'consumer_reports')
      return <Icon height="22" width="80" name="ConsumerReports" viewBox="0 0 684 180" />;
    if (publicationType === 'cnet')
      return <Icon height="22" width="22" name="CNet" viewBox="0 0 100 100" />;
    if (publicationType === 'digital_trends')
      return <Image style={[styles.logoReview, { width: 112 }]} source={require('../../assets/images/files/digitalTrends.png')} />;
  }

  setBorderColor(publicationType) {
    if (publicationType === 'consumer_reports') return "#00AF48";
    if (publicationType === 'cnet') return "#D60000";
    if (publicationType === 'digital_trends') return "#0094DD";
    return "#00AF48";
  }

  renderProsCons(pros, cons) {
    let prosIsValid = (typeof pros != "undefined" && pros.length > 0);
    let consIsValid = (typeof cons != "undefined" && cons.length > 0);
    
    if (prosIsValid || consIsValid) {
      let prosMargin = (prosIsValid && consIsValid) ? 0 : 6;

      return (
        <View>
          <View style={styles.separador}></View>

          { prosIsValid &&
            <View style={{ marginBottom: prosMargin }}>
              <Text style={styles.textListItem}>PROS</Text>

              { pros.map((item, index) => {
                  return (
                    <View key={index} style={styles.prosConsItem}>
                      <View style={styles.prosConsDot}></View>
                      <Text numberOfLines={1} style={styles.prosConsText}>{item}</Text>
                    </View>
                  );
                })
              }
            </View>
          }

          { consIsValid &&
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.textListItem}>CONS</Text>

              { cons.map((item, index) => {
                  return (
                    <View key={index} style={styles.prosConsItem}>
                      <View style={styles.prosConsDot}></View>
                      <Text numberOfLines={1} style={styles.prosConsText}>{item}</Text>
                    </View>
                  );
                })
              }
            </View>
          }
        </View>
      );
    }
  }

  render() {
    const { item } = this.props;
    const { readMore } = this.state;

    let readMoreText = readMore ? "- Collapse" : "+ Read more";
    let showProsCons = readMore;

    return (
      <View style={[styles.cardContainer, { borderTopColor: this.setBorderColor(item.publication) }]}>
        <View style={styles.headerCard}>
          { this.renderLogo(item.publication) }
        </View>

        <Text style={styles.textReviewBig}>{item.summary}</Text>

        { showProsCons && this.renderProsCons(item.pros, item.cons) }

        <TouchableOpacity style={styles.contentReadMore} onPress={this.toggleReadMore}>
          <Text style={styles.textReadMore}>{readMoreText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { common } = state;

  return { firebaseid: common.firebaseid };
}

export default connect(mapStateToProps)(WebReview);
