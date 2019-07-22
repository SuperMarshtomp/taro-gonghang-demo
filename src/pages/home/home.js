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
    navigationBarTitleText: 'Demo'
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
          listPicUrl:"1234",
        }
      },
      {
        id: 2,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 3,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 4,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 5,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 6,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 7,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
        }
      },
      {
        id: 8,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:"hahah",
          listPicUrl:"1234",
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
      height: parseInt(getWindowHeight())-120,
    })
  }

  render () {

    const { recommend } = this.state
    return (
      <View className='home'>
        <Title />
        <Search isList = {this.state.isList} changeList = {this.changeList} onClick={ () => this.handleSearchClick() }/>
        <Location city='广州' />
        { 
          this.state.showTip ? 
          <View onClick={this.handleTipClick}>
            <Tip /> 
          </View>:<View/>
        }
        {/* <View className='index-select-view'>
          <View className='index-select-item' onClick={ () => this.handleBrandClick() }>
            <Select title='全部品牌'/>
          </View>
          <View className='index-select-item' onClick={ () => this.handleLevelClick() }>
            <Select title='全部等级'/> 
          </View>
        </View> */}
        
        <ScrollView
          scrollY
          className='home__wrap'
          // onScrollToLower={this.loadRecommend}
          style={{ height: this.state.height}}
        >
          <Recommend list={recommend} isList = {this.state.isList}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home
