import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Title = class Title extends Component {
  render() {
    const backIcon = '<';
    return <View style={_styleSheet["title-view-rn"]}>
                <Text style={_styleSheet["title-view-rn-icon"]}>
                    {backIcon}
                </Text>
                <Text style={_styleSheet["title-view-rn-title"]}>
                    申请办卡
                </Text>
            </View>;
  }
};
export { Title as default };