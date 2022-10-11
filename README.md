# @xunjing/utils

## 快速开始
```npm install @xunjing/utils```

## 使用
```
// 项目新增 request.js
import { createApi } from "./api"
import { getHost } from "./env"

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
