var _class, _temp2;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, ScrollView } from "@tarojs/components-rn";
// import { Loading } from '@components'
// import { connect } from '@tarojs/redux'
// import * as actions from '@actions/home'
// import { dispatchCartNum } from '@actions/cart'
import { getWindowHeight } from "../../utils/style";
import Recommend from "./recommend/index";
import homeStyleSheet from "./home_styles";
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import { Title } from "../../components/index";
import Search from "./search/index";
import Location from "./location/index";
import Tip from "./tip/index";
import Select from "./select/index";

var _styleSheet = homeStyleSheet;
const RECOMMEND_SIZE = 20;

// @connect(state => state.home, { ...actions })
let Home = (_temp2 = _class = class Home extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      loaded: false,
      loading: false,
      lastItemId: 0,
      hasMore: true,
      showTip: true,
      isList: true,
      height: parseInt(getWindowHeight()) - 170,
      showTip: true,
      recommend: [{
        id: 1,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/3.jpg")
        }
      }, {
        id: 2,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 3,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 4,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 5,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 6,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 7,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }, {
        id: 8,
        type: 1,
        categoryItem: {
          name: 'haha',
          simpleDesc: "hahah",
          listPicUrl: require("../../img/2.jpg")
        }
      }]
    }, this.changeList = () => {
      console.log('handleIconClick');
      this.setState({
        isList: !this.state.isList
      });
    }, this.handleTipClick = () => {
      this.setState({
        showTip: false,
        height: parseInt(getWindowHeight()) - 121
      });
    }, this.handleSelect = id => {
      console.log(id);
      this.setState({
        recommend: [{
          id: 1,
          type: 1,
          categoryItem: {
            name: 'haha',
            simpleDesc: "hahah",
            listPicUrl: require("../../img/6.jpg")
          }
        }, {
          id: 2,
          type: 1,
          categoryItem: {
            name: 'haha',
            simpleDesc: "hahah",
            listPicUrl: require("../../img/4.jpg")
          }
        }, {
          id: 3,
          type: 1,
          categoryItem: {
            name: 'haha',
            simpleDesc: "hahah",
            listPicUrl: require("../../img/5.jpg")
          }
        }, {
          id: 4,
          type: 1,
          categoryItem: {
            name: 'haha',
            simpleDesc: "hahah",
            listPicUrl: require("../../img/3.jpg")
          }
        }] });
    }, _temp;
  }

  handleSearchClick() {
    console.log('handleSearchClick');
  }

  handleBrandClick() {
    console.log('handleBrandClick');
  }

  handleLevelClick() {
    console.log('handleLevelClick');
  }

  render() {

    const { recommend } = this.state;
    return <View style={_styleSheet["home"]}>
        <Title />
        <Search isList={this.state.isList} changeList={this.changeList} onClick={() => this.handleSearchClick()} />
        <Location city="广州" />
        {this.state.showTip ? <View onClick={this.handleTipClick} style={_styleSheet["tip-background"]}>
            <Tip /> 
          </View> : <View />}
        <Select />
        
        <ScrollView scrollY
      // onScrollToLower={this.loadRecommend}
      style={[_styleSheet["home__wrap"], { height: this.state.height }]}>
          <Recommend list={recommend} isList={this.state.isList} handleSelect={this.handleSelect.bind(this)} />
        </ScrollView>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: 'Demo'
}, _temp2);


export default Home;