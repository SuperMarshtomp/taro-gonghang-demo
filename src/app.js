import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import '@tarojs/async-await'
// import { Provider } from '@tarojs/redux'

// import configStore from './redux/store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// const store = configStore()


class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      'pages/home/secondHome',
      'pages/base-info/base-info',
      'pages/detail-info/detail-info',
      'pages/success-info/success-info',
      'pages/again/again',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#cc0000',
      navigationBarTitleText: '申请办卡',
      navigationBarTextStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      // <Provider store={store}>
      //   <Index />
      // </Provider>
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
