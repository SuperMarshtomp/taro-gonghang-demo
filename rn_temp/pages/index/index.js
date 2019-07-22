var _class, _temp;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_temp = _class = class Index extends Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        <Text>Hello world!</Text>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页'
}, _temp);
export { Index as default };