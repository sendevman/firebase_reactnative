'use strict';
var React = require('react-native');
var walkbaseEngage = React.NativeModules.RNWalkbaseEngage;

class RNWalkbaseEngage  {

  constructor() {
  }
  tellJS(){
      return new Promise((fulfill, reject) => {
          fulfill("aaa");
      });
  }
}
module.exports = new RNWalkbaseEngage();