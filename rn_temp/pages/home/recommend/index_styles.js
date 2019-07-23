
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "home-recommend__list-item-btn": {
    "backgroundColor": "#cc0000",
    "borderBottomRightRadius": scalePx2dp(5),
    "borderBottomLeftRadius": scalePx2dp(5),
    "lineHeight": scalePx2dp(40),
    "textAlign": "center"
  },
  "home-recommend": {
    "backgroundColor": "#f2f2f2"
  },
  "home-recommend__title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": scalePx2dp(50)
  },
  "home-recommend__title-txt": {
    "color": "#000000",
    "fontSize": scalePx2dp(14),
    "lineHeight": scalePx2dp(14),
    "fontWeight": "bold"
  },
  "home-recommend__list": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundColor": "#f2f2f2"
  },
  "home-recommend__list-item": {
    "display": "flex",
    "marginTop": scalePx2dp(7.5),
    "marginRight": scalePx2dp(7.5),
    "marginBottom": scalePx2dp(7.5),
    "marginLeft": scalePx2dp(7.5),
    "flexDirection": "column",
    "backgroundColor": "#fff",
    "width": "46%",
    "borderRadius": scalePx2dp(5)
  },
  "home-recommend__list-item-desc": {
    "paddingTop": 0,
    "paddingRight": scalePx2dp(6),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(6),
    "height": scalePx2dp(60),
    "color": "#666666",
    "fontSize": scalePx2dp(13),
    "backgroundColor": "#fff",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderBottomWidth": scalePx2dp(0.5)
  },
  "home-recommend__list-item-img": {
    "alignSelf": "center",
    "width": "100%",
    "height": scalePx2dp(125),
    "paddingTop": scalePx2dp(10),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": scalePx2dp(10),
    "paddingLeft": scalePx2dp(10),
    "backgroundColor": "#fff"
  },
  "home-recommend__list-item-info": {
    "display": "flex",
    "flexDirection": "column"
  },
  "home-recommend__list-item-btn-txt": {
    "fontSize": scalePx2dp(14),
    "lineHeight": scalePx2dp(40),
    "color": "#fff",
    "textAlign": "center"
  },
  "home-recommend__list-item-name": {
    "color": "#000000",
    "fontSize": scalePx2dp(15),
    "lineHeight": scalePx2dp(35),
    "textAlign": "center",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderBottomWidth": scalePx2dp(0.5)
  },
  "home-recommend__list2": {
    "backgroundColor": "#f2f2f2",
    "marginTop": scalePx2dp(5),
    "marginRight": 0,
    "marginBottom": scalePx2dp(5),
    "marginLeft": 0
  },
  "home-recommend__list2-item": {
    "display": "flex",
    "flexDirection": "row",
    "backgroundColor": "#fff",
    "width": "100%",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderBottomWidth": scalePx2dp(0.5),
    "height": scalePx2dp(100)
  },
  "home-recommend__list2-item-img": {
    "alignSelf": "center",
    "width": "26%",
    "height": scalePx2dp(75),
    "paddingTop": scalePx2dp(10),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(10),
    "paddingLeft": 0,
    "marginTop": 0,
    "marginRight": scalePx2dp(12.5),
    "marginBottom": 0,
    "marginLeft": scalePx2dp(12.5)
  },
  "home-recommend__list2-item-info": {
    "display": "flex",
    "flexDirection": "column"
  },
  "home-recommend__list2-item-btn": {
    "backgroundColor": "#cc0000",
    "borderRadius": scalePx2dp(5),
    "paddingTop": scalePx2dp(1.5),
    "paddingRight": scalePx2dp(1.5),
    "paddingBottom": scalePx2dp(1.5),
    "paddingLeft": scalePx2dp(1.5),
    "width": scalePx2dp(65),
    "marginTop": scalePx2dp(37.5),
    "marginRight": scalePx2dp(7.5),
    "marginBottom": scalePx2dp(37.5),
    "marginLeft": scalePx2dp(7.5),
    "height": scalePx2dp(25)
  },
  "home-recommend__list2-item-btn-txt": {
    "paddingTop": scalePx2dp(1.5),
    "paddingRight": scalePx2dp(1.5),
    "paddingBottom": scalePx2dp(1.5),
    "paddingLeft": scalePx2dp(1.5),
    "fontSize": scalePx2dp(14),
    "color": "#ffffff",
    "textAlign": "center"
  },
  "home-recommend__list2-item-text": {
    "display": "flex",
    "flexDirection": "column",
    "paddingTop": scalePx2dp(15),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": 0,
    "width": "45%"
  },
  "home-recommend__list2-item-text-name": {
    "color": "#000000",
    "fontSize": scalePx2dp(14.5),
    "lineHeight": scalePx2dp(45),
    "fontWeight": "normal",
    "textAlign": "left"
  },
  "home-recommend__list2-item-text-desc": {
    "color": "#666666",
    "fontSize": scalePx2dp(13),
    "textAlign": "left"
  }
})
