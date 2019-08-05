import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Change extends Component {
    render () {
        return (
            // <View className='change'>
            //     <Text className='change-name'>
            //         您申请的信用卡为：{ this.props.cardName }
            //     </Text>
            //     <View className='change-btn'>
            //         <Text className='change-btn-ins' onClick={this.props.onClick}>
            //             重新选卡
            //         </Text>
            //     </View>
            // </View>

            <View>
                {
                    process.env.TARO_ENV === 'rn' ? 
                    <View className='info-save-rn'>
                        <View className='info-save-rn-intro'>
                            <Text className="info-save-rn-intro-txt">
                                您申请的信用卡为：{ this.props.cardName }
                            </Text>
                        </View>
                        <View className='info-save-rn-btn'>
                            <View className='info-save-rn-btn-view' onClick={this.props.onClick}>
                                <Text className='info-save-rn-btn-txt'>
                                    重新选卡
                                </Text>
                            </View>
                        </View>
                    </View>:
                    <View className='info-save'>
                        <View className='info-save-intro'>
                            <Text>
                                您申请的信用卡为：{ this.props.cardName }
                            </Text>
                        </View>
                        <View className='info-save-btn-view'>
                            <View className='info-save-btn' onClick={this.props.onClick}>
                                <Text>
                                    重新选卡
                                </Text>
                            </View>
                        </View>
                    </View>
                }
            </View>
        )
    }
}