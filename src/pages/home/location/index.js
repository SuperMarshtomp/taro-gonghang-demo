import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

import locationImage from './assets/location.png'

export default class Location extends Component {

    handleLocationClick = () => {
      console.log('handleLocationClick');
    }
    
    render () {
      return (
          <View className='location'>
              <View className='location-city'>
                  <Image className='location-img' src={ locationImage }/>
                  <View>
                      <Text>
                          当前城市：{ this.props.city }
                      </Text>
                  </View>
              </View>
              <View className='location-button-view' onClick={ this.handleLocationClick }>
                  <Text className='location-button-view-txt'>
                      更多
                  </Text>
              </View>
          </View>
      )
    }
}