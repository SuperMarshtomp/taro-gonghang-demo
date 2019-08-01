import Taro, { Component } from '@tarojs/taro'
import { Text, Image, View, ScrollView } from '@tarojs/components'
import { Modal } from "react-native"
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend-second/index-sec'
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

  constructor(props) {
    super(props)
    this.state = {
      hasMore: true,
      showTip: true,
      // showItem: {},
      isList: true,
      height:parseInt(getWindowHeight()),
      showTip: true,
      // showDetail: false,
      recommend:[
        {
          cardId: "001",
          cardTitle: "故宫·九有一心红白金",
          cardPicture: "cards/九有一心红白金.jpg"
        },
        {
          cardId: "002",
          cardTitle: "故宫·九有一心红金卡",
          cardPicture: "cards/九有一心红金卡.jpg"
        },
        {
          cardId: "003",
          cardTitle: "故宫·九有一心蓝白金",
          cardPicture: "cards/九有一心蓝白金.jpg"
        },
        {
          cardId: "004",
          cardTitle: "故宫·九有一心蓝金卡",
          cardPicture: "cards/九有一心蓝金卡.jpg"
        },
        {
          cardId: "005",
          cardTitle: "故宫·协和万邦红白金",
          cardPicture: "cards/协和万邦红白金.jpg"
        },
        {
          cardId: "006",
          cardTitle: "故宫·协和万邦红金卡",
          cardPicture: "cards/协和万邦红金卡.jpg"
        },
        {
          cardId: "007",
          cardTitle: "协和万邦蓝白金",
          cardPicture: "cards/协和万邦蓝白金.jpg"
        },
        {
          cardId: "008",
          cardTitle: "协和万邦蓝金卡",
          cardPicture: "cards/协和万邦蓝金卡.jpg"
        },
        {
          cardId: "009",
          cardTitle: "自强不息红白金",
          cardPicture: "cards/自强不息红白金.jpg"
        },
        {
          cardId: "010",
          cardTitle: "故宫·自强不息红金卡",
          cardPicture: "cards/自强不息红金卡.jpg"
        },
        {
          cardId: "011",
          cardTitle: "故宫·自强不息蓝白金",
          cardPicture: "cards/自强不息蓝白金.jpg"
        },
        {
          cardId: "012",
          cardTitle: "故宫·九有一心蓝金卡",
          cardPicture: "cards/自强不息蓝金卡.jpg"
        }
      ]
    }
    this.seriesId = parseInt(this.$router.params.id)
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
    fetch({ url: `${LOCAL_HOST}/api/seriesLists/specificCards`, showToast: true,payload:{sessionId:1,seriesId:this.seriesId}}).then((res) => {
      if (res) {
        console.log(res)
        this.setState({
          recommend: res.cardData
        })
      } else {
        console.log('err')
      }
    })
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

  handleSelect = (id) => {
    Taro.navigateTo({
      url: `/pages/base-info/base-info?itemId=${id}`
    })
  }

  // handleShowDetail = (showItem) => {
  //   this.setState({
  //     showItem,
  //     showDetail : !this.state.showDetail
  //   },() => {
  //     this.forceUpdate()
  //   })
  // }

  // handleHidden = () => {
  //   this.setState({
  //     showDetail: false,
  //     showItem:{}
  //   })
  // }

  // handleSelect = (id) =>{
  //   this.setState({
  //     recommend:[
  //       {
  //         seriesId: 1,
  //         seriesContent:"免收有效期内年费，享5%加油返现，ETC,选工行!",
  //         seriesTitle: "工银ETC信用卡",
  //         seriesPicture: "series/工银ETC.jpg",
  //         seriesDetailContent:["免费办理ETC+送电子标签", "高速通行95折", "全国超2万家中石油加油站5%加油返现", "现金分期3折费率，免收提前还款手续费", "工银e生活新客礼", "免费送账户安全险+账户安全锁", "容时容差服务"]
  //       },
  //       {
  //         seriesId: 2,
  //         seriesContent:"消费5笔减免主副卡年费，白卡绑定微信消费1.5倍积分，黑卡境外消费最高21%返现。与同业一致计息规则。",
  //         seriesTitle: "工银微信信用卡",
  //         seriesPicture: "series/工银微信信用卡.jpg",
  //         seriesDetailContent:["年费减免", "容时容差", "多币种免外汇兑换手续费", "绑定微信平台消费享多倍积分", "消费5笔减免主副卡年费", "爱购新客礼66元返现、爱购全球最高21%返现、爱购周末低至5折", "享跨国免费wifi优惠"]
  //       },
  //       {
  //         seriesId: 3,
  //         seriesContent:"免年费、高颜值、生日消费10倍积分、送爱奇艺或优酷付费会员；有情怀，为梦想，燃烧小宇宙，助有理想的你无惧水逆、逆流而上",
  //         seriesTitle: "星座卡",
  //         seriesPicture: "series/星座卡.jpg",
  //         seriesDetailContent:["免年费", "12张星座高颜值专属卡面", "生日当天消费10倍积分", "优酷视频VIP会员或爱奇艺VIP会员免费尊贵体验", "容时、容差、0外汇兑换手续费", "免费送账户安全险+账户安全锁", "绑定微信、京东支付享积分"]
  //       },
  //       {
  //         seriesId: 4,
  //         seriesContent:"境内外笔笔1%返现，Light光芒定制新客礼，启卡即收年费，无减免，适用特殊计息，详询官网",
  //         seriesTitle: "工银女性信用卡光芒系列·Plus版",
  //         seriesPicture: "series/光芒卡.jpg",
  //         seriesDetailContent:[" 免收卡片至臻工艺工本费", "境内外消费笔笔1%返现（Plus版专享，工银e生活查询）", "Light光芒定制款新客礼（Plus版新客专享）", "超声波香薰灯/纳米空气净化加湿器/LED子母化妆镜/光疗DIY美甲套装四选一"]
  //       }
  //     ]}
  //   )
  // }

  render () {
    const { recommend, showItem } = this.state
    return (
      <View className='home'>
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
            // handleShowDetail = {this.handleShowDetail.bind(this)} 
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
