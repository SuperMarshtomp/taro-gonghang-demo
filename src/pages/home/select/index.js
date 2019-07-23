import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Select extends Component {
    render () {
        return (
            <View className = 'select'>
                <View className='select-left' onClick={ this.props.onClick }>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'select-txt-rn':'select-txt'}>
                        { '全部品牌' + ' '}
                    </Text>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'select-icon-rn':'select-icon'}>
                        ▼
                    </Text>
                </View>
                <View className='select-right' onClick={ this.props.onClick }>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'select-txt-rn':'select-txt'}>
                        { '全部等级' + ' '}
                    </Text>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'select-icon-rn':'select-icon'}>
                        ▼
                    </Text>
                </View>
            </View>
        )
    }
}