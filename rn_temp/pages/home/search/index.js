import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image, Input } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

import icon_1 from './assets/icon_1.jpg';
import icon_2 from './assets/icon_2.jpg';

var _styleSheet = indexStyleSheet;
let Search = class Search extends Component {

  render() {
    return <View style={_styleSheet["search"]}>
                <View onClick={this.props.changeList} style={_styleSheet["img-view_rn"]}>
                    <Image src={this.props.isList ? icon_2 : icon_1} style={_styleSheet["img"]} />
                </View>
                <View style={_styleSheet["input-view"]}>
                    <View style={_styleSheet["input"]}>
                        <Input type="text" placeholder="想要什么卡？" style={_styleSheet["card-input"]} />
                    </View>
                </View>
                <View onClick={this.props.onClick}>
                    <Text style={_styleSheet["button-view"]}>
                        查询
                    </Text>
                </View>
            </View>;
  }
};
export { Search as default };