
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "tip": {
    "justifyContent": "space-between",
    "width": "90%",
    "height": scalePx2dp(40),
    "marginTop": scalePx2dp(2.5),
    "marginRight": "auto",
    "marginBottom": scalePx2dp(2.5),
    "marginLeft": "auto",
    "borderRadius": scalePx2dp(5),
    "backgroundColor": "#ff204d",
    "display": "flex",
    "flexDirection": "row"
  },
  "tip-text": {
    "fontSize": scalePx2dp(10),
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(10),
    "textAlign": "left",
    "color": "#ffffff",
    "width": "80%"
  },
  "tip-btn": {
    "marginTop": scalePx2dp(7.5),
    "marginRight": scalePx2dp(5),
    "marginBottom": scalePx2dp(7.5),
    "marginLeft": scalePx2dp(5),
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(5),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(5),
    "fontSize": scalePx2dp(10),
    "color": "#ffffff",
    "textAlign": "left",
    "lineHeight": scalePx2dp(15),
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": scalePx2dp(5)
  }
})
