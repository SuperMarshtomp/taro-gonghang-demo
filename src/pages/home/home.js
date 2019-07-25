import Taro, { Component } from '@tarojs/taro'
import { Text, Image, View, ScrollView } from '@tarojs/components'
import { Modal } from "react-native"
// import { Loading } from '@components'
// import { connect } from '@tarojs/redux'
// import * as actions from '@actions/home'
// import { dispatchCartNum } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend'
import './home.scss'
import detailImg from '@img/detail.png'
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import { Title } from '@components'
import Search from './search'
import Location from './location'
import Tip from './tip'
import Select from './select'

// const RECOMMEND_SIZE = 20
var titleHeight = 138;
var noTitleHeight = 46

// @connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: '申请办卡'
  }

  state = {
    // loaded: false,
    // loading: false,
    // lastItemId: 0,
    hasMore: true,
    showTip: true,
    showItem: {},
    isList: true,
    height:parseInt(getWindowHeight()),
    showTip: true,
    showDetail: false,
    recommend:[
      {
        id: 1,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/3.jpg")
        }
      },
      {
        id: 2,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 3,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 4,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 5,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 6,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 7,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
      {
        id: 8,
        type: 1,
        categoryItem:{
          name: 'haha',
          simpleDesc:["hahah"],
          listPicUrl:require("../../img/2.jpg")
        }
      },
    ]
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'h5'){
      this.setState({
        height:this.state.height - 192
      })
    }
    if (process.env.TARO_ENV === 'rn'){
      this.setState({
        height:this.state.height - 138
      })
    }
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
      height: this.state.height + noTitleHeight,
    })
  }

  handleShowDetail = (showItem) => {
    this.setState({
      showItem,
      showDetail : !this.state.showDetail
    },() => {
      this.forceUpdate()
    })
  }

  handleHidden = () => {
    this.setState({
      showDetail: false,
      showItem:{}
    })
  }

  handleSelect = (id) =>{
    this.setState({
      recommend:[
        {
          id: 1,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:["hahah"],
            listPicUrl:require("../../img/6.jpg")
          }
        },
        {
          id: 2,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:["hahah"],
            listPicUrl:require("../../img/4.jpg")
          }
        },
        {
          id: 3,
          type: 1,
          categoryItem:{
            name: 'haha',
            simpleDesc:["hahah"],
            listPicUrl:require("../../img/5.jpg")
          }
        },
        {
          id: 4,
          type: 1,
          categoryItem:{
            name: '工银故宫联名信用卡',
            simpleDesc:["白金卡免首年年费（活动期内）","金卡任意消费5笔免年费","故宫图书、文创产品9折优惠","新客赠故宫文创惊喜福袋（即将上线，敬请期待）","容时容差服务"],
            listPicUrl:require("../../img/detail.png")
          }
        },
      ]}
    )
  }

  render () {
    const { recommend, showItem } = this.state
    return (
      <View className='home'>
        {
          process.env.TARO_ENV === 'h5' && this.state.showDetail ?
          <View className="h0" onClick={ this.handleHidden }>
            <View className="h1">
              <View>
                <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
              </View>
              <View className = "h2"> 
                <Text className = "h2-title">{showItem.name}</Text>
                {
                  showItem.simpleDesc.map((desc, index) => {
                    return (
                      <View key={index} className='h2-desc'>
                        <View className='h2-desc-point' />
                        <Text className='h2-desc-txt'>{desc}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </View>:
          <View />
        }
        {
          process.env.TARO_ENV === 'weapp' && this.state.showDetail ?
          <View className="w0" onClick={ this.handleHidden }>
            <View className="w1">
              <View>
                <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
              </View>
              <View className = "w2"> 
                <Text className = "w2-title">{showItem.name}</Text>
                {
                  showItem.simpleDesc.map((desc, index) => {
                    return (
                      <View key={index} className='w2-desc'>
                        <View className='w2-desc-point' />
                        <Text className='w2-desc-txt'>{desc}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            <CoverView />
          </View>:
          <View />
        }
        {
          process.env.TARO_ENV === 'rn' && this.state.showDetail ?
            <Modal animationType={'none'}
                    transparent={true}
                    visible={true}
                    onRequestClose={() =>{}}
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    >
                <View className = 'r0' onClick={ this.handleHidden } >
                  <View className = "r1" style={{ marginTop: 100}}>
                    <View>
                      <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
                    </View> 
                    <View className = "r2"> 
                      <Text className = "r2-title">{showItem.name}</Text>
                      {
                        showItem.simpleDesc.map((desc, index) => {
                          return (
                            <View key={index} className='r2-desc'>
                              <View className='r2-desc-point' />
                              <Text className='r2-desc-txt'>{desc}</Text>
                            </View>
                          )
                        })
                      }
                    </View>
                  </View>
                </View>
            </Modal>:<View />
        }
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
          style={process.env.TARO_ENV === 'rn' ? { height: this.state.height}:{height: this.state.height +'px'}}
        >
          <Recommend 
            handleShowDetail = {this.handleShowDetail.bind(this)} 
            list={recommend} 
            isList = {this.state.isList} 
            handleSelect = {this.handleSelect.bind(this)}
            />
        </ScrollView>
      </View>
    )
  }
}

export default Home
