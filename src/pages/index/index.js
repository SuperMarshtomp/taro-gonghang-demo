import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

import './index.scss'
import fetch from '../../server'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    temp:''
  }

  getTest(){
    fetch({ url: 'http://localhost:3333/api/seriesLists', showToast: true,payload:{sessionId:1}}).then((res) => {
      if (res) {
        console.log(res)
        this.setState({
          temp:res.msg
        })
      } else {
        console.log('err')
      }
    })
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
        <Text>{this.state.temp}</Text>
      </View>
    )
  }
}
