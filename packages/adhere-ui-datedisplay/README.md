# DateDisplay 日期显示组件

一个基于 dayjs 的 React 日期显示组件库，支持多种日期格式化和国际化。

## 特性

- 🕐 支持多种日期格式显示
- 🌍 内置国际化支持（中文、英文、阿拉伯文、葡萄牙文）
- 📅 相对时间显示（从某时间到现在、从现在到某时间）
- 🎯 基于字典的动态格式化
- 🔧 可扩展的插件系统
- 📝 完善的 TypeScript 类型支持

## 安装

```bash
npm install @baifendian/adhere-ui-datedisplay
```

## 基础用法

### 基本日期显示

```tsx
import DateDisplay from '@baifendian/adhere-ui-datedisplay';

// 基础用法
<DateDisplay value="2023-12-25" format="YYYY-MM-DD" />

// 使用国际化
<DateDisplay value="2023-12-25" locale="en" format="LL" />
```

### 相对时间显示

```tsx
import DateDisplay from '@baifendian/adhere-ui-datedisplay';

// 从指定时间到现在
<DateDisplay.DateDisplayFromNow value="2023-12-20" />

// 从现在到指定时间
<DateDisplay.DateDisplayToNow value="2023-12-30" />

// 使用自定义参考时间
<DateDisplay.DateDisplayFromNow value="2023-12-20" now={true} />
```

### 本地化格式

```tsx
import DateDisplay from '@baifendian/adhere-ui-datedisplay';

// 使用预定义的本地化格式
<DateDisplay.DateDisplayL value="2023-12-25" /> // 2023-12-25
<DateDisplay.DateDisplayLL value="2023-12-25" /> // 2023年12月25日
<DateDisplay.DateDisplayLLL value="2023-12-25" /> // 2023年12月25日 00:00
<DateDisplay.DateDisplayLLLL value="2023-12-25" /> // 2023年12月25日 星期一 00:00
```

### 字典格式化

```tsx
import DateDisplay from '@baifendian/adhere-ui-datedisplay';

// 使用字典配置的格式化
<DateDisplay.DateDisplayCustom value="2023-12-25" split1="-" split2=":" />
```

## API

### DateDisplay

基础日期显示组件。

#### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | `DateValue` | - | 日期值，支持字符串、数字、Date对象、Dayjs对象 |
| locale | `LocaleType` | `'zh'` | 国际化语言 |
| format | `string` | - | 日期格式字符串 |

#### 示例

```tsx
<DateDisplay 
  value="2023-12-25" 
  locale="en" 
  format="YYYY-MM-DD HH:mm:ss" 
/>
```

### DateDisplayFromNow

显示从指定时间到现在的相对时间。

#### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | `DateValue` | - | 日期值 |
| locale | `LocaleType` | `'zh'` | 国际化语言 |
| now | `boolean` | `false` | 是否使用当前时间作为参考点 |

#### 示例

```tsx
<DateDisplay.DateDisplayFromNow 
  value="2023-12-20" 
  locale="en" 
/>
// 输出: "5 days ago"
```

### DateDisplayToNow

显示从现在到指定时间的相对时间。

#### Props

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | `DateValue` | - | 日期值 |
| locale | `LocaleType` | `'zh'` | 国际化语言 |
| now | `boolean` | `false` | 是否使用当前时间作为参考点 |

#### 示例

```tsx
<DateDisplay.DateDisplayToNow 
  value="2023-12-30" 
  locale="en" 
/>
// 输出: "in 5 days"
```

### 本地化格式组件

预定义的本地化格式组件：

- `DateDisplayLT` - 时间格式 (HH:mm)
- `DateDisplayLTS` - 时间格式 (HH:mm:ss)
- `DateDisplayL` - 日期格式 (YYYY-MM-DD)
- `DateDisplayLL` - 长日期格式 (YYYY年MM月DD日)
- `DateDisplayLLL` - 长日期时间格式 (YYYY年MM月DD日 HH:mm)
- `DateDisplayLLLL` - 完整日期时间格式 (YYYY年MM月DD日 星期X HH:mm)
- `DateDisplayl` - 短日期格式 (M/D/YYYY)
- `DateDisplayll` - 短长日期格式 (MMM D, YYYY)
- `DateDisplaylll` - 短长日期时间格式 (MMM D, YYYY HH:mm)
- `DateDisplayllll` - 短完整日期时间格式 (ddd, MMM D, YYYY HH:mm)

### 字典格式化组件

基于 Resource.Dict 配置的动态格式化组件：

```tsx
// 假设配置了 ResourceMomentFormatCustom 字典
<DateDisplay.DateDisplayCustom 
  value="2023-12-25" 
  split1="-" 
  split2=":" 
  errorUI={<span>无效日期</span>} 
/>
```

## 全局配置

### 设置全局国际化

```tsx
import DateDisplay from '@baifendian/adhere-ui-datedisplay';

// 设置全局默认语言
DateDisplay.setGlobalLocale('en');
```

## 类型定义

### DateValue

支持的日期值类型：

```typescript
type DateValue = string | number | Date | Dayjs | null | undefined;
```

### LocaleType

支持的国际化语言类型：

```typescript
type LocaleType = 'zh' | 'en' | 'ar' | 'pt' | string;
```

### 组件属性接口

```typescript
interface BaseDateDisplayProps {
  value?: DateValue;
  locale?: LocaleType;
}

interface DateDisplayProps extends BaseDateDisplayProps {
  format?: string;
}

interface RelativeTimeDisplayProps extends BaseDateDisplayProps {
  now?: boolean;
}

interface DictDateDisplayProps {
  value?: DateValue;
  split1?: string;
  split2?: string;
  errorUI?: ReactNode | null;
}
```

## 工具函数

### isValidDate

验证日期值是否有效：

```typescript
import { isValidDate } from '@baifendian/adhere-ui-datedisplay';

const isValid = isValidDate('2023-12-25'); // true
const isInvalid = isValidDate('invalid-date'); // false
```

### safeFormatDate

安全地格式化日期：

```typescript
import { safeFormatDate } from '@baifendian/adhere-ui-datedisplay';

const formatted = safeFormatDate('2023-12-25', 'YYYY-MM-DD', 'en');
// 返回: "2023-12-25"
```

## 注意事项

1. 所有组件都支持 `toString` 方法，可以获取格式化后的字符串
2. 无效的日期值会返回空字符串或 `errorUI`
3. 字典格式化组件不支持国际化
4. 组件会自动处理时区转换
5. 支持 dayjs 的所有插件功能

## 更新日志

### v2.0.0
- 重构代码结构，提升代码质量
- 完善 TypeScript 类型定义
- 改进 JSDoc 文档
- 优化错误处理
- 添加类型安全验证

### v1.x.x
- 初始版本发布
- 基础日期显示功能
- 相对时间显示
- 国际化支持
