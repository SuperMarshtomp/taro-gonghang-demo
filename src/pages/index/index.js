import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image, Picker, Button } from '@tarojs/components'
import './index.css'

import logo_2 from '../../asset/images/logo_2.jpg'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex: ['男', '女'],
      index: 0,
      phone: '',
      age: ''
    };

    this.onSexChange = this.onSexChange.bind(this);
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onSexChange(e) {
    this.setState({
      index: e.detail.value
    })
  }

  render () {
    return (
      <View>
        <View className='title'>
          <Image src={logo_2} className='logo'></Image>
        </View>
        <View className='inputItem'>
          <Text>姓名：</Text>
          <Input className='input' placeholder='请输入姓名' value={this.state.name} />
        </View>
        <View className='inputItem'>
          <Text>性别：</Text>
          <View className='picker'>
            <Picker mode='selector' value={this.state.index} range={this.state.sex} onChange={this.onSexChange}>
              <Text>{this.state.sex[this.state.index]}</Text>
            </Picker>
          </View>
        </View>
        <View className='inputItem'>
          <Text>手机：</Text>
          <Input className='input' placeholder='请输入手机号码' value={this.state.phone} />
        </View>
        <View className='inputItem'>
          <Text>年龄：</Text>
          <Input className='input' placeholder='请输入年龄' value={this.state.age} />
        </View>
        <View>
          {process.env.TARO_ENV === 'tt' ? <Button type='primary' size='default'>提交</Button> : <Button type='warn' size='default'>提交</Button>}
        </View>
        <View>
          {process.env.TARO_ENV === 'tt' ? <Button type='primary' size='default'>提交</Button> : <Button type='warn' size='default'>提交</Button>}
        </View>
      </View>
    )
  }
}

