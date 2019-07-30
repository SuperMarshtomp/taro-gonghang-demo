import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {Picker} from 'react-native'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    language:'java',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
    )
  }
}
