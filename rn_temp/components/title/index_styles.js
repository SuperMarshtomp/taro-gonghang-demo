
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "title-view": {
    "display": "flex",
    "backgroundColor": "#cc0000",
    "flexDirection": "row",
    "width": "100%",
    "height": 45
  },
  "title-view-icon": {
    "backgroundColor": "#cc0000",
    "width": "7%",
    "color": "#ffffff",
    "lineHeight": scalePx2dp(45),
    "textAlign": "right",
    "fontSize": scalePx2dp(18),
    "fontWeight": "bold"
  },
  "title-view-title": {
    "backgroundColor": "#cc0000",
    "width": "86%",
    "color": "#ffffff",
    "lineHeight": scalePx2dp(45),
    "textAlign": "center",
    "fontSize": scalePx2dp(18),
    "fontWeight": "bold"
  },
  "title-view-rn": {
    "display": "flex",
    "backgroundColor": "#cc0000",
    "flexDirection": "row",
    "width": "100%",
    "height": scalePx2dp(45)
  },
  "title-view-rn-icon": {
    "backgroundColor": "#cc0000",
    "width": "7%",
    "color": "#ffffff",
    "lineHeight": scalePx2dp(45),
    "textAlign": "right",
    "fontSize": scalePx2dp(18),
    "fontWeight": "bold"
  },
  "title-view-rn-title": {
    "backgroundColor": "#cc0000",
    "width": "86%",
    "color": "#ffffff",
    "lineHeight": scalePx2dp(45),
    "textAlign": "center",
    "fontSize": scalePx2dp(18),
    "fontWeight": "bold"
  }
})
