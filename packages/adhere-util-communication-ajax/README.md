# Adhere Ajax Communication Module

一个功能强大的HTTP请求通信模块，基于XMLHttpRequest实现，支持拦截器、Loading、错误处理等功能。

## 特性

- 🚀 **完整的HTTP方法支持**: GET, POST, PUT, PATCH, DELETE
- 🔧 **拦截器系统**: 请求和响应拦截器
- 📱 **多终端支持**: PC和移动端适配
- 🎯 **类型安全**: 完整的TypeScript类型定义
- 🔄 **Loading状态管理**: 自动显示/隐藏加载指示器
- 🛡️ **错误处理**: 统一的错误处理和状态码处理
- 📦 **多种数据格式**: 支持JSON、FormData、URL编码等
- 🎨 **可定制化**: 丰富的配置选项

## 安装

```bash
npm install @baifendian/adhere-util-communication-ajax
```

## 基本使用

### 创建Ajax实例

```typescript
import Ajax from '@baifendian/adhere-util-communication-ajax';

const ajax = new Ajax(
  'https://api.example.com', // 基础URL
  'https://system.example.com', // 系统管理基础URL
  {
    timeout: 30000, // 超时时间
    withCredentials: true, // 携带跨域凭证
    loading: {
      show: true, // 显示loading
      text: '加载中...',
      terminal: 'pc', // 终端类型
    },
  }
);
```

### 发送请求

```typescript
// GET请求
const getResult = ajax.get({
  path: 'users',
  headers: {
    'Authorization': 'Bearer token'
  }
});

getResult.promise.then(data => {
  console.log('GET响应:', data);
}).catch(error => {
  console.error('GET错误:', error);
});

// POST请求
const postResult = ajax.post({
  path: 'users',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});

postResult.promise.then(data => {
  console.log('POST响应:', data);
}).catch(error => {
  console.error('POST错误:', error);
});
```

### 请求重试（retry）

在成功（`then`）和失败（`catch`）的回调参数中，都提供了 `retry(override)` 方法，用于在需要时**重新发送本次请求**。`override` 支持覆盖本次请求的部分参数（例如 `headers`、`data`、`path` 等）。

```typescript
// 失败后重试（例如刷新 token 后重发）
ajax
  .get({
    path: 'users',
    headers: { Authorization: 'Bearer old_token' },
  })
  .promise.then((res) => {
    console.log('GET响应:', res.data);

    // 成功后也可以重发（例如带上不同 header 再请求一次）
    return res.retry({
      headers: { Authorization: 'Bearer new_token' },
    });
  })
  .catch((err) => {
    console.error('GET错误:', err);

    // 失败后重试（可覆盖参数）
    return err.retry({
      headers: { Authorization: 'Bearer new_token' },
    });
  })
  .then((res2) => {
    console.log('重试后的响应:', res2.data);
  });
```

## 高级功能

### 拦截器

```typescript
// 请求拦截器（实例级）
ajax.interceptors.addRequest('auth', (params) => {
  return {
    ...params,
    headers: {
      ...(params.headers ?? {}),
      'X-Custom-Header': 'value',
    },
  };
});

// 响应拦截器（实例级）
ajax.interceptors.addResponse('unwrap', (params) => {
  // 这里只演示：如果后端结构是 { code, message, data }，可在此统一拆包
  if (params.responseText) {
    try {
      const json = JSON.parse(params.responseText);
      if (json && typeof json === 'object' && 'data' in json) {
        return {
          ...params,
          responseText: JSON.stringify(json.data),
        };
      }
    } catch {
      // 忽略非 JSON 响应
    }
  }
  return params;
});

// 响应拦截器中可以直接使用 retry 进行重试（支持覆盖部分参数）
// 第二个参数 useRequestInterceptors:
// - false(默认)：使用“走过请求过滤器后的参数”直接发起请求，不再走请求拦截器，但仍会走响应拦截器
// - true：使用“未走请求过滤器的原始参数”重新走请求拦截器 + 响应拦截器
ajax.interceptors.addResponse('retry-once', async (params) => {
  // 示例：遇到 401 时触发一次重试（具体业务逻辑自行调整）
  if (params.xhr?.status === 401) {
    return await params.retry();
  }
  return params;
});

// 跳过指定拦截器
ajax.get({
  path: 'users',
  skipRequestInterceptors: ['auth'],
  skipResponseInterceptors: ['unwrap'],
});
```

### 文件上传

```typescript
const form = document.getElementById('uploadForm') as HTMLFormElement;
const formData = {
  form: form,
  data: {
    description: '文件描述',
    category: 'documents'
  }
};

const uploadResult = ajax.post({
  path: 'upload',
  data: formData
});
```

### 自定义配置

```typescript
const customAjax = new Ajax(
  'https://api.example.com',
  'https://system.example.com',
  {
    // 业务配置
    dataKey: 'result', // 数据字段名
    messageKey: 'msg', // 消息字段名
    codeKey: 'status', // 状态码字段名
    codeSuccess: 0, // 成功状态码
    showWarn: true, // 显示警告消息
    
    // 自定义JSON序列化
    customSendJSONStringify: (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    },
    
    // 事件处理
    onTimeout: () => {
      console.log('请求超时');
    },
    onError: () => {
      console.log('请求错误');
    }
  }
);
```

## API 参考

### Ajax 类

#### 构造函数

```typescript
constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig)
```

**参数:**
- `baseURL`: 基础URL
- `systemManagerBaseURL`: 系统管理基础URL
- `config`: 配置对象

#### 静态属性

- `TIMEOUT`: 默认超时时间 (1000 * 1000ms)
- `STATUS_SUCCESS_CODES`: 成功状态码数组
- `STATUS_REDIRECT_CODES`: 重定向状态码数组
- `interceptors`: 拦截器实例

#### 实例方法

##### get(params: ISendArg): SendResult
发送GET请求

##### post(params: ISendArg): SendResult
发送POST请求

##### put(params: ISendArg): SendResult
发送PUT请求

##### patch(params: ISendArg): SendResult
发送PATCH请求

##### delete(params: ISendArg): SendResult
发送DELETE请求

### 配置接口 (IConfig)

```typescript
interface IConfig {
  // 事件处理器
  onTimeout?: EventHandler;
  onLoadsStart?: EventHandler;
  onProgress?: EventHandler;
  onAbort?: EventHandler;
  onError?: EventHandler;
  onLoad?: EventHandler;
  onLoadend?: EventHandler;
  
  // 请求配置
  timeout?: number;
  withCredentials?: boolean;
  responseType?: ResponseType;
  
  // 业务配置
  dataKey?: string;
  messageKey?: string;
  codeKey?: string;
  codeSuccess?: number;
  showWarn?: boolean;
  
  // 功能配置
  mock?: boolean;
  loading?: Partial<LoadingConfig>;
  interceptor: InterceptorFunction;
  customSendJSONStringify?: CustomJSONStringify;
}
```

### 请求参数接口 (ISendArg)

```typescript
interface ISendArg extends Partial<IConfig> {
  path: string; // 请求路径
  headers?: Record<string, string>; // 请求头
  data?: RequestData; // 请求数据

  // 接口防抖去重（仅在 path 为 IPv4 且 enableDebounce=true 时生效）
  enableDebounce?: boolean;
  debounceFilterData?: (data: RequestData) => RequestData;
  debounceFilterHeaders?: (headers: ISendArg['headers']) => ISendArg['headers'];

  // 跳过拦截器
  skipRequestInterceptors?: string[];
  skipResponseInterceptors?: string[];
}
```

### 响应结果接口 (SendResult)

```typescript
interface SendResult {
  xhr?: XMLHttpRequest | null;
  contentType?: string | null;
  interceptorsConfig?: ISendArg;
  promise: Promise<any>;
}
```

### 响应数据结构（ResolveDataResult）

当请求成功（2xx/304）时，`promise` resolve 的对象结构如下：

```typescript
interface ResolveDataResult {
  data: any;
  xhr: XMLHttpRequest;
  hideIndicator?: () => void;
  retry: (override?: Partial<ISendArg>) => Promise<SendResult>;
}
```

当请求失败（非 2xx/304）时，`promise` reject 的对象会包含 `status/statusText/response/responseText`，并且同样带有 `retry(override)` 方便重发。

### 防抖去重（enableDebounce）

当 `path` 是 IPv4 且 `enableDebounce=true` 时，相同请求会在进行中被合并（复用同一个 `promise`），避免短时间重复发送。

```typescript
ajax.get({
  path: '127.0.0.1/api/users',
  enableDebounce: true,
  debounceFilterHeaders: (headers) => {
    // 例如：不把 Authorization 计入去重 key
    const { Authorization, ...rest } = headers ?? {};
    return rest;
  },
});
```

### mock 请求

当 `mock=true` 时，会走 mock 分支（适用于本地联调/演示）。

```typescript
ajax.get({
  path: 'users',
  mock: true,
});
```

### responseType

可通过 `responseType` 控制 XHR 的响应类型（例如 `blob`、`arraybuffer` 等）。

```typescript
ajax.get({
  path: 'download/file',
  responseType: 'blob',
});
```

## 类型定义

模块提供了完整的TypeScript类型定义，包括：

- `HttpStatusCode`: HTTP状态码类型
- `Method`: HTTP方法类型
- `TerminalType`: 终端类型
- `ResponseType`: 响应类型
- `EventHandler`: 事件处理器类型
- `InterceptorFunction`: 拦截器函数类型
- `LoadingConfig`: Loading配置类型
- `FormDataConfig`: 表单数据配置类型

## 错误处理

模块内置了完善的错误处理机制：

- **401状态码**: 自动重定向到登录页面
- **402状态码**: 处理支付要求
- **超时处理**: 自动显示超时提示
- **网络错误**: 统一的错误提示
- **业务错误**: 根据配置显示警告消息

## 最佳实践

1. **统一配置**: 在应用初始化时创建Ajax实例并配置通用参数
2. **拦截器使用**: 使用拦截器处理通用的请求/响应逻辑
3. **错误处理**: 合理配置错误处理回调函数
4. **Loading管理**: 根据业务需求配置Loading显示策略
5. **类型安全**: 充分利用TypeScript类型定义提高代码质量

## 更新日志

### v2.0.0
- 完整的TypeScript类型优化
- 改进的JSDoc文档
- 更好的代码结构和可维护性
- 新增多种类型定义和接口
- 修复了多个类型安全问题

## 许可证

MIT License



