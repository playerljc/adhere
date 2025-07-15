# Adhere Mobile UI Quick Range Date

移动端快速日期范围选择器组件，基于 `@baifendian/adhere-ui-quick-range-date` 构建，专为移动端场景优化。

## 特性

- 📱 **移动端优化**：专为移动设备设计的交互体验
- 🎯 **快速选择**：支持预设时间范围快速选择
- 📅 **自定义范围**：支持自定义日期范围选择
- 🎨 **主题适配**：支持移动端主题配置
- 🔧 **高度可定制**：丰富的配置选项
- ⚡ **TypeScript**：完整的类型支持

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-quick-range-date
```

## 基础用法

```tsx
import React, { useState } from 'react';
import QuickRangeDate from '@baifendian/adhere-mobile-ui-quick-range-date';
import type { DateValue } from '@baifendian/adhere-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState<DateValue>();

  return (
    <QuickRangeDate
      value={value}
      onChange={setValue}
      calendarModalProps={{}}
      checkboxCheckListProps={{}}
      modalTriggerPromptProps={{}}
    />
  );
};
```

## 自定义配置

```tsx
import React, { useState } from 'react';
import QuickRangeDate from '@baifendian/adhere-mobile-ui-quick-range-date';
import type { DateValue, ConfigItem } from '@baifendian/adhere-ui-quick-range-date';

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
      calendarModalProps={{}}
      checkboxCheckListProps={{}}
      modalTriggerPromptProps={{}}
    />
  );
};
```

## 自定义样式

```tsx
import React, { useState } from 'react';
import QuickRangeDate from '@baifendian/adhere-mobile-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState();

  return (
    <QuickRangeDate
      value={value}
      onChange={setValue}
      className="custom-quick-range-date"
      style={{ border: '1px solid #d9d9d9' }}
      innerClassName="custom-inner"
      innerStyle={{ padding: '16px' }}
      calendarModalProps={{}}
      checkboxCheckListProps={{}}
      modalTriggerPromptProps={{}}
    />
  );
};
```

## 自定义渲染

```tsx
import React, { useState } from 'react';
import QuickRangeDate from '@baifendian/adhere-mobile-ui-quick-range-date';

const App = () => {
  const [value, setValue] = useState();

  return (
    <QuickRangeDate
      value={value}
      onChange={setValue}
      calendarModalProps={{}}
      checkboxCheckListProps={{}}
      modalTriggerPromptProps={{}}
      children={({ originDefaultElement, defaultElement, value, onChange }) => (
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

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| className | 外层容器类名 | `string` | - | 否 |
| style | 外层容器样式 | `CSSProperties` | - | 否 |
| innerClassName | 内层容器类名 | `string` | - | 否 |
| innerStyle | 内层容器样式 | `CSSProperties` | - | 否 |
| config | 配置项数组 | `ConfigItem[]` | 默认配置 | 否 |
| value | 当前值 | `DateValue` | - | 否 |
| onChange | 值变化回调 | `(value: DateValue) => void` | - | 否 |
| calendarModalProps | 日历模态框属性 | `CalendarModalProps` | - | 是 |
| checkboxCheckListProps | 复选框列表属性 | `CheckboxCheckListProps` | - | 是 |
| modalTriggerPromptProps | 模态框触发器属性 | `ModalTriggerPromptProps<string>` | - | 是 |
| children | 自定义渲染函数 | `(params) => ReactNode` | - | 否 |

### 继承的属性

该组件继承自 `@baifendian/adhere-ui-quick-range-date`，支持以下静态方法：

- `QuickRangeDate.sync(value)` - 同步外部值到内部状态
- `QuickRangeDate.stringValue(value)` - 将日期值转换为字符串
- `QuickRangeDate.getLabel(value)` - 获取日期值的显示标签
- `QuickRangeDate.numberToDayjs(value)` - 将数字转换为dayjs对象
- `QuickRangeDate.datesToNumbers(value)` - 将日期数组转换为数字数组
- `QuickRangeDate.getValueEntityByStringValue(value)` - 根据字符串值获取值实体

### 类型定义

```tsx
import type { 
  QuickRangeDateProps, 
  QuickRangeDateComponent,
  DateValue,
  DateType,
  ConfigItem 
} from '@baifendian/adhere-mobile-ui-quick-range-date';
```

## 样式定制

组件使用 CSS 变量进行样式定制：

```css
.adhere-mobile-ui-quick-range-date-inner {
  .adhere-mobile-ui-quick-range-date-range-calendar-modal {
    /* 范围日历模态框上边距 */
    margin-top: var(--range-calendar-modal-margin-top, 20px);
    
    /* 移动端范围日历模态框上边距 */
    @media (max-width: 768px) {
      margin-top: var(--range-calendar-modal-margin-top-mobile, 16px);
    }
  }
}
```

## 注意事项

1. **必填属性**：`calendarModalProps`、`checkboxCheckListProps`、`modalTriggerPromptProps` 为必填属性
2. **移动端优化**：组件针对移动端进行了交互优化，建议在移动设备上使用
3. **主题配置**：组件支持通过 `ConfigProvider` 进行主题配置
4. **类型安全**：建议使用 TypeScript 以获得完整的类型支持

## 更新日志

### v1.0.0
- 初始版本发布
- 支持移动端快速日期范围选择
- 完整的 TypeScript 类型支持
- 丰富的自定义配置选项
