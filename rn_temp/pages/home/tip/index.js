import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Tip = class Tip extends Component {

  render() {
    return <View style={_styleSheet["tip"]}>
          <Text style={_styleSheet["tip-text"]}>
              温馨提示：您选择的办卡城市需与工作或住宅所在地相同，否则可能导致申请不成功。
          </Text>
          <Text style={_styleSheet["tip-btn"]}>
              我知道了
          </Text>
        </View>;
  }
};
export { Tip as default };