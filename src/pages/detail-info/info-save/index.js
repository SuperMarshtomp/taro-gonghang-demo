import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class InfoSave extends Component {
    render () {
        return (
            <View>
                {
                    process.env.TARO_ENV === 'rn' ? 
                    <View className='info-save-rn'>
                        <View className='info-save-rn-intro'>
                            <Text className="info-save-rn-intro-txt">
                                您的信息将存入草稿箱
                            </Text>
                        </View>
                        <View className='info-save-rn-btn'>
                            <View className='info-save-rn-btn-view' onClick={this.props.onClick}>
                                <Text className='info-save-rn-btn-txt'>
                                    保存信息
                                </Text>
                            </View>
                        </View>
                    </View>:
                    <View className='info-save'>
                        <View className='info-save-intro'>
                            <Text>
                                您的信息将存入草稿箱
                            </Text>
                        </View>
                        <View className='info-save-btn-view'>
                            <View className='info-save-btn' onClick={this.props.onClick}>
                                <Text>
                                    保存信息
                                </Text>
                            </View>
                        </View>
                    </View>
                }
            </View>
            
        )
    }
}