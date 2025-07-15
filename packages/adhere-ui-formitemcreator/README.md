# @baifendian/adhere-ui-formitemcreator

一个基于 Ant Design 的表单项目创建器组件，支持通过配置动态生成各种类型的表单项目。

## 特性

- 🚀 **类型安全**: 完整的 TypeScript 支持
- 🎯 **配置驱动**: 通过配置对象动态生成表单
- 🔧 **灵活扩展**: 支持自定义表单组件
- 📱 **响应式**: 支持栅格布局和响应式设计
- 🎨 **主题适配**: 完美适配 Ant Design 主题

## 安装

```bash
npm install @baifendian/adhere-ui-formitemcreator
# 或
yarn add @baifendian/adhere-ui-formitemcreator
```

## 基础用法

```tsx
import React from 'react';
import { Form } from 'antd';
import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';

const MyForm = () => {
  const [form] = Form.useForm();

  const columns = [
    {
      name: 'username',
      label: '用户名',
      type: FormItemCreator.INPUT,
      contentProps: {
        placeholder: '请输入用户名',
      },
    },
    {
      name: 'email',
      label: '邮箱',
      type: FormItemCreator.INPUT,
      contentProps: {
        type: 'email',
        placeholder: '请输入邮箱',
      },
    },
    {
      name: 'role',
      label: '角色',
      type: FormItemCreator.SELECT,
      contentProps: {
        options: [
          { label: '管理员', value: 'admin' },
          { label: '用户', value: 'user' },
        ],
      },
    },
  ];

  return (
    <Form form={form} layout="vertical">
      <FormItemCreator columns={columns} />
    </Form>
  );
};
```

## 支持的组件类型

| 类型 | 描述 | 示例 |
|------|------|------|
| `FormItemCreator.TEXT` | 只读文本 | 显示不可编辑的文本 |
| `FormItemCreator.INPUT` | 输入框 | 文本输入 |
| `FormItemCreator.SEARCH` | 搜索框 | 带搜索按钮的输入框 |
| `FormItemCreator.PASSWORD` | 密码框 | 密码输入 |
| `FormItemCreator.TEXTAREA` | 多行文本 | 多行文本输入 |
| `FormItemCreator.NUMBER` | 数字输入 | 数字输入框 |
| `FormItemCreator.RADIO` | 单选框 | 单选选项 |
| `FormItemCreator.CHECKBOX` | 复选框 | 多选选项 |
| `FormItemCreator.SELECT` | 下拉选择 | 下拉选择器 |
| `FormItemCreator.DATEPICKER` | 日期选择 | 日期选择器 |
| `FormItemCreator.RANGEPICKER` | 日期范围 | 日期范围选择器 |
| `FormItemCreator.TIMEPICKER` | 时间选择 | 时间选择器 |
| `FormItemCreator.SWITCH` | 开关 | 开关组件 |
| `FormItemCreator.SLIDER` | 滑动条 | 滑动输入条 |
| `FormItemCreator.RATE` | 评分 | 星级评分 |
| `FormItemCreator.UPLOAD` | 文件上传 | 文件上传组件 |
| `FormItemCreator.TAG` | 标签 | 可编辑标签组件 |
| `FormItemCreator.DEFINE` | 自定义 | 自定义组件 |

## API

### FormItemCreatorProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| columns | 表单列配置数组 | `ColumnItemProps[]` | - |
| layout | 表单布局配置 | `FormItemLayoutProps` | - |
| row | 行布局配置 | `RowProps` | - |

### ColumnItemProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 表单字段名称 | `string \| number \| (string \| number)[]` | - |
| type | 表单组件类型 | `symbol` | - |
| contentProps | 表单组件的内容属性 | `Record<string, any>` | - |
| skip | 是否跳过渲染此项目 | `boolean` | `false` |
| content | 自定义内容组件 | `ReactElement` | - |
| col | 列布局配置 | `ColProps` | - |

## 高级用法

### 栅格布局

```tsx
const columns = [
  {
    name: 'firstName',
    label: '姓',
    type: FormItemCreator.INPUT,
    col: { span: 12 },
  },
  {
    name: 'lastName',
    label: '名',
    type: FormItemCreator.INPUT,
    col: { span: 12 },
  },
];

<FormItemCreator 
  columns={columns} 
  row={{ gutter: 16 }}
/>
```

### 自定义组件

```tsx
const columns = [
  {
    name: 'custom',
    label: '自定义组件',
    type: FormItemCreator.DEFINE,
    content: <MyCustomComponent />,
  },
];
```

### 条件渲染

```tsx
const columns = [
  {
    name: 'showField',
    label: '显示字段',
    type: FormItemCreator.SWITCH,
  },
  {
    name: 'conditionalField',
    label: '条件字段',
    type: FormItemCreator.INPUT,
    skip: !showField, // 根据条件跳过渲染
  },
];
```

## 样式定制

组件使用 CSS 类名进行样式定制：

```css
/* 标签输入框 */
.form-item-tag-input {
  width: 100px;
  margin-right: 8px;
}

/* 标签组件容器 */
.form-item-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

/* 添加标签按钮 */
.form-item-tag-add {
  cursor: pointer;
  border-style: dashed;
}
```

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 测试
npm test
```

## 许可证

ISC

