import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './base-info.scss'
import { getWindowHeight } from '@utils/style'
import Title from '@components/title'
import Change from './change'
import CardIntro from './card-intro'

import cardImage from './assets/card.jpg'

import BaseInfoInput from './base-info-input'
import Confirm from './confirm'

import { LOCAL_HOST, fetch } from '@server'

export default class BaseInfo extends Component {

    state = {
        cardName: '故宫-九有一心红白金卡',
        cardImage: cardImage,
        myPoints: ['中国银联', '白金卡', '磁条+IC+非接触', '人民币'],
        introduce: '首款故宫LOGO联名卡，白金卡免首年年费，限时赢故宫迎春礼盒，故宫图书、文创品9折，故宫AR特效。荣时荣差，适用特殊计息',
        checked: false,

        baseInfo: {
            name: '',
            idCard: '',
            phone: '',
            verifyCode: ''
        }
    }

    getCardInfo () {
        fetch({
            url: `${LOCAL_HOST}/api/seriesLists/specificCards/cards`,
            payload: {
                sessionId: '1' ,
                seriesId: '5',
                cardId: '001'
            }
        }).then((res) => {
            console.log(res);
            const { seriesData, cardData } = res;
            this.setState({
                cardName: cardData[0].cardTitle,
                cardImage: LOCAL_HOST + '/' + cardData[0].cardPicture,
                myPoints: seriesData[0].seriesProperty,
                introduce: seriesData[0].seriesContent
            })
        })
    }

    // 判断是否二次办卡
    getHistory () {
        fetch({
            url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases/pageTurns`,
            payload: {
                sessionId: '1',
                userIdCard: this.state.baseInfo.idCard
            }
        }).then((res) => {
            console.log(res);
            if (res.page == '0') {
                Taro.navigateTo({
                    url: '/pages/detail-info/detail-info'
                })
            } else {
                Taro.navigateTo({
                    url: '/pages/again/again'
                })
            }
        })
    }

    postBaseInfo () {
        fetch({
            url: `${LOCAL_HOST}/api/seriesLists/specificCards/bases`,
            payload: {
                sessionId: '1',
                userName: this.state.baseInfo.name,
                userIdCard: this.state.baseInfo.idCard,
                userPhone: this.state.baseInfo.phone,
                cardId: '001',
                cardTitle: this.state.cardName
            }
        }).then((res) => {
            console.log(res);
            if (res.status >= 200 && res.status <= 300) {
                this.getHistory();
            }
        })
    }

    componentWillMount () { 
        this.getCardInfo();
    }

    handleChangeClick = () => {
        Taro.navigateTo({
            url: '/pages/home/home'
        })
    }

    handleGetVerifyClick = () => {
        console.log('handleGetVerifyClick');
    }

    onCheckBoxChange = () => {
        this.setState({
            checked: !this.state.checked
        }, () => {console.log(this.state.checked)})
    }

    handleConfirmClick = () => {
        if (this.state.baseInfo.name != '' && this.state.baseInfo.idCard != '' && this.state.baseInfo.phone != '' && this.state.baseInfo.verifyCode != '') {
            if (this.state.checked) {
                this.postBaseInfo();
            } else {
                Taro.showToast({
                    title: '请阅读并同意《申请人说明》',
                    icon: 'none'
                })
            }
        } else {
            Taro.showToast({
                title: '信息未填写完整',
                icon: 'none'
            })
        }
    }

    onNameInput = (e) => {
        let temp = this.state.baseInfo;
        temp.name = e.detail.value;
        this.setState({
            baseInfo: temp
        }, () => {console.log(this.state.baseInfo)})
    }

    onIdCardInput = (e) => {
        let temp = this.state.baseInfo;
        temp.idCard = e.detail.value;
        this.setState({
            baseInfo: temp
        }, () => {console.log(this.state.baseInfo)})
    }

    onPhoneInput = (e) => {
        let temp = this.state.baseInfo;
        temp.phone = e.detail.value;
        this.setState({
            baseInfo: temp
        }, () => {console.log(this.state.baseInfo)})
    }

    onVerifyCodeInput = (e) => {
        let temp = this.state.baseInfo;
        temp.verifyCode = e.detail.value;
        this.setState({
            baseInfo: temp
        }, () => {console.log(this.state.baseInfo)})
    }

    render () {
        return (
            <View className='base-info' style={ !process.env.TARO_ENV === 'rn'? { height: getWindowHeight() }:{}}>
                {process.env.TARO_ENV === 'h5' ? <Title /> : <View />}
                <Change cardName={this.state.cardName} onClick={this.handleChangeClick} />
                <CardIntro cardImage={this.state.cardImage} myPoints={this.state.myPoints} introduce={this.state.introduce} />
                <BaseInfoInput 
                  onClick={this.handleGetVerifyClick} 
                  baseInfo={this.state.baseInfo} 
                  onNameInput={this.onNameInput}
                  onIdCardInput={this.onIdCardInput}
                  onPhoneInput={this.onPhoneInput}
                  onVerifyCodeInput={this.onVerifyCodeInput}
                />
                <Confirm 
                  onClick={this.handleConfirmClick} 
                  checked={this.state.checked} 
                  onCheckBoxChange={this.onCheckBoxChange}
                />
            </View>
        )
    }
}