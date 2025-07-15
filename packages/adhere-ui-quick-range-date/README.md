# QuickRangeDate 快速日期范围选择器

一个基于 Ant Design 的快速日期范围选择器组件，支持预设时间范围和自定义时间范围选择。

## 特性

- 🚀 支持多种预设时间范围（过去/未来）
- 🎨 基于 Ant Design 设计规范
- 🔧 高度可定制化
- 📱 响应式设计
- 🌍 国际化支持
- ⚡ TypeScript 支持

## 安装

```bash
npm install @baifendian/adhere-ui-quick-range-date
```

## 基础用法

```tsx
import React, { useState } from 'react';
import QuickRangeDate, { type DateValue } from '@baifendian/adhere-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState<DateValue>();

  return (
    <QuickRangeDate
      value={value}
      onChange={setValue}
    />
  );
};
```

## 自定义配置

```tsx
import React, { useState } from 'react';
import QuickRangeDate, { type DateValue, type ConfigItem } from '@baifendian/adhere-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState<DateValue>();

  const config: ConfigItem[] = [
    { type: 'a-d', value: 7, label: '最近7天' },
    { type: 'a-w', value: 1, label: '最近1周' },
    { type: 'a-M', value: 3, label: '最近3个月' },
    { type: 'custom', label: '自定义' },
  ];

  return (
    <QuickRangeDate
      config={config}
      value={value}
      onChange={setValue}
    />
  );
};
```

## 自定义渲染

```tsx
import React, { useState } from 'react';
import QuickRangeDate, { type DateValue } from '@baifendian/adhere-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState<DateValue>();

  return (
    <QuickRangeDate
      value={value}
      onChange={setValue}
      children={({ defaultElement, value, onChange }) => (
        <div>
          <h3>选择时间范围</h3>
          {defaultElement}
          {value && (
            <div>
              已选择: {value.type} - {value.start} 到 {value.end}
            </div>
          )}
        </div>
      )}
    />
  );
};
```

## API

### QuickRangeDate Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| config | 配置项数组 | `ConfigItem[]` | 默认配置 |
| value | 当前值 | `DateValue` | - |
| onChange | 值变化回调 | `(value: DateValue) => void` | - |
| rangePickerProps | 日期范围选择器属性 | `RangePickerProps` | - |
| radioGroupProps | 单选组属性 | `RadioGroupProps` | - |
| children | 自定义渲染函数 | `(params) => ReactNode` | - |

### DateValue

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| type | 日期类型 | `DateType` |
| value | 时间单位数量 | `number` |
| start | 开始时间戳 | `number` |
| end | 结束时间戳 | `number` |

### DateType

支持的时间类型：

- `a-d`: 过去天数
- `a-w`: 过去周数
- `a-M`: 过去月数
- `a-Q`: 过去季度数
- `a-y`: 过去年数
- `a-h`: 过去小时数
- `a-m`: 过去分钟数
- `a-s`: 过去秒数
- `a-ms`: 过去毫秒数
- `b-d`: 未来天数
- `b-w`: 未来周数
- `b-M`: 未来月数
- `b-Q`: 未来季度数
- `b-y`: 未来年数
- `b-h`: 未来小时数
- `b-m`: 未来分钟数
- `b-s`: 未来秒数
- `b-ms`: 未来毫秒数
- `custom`: 自定义时间范围

### ConfigItem

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| type | 日期类型 | `DateType` |
| value | 时间单位数量 | `number` |
| label | 显示标签 | `ReactNode` |
| render | 自定义渲染函数 | `(value?: DateValue) => ReactNode` |

## 工具函数

### sync(dateValue)

同步日期值，确保 start 和 end 字段存在。

```tsx
import { sync } from '@baifendian/adhere-ui-quick-range-date';

const result = sync({ type: 'a-d', value: 7 });
// 返回: { type: 'a-d', value: 7, start: 1234567890, end: 1234567890 }
```

### stringValue(dateValue)

将日期值转换为字符串。

```tsx
import { stringValue } from '@baifendian/adhere-ui-quick-range-date';

const result = stringValue({ type: 'a-d', value: 7 });
// 返回: "a-d,7"
```

### getLabel({ type, value })

获取日期类型对应的标签。

```tsx
import { getLabel } from '@baifendian/adhere-ui-quick-range-date';

const result = getLabel({ type: 'a-d', value: 7 });
// 返回: "过去7天"
```

### numberToDayjs(dateValue)

将数字时间戳转换为 dayjs 对象数组。

```tsx
import { numberToDayjs } from '@baifendian/adhere-ui-quick-range-date';

const result = numberToDayjs([1234567890, 1234567890]);
// 返回: [dayjs对象, dayjs对象]
```

### datesToNumbers(_value)

将 dayjs 对象数组转换为数字时间戳数组。

```tsx
import { datesToNumbers } from '@baifendian/adhere-ui-quick-range-date';

const result = datesToNumbers([dayjs(), dayjs()]);
// 返回: [1234567890, 1234567890]
```

### getValueEntityByStringValue(stringValue)

根据字符串值获取日期实体。

```tsx
import { getValueEntityByStringValue } from '@baifendian/adhere-ui-quick-range-date';

const result = getValueEntityByStringValue('a-d,7');
// 返回: { type: 'a-d', value: 7 }
```

### getDataRangeByValue(type, typeValue)

根据日期类型和值获取时间范围。

```tsx
import { getDataRangeByValue } from '@baifendian/adhere-ui-quick-range-date';

const result = getDataRangeByValue('a-d', 7);
// 返回: [开始时间戳, 结束时间戳]
```

### isCustomByType(type)

判断是否为自定义类型。

```tsx
import { isCustomByType } from '@baifendian/adhere-ui-quick-range-date';

const result = isCustomByType('custom');
// 返回: true
```

## 样式定制

组件使用 CSS 变量进行样式定制：

```css
.adhere-ui-quick-range-date {
  --range-margin: 20px; /* 日期范围选择器边距 */
}
```

## 注意事项

1. 组件依赖 `dayjs` 和 `quarterOfYear` 插件
2. 需要确保项目中已安装 `antd` 依赖
3. 自定义时间范围需要用户手动选择开始和结束日期
4. 组件会自动处理时区转换
