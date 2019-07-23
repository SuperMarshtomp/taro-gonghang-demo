import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Select = class Select extends Component {
  render() {
    return <View style={_styleSheet["select"]}>
                <View onClick={this.props.onClick} style={_styleSheet["select-left"]}>
                    <Text style={_styleSheet["select-txt-rn"]}>
                        {"全部品牌 "}
                    </Text>
                    <Text style={_styleSheet["select-icon-rn"]}>
                        ▼
                    </Text>
                </View>
                <View onClick={this.props.onClick} style={_styleSheet["select-right"]}>
                    <Text style={_styleSheet["select-txt-rn"]}>
                        {"全部等级 "}
                    </Text>
                    <Text style={_styleSheet["select-icon-rn"]}>
                        ▼
                    </Text>
                </View>
            </View>;
  }
};
export { Select as default };