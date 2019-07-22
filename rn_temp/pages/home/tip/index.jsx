import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Tip = class Tip extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showTip: true
    }, this.handleTipClick = () => {
      console.log('handleTipClick');
      this.setState({
        showTip: false
      });
    }, _temp;
  }

  render() {
    return <View>
          {this.state.showTip ? <View style={_styleSheet["tip"]}>
              <View style={_styleSheet["text"]}>
                <Text>
                    温馨提示：您选择的办卡城市需与工作或住宅所在地相同，否则可能导致申请不成功。
                </Text>
              </View>
              <View onClick={this.handleTipClick} style={_styleSheet["button"]}>
                <Text>
                    我知道了
                </Text>
              </View>
            </View> : <View />}
        </View>;
  }
};
export { Tip as default };