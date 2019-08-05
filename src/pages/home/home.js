import Taro, { Component } from '@tarojs/taro'
import { Text, Image, View, ScrollView } from '@tarojs/components'
import { Modal } from "react-native"
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend'
import './home.scss'
import detailImg from '@img/detail.png'

import { Title } from '@components'
import Search from './search'
import Location from './location'
import Tip from './tip'
import Select from './select'
import { LOCAL_HOST, fetch } from '@server'
// const RECOMMEND_SIZE = 20
var titleHeight = 138;
var noTitleHeight = 46

// @connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: '申请办卡'
  }

  state = {
    hasMore: true,
    showTip: true,
    showItem: {},
    isList: true,
    height:parseInt(getWindowHeight()),
    showTip: true,
    showDetail: false,
    recommend:
      LOCAL_HOST !== 'null' ? []
      :[
        {
          seriesId: 1,
          seriesContent:"免收有效期内年费，享5%加油返现，ETC,选工行!",
          seriesTitle: "工银ETC信用卡",
          seriesPicture: require('../../img/1.jpg'),
          seriesDetailContent:["免费办理ETC+送电子标签", "高速通行95折", "全国超2万家中石油加油站5%加油返现", "现金分期3折费率，免收提前还款手续费", "工银e生活新客礼", "免费送账户安全险+账户安全锁", "容时容差服务"]
        },
        {
          seriesId: 2,
          seriesContent:"消费5笔减免主副卡年费，白卡绑定微信消费1.5倍积分，黑卡境外消费最高21%返现。与同业一致计息规则。",
          seriesTitle: "工银微信信用卡",
          seriesPicture: require('../../img/2.jpg'),
          seriesDetailContent:["年费减免", "容时容差", "多币种免外汇兑换手续费", "绑定微信平台消费享多倍积分", "消费5笔减免主副卡年费", "爱购新客礼66元返现、爱购全球最高21%返现、爱购周末低至5折", "享跨国免费wifi优惠"]
        },
        {
          seriesId: 3,
          seriesContent:"免年费、高颜值、生日消费10倍积分、送爱奇艺或优酷付费会员；有情怀，为梦想，燃烧小宇宙，助有理想的你无惧水逆、逆流而上",
          seriesTitle: "星座卡",
          seriesPicture: require('../../img/3.jpg'),
          seriesDetailContent:["免年费", "12张星座高颜值专属卡面", "生日当天消费10倍积分", "优酷视频VIP会员或爱奇艺VIP会员免费尊贵体验", "容时、容差、0外汇兑换手续费", "免费送账户安全险+账户安全锁", "绑定微信、京东支付享积分"]
        },
        {
          seriesId: 4,
          seriesContent:"境内外笔笔1%返现，Light光芒定制新客礼，启卡即收年费，无减免，适用特殊计息，详询官网",
          seriesTitle: "工银女性信用卡光芒系列·Plus版",
          seriesPicture: require('../../img/4.jpg'),
          seriesDetailContent:[" 免收卡片至臻工艺工本费", "境内外消费笔笔1%返现（Plus版专享，工银e生活查询）", "Light光芒定制款新客礼（Plus版新客专享）", "超声波香薰灯/纳米空气净化加湿器/LED子母化妆镜/光疗DIY美甲套装四选一"]
        },
        {
          seriesId: 5,
          seriesContent:"首款故宫LOGO联名卡，白金卡免首年年费，限时赢故宫迎春礼盒，故宫图书、文创品9折，故宫AR特效。容时容差，适用特殊计息",
          seriesTitle: "工银故宫联名信用卡",
          seriesPicture: require('../../img/5.jpg'),
          seriesDetailContent: ["—协和万邦 九有一心 自强不息", "白金卡免首年年费（活动期内）", "金卡任意消费5笔免年费", "故宫图书、文创产品9折优惠", "故宫文化零距离AR体验", "新客赠故宫文创惊喜福袋（即将上线，敬请期待）", "容时容差服务"]
        },
        {
          seriesId: 6,
          seriesContent:"郎平代言、首创背印卡号设计，无忧金融、潮牌海淘返现、简约白金尊荣、安心保障四大锦囊，与同业一致计息规则，详见官网",
          seriesTitle: "工银ETC信用卡",
          seriesPicture: require('../../img/6.jpg'),
          seriesDetailContent:["年费减免", "容时容差", "0外汇兑换手续费", "绑定微信、京东支付享积分", "免费境外WIFI（白金卡专享）", "高端五星级酒店自助餐买一赠一（白金卡专享）", "99元起办签证（白金卡专享）", "机场1元停车（白金卡专享）"]
        },
        {
          seriesId: 7,
          seriesContent:"10大行业商旅特惠，欧洲9大购物村，国内3地奥莱小镇赠VIP金卡；爱购全球最高21%返现，0货币转换费；适用特殊计息",
          seriesTitle: "环球卡",
          seriesPicture: require('../../img/7.jpg'),
          seriesDetailContent:["全币种，减免货币转换费", "芯片卡，安全支付再升级", "聚10大行业，全球10x10特惠", "境外消费，惊喜返现优惠"]
        },
        {
          seriesId: 8,
          seriesContent:"专享分期低费率、长期限、无提前还款手续费，满足购车、家装、教育、旅游等大额消费！",
          seriesTitle: "分期卡",
          seriesPicture: require('../../img/8.jpg'),
          seriesDetailContent:["专享分期年费率2.7%", "分期期限长", "免收违约金", "快速办卡", "工银e生活新客礼", "容时容差", "账户安全险+账户安全锁", "微信、京东支付享积分"]
        }
      ]
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'h5'){
      this.setState({
        height:this.state.height - 192
      })
    }
    else if (process.env.TARO_ENV === 'rn'){
      this.setState({
        height:this.state.height - 138
      })
    }
    else {
      this.setState({
        height:this.state.height - 139
      })
    }
    if (LOCAL_HOST !== 'null'){
      fetch({ url: `${LOCAL_HOST}/api/seriesLists`, showToast: true,payload:{sessionId:1}}).then((res) => {
        if (res) {
          console.log(res)
          this.setState({
            recommend: res.seriesData
          })
        } else {
          console.log('err')
        }
      })
    }
  }

  handleSearchClick () {
    console.log('handleSearchClick');
  }

  handleBrandClick () {
    console.log('handleBrandClick');
  }

  handleLevelClick () {
    console.log('handleLevelClick');
  }

  changeList = () => {
    console.log('handleIconClick');
    this.setState({
      isList: !this.state.isList
    })
  }

  handleTipClick = () => {
    this.setState({
      showTip: false,
      height: this.state.height + noTitleHeight,
    })
  }

  handleShowDetail = (showItem) => {
    this.setState({
      showItem,
      showDetail : !this.state.showDetail
    },() => {
      this.forceUpdate()
    })
  }

  handleHidden = () => {
    this.setState({
      showDetail: false,
      showItem:{}
    })
  }

  handleSelect = (id) =>{
    Taro.navigateTo({
      url: `/pages/home/secondHome?itemId=${id}&isList=${this.state.isList}`
    })
    // this.setState({
    //   recommend:[
    //     {
    //       seriesId: 1,
    //       seriesContent:"免收有效期内年费，享5%加油返现，ETC,选工行!",
    //       seriesTitle: "工银ETC信用卡",
    //       seriesPicture: "series/工银ETC.jpg",
    //       seriesDetailContent:["免费办理ETC+送电子标签", "高速通行95折", "全国超2万家中石油加油站5%加油返现", "现金分期3折费率，免收提前还款手续费", "工银e生活新客礼", "免费送账户安全险+账户安全锁", "容时容差服务"]
    //     },
    //     {
    //       seriesId: 2,
    //       seriesContent:"消费5笔减免主副卡年费，白卡绑定微信消费1.5倍积分，黑卡境外消费最高21%返现。与同业一致计息规则。",
    //       seriesTitle: "工银微信信用卡",
    //       seriesPicture: "series/工银微信信用卡.jpg",
    //       seriesDetailContent:["年费减免", "容时容差", "多币种免外汇兑换手续费", "绑定微信平台消费享多倍积分", "消费5笔减免主副卡年费", "爱购新客礼66元返现、爱购全球最高21%返现、爱购周末低至5折", "享跨国免费wifi优惠"]
    //     },
    //     {
    //       seriesId: 3,
    //       seriesContent:"免年费、高颜值、生日消费10倍积分、送爱奇艺或优酷付费会员；有情怀，为梦想，燃烧小宇宙，助有理想的你无惧水逆、逆流而上",
    //       seriesTitle: "星座卡",
    //       seriesPicture: "series/星座卡.jpg",
    //       seriesDetailContent:["免年费", "12张星座高颜值专属卡面", "生日当天消费10倍积分", "优酷视频VIP会员或爱奇艺VIP会员免费尊贵体验", "容时、容差、0外汇兑换手续费", "免费送账户安全险+账户安全锁", "绑定微信、京东支付享积分"]
    //     },
    //     {
    //       seriesId: 4,
    //       seriesContent:"境内外笔笔1%返现，Light光芒定制新客礼，启卡即收年费，无减免，适用特殊计息，详询官网",
    //       seriesTitle: "工银女性信用卡光芒系列·Plus版",
    //       seriesPicture: "series/光芒卡.jpg",
    //       seriesDetailContent:[" 免收卡片至臻工艺工本费", "境内外消费笔笔1%返现（Plus版专享，工银e生活查询）", "Light光芒定制款新客礼（Plus版新客专享）", "超声波香薰灯/纳米空气净化加湿器/LED子母化妆镜/光疗DIY美甲套装四选一"]
    //     }
    //   ]}
    // )
  }

  render () {
    const { recommend, showItem } = this.state
    return (
      <View className='home'>
        {
          process.env.TARO_ENV === 'h5' && this.state.showDetail ?
          <View className="h0" onClick={ this.handleHidden }>
            <View className="h1">
              <View>
                <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
              </View>
              <View className = "h2"> 
                <Text className = "h2-title">{showItem.name}</Text>
                <ScrollView
                  scrollY
                  className='scroll-view'
                  // onScrollToLower={this.loadRecommend}
                  style={process.env.TARO_ENV === 'rn' ? { height: this.state.height/2.2}:{height: this.state.height/2.2 +'px'}}
                >
                {
                  showItem.detail.map((desc, index) => {
                    return (
                      <View key={index} className='h2-desc'>
                        <View className='h2-desc-point' />
                        <Text className='h2-desc-txt'>{desc}</Text>
                      </View>
                    )
                  })
                }
                </ScrollView>
              </View>
            </View>
          </View>:
          <View />
        }
        {
          process.env.TARO_ENV !== 'h5' && process.env.TARO_ENV !== 'rn' && this.state.showDetail ?
          <View className="w0" onClick={ this.handleHidden }>
            <View className="w1">
              <View>
                <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
              </View>
              <View className= "w2"> 
                <Text className = "w2-title">{showItem.name}</Text>
                <ScrollView
                  scrollY
                  className='scroll-view'
                  // onScrollToLower={this.loadRecommend}
                  style={process.env.TARO_ENV === 'rn' ? { height: this.state.height/2.2}:{height: this.state.height/2.2 +'px'}}
                >
                {
                  showItem.detail.map((desc, index) => {
                    return (
                      <View key={index} className='w2-desc'>
                        <View className='w2-desc-point' />
                        <Text className='w2-desc-txt'>{desc}</Text>
                      </View>
                    )
                  })
                }
                </ScrollView>
              </View>
            </View>
            <CoverView />
          </View>:
          <View />
        }
        {
          process.env.TARO_ENV === 'rn' && this.state.showDetail ?
            <Modal animationType={'none'}
                    transparent={true}
                    visible={true}
                    onRequestClose={() =>{}}
                    >
                <View className = 'r0' onClick={ this.handleHidden } >
                  <View className = "r1" style={{ marginTop: 100}}>
                    <View>
                      <Image roundAsCircle={true} className = "ins-img" src = {detailImg}> </Image>
                    </View> 
                    <View className = "r2"> 
                      <Text className = "r2-title">{showItem.name}</Text>
                      <ScrollView
                        scrollY
                        className='scroll-view'
                        // onScrollToLower={this.loadRecommend}
                        style={process.env.TARO_ENV === 'rn' ? { height: this.state.height/2.2}:{height: this.state.height/2.2 +'px'}}
                      >
                      {
                        showItem.detail.map((desc, index) => {
                          return (
                            <View key={index} className='r2-desc'>
                              <View className='r2-desc-point' />
                              <Text className='r2-desc-txt'>{desc}</Text>
                            </View>
                          )
                        })
                      }
                      </ScrollView>
                    </View>
                  </View>
                </View>
            </Modal>:<View />
        }
        {
          process.env.TARO_ENV === 'h5' ? <Title /> : <View />
        }
        <Search isList = {this.state.isList} changeList = {this.changeList} onClick={ () => this.handleSearchClick() }/>
        <Location city='广州' />
        { 
          this.state.showTip ? 
          <View className = "tip-background" onClick={this.handleTipClick}>
            <Tip /> 
          </View>:<View/>
        }
        <Select />
        
        <ScrollView
          scrollY
          className='home__wrap'
          // onScrollToLower={this.loadRecommend}
          style={process.env.TARO_ENV === 'rn' ? { height: this.state.height}:{height: this.state.height +'px'}}
        >
          <Recommend 
            handleShowDetail = {this.handleShowDetail.bind(this)} 
            list={recommend} 
            isList = {this.state.isList} 
            handleSelect = {this.handleSelect.bind(this)}
            />
        </ScrollView>
      </View>
    )
  }
}

export default Home
