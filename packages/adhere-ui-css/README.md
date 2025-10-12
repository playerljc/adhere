# @baifendian/adhere-ui-css

一个功能强大的 CSS 工具库，提供了丰富的样式重置、主题系统、通用样式类和工具函数。

## 简介

`@baifendian/adhere-ui-css` 是一个专为现代 Web 应用设计的 CSS 工具库。它提供了完整的样式重置、主题系统、通用样式类、网格布局、开关组件样式和图标字体，让您的应用拥有统一、美观的视觉体验。

## ✨ 特性

- 🎨 **完整样式重置** - 基于 normalize.css 的现代浏览器样式重置
- 🎭 **Ant Design 样式重置** - 针对 Ant Design 5.x 的样式优化
- 🎪 **主题系统** - 强大的 CSS 变量主题系统，支持动态主题切换
- 📐 **网格布局** - 灵活的 2-12 列网格布局系统
- 🔘 **开关组件** - iOS 和 Material Design 风格的开关组件样式
- 🎯 **通用样式类** - 丰富的 Flexbox、文本、布局等工具类
- 🔤 **图标字体** - 内置图标字体库，包含常用图标
- 📱 **响应式设计** - 支持媒体查询和响应式单位转换
- 🛠️ **Less 工具函数** - 强大的 Less mixin 和函数库

## 🖥 兼容环境

- 现代浏览器
- Internet Explorer 11+
- Ant Design 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-ui-css --save

# 使用 yarn
yarn add @baifendian/adhere-ui-css

# 使用 pnpm
pnpm add @baifendian/adhere-ui-css
```

## 快速开始

### 基础用法

```tsx
import React from 'react';
import '@baifendian/adhere-ui-css'; // 导入所有样式

function App() {
  return (
    <div className="adhere-display-flex adhere-items-center">
      <h1 className="adhere-text-center">Hello World</h1>
      <button className="adhere-ui-css-switch ios">
        <input type="checkbox" />
        <div className="checkbox"></div>
      </button>
    </div>
  );
}
```

### 按需引入

```tsx
// 只导入需要的样式
import '@baifendian/adhere-ui-css/es/mixin';
import '@baifendian/adhere-ui-css/es/normalize-default';
import '@baifendian/adhere-ui-css/es/gridlayout';
```

### 主题系统初始化

```tsx
import init from '@baifendian/adhere-ui-css';

// 初始化主题系统
init({
  colorPrimary: '#1890ff',
  colorTextBase: '#333333',
  colorBgBase: '#ffffff',
  fontSizeBase: '14px',
  borderRadiusBase: '6px'
});
```

## 🧩 核心功能

### 样式重置

#### 默认样式重置

```less
// 基于 normalize.css 的现代浏览器样式重置
@import '@baifendian/adhere-ui-css/es/normalize-default';

// 包含：
// - HTML 元素样式重置
// - 字体渲染优化
// - 滚动条样式定制
// - 表单元素样式统一
```

#### Ant Design 样式重置

```less
// 针对 Ant Design 5.x 的样式优化
@import '@baifendian/adhere-ui-css/es/normalize-antd';

// 包含：
// - Spin 组件布局优化
// - Select 下拉框层级调整
// - Message 和 Notification 层级管理
// - Card 组件高度适配
// - Tree 组件文本溢出处理
// - DatePicker 层级管理
// - Tabs 内容区域适配
```

### 主题系统

#### 基础主题配置

```tsx
import init from '@baifendian/adhere-ui-css';

// 初始化主题
init({
  // 主色调
  colorPrimary: '#2480ff',
  
  // 文本颜色
  colorTextBase: '#000000',
  
  // 背景颜色
  colorBgBase: '#ffffff',
  
  // 边框颜色
  colorBorderBase: '#d9d9d9',
  
  // 分割线颜色
  colorSplitBase: '#f0f0f0',
  
  // 字体大小
  fontSizeBase: '14px',
  
  // 圆角大小
  borderRadiusBase: '6px',
  
  // 线宽
  lineWidth: '1px',
  
  // 线型
  lineType: 'solid'
});
```

#### 动态主题切换

```tsx
import init from '@baifendian/adhere-ui-css';

// 获取主题控制对象
const themeController = init({
  colorPrimary: '#1890ff'
});

// 动态修改主题
themeController.setAdhereColorPrimary('#52c41a');
themeController.setAdhereColorTextBase('#333333');

// 获取当前主题值
const primaryColor = themeController.getAdhereColorPrimary();
```

#### CSS 变量使用

```css
/* 在 CSS 中使用主题变量 */
.my-component {
  color: var(--adhere-color-primary);
  background-color: var(--adhere-color-bg-base);
  border: var(--adhere-line-width) var(--adhere-line-type) var(--adhere-color-border-base);
  border-radius: var(--adhere-border-radius-base);
  font-size: var(--adhere-font-size-base);
}

/* 使用映射的 token */
.text-primary {
  color: var(--adhere-color-text); /* 基于 colorTextBase 的 0.88 透明度 */
}

.text-secondary {
  color: var(--adhere-color-text-secondary); /* 基于 colorTextBase 的 0.65 透明度 */
}
```

### 网格布局系统

#### 基础网格布局

```tsx
// 2 列网格
<div className="g-grid-list column2">
  <div className="g-grid-list-item">项目 1</div>
  <div className="g-grid-list-item">项目 2</div>
  <div className="g-grid-list-item">项目 3</div>
  <div className="g-grid-list-item">项目 4</div>
</div>

// 3 列网格
<div className="g-grid-list column3">
  <div className="g-grid-list-item">项目 1</div>
  <div className="g-grid-list-item">项目 2</div>
  <div className="g-grid-list-item">项目 3</div>
</div>

// 4 列网格
<div className="g-grid-list column4">
  <div className="g-grid-list-item">项目 1</div>
  <div className="g-grid-list-item">项目 2</div>
  <div className="g-grid-list-item">项目 3</div>
  <div className="g-grid-list-item">项目 4</div>
</div>
```

#### 响应式网格

```tsx
function ResponsiveGrid() {
  return (
    <div className="g-grid-list column2 column3-md column4-lg">
      <div className="g-grid-list-item">响应式项目</div>
      <div className="g-grid-list-item">响应式项目</div>
      <div className="g-grid-list-item">响应式项目</div>
      <div className="g-grid-list-item">响应式项目</div>
    </div>
  );
}
```

### 开关组件样式

#### iOS 风格开关

```tsx
<div className="adhere-ui-css-switch ios">
  <input type="checkbox" id="ios-switch" />
  <div className="checkbox"></div>
  <label htmlFor="ios-switch">iOS 风格开关</label>
</div>
```

#### Material Design 风格开关

```tsx
<div className="adhere-ui-css-switch material">
  <input type="checkbox" id="material-switch" />
  <div className="checkbox"></div>
  <label htmlFor="material-switch">Material 风格开关</label>
</div>
```

### 通用样式类

#### Flexbox 布局

```tsx
// 基础 Flex 容器
<div className="adhere-display-flex">
  <div>Flex 项目</div>
</div>

// Flex 方向
<div className="adhere-display-flex adhere-flex-row">水平排列</div>
<div className="adhere-display-flex adhere-flex-col">垂直排列</div>

// 主轴对齐
<div className="adhere-display-flex adhere-justify-center">居中对齐</div>
<div className="adhere-display-flex adhere-justify-between">两端对齐</div>
<div className="adhere-display-flex adhere-justify-around">环绕对齐</div>

// 交叉轴对齐
<div className="adhere-display-flex adhere-items-center">垂直居中</div>
<div className="adhere-display-flex adhere-items-start">顶部对齐</div>
<div className="adhere-display-flex adhere-items-end">底部对齐</div>

// Flex 项目属性
<div className="adhere-flex-auto">自动填充</div>
<div className="adhere-flex-fixed">固定大小</div>
<div className="adhere-flex-w-auto">宽度自动</div>
<div className="adhere-flex-h-auto">高度自动</div>
```

#### 文本样式

```tsx
// 文本对齐
<div className="adhere-text-left">左对齐</div>
<div className="adhere-text-center">居中对齐</div>
<div className="adhere-text-right">右对齐</div>

// 文本转换
<div className="adhere-text-uppercase">大写文本</div>
<div className="adhere-text-lowercase">小写文本</div>
<div className="adhere-text-capitalize">首字母大写</div>

// 文本溢出
<div className="adhere-text-inline-overflow">单行文本溢出...</div>
<div className="adhere-text-overflow-multi">多行文本溢出处理...</div>
```

#### 布局工具

```tsx
// 尺寸填充
<div className="adhere-fill-w">宽度 100%</div>
<div className="adhere-fill-h">高度 100%</div>

// 滚动
<div className="adhere-scroll">垂直滚动</div>
<div className="adhere-scroll-x">水平滚动</div>
<div className="adhere-scroll-y">垂直滚动</div>

// 居中
<div className="adhere-ele-w-center">水平居中</div>
<div className="adhere-ele-h-center">垂直居中</div>

// 显示控制
<div className="adhere-hide">隐藏</div>
<div className="adhere-visible">显示</div>
<div className="adhere-hidden">隐藏但占位</div>
```

### Less 工具函数

#### 文本处理

```less
// 单行文本溢出
.my-text {
  .adhere-text-inline-overflow();
}

// 多行文本溢出
.my-multi-text {
  .adhere-text-overflow-multi(3); // 显示 3 行
}

// 文本换行
.my-break-text {
  .adhere-word-break(true); // 以字母换行
}

// 首行缩进
.my-indent-text {
  .adhere-first-line-indent(2em);
}

// 首字下沉
.my-drop-cap {
  .adhere-first-letter(40px);
}
```

#### 布局工具

```less
// 块级元素居中
.center-block {
  .adhere-block-center(); // 水平垂直居中
}

.horizontal-center {
  .adhere-block-horizontal-center(); // 水平居中
}

.vertical-center {
  .adhere-block-vertical-center(); // 垂直居中
}

// 横向滚动容器
.scroll-container {
  .adhere-scroll-x-block();
  
  &.fill {
    // 由内容支撑
  }
  
  &.scroll {
    // 可滚动
  }
}

// 行级元素垂直居中
.inline-center {
  .adhere-inline-v-center(40px); // 高度 40px
}

// 块级元素水平居中
.block-center {
  .adhere-m-h-auto(20px); // 上下边距 20px，左右自动
}
```

#### 特殊效果

```less
// 哀悼模式
.mourning {
  .adhere-mourning-mode(); // 灰度滤镜
}

// 悬停滚动
.hover-scroll {
  .adhere-hover-overflow-auto(); // 悬停时显示滚动条
}

// 不可选择
.no-select {
  .adhere-no-select(); // 禁用文本选择
}
```

### 图标字体

#### 基础用法

```tsx
// 使用内置图标
<span className="iconfont iconsousuo"></span> {/* 搜索图标 */}
<span className="iconfont iconup"></span> {/* 上箭头 */}
<span className="iconfont icondownarrow"></span> {/* 下箭头 */}
<span className="iconfont iconyueduye_zitizengda"></span> {/* 字体放大 */}
<span className="iconfont iconyueduye_zitijianxiao"></span> {/* 字体缩小 */}
```

#### 自定义图标

```css
/* 添加自定义图标 */
.icon-custom::before {
  content: '\e600';
}

.icon-another::before {
  content: '\e601';
}
```

## 🔧 高级功能

### 响应式主题

```tsx
import init from '@baifendian/adhere-ui-css';

// 响应式主题配置
init({
  colorPrimary: '#1890ff',
  fontSizeBase: '14px'
}, document.documentElement, {
  isUseMedia: true,
  designWidth: 1920,
  media: [
    { query: '(max-width: 768px)', fontSizeBase: '12px' },
    { query: '(max-width: 480px)', fontSizeBase: '10px' }
  ]
});
```

### 动态主题切换

```tsx
import { useState, useEffect } from 'react';
import init from '@baifendian/adhere-ui-css';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const themeController = init({
      colorPrimary: theme === 'light' ? '#1890ff' : '#52c41a',
      colorTextBase: theme === 'light' ? '#000000' : '#ffffff',
      colorBgBase: theme === 'light' ? '#ffffff' : '#141414'
    });
    
    // 保存控制器引用以便后续使用
    window.themeController = themeController;
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div>
      <button onClick={toggleTheme}>切换主题</button>
      {children}
    </div>
  );
}
```

### 自定义主题变量

```tsx
import init from '@baifendian/adhere-ui-css';

// 扩展默认主题映射
const customTheme = {
  // 基础主题
  colorPrimary: '#722ed1',
  colorTextBase: '#262626',
  colorBgBase: '#fafafa',
  
  // 自定义变量
  customColor: '#13c2c2',
  customSpacing: '16px',
  customRadius: '8px'
};

// 初始化并扩展主题
const themeController = init(customTheme);

// 动态修改自定义变量
themeController.setCustomColor('#fa541c');
themeController.setCustomSpacing('24px');
```

### Less 变量使用

```less
// 在 Less 中使用主题变量
@import '@baifendian/adhere-ui-css/es/index';

.my-component {
  // 使用 CSS 变量
  color: var(--adhere-color-primary);
  background: var(--adhere-color-bg-base);
  
  // 使用 Less 变量（如果可用）
  border-radius: var(--adhere-border-radius-base);
  font-size: var(--adhere-font-size-base);
  
  // 自定义样式
  padding: 20px;
  margin: 10px;
  
  // 使用 mixin
  .adhere-text-inline-overflow();
  
  &:hover {
    .adhere-hover-overflow-auto();
  }
}
```

## 📊 实用工具

### 主题变量生成器

```tsx
import init from '@baifendian/adhere-ui-css';

function generateThemeFromDesign(designTokens) {
  const themeController = init({});
  
  // 从设计稿生成主题
  Object.entries(designTokens).forEach(([key, value]) => {
    const methodName = `setAdhere${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    if (typeof themeController[methodName] === 'function') {
      themeController[methodName](value);
    }
  });
  
  return themeController;
}

// 使用示例
const designTokens = {
  colorPrimary: '#1890ff',
  fontSizeBase: '14px',
  borderRadiusBase: '6px'
};

const theme = generateThemeFromDesign(designTokens);
```

### 主题导出工具

```tsx
import init from '@baifendian/adhere-ui-css';

function exportTheme(themeController) {
  const theme = {};
  
  // 获取所有主题变量
  const methods = Object.getOwnPropertyNames(themeController);
  methods.forEach(method => {
    if (method.startsWith('getAdhere')) {
      const key = method.replace('getAdhere', '').toLowerCase();
      theme[key] = themeController[method]();
    }
  });
  
  return theme;
}

// 使用示例
const themeController = init({
  colorPrimary: '#1890ff',
  fontSizeBase: '14px'
});

const exportedTheme = exportTheme(themeController);
console.log(exportedTheme); // { colorprimary: '#1890ff', fontsizebase: '14px' }
```

## 📚 API 参考

### 主题初始化函数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `theme` | `ThemeConfig` | `{}` | 主题配置对象 |
| `wrapperEL` | `HTMLElement` | `document.documentElement` | 包装元素 |
| `media` | `MediaConfig` | `undefined` | 媒体配置 |

### ThemeConfig 接口

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `colorPrimary` | `string \| number` | `#2480ff` | 主色调 |
| `colorTextBase` | `string \| number` | `#000000` | 基础文本颜色 |
| `colorBgBase` | `string \| number` | `#ffffff` | 基础背景颜色 |
| `colorBorderBase` | `string \| number` | `#d9d9d9` | 基础边框颜色 |
| `colorSplitBase` | `string \| number` | `#f0f0f0` | 基础分割线颜色 |
| `fontSizeBase` | `string \| number` | `14px` | 基础字体大小 |
| `borderRadiusBase` | `string \| number` | `6px` | 基础圆角大小 |
| `lineWidth` | `string \| number` | `1px` | 线宽 |
| `lineType` | `string \| number` | `solid` | 线型 |

### 网格布局类

| 类名 | 说明 |
|------|------|
| `g-grid-list` | 网格容器 |
| `g-grid-list-item` | 网格项目 |
| `column2` - `column12` | 2-12 列布局 |

### Flexbox 工具类

| 类名 | 说明 |
|------|------|
| `adhere-display-flex` | 设置为 Flex 容器 |
| `adhere-flex-row` | 水平排列 |
| `adhere-flex-col` | 垂直排列 |
| `adhere-justify-center` | 主轴居中对齐 |
| `adhere-justify-between` | 主轴两端对齐 |
| `adhere-items-center` | 交叉轴居中对齐 |
| `adhere-flex-auto` | 自动填充剩余空间 |
| `adhere-flex-fixed` | 固定大小 |

### 文本工具类

| 类名 | 说明 |
|------|------|
| `adhere-text-center` | 文本居中 |
| `adhere-text-left` | 文本左对齐 |
| `adhere-text-right` | 文本右对齐 |
| `adhere-text-uppercase` | 大写文本 |
| `adhere-text-lowercase` | 小写文本 |
| `adhere-text-capitalize` | 首字母大写 |

### 布局工具类

| 类名 | 说明 |
|------|------|
| `adhere-fill-w` | 宽度 100% |
| `adhere-fill-h` | 高度 100% |
| `adhere-scroll` | 垂直滚动 |
| `adhere-scroll-x` | 水平滚动 |
| `adhere-ele-w-center` | 水平居中 |
| `adhere-ele-h-center` | 垂直居中 |
| `adhere-hide` | 隐藏元素 |
| `adhere-visible` | 显示元素 |

## 🔍 最佳实践

### 1. 主题管理

```tsx
// 创建主题上下文
import { createContext, useContext, useState } from 'react';
import init from '@baifendian/adhere-ui-css';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const themeController = init({
    colorPrimary: theme === 'light' ? '#1890ff' : '#52c41a',
    colorTextBase: theme === 'light' ? '#000000' : '#ffffff',
    colorBgBase: theme === 'light' ? '#ffffff' : '#141414'
  });
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeController }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
```

### 2. 响应式设计

```tsx
import init from '@baifendian/adhere-ui-css';

// 响应式主题配置
const responsiveTheme = init({
  colorPrimary: '#1890ff',
  fontSizeBase: '14px'
}, document.documentElement, {
  isUseMedia: true,
  designWidth: 1920,
  media: [
    { 
      query: '(max-width: 768px)', 
      fontSizeBase: '12px',
      colorPrimary: '#52c41a'
    },
    { 
      query: '(max-width: 480px)', 
      fontSizeBase: '10px',
      borderRadiusBase: '4px'
    }
  ]
});
```

### 3. 组件样式组织

```less
// 组件样式文件
@import '@baifendian/adhere-ui-css/es/index';

.my-component {
  // 使用主题变量
  color: var(--adhere-color-primary);
  background: var(--adhere-color-bg-base);
  border-radius: var(--adhere-border-radius-base);
  
  // 使用工具类
  .adhere-display-flex();
  .adhere-items-center();
  .adhere-justify-between();
  
  // 自定义样式
  padding: 20px;
  margin: 10px;
  
  &__title {
    .adhere-text-inline-overflow();
    font-size: var(--adhere-font-size-lg);
  }
  
  &__content {
    .adhere-text-overflow-multi(3);
    color: var(--adhere-color-text-secondary);
  }
  
  &:hover {
    .adhere-hover-overflow-auto();
  }
}
```

### 4. 性能优化

```tsx
// 懒加载主题
import { lazy, Suspense } from 'react';

const LazyTheme = lazy(() => import('@baifendian/adhere-ui-css/es/theme'));

function App() {
  return (
    <Suspense fallback={<div>Loading theme...</div>}>
      <LazyTheme />
      {/* 应用内容 */}
    </Suspense>
  );
}

// 按需加载样式
import '@baifendian/adhere-ui-css/es/normalize-default';
import '@baifendian/adhere-ui-css/es/mixin';
// 只导入需要的样式模块
```

## 🚀 性能优化

### 按需加载配置

```javascript
// .babelrc
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@baifendian/adhere-ui-css",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

### CSS 变量优化

```tsx
// 批量设置主题变量
function batchUpdateTheme(updates) {
  const root = document.documentElement;
  
  Object.entries(updates).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

// 使用示例
batchUpdateTheme({
  'adhere-color-primary': '#1890ff',
  'adhere-font-size-base': '14px',
  'adhere-border-radius-base': '6px'
});
```

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 📄 许可证

本项目基于 [ISC 许可证](LICENSE) 开源。

## 🔗 相关链接

- [Adhere 组件库](https://github.com/playerljc/adhere)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Ant Design](https://ant.design/)
- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/css)

---

**注意：** 这是一个功能丰富的 CSS 工具库，提供了完整的样式系统、主题管理和工具类，让您的应用拥有统一、美观的视觉体验。

