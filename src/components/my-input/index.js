import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import './index.scss'

import successIcon from '../../img/successIcon.png'

export default class MyInput extends Component {
    render () {
        return (
            <View className={!this.props.hasBorder ? 'text-input' : 'text-input text-input-border'}>
                {/* <View className='text-input-name'>
                    <Text className='text-input-name-txt'>
                        {this.props.inputName}
                    </Text>
                    {
                        this.props.finished 
                        ? <Icon 
                          size='18' 
                          type='success' 
                          className={
                            process.env.TARO_ENV === 'tt'
                            ? 'my-input-icon-tt'
                            : 'my-input-icon'
                          }
                          color='#09BB07'
                        ></Icon> 
                        : <Text></Text>
                    }
                </View> */}
                <View className='my-input-title'>
                    <View className='my-input-title-name'>
                        <Text className='my-input-title-name-txt'>{this.props.inputName}</Text>
                    </View>
                    <View className='my-input-title-img'>
                        { 
                            this.props.finished  
                                ? <Image 
                                  src={successIcon} 
                                  className={
                                      process.env.TARO_ENV === 'h5' 
                                      ? 'my-input-title-img-icon'
                                      : 'my-input-title-img-icon-weapp'  
                                    }
                                />
                                : null
                        }
                    </View>
                </View>

                <View className='text-input-item-view'>
                    <Input 
                      className='text-input-item' 
                      type={this.props.type} 
                      placeholder={this.props.noPlaceholder ? '' :'请输入' + this.props.inputName} 
                      onInput={this.props.onInput}
                      value={this.props.value}
                      placeholder-style={
                        process.env.TARO_ENV === 'swan'
                        ? 'color: #999999'
                        : null
                      }
                    />
                </View>
            </View>
        )
    }
}