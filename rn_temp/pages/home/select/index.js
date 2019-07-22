import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Select = class Select extends Component {
  render() {
    return <View onClick={this.props.onClick} style={_styleSheet["select"]}>
                <Text style={_styleSheet["select-txt"]}>
                    {this.props.title + ' '}
                </Text>
                <Text style={_styleSheet["select-icon"]}>
                    ▼
                </Text>
            </View>;
  }
};
export { Select as default };