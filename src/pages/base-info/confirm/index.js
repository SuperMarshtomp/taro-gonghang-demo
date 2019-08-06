import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox } from '@tarojs/components'
import './index.scss'

export default class Confirm extends Component {
    render () {
        return (
            <View>
                <View className='confirm-intro'>
                    {/* <Checkbox className='confirm-intro-check-box' checked={this.props.checked}></Checkbox> */}
                    {
                        process.env.TARO_ENV === 'alipay' || process.env.TARO_ENV === 'rn'
                        ?
                            <Checkbox 
                              className={
                                    process.env.TARO_ENV !== 'tt' ? 
                                    process.env.TARO_ENV !== 'swan' ? 
                                    process.env.TARO_ENV !== 'weapp' ? 
                                    process.env.TARO_ENV !== 'h5' ? 
                                    'confirm-intro-check-box' : 
                                    'confirm-intro-check-box-h5' : 
                                    'confirm-intro-check-box-weapp' : 
                                    'confirm-intro-check-box-swan' : 
                                    'confirm-intro-check-box-tt'
                                    } 
                              checked={this.props.checked}
                              onChange={this.props.onCheckBoxChange}
                            ></Checkbox>
                        :
                        <Checkbox 
                          className={
                                process.env.TARO_ENV !== 'tt' ? 
                                process.env.TARO_ENV !== 'swan' ? 
                                process.env.TARO_ENV !== 'weapp' ? 
                                process.env.TARO_ENV !== 'h5' ? 
                                'confirm-intro-check-box' : 
                                'confirm-intro-check-box-h5' : 
                                'confirm-intro-check-box-weapp' : 
                                'confirm-intro-check-box-swan' : 
                                'confirm-intro-check-box-tt'
                                } 
                          checked={this.props.checked}
                          onClick={this.props.onCheckBoxChange}
                        ></Checkbox>   

                    }
                    <Text className='confirm-intro-txt'>
                        本人已阅读并同意<Text className='confirm-intro-key'>《申请人说明》</Text>；首次办卡客户在收到卡片后须本人携带该卡、身份证原件至办卡城市任一工行网点完成卡片启用
                    </Text>
                </View> 
                <View className='confirm-btn' onClick={this.props.onClick}>
                    <Text className='confirm-btn-txt'>
                        下一步
                    </Text>
                </View>
            </View>
        )
    }
}