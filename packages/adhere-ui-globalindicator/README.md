# Adhere UI GlobalIndicator

全局指示器组件，提供全屏加载指示器功能，支持多种尺寸和自定义配置。

## 特性

- 🎯 **简单易用** - 提供简洁的 API 接口
- 🎨 **多种尺寸** - 支持 small、default、large 三种尺寸
- 🔧 **高度可配置** - 支持自定义文本、z-index、父容器等
- 🛡️ **类型安全** - 完整的 TypeScript 类型支持
- 🔄 **向后兼容** - 支持新旧两种 API 调用方式
- 🧹 **自动清理** - 提供批量隐藏功能

## 安装

```bash
npm install @baifendian/adhere-ui-globalindicator
```

## 基本使用

### 简单使用

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

// 显示默认指示器
const indicator = GlobalIndicator.show();

// 隐藏指示器
GlobalIndicator.hide(indicator);
```

### 带配置使用

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

// 显示带文本的指示器
const indicator = GlobalIndicator.show({
  text: '加载中...',
  size: 'large',
  zIndex: 10000
});

// 隐藏指示器
GlobalIndicator.hide(indicator);
```

### 兼容旧版本 API

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

// 旧版本调用方式（仍然支持）
const indicator = GlobalIndicator.show(
  document.body,    // 父容器
  '加载中...',      // 文本
  10000,           // z-index
  'large'          // 尺寸
);
```

## API 参考

### GlobalIndicator.show()

显示全局指示器。

#### 新版本用法

```typescript
show(options?: GlobalIndicatorOptions): HTMLElement
```

**参数：**

- `options` (可选) - 配置选项
  - `parent?: HTMLElement` - 父容器元素，默认为 `document.body`
  - `text?: string` - 显示的文本内容
  - `zIndex?: number` - z-index 层级，默认为最大层级
  - `size?: Size` - 指示器尺寸，可选值：`'small'` | `'default'` | `'large'`

**返回值：**

- `HTMLElement` - 指示器 DOM 元素

#### 兼容旧版本用法

```typescript
show(parent?: HTMLElement, text?: string, zIndex?: number, size?: Size): HTMLElement
```

### GlobalIndicator.hide()

隐藏指定的指示器。

```typescript
hide(indicatorDom: HTMLElement): void
```

**参数：**

- `indicatorDom` - 要隐藏的指示器 DOM 元素

### GlobalIndicator.hideAll()

隐藏所有活跃的指示器。

```typescript
hideAll(): void
```

## 类型定义

### GlobalIndicatorOptions

```typescript
interface GlobalIndicatorOptions {
  /** 父容器元素，默认为 document.body */
  parent?: HTMLElement;
  /** 显示的文本内容 */
  text?: string;
  /** z-index 层级，默认为最大层级 */
  zIndex?: number;
  /** 指示器尺寸 */
  size?: Size;
}
```

### Size

```typescript
type Size = 'default' | 'small' | 'large';
```

### GlobalIndicator

```typescript
interface GlobalIndicator {
  show(options?: GlobalIndicatorOptions): HTMLElement;
  show(parent?: HTMLElement, text?: string, zIndex?: number, size?: Size): HTMLElement;
  hide(indicatorDom: HTMLElement): void;
  hideAll(): void;
}
```

## 使用示例

### 异步操作中使用

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

async function fetchData() {
  const indicator = GlobalIndicator.show({
    text: '正在加载数据...',
    size: 'large'
  });

  try {
    const data = await api.getData();
    return data;
  } finally {
    GlobalIndicator.hide(indicator);
  }
}
```

### 批量操作

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

// 显示多个指示器
const indicator1 = GlobalIndicator.show({ text: '操作1' });
const indicator2 = GlobalIndicator.show({ text: '操作2' });

// 隐藏所有指示器
GlobalIndicator.hideAll();
```

### 自定义容器

```typescript
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

const container = document.getElementById('my-container');

const indicator = GlobalIndicator.show({
  parent: container,
  text: '在指定容器中加载',
  size: 'small'
});
```

## 样式定制

组件使用 CSS 变量来支持主题定制：

```css
:root {
  --adhere-color-primary: #1890ff; /* 指示器颜色 */
}
```

## 注意事项

1. 组件会自动管理指示器的生命周期，建议在操作完成后及时调用 `hide()` 方法
2. 当父容器为 `document.body` 时，指示器会使用 `position: fixed` 定位
3. 组件内部会记录所有活跃的指示器实例，可以通过 `hideAll()` 方法批量清理
4. 支持 TypeScript，提供完整的类型提示和检查

## 更新日志

### v2.0.0

- ✨ 新增配置对象 API，提供更好的开发体验
- 🔧 优化 TypeScript 类型定义
- 📝 完善 JSDoc 文档
- 🛡️ 增强错误处理和边界情况处理
- ♻️ 重构代码结构，提高可维护性
- 🔄 保持向后兼容性

