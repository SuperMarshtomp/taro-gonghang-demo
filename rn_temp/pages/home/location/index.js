import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

import locationImage from './assets/location.png';

var _styleSheet = indexStyleSheet;
let Location = class Location extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleLocationClick = () => {
      console.log('handleLocationClick');
    }, _temp;
  }

  render() {
    return <View style={_styleSheet["location"]}>
              <View style={_styleSheet["location-city"]}>
                  <Image src={locationImage} style={_styleSheet["location-img"]} />
                  <View>
                      <Text>
                          当前城市：{this.props.city}
                      </Text>
                  </View>
              </View>
              <View onClick={this.handleLocationClick} style={_styleSheet["location-button-view"]}>
                  <Text style={_styleSheet["location-button-view-txt"]}>
                      更多
                  </Text>
              </View>
          </View>;
  }
};
export { Location as default };