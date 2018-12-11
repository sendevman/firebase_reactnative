/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// My Styles
import styles from '../css/DirecTVScreenCss';

class DirecTvSave extends Component {
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
    let showProsCons = readMore;

    return (
      <View style={[styles.directvCardView]}>

        <Image style={styles.imgSave} source={require('../../assets/images/files/directv_save.png')} />
        <Text style={styles.txtSaveTitle}>Save $15/mo. on your TV bill</Text>
        <Text style={styles.txtSaveDescription}>Bundle DIRECTV or DIRECTV NOW with a qualifying AT&T unlimited plan to enjoy endless entertainment, stream, surf, and never pay overages again.</Text>

        { showProsCons && 
        <Text style={styles.txtSaveDetail}>Req’s Zelig. Wireless (min. $90/mo. after instant & paperless bill discount which starts w/in 2 bills) & video (min. $29.99/mo.) services. Streaming video may be limited to SD & after 22GB/line/mo., you may experience slower speeds. Credits start w/in 3 bills. For DIRECTV NOW, redeem offer at directvnow.com by verifying your wireless number. Svc prices subj. to change. Customers w/ two AT&T video secs may not receive credit on DIRECTV NOW. Add’l usage, charges, exclusions & rest’s apply. Limited time offer. See att.com/unlimited for details. See offer details</Text>}

        <TouchableOpacity style={styles.contentReadMore} onPress={this.toggleReadMore}>
          <Text style={styles.textReadMore}>{readMoreText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DirecTvSave;
