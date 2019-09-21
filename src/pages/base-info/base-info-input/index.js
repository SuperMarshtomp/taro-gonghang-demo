import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

import MyInput from '@components/my-input'

export default class BaseInfoInput extends Component {
    render () {
        return (
            <View className='base-info-input-view'>
                <View className='base-info-input'>
                    <MyInput inputName='姓名' type='text' value={this.props.baseInfo.name} hasBorder onInput={this.props.onNameInput} />
                    <MyInput inputName='身份证号' type='idcard' value={this.props.baseInfo.idCard} hasBorder onInput={this.props.onIdCardInput} />
                    <MyInput inputName='手机号' type='number' value={this.props.baseInfo.phone} hasBorder onInput={this.props.onPhoneInput} />
                    <View className='base-info-input-verify'>
                        {/* <MyInput inputName='短信验证码' type='number' /> */}
                        <View className='verify-text-input'>
                            <View className='verify-text-input-name'>
                                <Text className='verify-text-input-name-txt'>
                                    短信验证码
                                </Text>
                            </View>
                            <Input 
                              className='verify-text-input-item' 
                              type='number' 
                              placeholder='请输入短信验证码' 
                              onInput={this.props.onVerifyCodeInput}
                              value={this.props.baseInfo.verifyCode}
                              placeholder-style={
                                process.env.TARO_ENV === 'swan'
                                ? 'color: #999999'
                                : null
                              }
                            />
                        </View>
                        
                        <View className={process.env.TARO_ENV === 'rn' ? 'base-info-input-verify-btn-view-rn' :'base-info-input-verify-btn-view'} onClick={this.props.onClick}>
                            {/* <View className='base-info-input-verify-btn'> */}
                                <Text className={process.env.TARO_ENV === 'rn' ? 'base-info-input-verify-btn-rn' :'base-info-input-verify-btn'}>
                                    获取验证码
                                </Text>
                            {/* </View> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}