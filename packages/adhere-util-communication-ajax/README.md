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

## 高级功能

### 拦截器

```typescript
// 请求拦截器
Ajax.interceptors.addRequest((params) => {
  // 在请求发送前修改参数
  params.headers = {
    ...params.headers,
    'X-Custom-Header': 'value'
  };
  return params;
});

// 响应拦截器
Ajax.interceptors.addResponse((params) => {
  // 在响应处理前修改数据
  if (params.data && params.data.code === 200) {
    params.data = params.data.data;
  }
  return params;
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
}
```

### 响应结果接口 (SendResult)

```typescript
interface SendResult {
  xhr?: XMLHttpRequest | null;
  contentType?: string | null;
  promise: Promise<any>;
}
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



