
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "select": {
    "height": scalePx2dp(30),
    "flexDirection": "row",
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "#dddddd"
  },
  "select-txt": {
    "fontSize": scalePx2dp(13),
    "color": "#cc0000",
    "textAlign": "center",
    "lineHeight": scalePx2dp(30)
  },
  "select-icon": {
    "color": "#909399",
    "fontSize": scalePx2dp(13),
    "textAlign": "center",
    "lineHeight": scalePx2dp(30)
  }
})
