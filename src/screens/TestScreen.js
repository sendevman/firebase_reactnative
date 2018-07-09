
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
// My Actions
import { setBLEInfo } from '../actions/BLEManage';

class TestScreen extends Component {

    render() {
        const bledata = this.props.bledata ? (this.props.bledata.bleData || {}) : {}
        console.log("======", this.props.bledata);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <SafeAreaView forceInset={{ top: 'always' }}>
                        <Text >PRODUCTS NEAR YOU</Text>
                        <Text > Latitude :  {bledata.lat} </Text>
                        <Text > Longitude : {bledata.lng} </Text>
                        <Text > Height : {bledata.height} </Text>
                        <Text > Floor ID : {bledata.floor_id} </Text>
                        <Text > Zone ID : {bledata.zone_id} </Text>
                        <Text > Time : {bledata.ts} </Text>
                    </SafeAreaView>
                </ScrollView>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return { bledata: state.bleManage };
}
export default connect(mapStateToProps)(TestScreen);