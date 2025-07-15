# Adhere UI Expression

一个功能强大的表达式编辑器组件，支持富文本编辑、运算符插入、快速提示等功能。

## 特性

- 🎯 **富文本编辑** - 支持富文本内容编辑，支持光标定位和选择
- 🔧 **运算符插入** - 支持多种运算符类型（ElasticSearch、SQL、数学符号）
- 💡 **快速提示** - 智能提示功能，提升输入效率
- 🎨 **主题支持** - 集成主题系统，支持自定义样式
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🔒 **类型安全** - 完整的 TypeScript 类型支持

## 安装

```bash
npm install @baifendian/adhere-ui-expression
```

## 基础用法

```tsx
import React, { useState } from 'react';
import Expression from '@baifendian/adhere-ui-expression';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <Expression
      value={value}
      onChange={setValue}
      placeholder="请输入表达式"
      allowClear
    />
  );
};
```

## API

### Expression Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器类名 | `string` | - |
| style | 容器样式 | `CSSProperties` | - |
| editorClassName | 编辑器类名 | `string` | - |
| editorStyle | 编辑器样式 | `CSSProperties` | - |
| operatorWrapClassName | 运算符包装器类名 | `string` | - |
| operatorWrapStyle | 运算符包装器样式 | `CSSProperties` | - |
| quickTipWrapClassName | 快速提示包装器类名 | `string` | - |
| quickTipWrapStyle | 快速提示包装器样式 | `CSSProperties` | - |
| textClassName | 文本元素类名 | `string \| ((text: string) => string)` | - |
| operatorClassName | 运算符元素类名 | `string \| ((operator: string) => string)` | - |
| value | 当前值 | `string` | - |
| operators | 运算符配置 | `OperatorItem[]` | ElasticSearch 运算符 |
| triggerCharCode | 触发字符代码 | `number` | `32` (空格) |
| isUseTriggerCharCode | 是否使用字符代码触发 | `boolean` | `true` |
| placeholder | 占位符文本 | `string` | - |
| quickTipDataSource | 快速提示数据源 | `QuickTipItem[]` | - |
| quickTipProp | 快速提示属性名 | `string` | `'value'` |
| disableQuickTip | 是否禁用快速提示 | `boolean` | `false` |
| allowClear | 是否显示清空按钮 | `boolean` | `false` |
| onChange | 值变化回调 | `(value?: string) => void` | - |
| onContinuousTextChange | 连续输入回调 | `(continuousText: string) => void` | - |
| onEditorInputEnd | 编辑器输入结束回调 | `(html: string, continuousText: string) => void` | - |
| onEditorBlurEnd | 编辑器失去焦点回调 | `(e: FocusEvent) => void` | - |
| onEditorKeyDownEnd | 编辑器按键回调 | `(e: KeyboardEvent) => void` | - |
| onEditorPasteEnd | 编辑器粘贴回调 | `(e: ClipboardEvent) => void` | - |

### Expression Ref

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| setValue | 设置值 | `(html: string) => void` |
| getValue | 获取值 | `() => string` |
| isEditorEmpty | 检查是否为空 | `() => boolean` |
| showQuickTip | 显示快速提示 | `() => void` |
| showOperators | 显示运算符选择器 | `() => void` |
| hideQuickTip | 隐藏快速提示 | `() => void` |
| hideOperators | 隐藏运算符选择器 | `() => void` |
| clear | 清空内容 | `() => void` |
| onOperatorsClick | 运算符点击处理 | `(operator: string, operatorType: OperatorType) => void` |

### 类型定义

```typescript
// 运算符类型
type OperatorType = 'unary' | 'binary' | 'ternary' | 'brackets';

// 运算符项
interface OperatorItem {
  label: string;    // 显示标签
  value: string;    // 运算符值
  type: OperatorType; // 运算符类型
}

// 快速提示项
interface QuickTipItem {
  label: string;    // 显示标签
  value: string;    // 提示值
  [key: string]: any; // 其他属性
}
```

## 运算符配置

### ElasticSearch 运算符

```tsx
import { ElasticSearch } from '@baifendian/adhere-ui-expression';

<Expression
  operators={ElasticSearch}
  // ...其他属性
/>
```

包含：`()`, `AND`, `OR`, `NOT`

### SQL 运算符

```tsx
import { Sql } from '@baifendian/adhere-ui-expression';

<Expression
  operators={Sql}
  // ...其他属性
/>
```

包含：`SELECT`, `FROM`, `WHERE`, `AND`, `OR`, `IN`, `LIKE` 等 SQL 关键字

### 数学运算符

```tsx
import { Math } from '@baifendian/adhere-ui-expression';

<Expression
  operators={Math}
  // ...其他属性
/>
```

包含：`+`, `-`, `×`, `÷`, `=`, `≠`, `≤`, `≥` 等数学符号

### 自定义运算符

```tsx
const customOperators = [
  { label: '等于', value: '=', type: 'binary' as const },
  { label: '不等于', value: '!=', type: 'binary' as const },
  { label: '包含', value: 'contains', type: 'binary' as const },
];

<Expression
  operators={customOperators}
  // ...其他属性
/>
```

## 快速提示

```tsx
const quickTipData = [
  { label: '用户名', value: 'username' },
  { label: '邮箱', value: 'email' },
  { label: '手机号', value: 'phone' },
];

<Expression
  quickTipDataSource={quickTipData}
  quickTipProp="value"
  onContinuousTextChange={(text) => {
    console.log('连续输入:', text);
  }}
/>
```

## 静态方法

### parse

解析 HTML 为文本

```tsx
import Expression from '@baifendian/adhere-ui-expression';

const html = '<span class="text">用户名</span><span class="operator">=</span><span class="text">admin</span>';
const text = Expression.parse(html, ({ nodeType, value }) => {
  if (nodeType === 1) {
    return `[${value}]`; // 运算符
  }
  return value || ''; // 文本
});

console.log(text); // "用户名[=]admin"
```

### AntdFormRequireValidator

Antd 表单必填验证器

```tsx
import { Form } from 'antd';
import Expression from '@baifendian/adhere-ui-expression';

<Form.Item
  name="expression"
  rules={[Expression.AntdFormRequireValidator('请输入表达式')]}
>
  <Expression />
</Form.Item>
```

## 视图组件

用于只读显示表达式内容

```tsx
import { Expression } from '@baifendian/adhere-ui-expression';

const { View } = Expression;

<View
  value="<span class='text'>用户名</span><span class='operator'>=</span><span class='text'>admin</span>"
  maxLength={50}
  tooltip
/>
```

## 样式定制

### CSS 变量

```css
:root {
  --adhere-ui-expression-border-color: #d9d9d9;
  --adhere-ui-expression-border-radius: 6px;
  --adhere-ui-expression-padding: 8px 12px;
  --adhere-ui-expression-font-size: 14px;
  --adhere-ui-expression-line-height: 1.5;
}
```

### 类名

- `.adhere-ui-expression` - 容器
- `.adhere-ui-expression-editor` - 编辑器
- `.adhere-ui-expression-editor-placeholder` - 占位符
- `.adhere-ui-expression-operators` - 运算符选择器
- `.adhere-ui-expression-quick-tips` - 快速提示
- `.adhere-ui-expression-editor-clear` - 清空按钮

## 注意事项

1. **输入法支持**：组件已优化中文输入法体验，输入过程中不会触发运算符选择
2. **光标处理**：支持复杂的光标定位和文本选择操作
3. **错误处理**：内置错误处理机制，避免操作失败导致组件崩溃
4. **性能优化**：使用 React.memo 和 useMemo 优化渲染性能
5. **类型安全**：完整的 TypeScript 类型支持，提供良好的开发体验

## 更新日志

### v2.0.0

- ✨ 新增完整的 TypeScript 类型支持
- 📝 优化 JSDoc 文档注释
- 🔧 改进错误处理机制
- 🎨 优化代码结构和命名规范
- 🚀 提升组件性能和稳定性
