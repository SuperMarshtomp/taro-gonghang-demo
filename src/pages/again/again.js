import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import './again.scss'

import Title from '@components/title'

import { getWindowHeight } from '@utils/style'

import { LOCAL_HOST, fetch } from '@server'

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

    getName () {
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/secondApplyInquires`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.$router.params.userIdCard,
                }
            }).then((res) => {
                console.log(res);
                this.setState({
                    name: res.userName
                })
            })
        }
    }

    getHouseAddress () {
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/addressAInquires`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.$router.params.userIdCard,
                }
            }).then((res) => {
                console.log(res);
                let liveAddress = '';
                for (let i = 0; i < res.liveAddress.length; i++) {
                    if (res.liveAddress[i] == ' ' || res.liveAddress[i] == '-') {
                        continue;
                    }
                    liveAddress += res.liveAddress[i];
                }

                this.setState({
                    houseAddress: liveAddress
                })
            })
        }
    }

    getCompanyAddress () {
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/addressBInquires`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.$router.params.userIdCard,
                }
            }).then((res) => {
                console.log(res);
                let companyAddress = '';
                for (let i = 0; i < res.companyAddress.length; i++) {
                    if (res.companyAddress[i] == ' ' || res.companyAddress[i] == '-') {
                        continue;
                    }
                    companyAddress += res.companyAddress[i];
                }

                this.setState({
                    companyAddress: companyAddress
                })
            })
        }
    }

    componentWillMount () { 
        this.getName();
        this.getHouseAddress();
        this.getCompanyAddress();
    }

    goToDetail = () => {
        Taro.navigateTo({
            url: '/pages/detail-info/detail-info?userIdCard=' + this.$router.params.userIdCard
        })
    }

    onRadioClick = (index) => {
        let temp = this.state.radioInfo;
        temp.selected = parseInt(index);

        this.setState({
            radioInfo: temp
        }, () => {console.log(this.state.radioInfo)})
    }

    // 提交申请
    submitInfo () {
        if (LOCAL_HOST !== 'null') {
            fetch({
                url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/secondSubmits`,
                payload: {
                    sessionId: '1',
                    userIdCard: this.$router.params.userIdCard,
                    mailAddress: this.state.radioInfo.radioList[this.state.radioInfo.selected]
                }
            }).then((res) => {
                console.log(res);
                Taro.navigateTo({
                    url: '/pages/success-info/success-info?userIdCard=' + this.$router.params.userIdCard
                })
            })
        }
    }
    onConfirmClick = () => {
        this.submitInfo();
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
                        <Text className='again-tip-view-txt'>您仅需选择以下信息即可完成办卡申请，申请信息将使用您近一年半内最近一次在我行申请办卡的信息，若您希望更新申请信息，可 <Text className='again-tip-blue' onClick={this.goToDetail}>填写完整信息</Text> 并重新办理。</Text>
                    </View>
                </View>

                <View>
                    <View className='again-radio'>
                        <View className='again-radio-name'>
                            <Text className='again-radio-name-txt'>{this.state.radioInfo.radioName}</Text>
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
                                                <Text className={radioInfo.selected != index 
                                                        ? 'again-radio-list-txt'
                                                        : 'again-radio-list-txt again-radio-list-txt-red'}
                                                >{item}</Text>
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