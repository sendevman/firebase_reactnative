
import { StyleSheet, Dimensions } from 'react-native';
export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // backgroundColor: '#009FDB',
    backgroundColor: 'transparent',
    width: width
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
    borderRadius: 6,
    marginBottom: 14
  },
  directvCardView: {
    width: width-20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // borderTopWidth: 5,
    borderStyle: 'solid',
    elevation: 2,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 14
  },
  txtTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: 'center'
  },
  txtSmall: {
    width: width-60,
    color: '#3E3F42',
    fontSize: 18,
  },
  imgSave: {
    // width: width - 60,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain'
  },
  txtSaveTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
    marginTop: 20,
  },
  txtSaveDescription: {
    color: '#333',
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  txtSaveDetail: {
    color: '#333',
    paddingHorizontal: 15,

    fontSize: 12,
    lineHeight: 12,
    marginBottom: 10,
  },
  contentReadMore: {
    borderColor: '#E3E9EF',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 0,
    paddingVertical: 11,
    width: width-20,
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
  //Package Part
  directvPackageView: {
    width: width-20,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    marginBottom: 14
  },
  tableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'flex-end',
    marginRight: 4,
    // height: 200,
  },
  packageItemView: {
    width: (width-20) / 7 - 3, 
    borderTopWidth: 5, 
    marginLeft: 2,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  logoPart:{
    width: (width-20)*5/6,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#dadbdd',
    alignSelf:'flex-end', 
    borderBottomWidth:4, 
    borderColor: '#289e46',
    flexDirection: 'row'
  },
  logoDescription: {
    width: (width-20) * 5/6 - 75
  },
  channeltableView: {
    flexDirection: 'column',
    marginRight: 4,
    marginBottom: 10,
    height: 200,
    width: width-20,
  },
  channelRow: {
    width: width-20,
    flexDirection: 'row',
    marginLeft: 5,
    borderTopWidth: 1, 
  },
  channelItemView: {
    width: (width-20) / 7 - 3, 
    marginLeft: 2,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  imgReliability: {
    width: width - 60,
    resizeMode: 'contain'
  }


})