import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './base-info.scss'

import Title from '@components/title'
import Change from './change'
import CardIntro from './card-intro'

import cardImage from './assets/card.jpg'

import BaseInfoInput from './base-info-input'
import Confirm from './confirm'

export default class BaseInfo extends Component {

    state = {
        cardName: '故宫-九有一心红白金卡',
        cardImage: cardImage,
        myPoints: ['中国银联', '白金卡', '磁条+IC+非接触', '人民币'],
        introduce: '首款故宫LOGO联名卡，白金卡免首年年费，限时赢故宫迎春礼盒，故宫图书、文创品9折，故宫AR特效。荣时荣差，适用特殊计息',
        checked: false
    }

    handleChangeClick = () => {
        Taro.navigateTo({
            url: '/pages/home/home'
        })
    }

    handleGetVerifyClick = () => {
        console.log('handleGetVerifyClick');
    }

    handleConfirmClick = () => {
        console.log('handleConfirmClick');
    }

    render () {
        return (
            <View className='base-info'>
                {
          process.env.TARO_ENV === 'h5' ? <Title /> : <View />
        }
                <Change cardName={this.state.cardName} onClick={this.handleChangeClick} />
                <CardIntro cardImage={this.state.cardImage} myPoints={this.state.myPoints} introduce={this.state.introduce} />
                <BaseInfoInput onClick={this.handleGetVerifyClick} />
                <Confirm onClick={this.handleConfirmClick} checked={this.state.checked} />
            </View>
        )
    }
}