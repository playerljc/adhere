# Adhere Mobile UI Spin

## 简介
&ensp;&ensp;基于 antd-mobile Toast 组件封装的加载指示器，提供无侵入的 loading 体验。

## ✨ 特性
- 支持 react(18.x)
- antd-mobile(5.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- 支持自定义样式和层级
- 支持自定义加载文本

## 🖥 兼容环境
- 现代浏览器，IE11

## 📦 安装
```bash
npm install @baifendian/adhere-mobile-ui-spin --save
```

```bash
yarn add @baifendian/adhere-mobile-ui-spin
```

## 🔨 使用

### 基础用法
```tsx
import React, { useState } from 'react';
import Spin from '@baifendian/adhere-mobile-ui-spin';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadData = async () => {
    setLoading(true);
    try {
      // 模拟异步操作
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', height: '200px' }}>
      <button onClick={handleLoadData}>加载数据</button>
      <Spin spinning={loading} />
    </div>
  );
};
```

### 自定义文本
```tsx
<Spin 
  spinning={true} 
  text="正在加载数据，请稍候..." 
/>
```

### 自定义样式
```tsx
<Spin 
  spinning={true}
  className="custom-spin"
  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
  zIndex={1000}
/>
```

## 📋 API

### SpinProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否显示加载状态 | `boolean` | `false` |
| text | 加载提示文本 | `string \| React.ReactNode` | `'加载中...'` |
| className | 自定义 CSS 类名 | `string` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| zIndex | 组件的 z-index 层级 | `number` | `999` |

### 其他属性
除了上述属性外，还支持 antd-mobile Toast 组件的其他属性（除了 `getContainer`、`content`、`visible`、`duration`）。

## 🎨 样式定制

组件使用 CSS 类名 `adhere-mobile-ui-spin` 作为根容器，您可以通过覆盖样式来自定义外观：

```css
.adhere-mobile-ui-spin {
  /* 自定义样式 */
}
```

## 🌍 国际化

组件默认使用 `Intl.get('loading')` 获取加载文本，支持国际化配置。

## 线上地址(临时)
[http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/spin](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/spin)


