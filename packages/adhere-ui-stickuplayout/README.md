# Adhere UI StickupLayout

粘性布局组件，实现滚动时头部固定的效果。

## 功能特性

- 🎯 **粘性头部**：滚动时头部自动固定在顶部
- ⚡ **高性能**：使用二分查找优化滚动性能
- 🎨 **可定制**：支持自定义样式和类名
- 📱 **响应式**：自动监听容器大小变化
- 🎭 **动画支持**：支持平滑滚动动画
- 🔧 **API 丰富**：提供多种滚动控制方法

## 安装

```bash
npm install @baifendian/adhere-ui-stickuplayout
```

## 基础用法

```tsx
import React, { useRef } from 'react';
import StickupLayout from '@baifendian/adhere-ui-stickuplayout';

const App = () => {
  const stickupRef = useRef<StickupLayoutHandle>(null);

  const handleChange = (index: number) => {
    console.log('当前激活项:', index);
  };

  return (
    <StickupLayout
      ref={stickupRef}
      onChange={handleChange}
      style={{ height: '400px' }}
    >
      <StickupLayout.Item title="标题 1" content="内容 1" />
      <StickupLayout.Item title="标题 2" content="内容 2" />
      <StickupLayout.Item title="标题 3" content="内容 3" />
    </StickupLayout>
  );
};
```

## 高级用法

### 自定义样式

```tsx
<StickupLayout
  className="custom-container"
  fixedClassName="custom-fixed"
  innerClassName="custom-inner"
  style={{ height: '500px' }}
  fixedStyle={{ backgroundColor: '#f0f0f0' }}
  innerStyle={{ padding: '20px' }}
>
  <StickupLayout.Item 
    title={<h3>自定义标题</h3>}
    content={<div>自定义内容</div>}
    className="custom-item"
    style={{ marginBottom: '20px' }}
  />
</StickupLayout>
```

### 程序化滚动

```tsx
const App = () => {
  const stickupRef = useRef<StickupLayoutHandle>(null);

  const scrollToIndex = () => {
    // 滚动到指定索引
    stickupRef.current?.scrollToByIndex(2, 500);
  };

  const scrollToElement = () => {
    const headerEl = document.querySelector('.header-element');
    if (headerEl) {
      // 滚动到指定元素
      stickupRef.current?.scrollToByHeaderEl(headerEl as HTMLElement, 300);
    }
  };

  const refresh = () => {
    // 刷新组件状态
    stickupRef.current?.refresh();
  };

  return (
    <div>
      <button onClick={scrollToIndex}>滚动到第3项</button>
      <button onClick={scrollToElement}>滚动到指定元素</button>
      <button onClick={refresh}>刷新</button>
      
      <StickupLayout ref={stickupRef}>
        <StickupLayout.Item title="标题 1" content="内容 1" />
        <StickupLayout.Item title="标题 2" content="内容 2" />
        <StickupLayout.Item title="标题 3" content="内容 3" />
      </StickupLayout>
    </div>
  );
};
```

## API

### StickupLayout Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 外层容器类名 | `string` | - |
| style | 外层容器样式 | `CSSProperties` | - |
| fixedClassName | 固定头部容器类名 | `string` | - |
| fixedStyle | 固定头部容器样式 | `CSSProperties` | - |
| innerClassName | 内容区域容器类名 | `string` | - |
| innerStyle | 内容区域容器样式 | `CSSProperties` | - |
| onChange | 当前激活项变化回调 | `(index: number) => void` | - |
| children | 子元素 | `ReactElement<StickupLayoutItemProps>[]` | - |

### StickupLayoutItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 项容器类名 | `string` | - |
| style | 项容器样式 | `CSSProperties` | - |
| title | 头部标题内容 | `ReactNode` | - |
| content | 内容区域 | `ReactNode` | - |

### StickupLayoutHandle Methods

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| refresh | 刷新组件状态，重新计算索引 | - | `void` |
| scrollToByIndex | 根据索引滚动到指定项 | `index: number, duration?: number` | `void` |
| scrollToByHeaderEl | 根据头部元素滚动到指定项 | `headerEl: HTMLElement, duration?: number` | `void` |

## 类型定义

```tsx
import type {
  StickupLayoutComponent,
  StickupLayoutProps,
  StickupLayoutHandle,
  StickupLayoutItemProps,
  IndexItem,
  ScrollAnimationConfig,
} from '@baifendian/adhere-ui-stickuplayout';
```

## 注意事项

1. **容器高度**：建议为 StickupLayout 设置固定高度，否则可能无法正常工作
2. **子元素**：children 必须是 StickupLayout.Item 组件数组
3. **性能优化**：组件内部使用 ResizeObserver 监听大小变化，会自动重新计算索引
4. **动画控制**：duration 参数为 0 时表示立即滚动，无动画效果

## 样式定制

组件使用 CSS 类名进行样式控制：

- `.adhere-ui-stickup-layout` - 外层容器
- `.adhere-ui-stickup-layout-fixed` - 固定头部容器
- `.adhere-ui-stickup-layout-inner` - 内容区域容器
- `.adhere-ui-stickup-layout-item` - 单个项目容器
- `.adhere-ui-stickup-layout-item-header` - 项目头部
- `.adhere-ui-stickup-layout-item-content` - 项目内容
- `.adhere-ui-stickup-layout-mask` - 滚动动画遮罩层

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基础粘性布局功能
- 提供程序化滚动 API
- 支持自定义样式和类名

