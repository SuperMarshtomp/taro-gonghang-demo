import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'
import './index.scss'

import successIcon from '../../img/successIcon.png'

export default class MyRadio extends Component {
    static defaultProps = {
        radioInfo: {
            radioName: '身份证到期日',
            radioList: ['手动输入', '长期有效'],
            finished: false,
            selected: -1
        }
    }
    render () {
        let radioInfo = JSON.parse(JSON.stringify(this.props.radioInfo));

        const listLength = radioInfo.radioList.length > 4 ? 3 : radioInfo.radioList.length;

        let temp = radioInfo.radioList;
        if (temp.length > 4) {
            while(temp.length % 3 !== 0) {
                temp.push('');
            }
        }

        return (
            <View className='my-radio'>
                <View className='my-radio-title'>
                    <View className='my-radio-title-name'>
                        <Text className='my-radio-title-name-txt'>{radioInfo.radioName}</Text>
                    </View>
                    <View className='my-radio-title-img'>
                        { 
                            radioInfo.finished 
                                ? <Image 
                                  src={successIcon} 
                                  className={
                                      process.env.TARO_ENV === 'h5' 
                                      ? 'my-radio-title-img-icon'
                                      : 'my-radio-title-img-icon-weapp'  
                                    }
                                />
                                : null
                        }
                    </View>
                </View>

                <View className='my-radio-list'>
                    {
                        temp.map((item, index) => {
                            return item != ''
                                ?
                                (
                                    <View
                                      onClick={() => {this.props.onRadioClick(index, radioInfo.name)}} 
                                      key={item} 
                                      className={radioInfo.selected != index 
                                                ? 'my-radio-list-item my-radio-list-item-border my-radio-list-item-' + listLength
                                                : 'my-radio-list-item my-radio-list-item-border my-radio-list-item-red my-radio-list-item-' + listLength}
                                    >
                                        <Text className={radioInfo.selected != index 
                                                ? 'my-radio-list-item-txt'
                                                : 'my-radio-list-item-txt my-radio-list-item-txt-red'}>{item}</Text>
                                    </View>
                                )
                                :
                                (
                                    <View key={item} className={'my-radio-list-item my-radio-list-item-' + listLength}>
                                        <Text className={radioInfo.selected != index 
                                                ? 'my-radio-list-item-txt'
                                                : 'my-radio-list-item-txt my-radio-list-item-txt-red'}>{item}</Text>
                                    </View>
                                )
                        })
                    }
                </View>
            </View>
        )
    }
}