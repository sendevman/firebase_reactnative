/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

import { StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { backgroundColor: '#EEF1F4' },
  reviewsBox: { paddingHorizontal : 10 },
  
  textTitleUno:{
  	marginTop: 16,
  	textAlign:'center',
	  color: '#3E3F42',
	  fontFamily: 'Rubik',	
	  fontSize: 18,
	  fontWeight: '300',
	  letterSpacing: 0.12,
	  lineHeight: 22
},
	textSubtitle:{
		textAlign: 'center',
		color: '#3E3F42',
		fontFamily: 'Roboto',	
		fontSize: 14,
		letterSpacing: 0.12,	
		lineHeight: 25
},
	containerCustomer:{
		backgroundColor: '#FFFFFF',
		borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
		marginTop: 16,
		borderRadius: 6
},
	customerReviews:{
		color: '#3E3F42',	
		fontFamily: 'Rubik',	
		fontSize: 13,	
		letterSpacing: 0.09,	
		lineHeight: 15,
		marginTop:16
},
	logoImage: {
		marginTop: 16,
		marginLeft:16,
		height: 21,
    width: 60  
},
	alinearHear: {
		alignItems:'center', 
		flexDirection: 'row', 
		justifyContent: 'flex-start'
},
	contentList:{
		color: '#AEBECD',
		fontFamily: 'Rubik',	
		fontSize: 13,
		letterSpacing: 0.09,	
		lineHeight: 15,
		marginLeft: 16
},
	textCustomer:{
		color: '#3E3F42',
		fontFamily: 'Roboto',
		fontSize: 13,
		letterSpacing: 0.09,
		lineHeight: 19,
		paddingHorizontal : 16,
		marginBottom: 8.5
},
	contentReadMore:{
		height: 37,
		borderColor: '#E3E9EF',
		borderTopWidth: 1,
	  borderStyle: 'solid',
	  borderBottomWidth: 1
},
	textReadMore: {
		height: 15,	
		color: '#1181FF',	
		fontFamily: 'Roboto',	
		fontSize: 13,		
		letterSpacing: 0.09,	
		lineHeight: 15,
		fontWeight: '500',
		textAlign:'center',
		marginTop: 11,
		marginBottom:11
}, //*el segundo container
	textTitleDos: {
		color: '#1181FF',
		marginTop: 16,	
		fontFamily: 'Rubik',	
		fontSize: 14,
		letterSpacing: 0.12,	
		lineHeight: 17  
},
	textReviews: {
		paddingHorizontal : 16,
    color: '#3E3F42',
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 0.12,
    lineHeight: 22,
    marginTop:8,
    marginBottom:8
},
	separador:{
		borderTopColor: '#E3E9EF',
		borderTopWidth: 1,
    borderStyle: 'solid',
    marginTop: 8,
    marginBottom: 8
},
	textListItem:{
		color:'#D60000',
		fontFamily: 'Rubik',	
		fontSize: 12,
		fontWeight: '500',
		letterSpacing: 0.08,	
		lineHeight: 14,
		marginBottom:8,
		marginTop: 8,
		marginLeft:16
},
	listDot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#D60000',
    marginLeft: 16,
    marginBottom:5
},
	listText: { marginLeft: 5},
	listaText: {
    color: '#3E3F42',
    fontFamily: 'Roboto',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 25,
    marginBottom:5
},
	containerVideo:{		
		marginTop: 16,
		borderRadius: 6,
		backgroundColor: '#FFFFFF'
},
	videoItem:{
		marginTop: 1,
		height:200, 
		width:'100%', 
		backgroundColor: 'rgba(0,0,0,0.16)',
},
	textVideo:{
		color: '#3E3F42',
		fontFamily: 'Roboto',
		fontSize: 12,
		fontWeight: '500',
		letterSpacing: 0.08,
		lineHeight: 14,
		marginTop:8,
    marginBottom:20,
    paddingHorizontal : 16 
}

});

		
    
		
			