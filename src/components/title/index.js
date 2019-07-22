import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class Title extends Component {
    render () {
        const backIcon = '<';
        return (
            <View className={process.env.TARO_ENV === 'rn' ? 'title-view-rn':'title-view'}>
                <Text  className={process.env.TARO_ENV === 'rn' ? 'title-view-rn-icon':'title-view-icon'}>
                    {backIcon}
                </Text>
                <Text className={process.env.TARO_ENV === 'rn' ? 'title-view-rn-title':'title-view-title'}>
                    申请办卡
                </Text>
            </View>
        )
    }
}

