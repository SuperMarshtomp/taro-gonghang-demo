import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import './index.scss'

export default class Tip extends Component {

    render () {
      return (
        <View  className='tip'>
          <Text className='tip-text'>
              温馨提示：您选择的办卡城市需与工作或住宅所在地相同，否则可能导致申请不成功。
          </Text>
          <Text className='tip-btn' >
              我知道了
          </Text>
        </View>
      )
    }
}