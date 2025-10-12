# @baifendian/adhere-e2e

一个专门为 Adhere 组件库生态系统提供端到端（E2E）测试支持的开发工具包。

## 简介

`@baifendian/adhere-e2e` 是 Adhere 组件库的 E2E 测试基础设施，为所有 packages 提供统一的测试环境和开发工具。它集成了 React、Ant Design、Ant Design Mobile 等核心依赖，提供了完整的开发环境配置。

## 特性

- 🚀 **开箱即用** - 提供完整的开发环境配置
- 📱 **多端支持** - 同时支持 PC 端和移动端测试
- 🎨 **主题系统** - 内置主题切换和 CSS 变量支持
- 🌍 **国际化** - 支持中文、英文、葡萄牙语等多语言
- 📦 **模块化** - 基于 Lerna 的 monorepo 架构
- 🔧 **灵活配置** - 支持自定义配置和扩展

## 安装

```bash
# 在项目根目录安装依赖
yarn install

# 或者使用 npm
npm install
```

## 快速开始

### 1. 使用命令行工具

```bash
# 启动 E2E 测试环境
npx e2e

# 或者使用 yarn
yarn e2e
```

### 2. 命令行参数

```bash
# 基本用法
e2e

# 自定义媒体查询设置
e2e media=true

# 自定义定义变量
e2e define=a=1,b=2

# 组合使用
e2e media=false define=theme=dark,locale=zh_CN
```

### 3. 编程方式使用

```javascript
import { PC, Mobile } from '@baifendian/adhere-e2e';

// PC 端测试环境
const PCApp = PC({
  children: <YourComponent />,
  lang: 'zh_CN',
  theme: {},
  curTheme: 'default',
  direction: 'ltr'
});

// 移动端测试环境
const MobileApp = Mobile({
  children: <YourComponent />,
  lang: 'zh_CN',
  theme: {},
  curTheme: 'default',
  direction: 'ltr'
});
```

## API 文档

### PC 组件

PC 端测试环境组件，基于 Ant Design 构建。

#### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| children | ReactNode | - | 要渲染的子组件 |
| lang | string | 'zh_CN' | 语言设置，支持 zh_CN、en_US、pt_PT |
| locales | object | {} | 自定义语言包 |
| theme | object | {} | 主题配置对象 |
| curTheme | string | 'default' | 当前主题名称 |
| direction | string | 'ltr' | 文本方向，'ltr' 或 'rtl' |

#### 示例

```jsx
import PC from '@baifendian/adhere-e2e';

function MyTestComponent() {
  return (
    <PC
      lang="zh_CN"
      theme={{
        colorPrimary: '#1890ff'
      }}
      curTheme="default"
    >
      <div>你的测试组件</div>
    </PC>
  );
}
```

### Mobile 组件

移动端测试环境组件，基于 Ant Design Mobile 构建。

#### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| children | ReactNode | - | 要渲染的子组件 |
| lang | string | 'zh_CN' | 语言设置 |
| locales | object | {} | 自定义语言包 |
| theme | object | {} | 主题配置对象 |
| curTheme | string | 'default' | 当前主题名称 |
| direction | string | 'ltr' | 文本方向 |

#### 示例

```jsx
import { Mobile } from '@baifendian/adhere-e2e';

function MyMobileTestComponent() {
  return (
    <Mobile
      lang="zh_CN"
      theme={{
        colorPrimary: '#1890ff'
      }}
    >
      <div>你的移动端测试组件</div>
    </Mobile>
  );
}
```

## 配置

### 环境变量

| 变量名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| media | string | 'true' | 是否启用媒体查询适配 |
| environment | string | 'dev' | 运行环境 |
| mode | string | 'development' | 构建模式 |

### Webpack 配置

E2E 环境使用自定义的 Webpack 配置，支持：

- 代码分割和懒加载
- CSS 模块和样式处理
- TypeScript 支持
- 热模块替换（HMR）
- 自动导入优化

### 主题系统

支持动态主题切换，内置主题：

- **default** - 默认主题
- **dark** - 暗黑主题

#### 主题配置示例

```javascript
const theme = {
  colorPrimary: '#1890ff',
  borderRadius: 6,
  wireframe: false
};

// 使用主题
<PC theme={theme} curTheme="default">
  <YourComponent />
</PC>
```

## 国际化

支持多语言，内置语言包：

- **zh_CN** - 简体中文
- **en_US** - 英语
- **pt_PT** - 葡萄牙语

### 自定义语言包

```javascript
const customLocales = {
  zh_CN: [
    {
      key: 'custom.key',
      value: '自定义值'
    }
  ]
};

<PC locales={customLocales}>
  <YourComponent />
</PC>
```

## 样式处理

### CSS 变量

系统自动生成 CSS 变量，支持主题动态切换：

```css
:root {
  --antd-color-primary: #1890ff;
  --antd-color-primary-rgb: 24, 144, 255;
  /* ... 更多变量 */
}
```

### 响应式设计

移动端自动启用响应式适配：

- 自动设置根字体大小
- px 到 rem 转换
- 触摸事件优化
- iOS 输入框优化

## 开发指南

### 项目结构

```
packages/adhere-e2e/
├── bin/                    # 命令行工具
│   ├── e2e.js             # 主入口文件
│   ├── commandArgs.js     # 参数解析
│   └── util.js            # 工具函数
├── src/                   # 源代码
│   ├── index.ts           # 主入口
│   ├── pc.jsx             # PC 端组件
│   ├── mobile.jsx         # 移动端组件
│   ├── intl.ts            # 国际化配置
│   ├── theme.js           # 主题系统
│   └── util.js            # 工具函数
├── themes/                # 主题文件
│   └── default/
│       └── vars.js        # 默认主题变量
├── ctbuild.e2e.config.js  # 构建配置
└── index.html             # HTML 模板
```

### 添加新的测试用例

1. 在对应 package 下创建 `e2e` 目录
2. 创建 `e2e/index.jsx` 文件
3. 使用 E2E 组件包装你的测试组件

```jsx
// e2e/index.jsx
import React from 'react';
import { PC } from '@baifendian/adhere-e2e';
import YourComponent from '../src/YourComponent';

export default function E2ETest() {
  return (
    <PC lang="zh_CN">
      <YourComponent />
    </PC>
  );
}
```

### 自定义配置

可以通过修改 `ctbuild.e2e.config.js` 来自定义构建配置：

```javascript
// 自定义 Webpack 配置
module.exports = {
  getConfig(config) {
    // 你的自定义配置
    const { webpackConfig } = config;
    // 修改 webpackConfig...
  }
};
```

## 依赖关系

### 核心依赖

- **React** (^18.3.1) - UI 框架
- **Ant Design** (^5.26.0) - PC 端 UI 组件库
- **Ant Design Mobile** (^5.39.0) - 移动端 UI 组件库
- **dayjs** (^1.11.13) - 日期处理库

### Adhere 生态依赖

- `@baifendian/adhere-ui-anthoc` - UI 高阶组件
- `@baifendian/adhere-ui-configprovider` - 配置提供者
- `@baifendian/adhere-ui-css` - 样式库
- `@baifendian/adhere-util` - 工具库

## 构建脚本

```bash
# 构建 CommonJS 版本
npm run buildpackage:cjs

# 构建 ES Module 版本
npm run buildpackage:esm

# 构建所有版本
npm run buildpackage

# 构建 UMD 版本
npm run buildumd
```

## 版本信息

- **当前版本**: 2.11.0
- **Node.js 要求**: >=12.0.0
- **许可证**: ISC

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

ISC © [playerljc](https://github.com/playerljc)

## 相关链接

- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
- [Adhere 组件库文档](https://github.com/playerljc/adhere)



