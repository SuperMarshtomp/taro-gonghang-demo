var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
// import { Modal } from "react-native"
import indexStyleSheet from "./index_styles";
import cardImage from './1.jpg';

var _styleSheet = indexStyleSheet;
let Recommend = (_temp = _class = class Recommend extends Component {

  constructor(props) {
    super(props);

    this.handleClick = id => {
      Taro.navigateTo({
        url: `/pages/item/item?itemId=${id}`
      });
    };

    this.handleHidden = () => {
      this.setState({
        showDetail: false
      });
    };

    this.handleShowDetail = showItem => {
      this.setState({
        showItem,
        showDetail: true
      }, () => {
        this.forceUpdate();
      });
    };

    this.state = {
      showDetail: false,
      showItem: {}
    };
  }

  render() {
    const { list, isList } = this.props;
    const { showItem } = this.state;
    return <View style={_styleSheet["home-recommend"]}>
      {<View />}
      {<View />}
      {isList ? <View style={_styleSheet["home-recommend__list"]}>
            {list.filter(item => item.type === 1).map(item => {
          const { id, categoryItem } = item;
          return <View key={id} style={_styleSheet["home-recommend__list-item"]}>
                  
                  <Text onClick={this.handleShowDetail.bind(this, categoryItem)} numberOfLines={1} style={_styleSheet["home-recommend__list-item-name"]}>
                    {categoryItem.name}
                  </Text>

                  <Image onClick={this.handleShowDetail.bind(this, categoryItem)} src={cardImage} style={_styleSheet["home-recommend__list-item-img"]} />
                  <Text onClick={this.handleShowDetail.bind(this, categoryItem)} style={_styleSheet["home-recommend__list-item-desc"]}>
                    {categoryItem.simpleDesc}
                  </Text>
                  <View onClick={this.handleClick.bind(this, id)} style={_styleSheet["home-recommend__list-item-btn"]}>
                    <Text numberOfLines={1} style={_styleSheet["home-recommend__list-item-btn-txt"]}>
                      立即申请
                    </Text>
                  </View>
                </View>;
        })}
          </View> : <View style={_styleSheet["home-recommend__list2"]}>
            {list.filter(item => item.type === 1).map(item => {
          const { id, categoryItem } = item;
          return <View key={id} style={_styleSheet["home-recommend__list2-item"]}>
                  <Image onClick={this.handleShowDetail.bind(this, categoryItem)} src={cardImage} style={_styleSheet["home-recommend__list2-item-img"]} />

                  <View onClick={this.handleShowDetail.bind(this, categoryItem)} style={_styleSheet["home-recommend__list2-item-text"]}>
                    <Text numberOfLines={1} style={_styleSheet["home-recommend__list2-item-text-name"]}>
                      {categoryItem.name}
                    </Text>
                    <Text style={_styleSheet["home-recommend__list2-item-text-desc"]}>
                      {categoryItem.simpleDesc}
                    </Text>
                  </View>
                  
                  <View onClick={this.handleClick.bind(this, id)} style={_styleSheet["home-recommend__list2-item-btn"]}>
                    <Text numberOfLines={1}>
                      立即申请
                    </Text>
                  </View>
                </View>;
        })}
          </View>}
      </View>;
  }
}, _class.defaultProps = {
  list: [],
  isList: true
}, _temp);
export { Recommend as default };