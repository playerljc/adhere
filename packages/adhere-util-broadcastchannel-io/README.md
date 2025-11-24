# @baifendian/adhere-util-broadcastchannel-io

一个强大的 BroadCastChannel 通信工具库，提供客户端和服务端之间的双向通信功能。

## 📖 简介

`adhere-util-broadcastchannel-io` 是一个专门用于处理 BroadCastChannel 通信的工具库，它提供了类似 HTTP 请求/响应的通信模式，支持路由、中间件、文件上传等功能。适用于需要在不同域名或页面间进行安全通信的场景。

## ✨ 特性

- 🔄 **双向通信** - 支持客户端和服务端之间的双向消息传递
- 🛣️ **路由系统** - 提供类似 Express.js 的路由功能
- 🔌 **中间件支持** - 支持中间件链式处理
- 📁 **文件上传** - 支持大文件分片上传，带进度显示
- 🛡️ **安全控制** - 支持域名白名单验证
- ⚛️ **React Hooks** - 提供 React Hook 支持
- 🔧 **TypeScript** - 完整的 TypeScript 类型支持
- 📦 **按需加载** - 支持 babel-plugin-import 动态引入

## 🖥️ 兼容环境

- 现代浏览器
- IE11+

## 📦 安装

### npm
```bash
npm install @baifendian/adhere-util-broadcastchannel-io --save
```

### yarn
```bash
yarn add @baifendian/adhere-util-broadcastchannel-io
```

## 🚀 快速开始

### 基础使用

```javascript
import BroadCastChannelIO from '@baifendian/adhere-util-broadcastchannel-io';

// 创建客户端
const fetch = new BroadCastChannelIO.Fetch(window, sourceOrigin);

// 创建服务端
const server = new BroadCastChannelIO.Server(whitelist, window, sourceOrigin);
```

### 客户端示例

```javascript
import BroadCastChannelIO from '@baifendian/adhere-util-broadcastchannel-io';

// 创建客户端实例
const fetch = new BroadCastChannelIO.Fetch(window, window.location.origin);

// 发送 GET 请求
fetch.get(iframeWindow, targetOrigin, '/api/data', {
  data: { id: 123 }
}).then(response => {
  console.log('响应数据:', response.getBody());
});

// 发送 POST 请求
fetch.post(iframeWindow, targetOrigin, '/api/submit', {
  data: { name: 'test', value: 'hello' }
}).then(response => {
  console.log('提交成功:', response.getStatusCode());
});
```

### 服务端示例

```javascript
import BroadCastChannelIO from '@baifendian/adhere-util-broadcastchannel-io';

// 创建路由
const router = new BroadCastChannelIO.Router();

// 注册路由处理器
router.controller('/api/data', (ctx, next) => {
  const requestData = ctx.request.getBody();
  ctx.response.setBody({ message: 'Hello from server', data: requestData });
  ctx.response.setStatusCode(200);
  ctx.response.setStatusMessage('OK');
  next();
});

// 创建服务端
const server = new BroadCastChannelIO.Server(
  [window.location.origin], // 白名单域名
  window,
  window.location.origin
);

// 使用路由中间件
server.use(router.routers());

// 启动服务
server.start();
```

### React Hooks 使用

```jsx
import React from 'react';
import { useFetch, useServer } from '@baifendian/adhere-util-broadcastchannel-io';

function ClientComponent() {
  const fetch = useFetch(window, window.location.origin);
  
  const handleRequest = async () => {
    const response = await fetch.get(iframeWindow, targetOrigin, '/api/test');
    console.log(response.getBody());
  };
  
  return <button onClick={handleRequest}>发送请求</button>;
}

function ServerComponent() {
  const controllers = [
    {
      path: '/api/test',
      middleware: (ctx, next) => {
        ctx.response.setBody({ message: 'Hello from React Hook!' });
        ctx.response.setStatusCode(200);
        next();
      }
    }
  ];
  
  useServer({
    whitelist: [window.location.origin],
    controllers
  });
  
  return <div>服务端已启动</div>;
}
```

## 📚 API 文档

### BroadCastChannelIO.Fetch

客户端请求类，用于向 iframe 发送请求。

#### 构造函数
```javascript
new Fetch(source: Window, origin: string)
```

#### 方法

##### get(target, targetOrigin, pathname, options)
发送 GET 请求
- `target`: 目标 iframe 窗口
- `targetOrigin`: 目标域名
- `pathname`: 请求路径
- `options`: 请求选项

##### post(target, targetOrigin, pathname, options)
发送 POST 请求

##### put(target, targetOrigin, pathname, options)
发送 PUT 请求

##### delete(target, targetOrigin, pathname, options)
发送 DELETE 请求

### BroadCastChannelIO.Server

服务端类，用于处理来自 iframe 的请求。

#### 构造函数
```javascript
new Server(whitelist: string[], source: Window, sourceOrigin: string)
```

#### 方法

##### use(middleware)
添加中间件
- `middleware`: 中间件函数

##### start()
启动服务端

##### close()
关闭服务端

### BroadCastChannelIO.Router

路由类，用于管理请求路由。

#### 方法

##### controller(path, middleware)
注册路由处理器
- `path`: 路由路径
- `middleware`: 处理函数

##### routers()
获取路由中间件

### BroadCastChannelIO.Compose

中间件组合函数，用于组合多个中间件。

## 🔧 高级功能

### 文件上传

```javascript
// 客户端 - 分片上传文件
const file = event.target.files[0];
const reader = new FileReader();
const segmentSize = 1024; // 1KB 分片

reader.onload = (e) => {
  const buffer = e.target.result;
  const segmentCount = Math.ceil(buffer.byteLength / segmentSize);
  
  for (let i = 0; i < segmentCount; i++) {
    const segment = buffer.slice(i * segmentSize, (i + 1) * segmentSize);
    
    fetch.post(iframeWindow, targetOrigin, '/upload', {
      data: {
        segmentIndex: i,
        totalSegments: segmentCount,
        fileName: file.name,
        segment: segment
      }
    });
  }
};

reader.readAsArrayBuffer(file);
```

### 中间件链

```javascript
// 日志中间件
const logger = (ctx, next) => {
  console.log(`[${new Date().toISOString()}] ${ctx.request.getPathname()}`);
  next();
  console.log(`[${new Date().toISOString()}] 响应状态: ${ctx.response.getStatusCode()}`);
};

// 认证中间件
const auth = (ctx, next) => {
  const token = ctx.request.getHeaders()['authorization'];
  if (!token) {
    ctx.response.setStatusCode(401);
    ctx.response.setStatusMessage('Unauthorized');
    return;
  }
  next();
};

// 组合中间件
server.use(logger);
server.use(auth);
server.use(router.routers());
```

## 🔒 安全考虑

- 始终配置域名白名单
- 验证消息来源
- 对敏感数据进行加密
- 限制消息大小

## 📝 更新日志

查看 [CHANGELOG](./changelog/CHANGELOG.html) 了解详细更新历史。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/util/BroadCastChannelIO)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
