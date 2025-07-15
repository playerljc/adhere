# Adhere UI Split

一个用于在React组件之间创建分割条的UI组件。

## 功能特性

- 🎯 支持垂直和水平分割
- 📱 响应式设计，支持媒体查询
- 🎨 可自定义样式和主题
- 🔧 支持数字和字符串尺寸值
- 🧩 提供Group组件自动处理多个子元素

## 安装

```bash
npm install @baifendian/adhere-ui-split
```

## 使用方法

### 基础用法

```tsx
import Split from '@baifendian/adhere-ui-split';

// 垂直分割
<Split direction="vertical" size={10} />

// 水平分割
<Split direction="horizontal" size="1rem" horizontalFit />
```

### 使用SplitGroup自动处理多个元素

```tsx
import Split from '@baifendian/adhere-ui-split';

<Split.Group direction="vertical" size={10}>
  <div>第一个元素</div>
  <div>第二个元素</div>
  <div>第三个元素</div>
</Split.Group>
```

### 响应式设计

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';
import Split from '@baifendian/adhere-ui-split';

<ConfigProvider media={{ isUseMedia: true, designWidth: 750 }}>
  <Split size={20} /> {/* 会根据设计稿宽度自动转换为rem */}
</ConfigProvider>
```

## API

### Split Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义CSS类名 |
| style | CSSProperties | - | 自定义样式对象 |
| direction | 'vertical' \| 'horizontal' | 'vertical' | 分割方向 |
| size | string \| number | 10 | 分割条大小，数字为像素，字符串可带单位 |
| horizontalFit | boolean | false | 水平方向时是否自适应高度 |

### SplitGroup Props

继承自 `SplitProps`，并添加：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| children | ReactNode | - | 子元素，会自动在元素间插入分割条 |

### 工具函数

#### getValue(media, size)

根据媒体配置和尺寸值计算最终的CSS值。

```tsx
import { getValue } from '@baifendian/adhere-ui-split';

// 数字输入，使用媒体查询
getValue({ isUseMedia: true, designWidth: 750 }, 20); // "2.6666666666666665rem"

// 数字输入，不使用媒体查询
getValue({ isUseMedia: false }, 20); // "20px"

// 字符串输入
getValue({}, "2rem"); // "2rem"
```

## 类型定义

```tsx
import type { 
  SplitProps, 
  SplitGroupProps, 
  SplitComponent, 
  MediaConfig 
} from '@baifendian/adhere-ui-split';
```

## 注意事项

1. 当使用 `SplitGroup` 时，会自动过滤掉 `null`、`undefined` 等空值子元素
2. 支持嵌套的 `Fragment` 组件，会自动展开处理
3. 当子元素数量小于等于1时，`SplitGroup` 不会插入分割条
4. 响应式功能需要配合 `ConfigProvider` 使用

## 示例

### 复杂布局示例

```tsx
import Split from '@baifendian/adhere-ui-split';

function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '200px', background: '#f0f0f0' }}>
        侧边栏
      </div>
      
      <Split direction="horizontal" size={1} horizontalFit />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '60px', background: '#e0e0e0' }}>
          头部
        </div>
        
        <Split direction="vertical" size={1} />
        
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1 }}>
            主内容
          </div>
          
          <Split direction="horizontal" size={1} horizontalFit />
          
          <div style={{ width: '300px', background: '#f5f5f5' }}>
            右侧面板
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 列表分割示例

```tsx
import Split from '@baifendian/adhere-ui-split';

function ListWithDividers({ items }) {
  return (
    <Split.Group direction="vertical" size={1}>
      {items.map(item => (
        <div key={item.id} style={{ padding: '16px' }}>
          {item.content}
        </div>
      ))}
    </Split.Group>
  );
}
```

