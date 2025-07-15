# TimePickerView 时间选择器

基于 antd-mobile 的 PickerView 组件封装的时间选择器，支持多种时间格式的选择。

## 特性

- 🕐 支持多种时间格式：时:分:秒、时:分、时、分:秒、秒
- 📱 基于 antd-mobile，适配移动端
- 🎨 支持主题定制
- 🔧 完全类型化的 TypeScript 支持
- ⚡ 高性能，使用 React.memo 优化

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-time-picker-view
```

## 基本用法

```tsx
import React, { useState } from 'react';
import TimePickerView from '@baifendian/adhere-mobile-ui-time-picker-view';

function App() {
  const [time, setTime] = useState(new Date());

  return (
    <TimePickerView
      value={time}
      onChange={setTime}
      format="HH:mm:ss"
    />
  );
}
```

## 不同格式示例

### 时:分:秒格式
```tsx
<TimePickerView
  value={time}
  onChange={setTime}
  format="HH:mm:ss"
/>
```

### 时:分格式
```tsx
<TimePickerView
  value={time}
  onChange={setTime}
  format="HH:mm"
/>
```

### 仅小时
```tsx
<TimePickerView
  value={time}
  onChange={setTime}
  format="HH"
/>
```

### 分:秒格式
```tsx
<TimePickerView
  value={time}
  onChange={setTime}
  format="mm:ss"
/>
```

### 仅秒
```tsx
<TimePickerView
  value={time}
  onChange={setTime}
  format="ss"
/>
```

## API

### TimePickerViewProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义CSS类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| defaultValue | 默认选中的时间值 | `Date` | `new Date()` |
| value | 当前选中的时间值 | `Date` | - |
| onChange | 时间值变化时的回调函数 | `(value: Date) => void` | - |
| format | 时间格式 | `'HH:mm:ss' \| 'HH:mm' \| 'HH' \| 'mm:ss' \| 'ss'` | `'HH:mm:ss'` |

### Format 类型

| 格式 | 说明 | 示例 |
| --- | --- | --- |
| `HH:mm:ss` | 时:分:秒 | 14:30:25 |
| `HH:mm` | 时:分 | 14:30 |
| `HH` | 时 | 14 |
| `mm:ss` | 分:秒 | 30:25 |
| `ss` | 秒 | 25 |

## 类型定义

```tsx
import type { TimePickerViewProps, TimePickerValue, Format } from '@baifendian/adhere-mobile-ui-time-picker-view';

// 组件属性类型
type Props = TimePickerViewProps;

// 时间值类型
type TimeValue = TimePickerValue; // Date

// 时间格式类型
type TimeFormat = Format; // 'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss'
```

## 注意事项

1. 组件基于 antd-mobile 的 PickerView，请确保项目中已安装 `antd-mobile`
2. 时间值使用 JavaScript 的 `Date` 对象
3. 组件会自动处理时区问题，使用本地时间
4. 支持受控和非受控两种使用方式

## 主题定制

组件支持通过 CSS 变量进行主题定制：

```css
.adhere-mobile-ui-time-picker-view {
  --margin: 10px;
  --padding: 5px;
}
```


