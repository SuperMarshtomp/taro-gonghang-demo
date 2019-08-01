import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
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
      pages:1
    }
  }

  handleClick = (id) => {
    this.props.handleSelect(id)
  }

  
  handleShowDetail = (showItem) => {
    this.props.handleShowDetail(showItem);
  }

  render () {
    const { list,isList } = this.props
    const localUrl = LOCAL_HOST === 'null' ? null : LOCAL_HOST+'/'
    return (
      <View className='home-recommend'>
      {
        isList ?
          <View className='home-recommend__list'>
            {list.map((item) => {
              const { seriesId, seriesTitle, seriesPicture, seriesContent, seriesDetailContent } = item
              const categoryItem = {name:seriesTitle, listPicUrl:seriesPicture, simpleDesc:seriesContent, detail:seriesDetailContent}
              return (
                <View
                  key={seriesId}
                  className='home-recommend__list-item'
                >
                  <Text className='home-recommend__list-item-name' onClick={this.handleShowDetail.bind(this, categoryItem)} numberOfLines={1}>
                    {categoryItem.name}
                  </Text>
                  <View className='home-recommend__list-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    <Image className='home-recommend__list-item-img-ins' src={ localUrl + categoryItem.listPicUrl } />
                  </View>
                  <Text 
                    className='home-recommend__list-item-desc' 
                    onClick={this.handleShowDetail.bind(this, categoryItem)}
                    numberOfLines = {3}
                    >
                    {categoryItem.simpleDesc}
                  </Text>
                  <View 
                    className='home-recommend__list-item-btn'
                    onClick={this.handleClick.bind(this, seriesId)}
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
            {list.map((item) => {
              const { seriesId, seriesTitle, seriesPicture, seriesContent, seriesDetailContent } = item
              const categoryItem = {name:seriesTitle, listPicUrl:seriesPicture, simpleDesc:seriesContent, detail:seriesDetailContent}
              return (
                <View
                  key={seriesId}
                  className='home-recommend__list2-item'
                  
                >
                  <View className='home-recommend__list2-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)} >
                    <Image className='home-recommend__list2-item-img-ins' src={ localUrl + categoryItem.listPicUrl} />
                  </View>
                  <View className="home-recommend__list2-item-text" onClick={this.handleShowDetail.bind(this, categoryItem)}>
                    <Text className='home-recommend__list2-item-text-name' numberOfLines={1}>
                      {categoryItem.name}
                    </Text>
                    <Text 
                      className='home-recommend__list2-item-text-desc' 
                      onClick={this.handleShowDetail.bind(this, categoryItem)}
                      numberOfLines = {3}>
                      {categoryItem.simpleDesc}
                    </Text>
                  </View>
                  
                  <View className='home-recommend__list2-item-btn'  onClick={this.handleClick.bind(this, seriesId)}>
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
