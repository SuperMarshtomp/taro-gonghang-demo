
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "title": {
    "textAlign": "center",
    "marginTop": scalePx2dp(15)
  },
  "logo": {
    "width": scalePx2dp(270),
    "height": scalePx2dp(60)
  },
  "inputItem": {
    "marginTop": scalePx2dp(5),
    "marginRight": scalePx2dp(5),
    "marginBottom": scalePx2dp(10),
    "marginLeft": scalePx2dp(5),
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(5),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(5),
    "borderWidth": scalePx2dp(0.5),
    "borderStyle": "solid",
    "borderColor": "#909399",
    "borderRadius": scalePx2dp(2)
  },
  "input": {
    "display": "flex",
    "width": "80%"
  },
  "picker": {
    "display": "flex",
    "width": "80%"
  }
})
