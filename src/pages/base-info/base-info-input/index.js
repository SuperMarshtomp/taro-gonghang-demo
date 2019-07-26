import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

import MyInput from '@components/my-input'

export default class BaseInfoInput extends Component {
    state = {
        name: '',
        idCard: '',
        phone: '',
        verifyCode: ''
    }

    onNameInput = (e) => {
        this.setState({
            name: e.detail.value
        }, () => {console.log(this.state)})
    }

    onIdCardInput = (e) => {
        this.setState({
            idCard: e.detail.value
        }, () => {console.log(this.state)})
    }

    onPhoneInput = (e) => {
        this.setState({
            phone: e.detail.value
        }, () => {console.log(this.state)})
    }

    onVerifyCodeInput = (e) => {
        this.setState({
            verifyCode: e.detail.value
        }, () => {console.log(this.state)})
    }

    render () {
        return (
            <View className='base-info-input-view'>
                <View className='base-info-input'>
                    <MyInput inputName='姓名' type='text' hasBorder onInput={this.onNameInput} />
                    <MyInput inputName='身份证号' type='idcard' hasBorder onInput={this.onIdCardInput} />
                    <MyInput inputName='手机号' type='number' hasBorder onInput={this.onPhoneInput} />
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
                              onInput={this.onVerifyCodeInput}
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