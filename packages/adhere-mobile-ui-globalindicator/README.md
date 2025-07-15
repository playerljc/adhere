# Adhere Mobile UI GlobalIndicator

基于 antd-mobile 的全局加载指示器组件，提供简洁易用的全局加载状态管理。

## 特性

- 🚀 基于 antd-mobile Toast 组件
- 📱 移动端友好的 UI 设计
- 🛡️ 完整的 TypeScript 类型支持
- 🔧 灵活的配置选项
- ⚡ 轻量级实现

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-globalindicator
```

## 使用方法

### 基础用法

```typescript
import GlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';

// 显示加载指示器
const handler = GlobalIndicator.show(document.body, '加载中...');

// 隐藏指定的指示器
GlobalIndicator.hide(handler);

// 隐藏所有指示器
GlobalIndicator.hideAll();
```

### 使用工厂函数创建自定义实例

```typescript
import { createGlobalIndicator } from '@baifendian/adhere-mobile-ui-globalindicator';

// 创建自定义配置的全局指示器
const customIndicator = createGlobalIndicator({
  text: '默认加载文本',
  parent: document.getElementById('app'),
  maskClickable: false,
  icon: 'loading',
  duration: 0,
});

// 使用自定义实例
const handler = customIndicator.show();
customIndicator.hide(handler);
```

### React 组件中使用

```tsx
import React, { useEffect } from 'react';
import GlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';

const MyComponent: React.FC = () => {
  useEffect(() => {
    // 显示加载指示器
    const handler = GlobalIndicator.show(document.body, '数据加载中...');

    // 模拟异步操作
    const timer = setTimeout(() => {
      GlobalIndicator.hide(handler);
    }, 3000);

    return () => {
      clearTimeout(timer);
      GlobalIndicator.hide(handler);
    };
  }, []);

  return <div>组件内容</div>;
};
```

## API

### GlobalIndicator

#### show(parent?, text?)

显示全局加载指示器。

**参数：**
- `parent?: HTMLElement` - 指示器的父容器元素，默认为 `document.body`
- `text?: string` - 显示的文本内容，默认为空字符串

**返回值：**
- `ToastHandler` - Toast 处理器，用于后续隐藏操作

**示例：**
```typescript
const handler = GlobalIndicator.show(document.body, '加载中...');
```

#### hide(handler)

隐藏指定的全局指示器。

**参数：**
- `handler: ToastHandler` - Toast 处理器，由 `show` 方法返回

**示例：**
```typescript
GlobalIndicator.hide(handler);
```

#### hideAll()

隐藏所有全局指示器。

**示例：**
```typescript
GlobalIndicator.hideAll();
```

### createGlobalIndicator(options)

创建自定义配置的全局指示器实例。

**参数：**
- `options: GlobalIndicatorOptions` - 配置选项

**返回值：**
- `GlobalIndicator` - 全局指示器实例

**配置选项：**
```typescript
interface GlobalIndicatorOptions {
  /** 显示的文本内容 */
  text?: string;
  /** 父容器元素 */
  parent?: HTMLElement;
  /** 是否可点击遮罩关闭 */
  maskClickable?: boolean;
  /** 指示器图标类型 */
  icon?: 'loading' | 'success' | 'fail';
  /** 显示时长（毫秒），0 表示不自动关闭 */
  duration?: number;
}
```

## 类型定义

```typescript
import type { GlobalIndicator, GlobalIndicatorOptions } from '@baifendian/adhere-mobile-ui-globalindicator';
```

## 注意事项

1. 确保在使用前已经正确引入了 antd-mobile 的样式
2. `parent` 参数必须是有效的 HTMLElement
3. `handler` 参数必须是由 `show` 方法返回的有效 ToastHandler
4. 建议在组件卸载时调用 `hide` 方法清理指示器

## 错误处理

组件内置了错误处理机制：

- 参数验证失败时会抛出相应的错误
- Toast 操作失败时会在控制台输出警告信息
- 所有错误都不会影响应用的正常运行

## 许可证

MIT


