
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "location": {
    "display": "flex",
    "justifyContent": "space-between",
    "height": scalePx2dp(30),
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "fontSize": scalePx2dp(13),
    "backgroundColor": "#fff"
  },
  "location-city": {
    "display": "flex",
    "flexDirection": "row",
    "height": scalePx2dp(30),
    "paddingTop": scalePx2dp(7.5),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(7.5),
    "paddingLeft": 0,
    "lineHeight": scalePx2dp(15)
  },
  "location-img": {
    "width": scalePx2dp(15),
    "height": scalePx2dp(15),
    "marginRight": scalePx2dp(10)
  },
  "location-button-view": {
    "height": scalePx2dp(30),
    "paddingTop": scalePx2dp(7.5),
    "paddingRight": 0,
    "paddingBottom": scalePx2dp(7.5),
    "paddingLeft": 0
  },
  "location-button-view-txt": {
    "lineHeight": scalePx2dp(15),
    "color": "#cc0000"
  }
})
