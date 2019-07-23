
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "select": {
    "display": "flex",
    "flexDirection": "row"
  },
  "select-left": {
    "height": scalePx2dp(30),
    "flexDirection": "row",
    "width": "50%",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderBottomWidth": scalePx2dp(0.5),
    "borderTopWidth": scalePx2dp(0.5),
    "borderRightWidth": scalePx2dp(0.5),
    "backgroundColor": "#fff",
    "textAlign": "center"
  },
  "select-right": {
    "height": scalePx2dp(30),
    "flexDirection": "row",
    "width": "50%",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderBottomWidth": scalePx2dp(0.5),
    "borderTopWidth": scalePx2dp(0.5),
    "borderLeftWidth": scalePx2dp(0.5),
    "backgroundColor": "#fff",
    "textAlign": "center"
  },
  "select-txt-rn": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(62.5),
    "textAlign": "center",
    "fontSize": scalePx2dp(13),
    "color": "#cc0000",
    "lineHeight": scalePx2dp(30)
  },
  "select-icon-rn": {
    "textAlign": "center",
    "color": "#909399",
    "fontSize": scalePx2dp(13),
    "lineHeight": scalePx2dp(30)
  }
})
