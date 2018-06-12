/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './css/CostPlansScreenCss';
import Icon from '../assets/images/Icon';


class CostPlansScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.costplansBox}>

          <View style={styles.containerCostPlans}>
            <Text style={styles.containerTitle}>AT&T Next</Text>
            <Text style={styles.containerSubTitle}>Upgrade every 2 years. 0% APR; 30-month installment.</Text>
            <View style={styles.separator}></View>
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$0.00</Text>
                <Text style={styles.textValor}>DUE TODAY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$26.34</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>May '20</Text>
                <Text style={styles.textValor}>TRADE-IN</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containerCostPlans,{marginTop: 8,}]}>
            <Text style={styles.containerTitle}>AT&T Next Every Year</Text>
            <Text style={styles.containerSubTitle}>Upgrade every years. 0% APR; 24-month installment.</Text>
            <View style={styles.separator}></View> 
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$0.00</Text>
                <Text style={styles.textValor}>DUE TODAY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$32.92</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>May '19</Text>
                <Text style={styles.textValor}>TRADE-IN</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containerCostPlans, {marginTop: 8,}]}>
            <Text style={styles.containerTitle}>No annual contract</Text>
            <Text style={styles.containerSubTitle}>Upgrade every years. 0% APR; 24-month installment.</Text>
            <View style={styles.separator}></View>
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$789.99</Text>
                <Text style={styles.textValor}>DUE TODAY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$0.00</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.textValor}>UPGRADE</Text>
                <Text style={styles.textValor}>ANYTIME</Text>
              </View>
            </View>
          </View>

          <Text style={styles.available}>Available in-store on May 17, 2018</Text>
          <Text style={styles.device}>Device protection</Text>

          <View style={styles.containerCostPlans}>
            <Text style={styles.containerTitle}>AT&T Mobile Insurance</Text>
            <View style={styles.separator}></View>
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>1</Text>
                <Text style={styles.textValor}>DEVICE PROTECTED</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$8.99</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containerCostPlans, {marginTop: 8,}]}>
            <Text style={styles.containerTitle}>AT&T Mobile Protection Pack</Text>
            <View style={styles.separator}></View>
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>1</Text>
                <Text style={styles.textValor}>DEVICE PROTECTED</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$11.99</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containerCostPlans, {marginTop: 8,}]}>
            <Text style={styles.containerTitle}>AT&T Multi Device Protection Pack</Text>
            <View style={styles.separator}></View>
            <View style={styles.containerNext}>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>3</Text>
                <Text style={styles.textValor}>DEVICES PROTECTED</Text>
              </View>
              <View style={styles.divisor}></View>
              <View style={styles.containerSmall}>
                <Text style={styles.valor}>$34.99</Text>
                <Text style={styles.textValor}>MONTHLY</Text>
              </View>
            </View>
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
  return { costplans: 0 };
}

export default connect(mapStateToProps)(CostPlansScreen);