import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Title = class Title extends Component {
  render() {
    const backIcon = '<';
    return <View style={_styleSheet["title-view"]}>
                <View onClick={this.props.onClick} style={_styleSheet["title-icon"]}>
                    <Text>
                        {backIcon}
                    </Text>
                </View>
                <View style={_styleSheet["title"]}>
                    <Text>
                        申请办卡
                    </Text>
                </View>
            </View>;
  }
};
export { Title as default };