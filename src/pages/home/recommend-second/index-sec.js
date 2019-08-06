import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index-sec.scss'
import cardImage from '../../../img/1.jpg'
import { LOCAL_HOST } from "@server" 

export default class Recommend extends Component {
  static defaultProps = {
    list: [],
    isList: true,
    
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = (id) => {
    let tempid = parseInt(id);
    this.props.handleSelect(tempid);
  }

  
  handleShowDetail = (showItem) => {
    this.props.handleShowDetail(showItem);
  }

  render () {
    const { list,isList } = this.props
    const localUrl = LOCAL_HOST !== 'null' ? LOCAL_HOST+'/' : process.env.TARO_ENV === 'rn' ? null : ''
    return (
      <View className='home-recommend-sec'>
      {
        isList ?
          <View className='home-recommend-sec__list'>
            {list.map((item) => {
              const { cardId, cardTitle, cardPicture } = item
              const categoryItem = { name:cardTitle, listPicUrl:cardPicture }
              return (
                <View
                  key={cardId}
                  className='home-recommend-sec__list-item'
                >
                  
                  <Text className='home-recommend-sec__list-item-name' numberOfLines={1}>
                    {categoryItem.name}
                  </Text>
                  <View className='home-recommend-sec__list-item-img'>
                    <Image className='home-recommend-sec__list-item-img-ins' src={localUrl + categoryItem.listPicUrl} />
                  </View>
                  <View className='home-recommend-sec__list-item-btn'>
                    <View 
                      className={process.env.TARO_ENV === 'rn' ? 'home-recommend-sec__list-item-btn-ins':'home-recommend-sec__list-item-btn-ins-h5'}
                      onClick={this.handleClick.bind(this, cardId)}
                      >
                      <Text className='home-recommend-sec__list-item-btn-txt' numberOfLines={1}>
                        立即申请
                      </Text>
                    </View>
                  </View>
                </View>
                
              )
            })}
          </View>
        :
          <View className='home-recommend-sec__list2'>
            {list.map((item) => {
              const { cardId, cardTitle, cardPicture } = item
              const categoryItem = { name:cardTitle, listPicUrl:cardPicture }
              return (
                <View
                  key={cardId}
                  className='home-recommend-sec__list2-item'
                  
                >
                  <View className='home-recommend-sec__list2-item-img' >
                    <Image className='home-recommend-sec__list2-item-img-ins' src={ localUrl + categoryItem.listPicUrl} />
                  </View>
                  <View className="home-recommend-sec__list2-item-text" >
                    <Text className='home-recommend-sec__list2-item-text-name-sec' numberOfLines={1}>
                      {categoryItem.name}
                    </Text>
                  </View>
                  
                  <View className='home-recommend-sec__list2-item-btn'  onClick={this.handleClick.bind(this, cardId)}>
                    <Text className={process.env.TARO_ENV === 'rn' ? 'home-recommend-sec__list2-item-btn-txt':'home-recommend-sec__list2-item-btn-txt-h5'} numberOfLines={1}>
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
