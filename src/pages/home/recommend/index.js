import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, CoverView } from '@tarojs/components'
// import { Modal } from "react-native"
import './index.scss'
import cardImage from './1.jpg'

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
        <View className="w1" onClick={ this.handleHidden }>
          <View className="w2">
            <Text>
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
        <View className="h1" onClick={ this.handleHidden }>
          <View  className="h2">
            <Text>
              {showItem.name}
            </Text>
          </View>
        </View>:
        <View />
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

                  <Image className='home-recommend__list-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)} src={cardImage} />
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
                  <Image className='home-recommend__list2-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)} src={cardImage} />

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
