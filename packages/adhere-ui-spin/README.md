# Adhere UI Spin

一个基于 spin.js 的高性能加载指示器组件，支持多种尺寸和自定义配置。

## 特性

- 🎯 **高性能**: 基于 spin.js 库，提供流畅的旋转动画
- 📱 **响应式**: 支持移动端适配
- 🎨 **可定制**: 支持主题色、尺寸、文本等自定义配置
- 🎭 **主题支持**: 集成 Adhere 主题系统
- 📦 **轻量级**: 体积小巧，按需加载

## 安装

```bash
npm install @baifendian/adhere-ui-spin
```

## 基础用法

```tsx
import React, { useState } from 'react';
import Spin from '@baifendian/adhere-ui-spin';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div style={{ position: 'relative', height: '200px' }}>
      <button onClick={handleLoad}>开始加载</button>
      <Spin spinning={loading} text="加载中..." />
    </div>
  );
};
```

## API

### SpinProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否显示加载状态 | `boolean` | `false` |
| text | 加载提示文本 | `string` | `''` |
| zIndex | 组件的 z-index 层级 | `string \| number` | `ResourceNormalMaxZIndex` |
| size | 组件尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |

### 尺寸说明

- `small`: 小尺寸，适合紧凑布局
- `default`: 默认尺寸，适合大多数场景
- `large`: 大尺寸，适合重要操作的加载提示

## 高级用法

### 自定义主题色

```tsx
// 通过 CSS 变量自定义
<div style={{ '--adhere-color-primary': '#ff4d4f' }}>
  <Spin spinning={true} text="自定义主题色" />
</div>
```

### 自定义样式

```tsx
// 通过 CSS 变量自定义组件样式
<div style={{
  '--adhere-spin-background-color': 'rgba(0, 0, 0, 0.8)',
  '--adhere-spin-text-color': '#ffffff',
  '--adhere-spin-dot-width': '60px',
  '--adhere-spin-dot-height': '72px'
}}>
  <Spin spinning={true} text="自定义样式" />
</div>
```

### 不同尺寸示例

```tsx
import React from 'react';
import Spin from '@baifendian/adhere-ui-spin';

const SizeExample = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Spin spinning={true} size="small" text="小尺寸" />
    </div>
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Spin spinning={true} size="default" text="默认尺寸" />
    </div>
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Spin spinning={true} size="large" text="大尺寸" />
    </div>
  </div>
);
```

## CSS 变量

组件支持以下 CSS 变量进行样式自定义：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--adhere-spin-background-color` | 背景色 | `rgb(255 255 255 / 50%)` |
| `--adhere-spin-text-color` | 文本颜色 | `var(--adhere-color-primary, #1890ff)` |
| `--adhere-spin-dot-width` | 旋转点宽度 | `50px` |
| `--adhere-spin-dot-height` | 旋转点高度 | `60px` |
| `--adhere-spin-z-index` | z-index 层级 | `1000` |

### 移动端变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--adhere-spin-dot-width-mobile` | 移动端旋转点宽度 | `40px` |
| `--adhere-spin-dot-height-mobile` | 移动端旋转点高度 | `48px` |

## 注意事项

1. **容器定位**: 组件使用绝对定位，父容器需要设置 `position: relative`
2. **性能优化**: 组件使用 `React.memo` 进行性能优化，避免不必要的重渲染
3. **内存管理**: 组件会自动清理 Spinner 实例，防止内存泄漏
4. **主题集成**: 组件会自动读取 CSS 变量 `--adhere-color-primary` 作为主题色

## 技术实现

- **动画库**: 基于 [spin.js](https://spin.js.org/) 实现流畅的旋转动画
- **主题系统**: 集成 Adhere 主题系统，支持动态主题切换
- **响应式设计**: 使用 CSS Media Queries 实现移动端适配
- **TypeScript**: 完整的 TypeScript 类型支持

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基础加载动画功能
- 支持三种尺寸配置
- 集成主题系统

