/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

// My Styles
import styles from './css/CostPlansScreenCss';

// My Customs
import Icon from '../assets/images/Icon';

class CostPlansScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.costPlansBox}>
          <View style={[ styles.cardBox, { marginTop: 16 }]}>
            <Text style={styles.titleCard}>AT&T Next</Text>
            <Text style={styles.subTitleCard}>Upgrade every 2 years. 0% APR; 30-month installment.</Text>

            <View style={styles.separatorCard}></View>

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$0.00</Text>
                <Text style={styles.dataText}>DUE TODAY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$26.34</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>May '20</Text>
                <Text style={styles.dataText}>TRADE-IN</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.titleCard}>AT&T Next Every Year</Text>
            <Text style={styles.subTitleCard}>Upgrade every years. 0% APR; 24-month installment.</Text>

            <View style={styles.separatorCard}></View> 

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$0.00</Text>
                <Text style={styles.dataText}>DUE TODAY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$32.92</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>May '19</Text>
                <Text style={styles.dataText}>TRADE-IN</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.titleCard}>No annual contract</Text>
            <Text style={styles.subTitleCard}>Upgrade every years. 0% APR; 24-month installment.</Text>

            <View style={styles.separatorCard}></View>

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$789.99</Text>
                <Text style={styles.dataText}>DUE TODAY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$0.00</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataText}>UPGRADE</Text>
                <Text style={styles.dataText}>ANYTIME</Text>
              </View>
            </View>
          </View>

          <View style={styles.shippingBox}>
            <Icon name="ShippingTruck" width="18" height="13" viewBox="0 0 18 13" />
            <Text style={styles.availableText}>Available in-store on May 17, 2018</Text>
          </View>

          <Text style={styles.titleDevice}>Device protection</Text>

          <View style={styles.cardBox}>
            <Text style={styles.titleCard}>AT&T Mobile Insurance</Text>

            <View style={styles.separatorCard}></View>

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>1</Text>
                <Text style={styles.dataText}>DEVICE PROTECTED</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$8.99</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.titleCard}>AT&T Mobile Protection Pack</Text>

            <View style={styles.separatorCard}></View>

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>1</Text>
                <Text style={styles.dataText}>DEVICE PROTECTED</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$11.99</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.titleCard}>AT&T Multi Device Protection Pack</Text>

            <View style={styles.separatorCard}></View>

            <View style={styles.dataCardBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>3</Text>
                <Text style={styles.dataText}>DEVICES PROTECTED</Text>
              </View>

              <View style={styles.dataDivisor}></View>

              <View style={styles.dataBox}>
                <Text style={styles.dataValue}>$34.99</Text>
                <Text style={styles.dataText}>MONTHLY</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { costplans: 0 };
}

export default connect(mapStateToProps)(CostPlansScreen);
