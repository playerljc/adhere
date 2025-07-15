# ContourBlock 轮廓块组件

一个轮廓块组件，用于创建带有轮廓样式的容器块。支持自定义样式和类名，并继承所有 HTML div 元素的属性。

## ✨ 特性

- 支持 React 18.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 支持 ref 转发
- 完整的 TypeScript 类型支持

## 🖥 兼容环境

- 现代浏览器
- IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-contourblock --save
```

```bash
yarn add @baifendian/adhere-ui-contourblock
```

## 🔨 使用

### 基础用法

```tsx
import ContourBlock from '@baifendian/adhere-ui-contourblock';

function App() {
  return (
    <ContourBlock>
      <p>这是轮廓块内的内容</p>
    </ContourBlock>
  );
}
```

### 自定义样式

```tsx
import ContourBlock from '@baifendian/adhere-ui-contourblock';

function App() {
  return (
    <ContourBlock 
      className="custom-contour-block"
      style={{ 
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}
    >
      <p>自定义样式的轮廓块</p>
    </ContourBlock>
  );
}
```

### 使用 ref

```tsx
import React, { useRef } from 'react';
import ContourBlock from '@baifendian/adhere-ui-contourblock';

function App() {
  const contourRef = useRef<HTMLDivElement>(null);

  return (
    <ContourBlock ref={contourRef}>
      <p>可以通过 ref 访问 DOM 元素</p>
    </ContourBlock>
  );
}
```

## 📋 API

### ContourBlockProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS 类名 | `string` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| children | 子元素内容 | `ReactNode` | - |
| ...attrs | 其他 HTML div 属性 | `HTMLAttributes<HTMLDivElement>` | - |

### 类型定义

```tsx
interface ContourBlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
```

## 🎨 CSS 类名

组件使用以下 CSS 类名：

- `adhere-ui-contour-block` - 主容器类名
- `adhere-ui-contour-block-inner` - 内部容器类名

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/contourblock)
- [GitHub 仓库](https://github.com/playerljc/adhere)
