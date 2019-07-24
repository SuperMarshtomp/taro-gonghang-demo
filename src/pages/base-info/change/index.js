import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Change extends Component {
    render () {
        return (
            <View className='change'>
                <Text className='change-name'>
                    您申请的信用卡为：{ this.props.cardName }
                </Text>
                <View className='change-btn'>
                    <Text className='change-btn-ins' onClick={this.props.onClick}>
                        重新选卡
                    </Text>
                </View>
            </View>
        )
    }
}