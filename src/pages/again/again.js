import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import './again.scss'

import Title from '@components/title'

import { getWindowHeight } from '@utils/style'

export default class Again extends Component {
    state = {
        name: '陈旭涛',
        sex: '男',

        radioInfo: {
            radioName: '卡片邮寄地址',
            radioList: ['单位地址', '住宅地址'],
            selected: 0
        },

        companyAddress: '广东省广州市',
        houseAddress: '广东省汕头市'
    }

    onRadioClick = (index) => {
        let temp = this.state.radioInfo;
        temp.selected = parseInt(index);

        this.setState({
            radioInfo: temp
        }, () => {console.log(this.state.radioInfo)})
    }

    onConfirmClick = () => {
        Taro.navigateTo({
            url: '/pages/success-info/success-info'
        })
    }

    render () {
        const { radioInfo } = this.state; 

        return (
            <View className='again' style={{ height: getWindowHeight() }}>
                {/* h5需Title组件 */}
                {
                    process.env.TARO_ENV === 'h5' ? <Title /> : <View />
                }

                <View className='again-white-block'>
                </View>
                <View className='again-tip-view'>
                    <View className='again-tip-name'>
                        <Text className='again-tip-view-txt'>尊敬的 {this.state.name} { this.state.sex == '男' ? '先生' : '女士'}</Text>
                    </View>
                    <View className='again-tip'>
                        <Text className='again-tip-view-txt'>您仅需选择以下信息即可完成办卡申请，申请信息将使用您近一年半内最近一次在我行申请办卡的信息，若您希望更新申请信息，可 <Text className='again-tip-blue'>填写完整信息</Text> 并重新办理。</Text>
                    </View>
                </View>

                <View>
                    <View className='again-radio'>
                        <View className='again-radio-name'>
                            <Text className="again-radio-name-txt">{this.state.radioInfo.radioName}</Text>
                            <Icon size='15' type='info' className='again-radio-icon' color='#ff204d'></Icon>
                        </View>
                        <View className='again-radio-list'>
                            {
                                radioInfo.radioList.map((item, index) => {
                                    return (
                                            <View
                                              onClick={() => this.onRadioClick(index)} 
                                              key={item} 
                                              className={radioInfo.selected != index 
                                                        ? 'again-radio-list-item'
                                                        : 'again-radio-list-item again-radio-list-item-red'}
                                            >
                                                <Text className = {radioInfo.selected != index 
                                                        ? 'again-radio-list-txt'
                                                        : 'again-radio-list-txt again-radio-list-txt-red'}>{item}</Text>
                                            </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View className='again-address'>
                        <Text>{this.state.radioInfo.selected == '0' ? this.state.companyAddress : this.state.houseAddress}</Text>
                    </View>
                </View>

                {/* 提交申请按钮 */}
                <View className='again-confirm-btn' onClick={this.onConfirmClick}>
                    <Text className='again-confirm-btn-txt'>
                        提交申请
                    </Text>
                </View>
            </View>
        )
    }
}