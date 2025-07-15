# Adhere UI Surnames

一个高性能的姓氏索引列表组件，支持垂直和水平方向的索引导航，提供平滑滚动动画和触摸/鼠标交互。

## 特性

- 🎯 **多方向支持**: 支持 `top`、`right`、`bottom`、`left` 四个方向的索引布局
- 🎨 **自定义渲染**: 支持自定义索引项、标题和内容的渲染
- 📱 **触摸友好**: 完美支持触摸设备和鼠标设备
- ⚡ **高性能**: 使用 `useCallback` 和 `useMemo` 优化渲染性能
- 🎭 **平滑动画**: 提供流畅的滚动动画效果
- 🔧 **TypeScript**: 完整的 TypeScript 类型支持
- 📖 **JSDoc**: 详细的代码文档和示例

## 安装

```bash
npm install @baifendian/adhere-ui-surnames
```

## 基础用法

```tsx
import React from 'react';
import Surnames from '@baifendian/adhere-ui-surnames';

const App = () => {
  const indexes = [
    { index: 'A' },
    { index: 'B' },
    { index: 'C' },
    // ... 更多索引
  ];

  const dataSource = [
    {
      index: 'A',
      data: [
        { name: 'Alice', phone: '123-456-7890' },
        { name: 'Amy', phone: '123-456-7891' },
      ],
    },
    {
      index: 'B',
      data: [
        { name: 'Bob', phone: '123-456-7892' },
        { name: 'Bill', phone: '123-456-7893' },
      ],
    },
    // ... 更多数据
  ];

  return (
    <Surnames
      position="right"
      indexes={indexes}
      dataSource={dataSource}
      onScroll={(name) => console.log('滚动到:', name)}
    />
  );
};
```

## 自定义渲染

```tsx
const indexes = [
  {
    index: 'A',
    renderIndex: (index) => <span style={{ color: 'red' }}>{index.index}</span>,
    renderTitle: (record) => <strong>{record.index} 组</strong>,
    renderContent: (record) => (
      <div>
        {record.data?.map((item, i) => (
          <div key={i} style={{ padding: '8px' }}>
            {item.name} - {item.phone}
          </div>
        ))}
      </div>
    ),
  },
  // ... 更多索引配置
];
```

## API

### SurnamesProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `className` | `string` | - | 根容器的 CSS 类名 |
| `style` | `CSSProperties` | `{}` | 根容器的内联样式 |
| `indexClassName` | `string` | - | 索引容器的 CSS 类名 |
| `indexStyle` | `CSSProperties` | `{}` | 索引容器的内联样式 |
| `contentClassName` | `string` | - | 内容容器的 CSS 类名 |
| `contentStyle` | `CSSProperties` | - | 内容容器的内联样式 |
| `position` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | 索引位置 |
| `indexes` | `IndexConfig[]` | `[]` | 索引配置数组 |
| `dataSource` | `Record[]` | `[]` | 数据源 |
| `onBeforeScroll` | `(name?: string) => void` | - | 滚动前的回调函数 |
| `onScroll` | `(name?: string) => void` | - | 滚动后的回调函数 |

### IndexConfig

| 属性 | 类型 | 说明 |
|------|------|------|
| `index` | `string` | 索引标识符 |
| `renderIndex` | `(index: IndexConfig) => ReactNode` | 自定义渲染索引项的函数 |
| `renderTitle` | `(record: Record) => ReactNode` | 自定义渲染标题的函数 |
| `renderContent` | `(record: Record) => ReactNode` | 自定义渲染内容的函数 |

### Record

| 属性 | 类型 | 说明 |
|------|------|------|
| `index` | `string` | 索引标识符 |
| `data` | `object[]` | 数据数组 |

### SurnamesRefHandle

| 方法 | 参数 | 说明 |
|------|------|------|
| `scrollToAnimation` | `(name?: string, duration?: number) => void` | 滚动到指定索引位置（带动画效果） |
| `scrollTo` | `(name?: string) => void` | 直接滚动到指定索引位置（无动画） |

## 使用 ref 控制滚动

```tsx
import React, { useRef } from 'react';
import Surnames, { type SurnamesRefHandle } from '@baifendian/adhere-ui-surnames';

const App = () => {
  const surnamesRef = useRef<SurnamesRefHandle>(null);

  const handleScrollToA = () => {
    surnamesRef.current?.scrollToAnimation('A', 500);
  };

  const handleScrollToB = () => {
    surnamesRef.current?.scrollTo('B');
  };

  return (
    <div>
      <button onClick={handleScrollToA}>滚动到 A（带动画）</button>
      <button onClick={handleScrollToB}>滚动到 B（无动画）</button>
      
      <Surnames
        ref={surnamesRef}
        position="right"
        indexes={indexes}
        dataSource={dataSource}
      />
    </div>
  );
};
```

## 不同位置的布局

### 右侧索引（默认）

```tsx
<Surnames position="right" indexes={indexes} dataSource={dataSource} />
```

### 左侧索引

```tsx
<Surnames position="left" indexes={indexes} dataSource={dataSource} />
```

### 顶部索引

```tsx
<Surnames position="top" indexes={indexes} dataSource={dataSource} />
```

### 底部索引

```tsx
<Surnames position="bottom" indexes={indexes} dataSource={dataSource} />
```

## CSS 变量

组件支持通过 CSS 变量进行样式自定义：

```css
.adhere-ui-surnames {
  /* 高亮元素样式 */
  --highlighted-width: 44px;
  --highlighted-height: 44px;
  --highlighted-color: #fff;
  --highlighted-background-color: var(--adhere-color-primary);
  --highlighted-z-index: 9998;
  
  /* 索引项样式 */
  --index-item-padding: 2px;
  --index-item-color: var(--adhere-color-primary);
  --index-item-font-weight: bold;
  --index-item-active-background-color: var(--adhere-color-primary);
  
  /* 组标题样式 */
  --group-title-height: 20px;
  --group-title-color: var(--adhere-color-text-secondary);
  --group-title-background: rgb(247, 247, 247);
}
```

## 性能优化

### 已实现的优化

1. **函数缓存**: 使用 `useCallback` 缓存事件处理函数和计算函数
2. **渲染缓存**: 使用 `useMemo` 缓存渲染结果
3. **类型安全**: 完整的 TypeScript 类型定义
4. **内存管理**: 正确的事件监听器清理
5. **动画优化**: 使用 `requestAnimationFrame` 实现平滑动画

### 使用建议

1. **避免频繁更新**: 尽量减少 `indexes` 和 `dataSource` 的更新频率
2. **合理使用自定义渲染**: 复杂的自定义渲染函数会影响性能
3. **控制数据量**: 大量数据时考虑虚拟滚动

## 更新日志

### v2.0.0 (最新)

- ✨ 完整的 TypeScript 类型支持
- 📝 详细的 JSDoc 文档
- ⚡ 性能优化：使用 `useCallback` 和 `useMemo`
- 🔧 代码重构：更好的函数组织和错误处理
- 🎨 改进的事件处理逻辑
- 📦 导出所有类型定义

### v1.x.x

- 🎯 基础功能实现
- 📱 触摸和鼠标交互支持
- 🎭 滚动动画效果

## 许可证

MIT License

