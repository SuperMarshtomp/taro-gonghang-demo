import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Select extends Component {
    render () {
        return (
            <View className='select' onClick={ this.props.onClick }>
                <Text className='select-txt'>
                    { this.props.title + ' '}
                </Text>
                <Text className='select-icon'>
                    ▼
                </Text>
            </View>
        )
    }
}