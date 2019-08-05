import Taro from '@tarojs/taro'
const CODE_SUCCESS = '200'
const CODE_AUTH_EXPIRED = '600'

export const LOCAL_HOST = process.env.TARO_ENV === 'rn' ? "http://10.0.2.2:3333" 
    // : process.env.TARO_ENV === 'weapp' ? "http://127.0.0.1:3333" 
    : process.env.TARO_ENV === 'h5' ?  "http://127.0.0.1:3333"
    : 'null'
/**
 * 简易封装网络请求
 * @param {*} options
 */
export function fetch(options) {
  const { url, payload, method = 'POST', showToast = true } = options
    const header = {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url,
    method,
    data: payload,
    header
  }).then((res) => {
    const { data } = res
    return data
  }).catch((err) => {
    const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
    if (showToast) {
      Taro.showToast({
        title: err && err.errorMsg || defaultMsg,
        icon: 'none'
      })
    }
    return Promise.reject({ message: defaultMsg, err: err })
  })
}
