# SystemDisplayDefaultValueView

默认值显示组件，用于处理空值、未定义值等情况的统一显示。

## 功能特性

- 自动处理空值显示
- 支持自定义默认值
- 支持多种空值类型检测
- 轻量级实现，无额外依赖
- 支持自定义样式和类名

## 使用方法

```jsx
import SystemDisplayDefaultValueView from '@/components/system/SystemDisplayDefaultValueView';

// 基础用法
<SystemDisplayDefaultValueView>
  {userName}
</SystemDisplayDefaultValueView>

// 自定义默认值
<SystemDisplayDefaultValueView defaultValue="暂无数据">
  {data}
</SystemDisplayDefaultValueView>

// 带自定义样式
<SystemDisplayDefaultValueView
  className="custom-display"
  style={{ color: '#999' }}
  defaultValue="--"
>
  {value}
</SystemDisplayDefaultValueView>

// 在表格中使用
<Table>
  <Column
    title="姓名"
    render={(text) => (
      <SystemDisplayDefaultValueView defaultValue="未知">
        {text}
      </SystemDisplayDefaultValueView>
    )}
  />
</Table>
```

## API

| 参数         | 说明       | 类型          | 默认值 |
| ------------ | ---------- | ------------- | ------ |
| children     | 要显示的值 | any           | -      |
| defaultValue | 默认值     | string        | '-'    |
| className    | 自定义类名 | string        | -      |
| style        | 自定义样式 | CSSProperties | -      |

## 空值检测

组件会检测以下值并显示默认值：

| 值类型    | 说明        |
| --------- | ----------- |
| undefined | 未定义      |
| null      | 空值        |
| ''        | 空字符串    |
| false     | 布尔值false |

## 使用场景

- 表格中的空值显示
- 表单中的默认值处理
- 数据展示中的空状态处理
- 用户信息中的缺失字段显示
- 统计数据的空值处理

## 实现原理

组件使用简单的条件判断来检测空值：

```jsx
{
  [undefined, null, '', false].includes(children) ? defaultValue : children;
}
```

当检测到空值时显示默认值，否则显示原始内容。这种实现方式简单高效，适用于大多数空值处理场景。
