# PullRefresh 下拉刷新组件

一个功能完整的 React 下拉刷新组件，支持触摸和鼠标操作，提供流畅的动画效果和丰富的自定义选项。

## 特性

- 🎯 **完整的下拉刷新功能** - 支持触摸和鼠标操作
- 🎨 **丰富的自定义选项** - 图标、文本、动画均可自定义
- ⚡ **流畅的动画效果** - 使用 CSS3 动画，性能优异
- 📱 **移动端友好** - 完美支持移动设备触摸操作
- 🔧 **TypeScript 支持** - 完整的类型定义
- 🎛️ **灵活的回调函数** - 支持各种状态的回调处理

## 安装

```bash
npm install @baifendian/adhere-ui-pullrefresh
```

## 基本用法

```tsx
import React, { useRef } from 'react';
import PullRefresh from '@baifendian/adhere-ui-pullrefresh';

const App = () => {
  const pullRefreshRef = useRef<PullRefreshRefHandle>(null);

  const handleRefresh = () => {
    // 执行刷新逻辑
    console.log('开始刷新数据...');
    
    // 模拟异步操作
    setTimeout(() => {
      console.log('数据刷新完成');
      // 重置组件状态
      pullRefreshRef.current?.reset();
    }, 2000);
  };

  return (
    <PullRefresh
      ref={pullRefreshRef}
      onPullRefresh={handleRefresh}
      pullHeight={200}
      isShowUpdateTime={true}
    >
      <div style={{ height: '100vh', padding: '20px' }}>
        <h1>下拉刷新示例</h1>
        <p>向下拉动页面即可触发刷新</p>
        {/* 你的内容 */}
      </div>
    </PullRefresh>
  );
};
```

## API

### PullRefreshProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `className` | `string` | `''` | 根容器的 CSS 类名 |
| `style` | `CSSProperties` | `{}` | 根容器的样式 |
| `scrollClassName` | `string` | `''` | 滚动容器的 CSS 类名 |
| `scrollStyle` | `CSSProperties` | `{}` | 滚动容器的样式 |
| `pullHeight` | `number` | `200` | 下拉刷新的触发高度（像素） |
| `isShowUpdateTime` | `boolean` | `true` | 是否显示更新时间 |
| `updateTime` | `number` | `Date.now()` | 更新时间戳（毫秒） |
| `updateTimeFormat` | `string` | `'YYYY-MM-DD HH:mm:ss'` | 更新时间的格式化字符串 |
| `renderIcon` | `() => ReactNode` | - | 自定义图标渲染函数 |
| `renderLabel` | `() => ReactNode` | `'下拉刷新'` | 自定义下拉提示文本渲染函数 |
| `renderCanLabel` | `() => ReactNode` | `'释放刷新'` | 自定义可刷新提示文本渲染函数 |
| `renderLoadingAnimation` | `() => ReactElement \| string` | `'la-ball-circus la-dark'` | 自定义加载动画渲染函数 |
| `onPullStart` | `() => void` | - | 开始下拉时的回调函数 |
| `onPullCanRefresh` | `() => void` | - | 达到可刷新状态时的回调函数 |
| `onPullRefresh` | `() => void` | - | 触发刷新时的回调函数 |
| `onPullBottom` | `() => void` | - | 下拉到底部时的回调函数 |
| `onPullRebound` | `() => void` | - | 下拉回弹时的回调函数 |
| `children` | `ReactNode` | - | 子元素 |

### PullRefreshRefHandle

| 方法 | 类型 | 说明 |
|------|------|------|
| `refresh` | `() => void` | 手动触发刷新操作 |
| `reset` | `() => void` | 重置组件状态 |
| `resetUpdateTime` | `(updateTime: number) => Promise<void>` | 重置更新时间 |
| `getUpdateTime` | `() => number` | 获取当前更新时间 |

## 高级用法

### 自定义图标和文本

```tsx
import React from 'react';
import PullRefresh from '@baifendian/adhere-ui-pullrefresh';
import { DownOutlined, LoadingOutlined } from '@ant-design/icons';

const CustomPullRefresh = () => {
  const renderIcon = () => <DownOutlined style={{ fontSize: '24px' }} />;
  
  const renderLabel = () => <span>下拉可以刷新</span>;
  
  const renderCanLabel = () => <span>释放立即刷新</span>;
  
  const renderLoadingAnimation = () => (
    <LoadingOutlined style={{ fontSize: '24px' }} spin />
  );

  return (
    <PullRefresh
      renderIcon={renderIcon}
      renderLabel={renderLabel}
      renderCanLabel={renderCanLabel}
      renderLoadingAnimation={renderLoadingAnimation}
      onPullRefresh={() => console.log('刷新中...')}
    >
      {/* 内容 */}
    </PullRefresh>
  );
};
```

### 手动控制刷新

```tsx
import React, { useRef } from 'react';
import PullRefresh from '@baifendian/adhere-ui-pullrefresh';

const ManualControl = () => {
  const pullRefreshRef = useRef<PullRefreshRefHandle>(null);

  const handleManualRefresh = () => {
    // 手动触发刷新
    pullRefreshRef.current?.refresh();
  };

  const handleReset = () => {
    // 手动重置
    pullRefreshRef.current?.reset();
  };

  const handleUpdateTime = async () => {
    // 更新刷新时间
    await pullRefreshRef.current?.resetUpdateTime(Date.now());
  };

  return (
    <div>
      <button onClick={handleManualRefresh}>手动刷新</button>
      <button onClick={handleReset}>重置</button>
      <button onClick={handleUpdateTime}>更新时间</button>
      
      <PullRefresh ref={pullRefreshRef} onPullRefresh={() => console.log('刷新')}>
        {/* 内容 */}
      </PullRefresh>
    </div>
  );
};
```

### 完整的状态回调

```tsx
import React from 'react';
import PullRefresh from '@baifendian/adhere-ui-pullrefresh';

const FullCallbacks = () => {
  return (
    <PullRefresh
      onPullStart={() => console.log('开始下拉')}
      onPullCanRefresh={() => console.log('可以刷新')}
      onPullRefresh={() => {
        console.log('触发刷新');
        // 执行数据刷新逻辑
      }}
      onPullBottom={() => console.log('下拉到底部')}
      onPullRebound={() => console.log('回弹')}
    >
      {/* 内容 */}
    </PullRefresh>
  );
};
```

## 样式定制

组件使用 CSS 类名进行样式定制，主要的类名包括：

- `.adhere-ui-pull-refresh` - 根容器
- `.adhere-ui-pull-refresh-scroll` - 滚动容器
- `.adhere-ui-pull-refresh-trigger` - 触发器容器
- `.adhere-ui-pull-refresh-trigger-inner` - 触发器内部
- `.adhere-ui-pull-refresh-trigger-icon` - 图标容器
- `.adhere-ui-pull-refresh-trigger-label` - 文本标签
- `.adhere-ui-pull-refresh-trigger-update` - 更新时间
- `.adhere-ui-pull-refresh-trigger-refresh` - 刷新动画容器

## 注意事项

1. **容器高度**：确保父容器有明确的高度，否则可能影响下拉效果
2. **触摸事件**：在移动设备上，确保没有其他元素阻止触摸事件的传播
3. **性能优化**：避免在回调函数中执行过重的操作，以免影响动画流畅度
4. **样式冲突**：注意自定义样式可能与组件默认样式产生冲突

## 浏览器支持

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## 许可证

MIT License

