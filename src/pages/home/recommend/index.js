import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, CoverView } from '@tarojs/components'
import { Modal } from "react-native"
import './index.scss'
import cardImage from '../../../img/1.jpg'

export default class Recommend extends Component {
  static defaultProps = {
    list: [],
    isList: true
  }

  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      showItem: {}
    }
  }

  handleClick = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    })
  }

  handleHidden = () => {
    this.setState({
      showDetail: false
    })
  }

  
  handleShowDetail = (showItem) => {
    this.setState({
      showItem,
      showDetail:true
    },() => {
      this.forceUpdate()
    })
  }

  render () {
    const { list,isList } = this.props
    const { showItem } = this.state
    return (
      <View className='home-recommend'>
      {
        process.env.TARO_ENV === 'weapp' && this.state.showDetail ?
        <View className="w0" onClick={ this.handleHidden }>
          <View className="w1">
            <Text className="w2">
              {showItem.name}
            </Text>
          </View>
              <CoverView>
              </CoverView>
        </View>:
        <View />
      }
      {
        process.env.TARO_ENV === 'h5' && this.state.showDetail ?
        <View className="h0" onClick={ this.handleHidden }>
          <View className="h1">
            <Text className="h2">
              {showItem.name}
            </Text>
          </View>
        </View>:
        <View />
      }
      {
        process.env.TARO_ENV === 'rn' && this.state.showDetail ?
        
          <Modal animationType={'none'}
                  transparent={true}
                  visible={true}
                  onRequestClose={() =>{}}
                  supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                  >
              {/* <View className = "r1" onClick={ this.handleHidden } style={{flex:1, marginTop: 22, justifyContent: 'center', alignItems: 'center'}}> */}
              <View className = 'r0' onClick={ this.handleHidden } >
                <View className = "r1" style={{ marginTop: 222}}>
                    <View>
                        <Text className = "r2">Hello World!</Text>
                        <Text className = "r2">隐藏 Modal</Text>
                    </View>
                </View>
              </View>
          </Modal>:<View />
      }
      {
        isList ?
          <View className='home-recommend__list'>
            {list.filter(item => item.type === 1).map((item) => {
              const { id, categoryItem } = item
              return (
                <View
                  key={id}
                  className='home-recommend__list-item'
                  // onClick={this.handleClick.bind(this, id)}
                >
                  
                  <Text className='home-recommend__list-item-name' onClick={this.handleShowDetail.bind(this, categoryItem)} numberOfLines={1}>
                    {categoryItem.name}
                  </Text>
                  <View onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    <Image className='home-recommend__list-item-img' src={cardImage} />
                  </View>
                  <Text className='home-recommend__list-item-desc' onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    {categoryItem.simpleDesc}
                  </Text>
                  <View 
                    className='home-recommend__list-item-btn'
                    onClick={this.handleClick.bind(this, id)}
                  >
                    <Text className='home-recommend__list-item-btn-txt' numberOfLines={1}>
                      立即申请
                    </Text>
                  </View>
                </View>
                
              )
            })}
          </View>
        :
          <View className='home-recommend__list2'>
            {list.filter(item => item.type === 1).map((item) => {
              const { id, categoryItem } = item
              return (
                <View
                  key={id}
                  className='home-recommend__list2-item'
                  
                >
                  <View className='home-recommend__list2-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    <Image className='home-recommend__list2-item-img-ins' src={cardImage} />
                  </View>
                  <View className="home-recommend__list2-item-text" onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    <Text className='home-recommend__list2-item-text-name' numberOfLines={1}>
                      {categoryItem.name}
                    </Text>
                    <Text className='home-recommend__list2-item-text-desc'>
                      {categoryItem.simpleDesc}
                    </Text>
                  </View>
                  
                  <View className='home-recommend__list2-item-btn'  onClick={this.handleClick.bind(this, id)}>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'home-recommend__list2-item-btn-txt':'home-recommend__list2-item-btn-txt-h5'} numberOfLines={1}>
                      立即申请
                    </Text>
                  </View>
                </View>
              )
            })}
          </View>
      }
      </View>
    )
  }
}
