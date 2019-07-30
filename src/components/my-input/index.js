import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Icon} from '@tarojs/components'
import './index.scss'

export default class MyInput extends Component {
    render () {
        return (
            <View className={!this.props.hasBorder ? 'text-input' : 'text-input text-input-border'}>
                <View className='text-input-name'>
                    <Text className='text-input-name-txt'>
                        {this.props.inputName}
                    </Text>
                    {this.props.finished ? <Icon size='18' type='success' className='my-input-icon' color='#09BB07'></Icon> : <Text></Text>}
                </View>
                <View className='text-input-item-view'>
                    <Input 
                      className='text-input-item' 
                      type={this.props.type} 
                      placeholder={this.props.noPlaceholder ? '' :'请输入' + this.props.inputName} 
                      onInput={this.props.onInput}
                    />
                </View>
            </View>
        )
    }
}