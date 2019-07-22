
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "search": {
    "display": "flex",
    "justifyContent": "space-between",
    "height": scalePx2dp(40),
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "backgroundColor": "#f2f2f2",
    "color": "#cc0000"
  },
  "img-view": {
    "paddingTop": scalePx2dp(2.5),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(2.5),
    "paddingLeft": 0
  },
  "img-view_rn": {
    "paddingTop": scalePx2dp(10),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(10),
    "paddingLeft": 0
  },
  "img": {
    "width": scalePx2dp(25),
    "height": scalePx2dp(20)
  },
  "input-view": {
    "marginTop": scalePx2dp(5),
    "marginRight": 0,
    "marginBottom": scalePx2dp(5),
    "marginLeft": 0
  },
  "input": {
    "width": scalePx2dp(250),
    "height": scalePx2dp(30),
    "paddingTop": 0,
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "#DCDFE6",
    "borderRadius": scalePx2dp(5),
    "backgroundColor": "#ffffff"
  },
  "card-input": {
    "height": scalePx2dp(30),
    "textAlign": "left",
    "lineHeight": scalePx2dp(15),
    "fontSize": scalePx2dp(9),
    "color": "#000000"
  },
  "button-view": {
    "fontSize": scalePx2dp(14),
    "lineHeight": scalePx2dp(40),
    "textAlign": "center",
    "color": "#cc0000"
  }
})
