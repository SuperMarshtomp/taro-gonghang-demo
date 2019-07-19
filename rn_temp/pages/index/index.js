var _class, _temp;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Input, Image, Picker, Button } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

import logo_2 from '../../asset/images/logo_2.jpg';

var _styleSheet = indexStyleSheet;
let Index = (_temp = _class = class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex: ['男', '女'],
      index: 0,
      phone: '',
      age: ''
    };

    this.onSexChange = this.onSexChange.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSexChange(e) {
    this.setState({
      index: e.detail.value
    });
  }

  render() {
    return <View>
        <View style={_styleSheet["title"]}>
          <Image src={logo_2} style={_styleSheet["logo"]}></Image>
        </View>
        <View style={_styleSheet["inputItem"]}>
          <Text>姓名：</Text>
          <Input placeholder="请输入姓名" value={this.state.name} style={_styleSheet["input"]} />
        </View>
        <View style={_styleSheet["inputItem"]}>
          <Text>性别：</Text>
          <View style={_styleSheet["picker"]}>
            <Picker mode="selector" value={this.state.index} range={this.state.sex} onChange={this.onSexChange}>
              <Text>{this.state.sex[this.state.index]}</Text>
            </Picker>
          </View>
        </View>
        <View style={_styleSheet["inputItem"]}>
          <Text>手机：</Text>
          <Input placeholder="请输入手机号码" value={this.state.phone} style={_styleSheet["input"]} />
        </View>
        <View style={_styleSheet["inputItem"]}>
          <Text>年龄：</Text>
          <Input placeholder="请输入年龄" value={this.state.age} style={_styleSheet["input"]} />
        </View>
        <View>
          {<Button type="warn" size="default">提交</Button>}
        </View>
        <View>
          {<Button type="warn" size="default">提交</Button>}
        </View>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页'
}, _temp);
export { Index as default };