# Glass 玻璃的面板

玻璃的面板

## ✨ 特性

- 支持 React 18.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 支持 ref 转发
- 完整的 TypeScript 类型支持
- 提供 Ratio 组件实现响应式宽高比布局

## 🖥 兼容环境

- 现代浏览器
- IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-glass --save
```

```bash
yarn add @baifendian/adhere-ui-glass
```

## 🔨 使用

### 基础用法

```tsx
import ContourBlock from '@baifendian/adhere-ui-glass';

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
import ContourBlock from '@baifendian/adhere-ui-glass';

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
import ContourBlock from '@baifendian/adhere-ui-glass';

function App() {
  const contourRef = useRef<HTMLDivElement>(null);

  return (
    <ContourBlock ref={contourRef}>
      <p>可以通过 ref 访问 DOM 元素</p>
    </ContourBlock>
  );
}
```

## Ratio 组件

Ratio 组件用于创建固定宽高比的容器，可以根据容器的宽度自动计算高度，或根据高度自动计算宽度。

### 基础用法

```tsx
import ContourBlock from '@baifendian/adhere-ui-glass';

function App() {
  return (
    // 根据宽度计算高度，保持 16:9 的宽高比
    // origin 默认为 'width'，可以省略
    <ContourBlock.Ratio 
      aspectRatio="16:9"
      style={{ width: '100%' }}
    >
      <div>视频内容</div>
    </ContourBlock.Ratio>
  );
}
```

### 独立导入

```tsx
import { Ratio } from '@baifendian/adhere-ui-glass';

function App() {
  return (
    // origin 默认为 'width'
    <Ratio 
      aspectRatio="16:9"
      style={{ width: '100%' }}
    >
      <div>视频内容</div>
    </Ratio>
  );
}
```

### 根据高度计算宽度

```tsx
import ContourBlock from '@baifendian/adhere-ui-glass';

function App() {
  return (
    // 根据高度计算宽度，保持 4:3 的宽高比
    <ContourBlock.Ratio 
      aspectRatio="4:3" 
      origin="height"
      style={{ height: '400px' }}
    >
      <img src="image.jpg" alt="图片" />
    </ContourBlock.Ratio>
  );
}
```

### 使用数字格式的宽高比

```tsx
import ContourBlock from '@baifendian/adhere-ui-glass';

function App() {
  return (
    // 使用数字格式（16/9 = 1.777...），origin 省略时默认为 'width'
    <ContourBlock.Ratio 
      aspectRatio={16/9}
      style={{ width: '800px' }}
    >
      <video src="video.mp4" controls />
    </ContourBlock.Ratio>
  );
}
```

### 响应式视频容器

```tsx
import ContourBlock from '@baifendian/adhere-ui-glass';

function VideoContainer() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <ContourBlock.Ratio aspectRatio="16:9" origin="width">
        <iframe
          src="https://www.youtube.com/embed/xxxxx"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </ContourBlock.Ratio>
    </div>
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

### RatioProps

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| aspectRatio | 宽高比，支持数字或字符串格式 | `number \| string` | - | 是 |
| origin | 基准方向，`width` 表示根据宽度计算高度，`height` 表示根据高度计算宽度 | `'width' \| 'height'` | `'width'` | 否 |
| className | 自定义 CSS 类名 | `string` | - | 否 |
| style | 自定义内联样式 | `CSSProperties` | - | 否 |
| children | 子元素内容 | `ReactNode` | - | 否 |
| ...attrs | 其他 HTML div 属性 | `HTMLAttributes<HTMLDivElement>` | - | 否 |

#### aspectRatio 格式说明

`aspectRatio` 支持多种格式：

- **数字格式**：`16/9`、`1.777`、`4/3` 等
- **字符串格式**：
  - 冒号分隔：`"16:9"`、`"4:3"` 等
  - 斜杠分隔：`"16/9"`、`"4/3"` 等

#### origin 说明

- **`width`**：固定宽度，根据宽高比自动计算高度
  - 适用场景：容器宽度确定（如 100% 或固定像素），需要自动计算高度
  - 示例：响应式视频容器、图片展示等

- **`height`**：固定高度，根据宽高比自动计算宽度
  - 适用场景：容器高度确定，需要自动计算宽度
  - 示例：侧边栏图片、垂直布局中的元素等

### 类型定义

```tsx
interface ContourBlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

interface RatioProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  aspectRatio: number | string;
  origin?: 'width' | 'height'; // 默认值为 'width'
}
```

## 🎨 CSS 类名

### ContourBlock 组件

- `adhere-ui-contour-block` - 主容器类名
- `adhere-ui-contour-block-inner` - 内部容器类名

### Ratio 组件

- `adhere-ui-ratio` - Ratio 组件容器类名

## 📝 注意事项

### Ratio 组件使用注意

1. **ResizeObserver 支持**：组件内部使用 ResizeObserver API 监听容器尺寸变化，请确保目标浏览器支持该 API，或使用 polyfill。

2. **origin 为 width 时**：
   - 需要确保容器的宽度是确定的（如设置 `width: '100%'` 或固定像素值）
   - 组件会自动计算并设置高度
   - 不要同时设置固定高度，这可能导致宽高比不正确

3. **origin 为 height 时**：
   - 需要确保容器的高度是确定的（如设置 `height: '400px'`）
   - 组件会自动计算并设置宽度
   - 不要同时设置固定宽度，这可能导致宽高比不正确

4. **性能考虑**：
   - ResizeObserver 在容器尺寸变化时会触发重新计算
   - 对于频繁变化的容器，建议使用防抖或节流优化

## 🎯 使用场景

### Ratio 组件适用场景

1. **响应式视频容器**
   ```tsx
   <ContourBlock.Ratio aspectRatio="16:9" origin="width" style={{ width: '100%' }}>
     <video src="video.mp4" controls style={{ width: '100%', height: '100%' }} />
   </ContourBlock.Ratio>
   ```

2. **等比例图片展示**
   ```tsx
   <ContourBlock.Ratio aspectRatio="1:1" origin="width" style={{ width: '200px' }}>
     <img src="avatar.jpg" alt="头像" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
   </ContourBlock.Ratio>
   ```

3. **嵌入式内容（iframe）**
   ```tsx
   <ContourBlock.Ratio aspectRatio="16:9" origin="width">
     <iframe src="https://example.com" style={{ width: '100%', height: '100%' }} />
   </ContourBlock.Ratio>
   ```

4. **自适应卡片**
   ```tsx
   <ContourBlock.Ratio aspectRatio="4:3" origin="width" style={{ width: '100%' }}>
     <div style={{ padding: '20px', height: '100%' }}>
       <h3>卡片标题</h3>
       <p>卡片内容</p>
     </div>
   </ContourBlock.Ratio>
   ```

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/contourblock)
- [GitHub 仓库](https://github.com/playerljc/adhere)
