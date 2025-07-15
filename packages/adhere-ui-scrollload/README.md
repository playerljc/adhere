# ScrollLoad 滚动加载组件

一个用于实现滚动到底部自动加载数据的 React 组件。

## 特性

- 🚀 支持滚动到底部自动触发加载
- 🎨 可自定义加载、空数据、错误状态的 UI
- 🔧 支持自定义滚动容器
- 📱 支持移动端触摸滚动
- 🎯 可配置触发距离阈值
- 🔒 防止重复触发机制

## 安装

```bash
npm install @baifendian/adhere-ui-scrollload
```

## 基本用法

```tsx
import React, { useState, useRef } from 'react';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

const App = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollLoadRef = useRef<ScrollLoadRefHandle>(null);

  const loadMoreData = (handle?: (status?: ScrollLoadStatus) => void) => {
    setLoading(true);
    
    // 模拟异步请求
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, i) => `Item ${data.length + i + 1}`);
      
      if (data.length >= 50) {
        // 没有更多数据
        handle?.(ScrollLoad.EMPTY);
      } else {
        setData(prev => [...prev, ...newData]);
        handle?.(ScrollLoad.NORMAL);
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <ScrollLoad
      ref={scrollLoadRef}
      distance={50}
      onScrollBottom={loadMoreData}
      style={{ height: '400px' }}
    >
      {data.map((item, index) => (
        <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          {item}
        </div>
      ))}
    </ScrollLoad>
  );
};
```

## API

### ScrollLoad Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器的 CSS 类名 | `string` | - |
| style | 容器的内联样式 | `CSSProperties` | - |
| getScrollContainer | 获取滚动容器的函数，如果不提供则使用组件自身作为滚动容器 | `() => HTMLElement` | - |
| loadClassName | 加载状态的 CSS 类名 | `string` | - |
| loadStyle | 加载状态的内联样式 | `CSSProperties` | - |
| emptyClassName | 空数据状态的 CSS 类名 | `string` | - |
| emptyStyle | 空数据状态的内联样式 | `CSSProperties` | - |
| errorClassName | 错误状态的 CSS 类名 | `string` | - |
| errorStyle | 错误状态的内联样式 | `CSSProperties` | - |
| disabled | 是否禁用滚动加载功能 | `boolean` | `false` |
| distance | 触发加载的距离阈值（像素） | `number` | `50` |
| onScrollBottom | 滚动到底部时的回调函数 | `(handle?: (status?: ScrollLoadStatus) => void) => void` | - |
| onEmptyClick | 空数据状态点击事件回调 | `() => void` | - |
| onErrorClick | 错误状态点击事件回调 | `() => void` | - |
| renderLoading | 自定义加载状态渲染函数 | `() => ReactNode` | - |
| renderEmpty | 自定义空数据状态渲染函数 | `() => ReactNode` | - |
| renderError | 自定义错误状态渲染函数 | `() => ReactNode` | - |
| children | 子元素 | `ReactNode` | - |

### ScrollLoadRefHandle

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| hideAll | 隐藏所有状态显示（加载中、空数据、错误） | `() => void` |
| getScrollContainer | 获取滚动容器元素 | `() => HTMLElement \| null` |

### 状态常量

| 常量 | 说明 | 值 |
| --- | --- | --- |
| `ScrollLoad.EMPTY` | 空数据状态 | `'empty'` |
| `ScrollLoad.ERROR` | 错误状态 | `'error'` |
| `ScrollLoad.NORMAL` | 正常状态 | `'normal'` |
| `ScrollLoad.HIDE_EMPTY` | 隐藏空数据状态 | `'hide_empty'` |

## 高级用法

### 自定义滚动容器

```tsx
import React from 'react';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: '500px', overflow: 'auto' }}>
      <ScrollLoad
        getScrollContainer={() => containerRef.current!}
        onScrollBottom={(handle) => {
          // 加载逻辑
          handle?.(ScrollLoad.NORMAL);
        }}
      >
        {/* 内容 */}
      </ScrollLoad>
    </div>
  );
};
```

### 自定义状态 UI

```tsx
import React from 'react';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

const App = () => {
  return (
    <ScrollLoad
      onScrollBottom={(handle) => {
        // 加载逻辑
        handle?.(ScrollLoad.NORMAL);
      }}
      renderLoading={() => (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="spinner"></div>
          <p>正在加载...</p>
        </div>
      )}
      renderEmpty={() => (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>暂无更多数据</p>
          <button onClick={() => {/* 重新加载 */}}>
            重新加载
          </button>
        </div>
      )}
      renderError={() => (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>加载失败</p>
          <button onClick={() => {/* 重试 */}}>
            重试
          </button>
        </div>
      )}
    >
      {/* 内容 */}
    </ScrollLoad>
  );
};
```

### 错误处理

```tsx
import React from 'react';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

const App = () => {
  const loadMoreData = (handle?: (status?: ScrollLoadStatus) => void) => {
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          handle?.(ScrollLoad.EMPTY);
        } else {
          // 处理数据
          handle?.(ScrollLoad.NORMAL);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        handle?.(ScrollLoad.ERROR);
      });
  };

  return (
    <ScrollLoad
      onScrollBottom={loadMoreData}
      onErrorClick={() => {
        // 重试逻辑
        console.log('Retry loading...');
      }}
    >
      {/* 内容 */}
    </ScrollLoad>
  );
};
```

### 手动控制状态

```tsx
import React, { useRef } from 'react';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

const App = () => {
  const scrollLoadRef = useRef<ScrollLoadRefHandle>(null);

  const resetStatus = () => {
    // 手动重置所有状态
    scrollLoadRef.current?.hideAll();
  };

  return (
    <div>
      <button onClick={resetStatus}>重置状态</button>
      <ScrollLoad
        ref={scrollLoadRef}
        onScrollBottom={(handle) => {
          // 加载逻辑
          handle?.(ScrollLoad.NORMAL);
        }}
      >
        {/* 内容 */}
      </ScrollLoad>
    </div>
  );
};
```

## CSS 变量

组件支持以下 CSS 变量来自定义样式：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--load-empty-error-min-height` | 加载/空数据/错误状态的最小高度 | `30px` |
| `--load-empty-error-padding` | 加载/空数据/错误状态的内边距 | `5px` |
| `--load-empty-error-color` | 加载/空数据/错误状态的文字颜色 | `var(--adhere-color-text)` |
| `--load-empty-error-font-size` | 加载/空数据/错误状态的字体大小 | `var(--adhere-font-size-base)` |
| `--load-empty-error-line-height` | 加载/空数据/错误状态的行高 | `30px` |
| `--load-standard-color` | 标准加载状态的颜色 | `var(--adhere-color-text)` |
| `--load-animation-standard-mixins-width` | 加载动画的宽度 | `20px` |
| `--load-animation-standard-mixins-height` | 加载动画的高度 | `20px` |
| `--load-animation-standard-mixins-margin-right` | 加载动画的右边距 | `5px` |

## 注意事项

1. 确保滚动容器有明确的高度设置
2. 在移动端使用时，建议设置适当的 `distance` 值
3. 使用 `getScrollContainer` 时，确保返回的元素支持滚动
4. 在组件卸载前，建议调用 `hideAll()` 方法清理状态

## 类型定义

```tsx
import type {
  ScrollLoadComponent,
  ScrollLoadProps,
  ScrollLoadRefHandle,
  ScrollLoadStatus,
} from '@baifendian/adhere-ui-scrollload';
```

