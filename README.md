# @xunjing/utils

## 快速开始
```npm install @xunjing/utils```

## 使用
```
// 项目新增 request.js
import { createApi, getHost } from '@xunjing/utils'

const onError = (err) => {
  // 这里放错误处理函数，以uni-app为例
  uni.showToast({
    title: err?.msg || '服务器异常',
    icon: 'error',
  })
}

// getHost('{服务名}'), 默认BASE，现在只有这一个
const api = createApi({ baseURL: getHost(), onError })

export default api

```

```
// 使用和axios一样
api.get('/getxxById', { params: { id } })
api.post('/createProject', params)
```
## http状态码
401登录过期，自动跳转到`/login`
## 返回格式
`msg`: 服务端返回信息  
`data`: 返回数据  
`success`: 业务请求是否成功，`!= true`时报错  
