import Taro from '@tarojs/taro'
const CODE_SUCCESS = '200'
const CODE_AUTH_EXPIRED = '600'

/**
 * 简易封装网络请求
 * @param {*} options
 */
export default async function fetch(options) {
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
    return Promise.reject({ message: defaultMsg, ...err })
  })
}
