# Adhere UI SlideLayout

一个功能强大的React滑动布局组件库，提供三种不同的滑动模式，支持多种动画效果和自定义配置。

## 特性

- 🎯 **三种滑动模式**: Overlay（覆盖层）、Push（推送）、Reveal（揭示）
- 🎨 **四方向支持**: 支持左、右、上、下四个滑动方向
- ⚡ **流畅动画**: 基于CSS3 transform和transition的平滑动画
- 🛡️ **TypeScript支持**: 完整的TypeScript类型定义
- 🎛️ **高度可配置**: 丰富的配置选项和回调函数
- 📱 **响应式设计**: 支持移动端和桌面端
- 🎭 **主题支持**: 集成ConfigProvider主题系统

## 安装

```bash
npm install @baifendian/adhere-ui-slidelayout
```

## 快速开始

### 基础用法

```tsx
import React, { useState } from 'react';
import { Overlay, Push, Reveal } from '@baifendian/adhere-ui-slidelayout';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '关闭' : '打开'}侧边栏
      </button>
      
      <Overlay
        direction="left"
        collapse={isOpen}
        width="300px"
        onAfterShow={() => console.log('展开完成')}
        onAfterClose={() => console.log('关闭完成')}
      >
        <div style={{ padding: '20px' }}>
          <h3>侧边栏内容</h3>
          <p>这是一个滑动面板的内容</p>
        </div>
      </Overlay>
    </div>
  );
};
```

## 组件类型

### 1. Overlay（覆盖层模式）

滑动面板覆盖在主内容之上，支持四个方向的滑动。

```tsx
import { Overlay } from '@baifendian/adhere-ui-slidelayout';

<Overlay
  direction="left"           // 滑动方向：'left' | 'right' | 'top' | 'bottom'
  collapse={isOpen}          // 是否展开
  width="300px"             // 面板宽度
  height="100%"             // 面板高度
  mask={true}               // 是否显示遮罩层
  zIndex={9999}             // 层级索引
  time={300}                // 动画持续时间（毫秒）
  onAfterShow={handleShow}  // 展开后回调
  onAfterClose={handleClose} // 关闭后回调
  onBeforeShow={handleBeforeShow} // 展开前回调
  onBeforeClose={handleBeforeClose} // 关闭前回调
>
  <div>滑动面板内容</div>
</Overlay>
```

### 2. Push（推送模式）

滑动面板推动主内容移动，只支持左右方向的滑动。

```tsx
import { Push } from '@baifendian/adhere-ui-slidelayout';

<Push
  direction="left"          // 滑动方向：'left' | 'right'
  collapse={isOpen}         // 是否展开
  width="300px"            // 面板宽度
  slide={<div>侧边栏内容</div>} // 滑动面板内容
  master={<div>主内容</div>}   // 主内容
  masterClassName="custom-master" // 主容器CSS类名
  masterStyle={{}}         // 主容器样式
  slaveClassName="custom-slave"   // 从容器CSS类名
  slaveStyle={{}}          // 从容器样式
>
  {/* 内容通过slide和master属性传入 */}
</Push>
```

### 3. Reveal（揭示模式）

滑动面板揭示主内容，只支持左右方向的滑动。

```tsx
import { Reveal } from '@baifendian/adhere-ui-slidelayout';

<Reveal
  direction="left"          // 滑动方向：'left' | 'right'
  collapse={isOpen}         // 是否展开
  width="300px"            // 面板宽度
  slide={<div>侧边栏内容</div>} // 滑动面板内容
  master={<div>主内容</div>}   // 主内容
  masterClassName="custom-master" // 主容器CSS类名
  masterStyle={{}}         // 主容器样式
  slaveClassName="custom-slave"   // 从容器CSS类名
  slaveStyle={{}}          // 从容器样式
>
  {/* 内容通过slide和master属性传入 */}
</Reveal>
```

## API 参考

### 通用属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `className` | `string` | - | 自定义CSS类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `width` | `string \| number` | `'80%'` | 滑动面板宽度 |
| `height` | `string \| number` | `'40%'` | 滑动面板高度 |
| `mask` | `boolean` | `true` | 是否显示遮罩层 |
| `zIndex` | `number \| string` | `9999` | 层级索引 |
| `time` | `number` | `300` | 动画持续时间（毫秒） |
| `collapse` | `boolean` | `false` | 是否展开 |
| `direction` | `SlideDirection` | `'left'` | 滑动方向 |
| `onAfterShow` | `() => void` | - | 展开后回调 |
| `onAfterClose` | `() => void` | - | 关闭后回调 |
| `onBeforeShow` | `() => void` | - | 展开前回调 |
| `onBeforeClose` | `() => void` | - | 关闭前回调 |

### 滑动方向类型

```typescript
type SlideDirection = 'left' | 'right' | 'top' | 'bottom';
```

### 组件引用

所有组件都支持 `ref` 引用，提供以下方法：

```typescript
interface SlideLayoutHandle {
  getEl: () => HTMLElement | null;
}
```

使用示例：

```tsx
import React, { useRef } from 'react';
import { Overlay } from '@baifendian/adhere-ui-slidelayout';

const App = () => {
  const slideRef = useRef<SlideLayoutHandle>(null);

  const handleGetElement = () => {
    const element = slideRef.current?.getEl();
    console.log('滑动面板元素:', element);
  };

  return (
    <Overlay ref={slideRef} direction="left" collapse={isOpen}>
      <div>内容</div>
    </Overlay>
  );
};
```

## 工具函数

### slider

滑动动画函数，用于自定义动画效果。

```typescript
function slider(
  el: HTMLElement,
  x: string,
  y: string,
  z: string,
  time?: string | number,
  callback?: () => void
): void;
```

### createMask

创建遮罩层元素。

```typescript
function createMask(
  zIndex: number | string,
  closeCallback: () => void
): HTMLDivElement;
```

## 样式定制

### CSS 类名

组件使用以下CSS类名，可以通过覆盖这些类名来自定义样式：

- `.adhere-ui-slide-layout-overlay` - Overlay组件根元素
- `.adhere-ui-slide-layout-push` - Push组件根元素
- `.adhere-ui-slide-layout-reveal` - Reveal组件根元素
- `.adhere-ui-slide-layout-mask` - 遮罩层元素

### 自定义样式示例

```css
/* 自定义遮罩层样式 */
.adhere-ui-slide-layout-mask {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

/* 自定义滑动面板样式 */
.adhere-ui-slide-layout-overlay {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

## 最佳实践

### 1. 性能优化

- 使用 `useCallback` 包装回调函数
- 避免在动画期间频繁更新状态
- 合理设置 `zIndex` 避免层级冲突

### 2. 响应式设计

```tsx
const [slideWidth, setSlideWidth] = useState('300px');

useEffect(() => {
  const handleResize = () => {
    setSlideWidth(window.innerWidth < 768 ? '80%' : '300px');
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

<Overlay width={slideWidth} direction="left" collapse={isOpen}>
  {/* 内容 */}
</Overlay>
```

### 3. 无障碍访问

```tsx
<Overlay
  direction="left"
  collapse={isOpen}
  onAfterShow={() => {
    // 聚焦到面板内的第一个可聚焦元素
    const firstFocusable = document.querySelector('[tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      (firstFocusable as HTMLElement).focus();
    }
  }}
>
  <div role="dialog" aria-label="侧边栏">
    {/* 内容 */}
  </div>
</Overlay>
```

## 故障排除

### 常见问题

1. **动画不流畅**
   - 检查是否有其他CSS动画冲突
   - 确保 `time` 属性设置合理
   - 避免在动画期间进行DOM操作

2. **层级问题**
   - 调整 `zIndex` 属性
   - 检查父容器的 `position` 属性

3. **遮罩层不显示**
   - 确保 `mask` 属性为 `true`
   - 检查CSS样式是否被覆盖

## 更新日志

### v2.0.0
- 完整的TypeScript类型支持
- 优化的代码结构和错误处理
- 改进的JSDoc文档
- 更好的性能优化

## 许可证

MIT License
