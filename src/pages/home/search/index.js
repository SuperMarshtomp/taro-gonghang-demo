import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './index.scss'

import icon_1 from './assets/icon_1.jpg'
import icon_2 from './assets/icon_2.jpg'

export default class Search extends Component {

    render () {
        return (
            <View className='search'>
                <View className={process.env.TARO_ENV !== 'h5' ? 'img-view_rn':'img-view'} onClick={this.props.changeList}>
                    <Image className='img' src={this.props.isList ? icon_2 : icon_1} />
                </View>
                <View className='input-view'>
                    <View className='input'>
                        <Input 
                          className='card-input' 
                          type='text' 
                          placeholder='想要什么卡？' 
                          placeholder-style={
                            process.env.TARO_ENV === 'swan'
                            ? 'color: #999999'
                            : null
                          }
                        />
                    </View>
                </View>
                <View onClick={this.props.onClick} className='button-view'>
                    <Text className='button-view-txt' >
                        查询
                    </Text>
                </View>
            </View>
        )
    }
}