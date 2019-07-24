import Taro, { Component } from '@tarojs/taro'
import { Text, View, ScrollView } from '@tarojs/components'
// import { Loading } from '@components'
// import { connect } from '@tarojs/redux'
// import * as actions from '@actions/home'
// import { dispatchCartNum } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend'
import './home.scss'
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import { Title } from '@components'
import Search from './search'
import Location from './location'
import Tip from './tip'
import Select from './select'

const RECOMMEND_SIZE = 20

// @connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: '申请办卡'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true,
    showTip: true,
    isList: true,
    height:parseInt(getWindowHeight())-170,
    showTip: true,
    recommend:[
      {
        id: 1,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/3.jpg")
        }
      },
      {
        id: 2,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 3,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 4,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 5,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 6,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 7,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 8,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:require("../../img/2.jpg")
        }
      },
    ]
  }

  handleSearchClick () {
    console.log('handleSearchClick');
  }

  handleBrandClick () {
    console.log('handleBrandClick');
  }

  handleLevelClick () {
    console.log('handleLevelClick');
  }

  changeList = () => {
    console.log('handleIconClick');
    this.setState({
      isList: !this.state.isList
    })
  }

  handleTipClick = () => {
    this.setState({
      showTip: false,
      height: parseInt(getWindowHeight())-121,
    })
  }

  handleSelect = (id) =>{
    console.log(id)
    this.setState({
      recommend:[
        {
          id: 1,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:"hahah",
            listPicUrl:require("../../img/6.jpg")
          }
        },
        {
          id: 2,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:"hahah",
            listPicUrl:require("../../img/4.jpg")
          }
        },
        {
          id: 3,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:"hahah",
            listPicUrl:require("../../img/5.jpg")
          }
        },
        {
          id: 4,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:"hahah",
            listPicUrl:require("../../img/3.jpg")
          }
        },
      ]}
    )
  }

  render () {

    const { recommend } = this.state
    return (
      <View className='home'>
        {
          process.env.TARO_ENV === 'h5' ? <Title /> : <View />
        }
        <Search isList = {this.state.isList} changeList = {this.changeList} onClick={ () => this.handleSearchClick() }/>
        <Location city='广州' />
        { 
          this.state.showTip ? 
          <View className = "tip-background" onClick={this.handleTipClick}>
            <Tip /> 
          </View>:<View/>
        }
        <Select />
        
        <ScrollView
          scrollY
          className='home__wrap'
          // onScrollToLower={this.loadRecommend}
          style={{ height: this.state.height}}
        >
          <Recommend list={recommend} isList = {this.state.isList} handleSelect = {this.handleSelect.bind(this)}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home
