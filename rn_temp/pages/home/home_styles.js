
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "home": {
    "position": "relative"
  },
  "index-select-view": {
    "display": "flex",
    "flexDirection": "row"
  },
  "index-select-item": {
    "width": "50%"
  },
  "home__wrap": {
    "backgroundColor": "#f2f2f2"
  },
  "home__loading": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": scalePx2dp(40)
  },
  "home__loading-txt": {
    "color": "#666666",
    "fontSize": scalePx2dp(12)
  },
  "tip-background": {
    "backgroundColor": "#fff"
  }
})
