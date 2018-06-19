/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
container: { backgroundColor: '#EEF1F4' },
costplansBox: { paddingHorizontal: 10 },

containerCostPlans: {
  backgroundColor: '#FFFFFF',
  marginTop: 16,
  borderRadius: 6
},
containerTitle:{
  marginTop: 16,
  marginLeft: 16,
  marginBottom: 2,
  color: '#3E3F42',
  fontFamily:'Rubik',
  fontSize: 18,
  letterSpacing: 0.15,
  lineHeight: 22
},
containerSubTitle:{
  marginLeft: 16,
  color: '#3E3F42', 
  fontFamily: 'Rubik',
  fontSize: 12, 
  fontWeight: '300',
  letterSpacing: 0.2,
  lineHeight: 14
},
separator:{
  height: 1,
  backgroundColor: '#E3E9EF',
  marginTop: 8,
  marginBottom: 8,
  marginHorizontal: 10
},
containerSmall: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 16
},
valor:{
  color: '#1181FF',
  fontFamily: 'Rubik',
  fontSize: 18,
  fontWeight: '300',
  letterSpacing: 0.15,
  lineHeight: 22,
  textAlign:'center'
},
textValor:{
  color: '#3E3F42',
  fontFamily: 'Rubik',
  fontSize: 12,
  letterSpacing: 0.15,
  lineHeight: 14
},
containerNext: {
  flexDirection: 'row',
  justifyContent: 'space-evenly'
},
divisor:{
  height: 36,
  width: 1,
  backgroundColor: '#E3E9EF',
  borderStyle: 'solid'
},
available:{
  marginTop: 16,
  color: '#3E3F42',
  fontFamily: 'Rubik',
  fontSize: 12,
  letterSpacing: 0.15,
  lineHeight: 18
},
device:{
  marginTop: 16,
  color: '#1181FF',
  fontFamily: 'Rubik',
  fontSize: 14,
  letterSpacing: 0.12,
  lineHeight: 17,
  textAlign: 'left'
}
});