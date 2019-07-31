import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'
import fetch from '../../server'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  getTest(){
    // fetch({ url: 'http://localhost:8080/api/seriesLists', showToast: true,payload:{sessionId:1}}).then((res) => {
    //   if (res) {
    //     console.log(res)
    //   } else {
    //     console.log('err')
    //   }
    // })
    Taro.request({
      method: 'POST',
      url: 'http://localhost:3333/api/seriesLists',
      data: {
        sessionId: '1'
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res) => console.log(res.data))
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
