import axios from 'axios'

const defaultCodeMap = {
  206: 'login required!',
  252: 'access required!',
  404: '请求地址有误。',
  500: '服务器错误。',
  502: '网关错误。',
}

function $onSuccess (response) {
  return response.data
}
const $onError = function (err) {
  console.error((err && err.message) || '服务端异常，请稍后再试！')
  throw err
}
/**
* 创建 axios 实例
* 在 axios.create(opts) 基础上增强了:
* opts.onerror => 接口报错时执行
* @example
* var api = createApi({onerror: function(err){
*  // 增加自己的错误处理
* }})
* api.get('/xxxx')
*
* @param {*} opts
* @public
*/
function createApi ({ onError = $onError, codeMap = {}, ...options }) {
  codeMap = Object.assign(defaultCodeMap, codeMap) // eslint-disable-line no-unused-vars
  const instance = axios.create({
    baseURL: options.baseURL || '/',
    timeout: 120000,
    headers: { Accept: '*/*' },
    withCredentials: true,
    validateStatus (status) {
      if (status === 401) {
        window.location.href = `/login?redirect=${window.location.href}`
        return false
      }
      return status >= 200 && status < 300
    },
    transformRequest: axios.defaults.transformRequest.concat(function (req) {
      return req
    }),
    transformResponse: axios.defaults.transformResponse.concat(function (res) {
      // 先检查返回值是否正确
      if (res.success !== true) {
        throw res
      }

      return res.data
    }),
    ...options,
  })

  // url => url?t=xxxx
  instance.interceptors.request.use((config) => {
    if (config.t) {
      config.url = config.url.replace(/\?$/, '') // 去掉末尾的"?"
      const sep = config.url.includes('?') ? '&' : '?'
      config.url = `${config.url}${sep}t=${+new Date()}`
    }

    return config
  })

  instance.interceptors.response.use($onSuccess, onError)

  return instance
}

const api = createApi({ baseURL: '/' })

export { api, createApi }
