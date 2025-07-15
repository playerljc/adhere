# 简介
&ensp;&ensp;浏览器嗅探的库(选用https://github.com/mumuy/browser库来实现)
- 用于嗅探用户浏览器的型号、版本、内核等信息

# ✨ 特性
- 支持动态引入(babel-plugin-import)

# 🖥 兼容环境
- 现代浏览器，IE11

# 📦 安装
```bash
npm install @baifendian/adhere-util-browsersniff --save
# 或
yarn add @baifendian/adhere-util-browsersniff
```

# 🛠 用法示例
```typescript
import Browsersniff, { BrowserInfo } from '@baifendian/adhere-util-browsersniff';

// 获取浏览器信息
const info: BrowserInfo = Browsersniff.getInstance();
console.log(info.browser); // 如 'Chrome'
console.log(info.version); // 如 '94.0.4606.81'

// 检测特定浏览器
if (Browsersniff.isBrowserChrome()) {
  console.log('当前是Chrome浏览器');
}

// 检测设备类型
if (Browsersniff.isDeviceMobile()) {
  console.log('当前是移动设备');
}
```

# 类型说明
```typescript
export interface BrowserInfo {
  browser: string;      // 浏览器名称
  device: string;       // 设备类型 (PC/Mobile/Tablet)
  engine: string;       // 渲染引擎
  language: string;     // 语言设置
  os: string;           // 操作系统
  osVersion: string;    // 操作系统版本
  version: string;      // 浏览器版本
}
```

# API 说明
- `Browsersniff.getInstance(): BrowserInfo` 获取浏览器信息对象
- `Browsersniff.browser(): string` 获取浏览器名称
- `Browsersniff.device(): string` 获取设备类型
- `Browsersniff.engine(): string` 获取渲染引擎
- `Browsersniff.language(): string` 获取语言
- `Browsersniff.os(): string` 获取操作系统
- `Browsersniff.osVersion(): string` 获取操作系统版本
- `Browsersniff.version(): string` 获取浏览器版本
- `Browsersniff.isBrowserXXX()` 检测是否为特定浏览器（如 isBrowserChrome、isBrowserSafari 等）
- `Browsersniff.isDeviceXXX()` 检测是否为特定设备类型（如 isDeviceMobile、isDevicePC 等）
- `Browsersniff.isEngineXXX()` 检测是否为特定渲染引擎
- `Browsersniff.iSOSXXX()` 检测是否为特定操作系统

# 常见问题
- 如需扩展支持更多浏览器类型或自定义检测，可参考源码自行扩展。
- 若在 Node 环境下使用，部分 API 可能无法获取完整信息。

# 在线文档
[http://playerljc.github.io/adhere/index.html#/adhere/adhere/util/browsersniff](http://playerljc.github.io/adhere/index.html#/adhere/adhere/util/browsersniff)




