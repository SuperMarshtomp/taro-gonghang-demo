import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'
// import axios from 'axios'
import server from '../../server'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  async getTest(){
    const res = await server.post('api/seriesLists',{sessionId:1})
    console.log(res)
  }


  componentWillMount () { 
    this.getTest()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Text></Text> */}
      </View>
    )
  }
}
