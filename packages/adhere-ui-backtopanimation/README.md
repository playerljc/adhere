# BackTopAnimation 回到顶部动画组件

一个提供平滑滚动动画的回到顶部组件，支持自定义容器、动画时长和回调函数。

## 功能特性

- 🎯 **平滑滚动动画** - 使用 `requestAnimationFrame` 实现流畅的滚动动画
- 🎨 **自定义样式** - 支持自定义 CSS 类名和样式对象
- ⚙️ **灵活配置** - 可配置动画时长、z-index 层级等
- 🔄 **状态管理** - 自动处理动画状态，防止重复触发
- ♿ **无障碍支持** - 支持键盘导航和屏幕阅读器
- 🛡️ **错误处理** - 完善的错误处理和状态恢复机制

## 安装

```bash
npm install @baifendian/adhere-ui-backtopanimation
```

## 基本用法

```tsx
import React from 'react';
import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';

const App = () => {
  const handleBackToTop = async () => {
    // 执行回到顶部的逻辑
    console.log('开始回到顶部');
  };

  const handleScrollTop = (scrollTop: number) => {
    console.log('当前滚动位置:', scrollTop);
  };

  return (
    <div className="scroll-container" style={{ height: '100vh', overflow: 'auto' }}>
      {/* 页面内容 */}
      <div style={{ height: '2000px' }}>
        <h1>长页面内容</h1>
        {/* 更多内容... */}
      </div>
      
      <BackTopAnimation
        getContainer={() => document.querySelector('.scroll-container')}
        onTrigger={handleBackToTop}
        onScrollTop={handleScrollTop}
        duration={500}
      />
    </div>
  );
};
```

## API

### BackTopAnimationProps

| 属性 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| `className` | `string` | - | 否 | 自定义 CSS 类名 |
| `style` | `CSSProperties` | - | 否 | 自定义样式对象 |
| `zIndex` | `string \| number` | `ResourceNormalMaxZIndex` | 否 | 组件的 z-index 层级 |
| `duration` | `number` | `300` | 否 | 滚动动画持续时间（毫秒） |
| `getContainer` | `() => HTMLElement \| null \| undefined` | - | 是 | 获取滚动容器的函数 |
| `onTrigger` | `() => Promise<void>` | - | 是 | 触发回到顶部时的回调函数 |
| `onScrollTop` | `(scrollTopVal: number) => void` | - | 否 | 滚动过程中的回调函数 |

## 高级用法

### 自定义样式

```tsx
<BackTopAnimation
  className="custom-back-top"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    backgroundColor: '#1890ff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
  }}
  getContainer={() => document.querySelector('.scroll-container')}
  onTrigger={async () => {
    // 自定义逻辑
  }}
/>
```

### 条件显示

```tsx
const [showBackTop, setShowBackTop] = useState(false);

const handleScrollTop = (scrollTop: number) => {
  // 根据滚动位置控制显示状态
  setShowBackTop(scrollTop > 100);
};

return (
  <>
    {showBackTop && (
      <BackTopAnimation
        getContainer={() => document.querySelector('.scroll-container')}
        onTrigger={async () => {
          // 回到顶部逻辑
        }}
        onScrollTop={handleScrollTop}
      />
    )}
  </>
);
```

### 错误处理

```tsx
<BackTopAnimation
  getContainer={() => {
    const container = document.querySelector('.scroll-container');
    if (!container) {
      console.warn('滚动容器不存在');
      return null;
    }
    return container;
  }}
  onTrigger={async () => {
    try {
      // 执行回到顶部逻辑
      await someAsyncOperation();
    } catch (error) {
      console.error('回到顶部失败:', error);
      // 处理错误
    }
  }}
/>
```

## 注意事项

1. **容器要求**: `getContainer` 函数必须返回一个有效的 HTMLElement，该元素应该支持滚动
2. **动画性能**: 组件使用 `requestAnimationFrame` 确保动画流畅，建议在性能较好的设备上使用
3. **状态管理**: 组件内部会自动管理动画状态，防止重复触发
4. **错误处理**: 建议在 `onTrigger` 回调中添加适当的错误处理逻辑
5. **无障碍支持**: 组件支持键盘导航（Enter 和 Space 键）和屏幕阅读器

## 类型定义

```tsx
interface BackTopAnimationProps {
  className?: string;
  style?: CSSProperties;
  zIndex?: string | number;
  duration?: number;
  getContainer: () => HTMLElement | null | undefined;
  onTrigger: () => Promise<void>;
  onScrollTop?: (scrollTopVal: number) => void;
}
```

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基本的回到顶部动画功能
- 添加完整的 TypeScript 类型支持
- 优化代码结构和错误处理
- 添加无障碍支持
