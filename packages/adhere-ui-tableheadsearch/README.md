# TableHeadSearch

基于 antd-design 的 Table 的列头筛选组件，提供类型安全的自定义筛选功能。

# ✨ 特性
- 支持 react(18.x)
- ant-design(5.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- **完整的 TypeScript 类型支持**
- **详细的 JSDoc 文档**

# 🖥 兼容环境
- 现代浏览器，IE11

# 📦 安装
```bash
npm install @baifendian/adhere-ui-tableheadsearch --save
``` 

```bash
yarn add @baifendian/adhere-ui-tableheadsearch
```

# 🔨 使用

## 基础用法

```tsx
import React from 'react';
import { Table, Input, Button } from 'antd';
import TableHeadSearch from '@baifendian/adhere-ui-tableheadsearch';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    ...TableHeadSearch(({ confirm }) => (
      <div style={{ padding: 8 }}>
        <Input placeholder="请输入姓名" style={{ marginBottom: 8 }} />
        <Button type="primary" size="small" onClick={confirm}>
          确定
        </Button>
      </div>
    )),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    ...TableHeadSearch(({ confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input placeholder="请输入年龄" style={{ marginBottom: 8 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Button size="small" onClick={clearFilters}>
            重置
          </Button>
          <Button type="primary" size="small" onClick={confirm}>
            确定
          </Button>
        </div>
      </div>
    )),
  },
];

const dataSource = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 },
  { name: '王五', age: 28 },
];

const MyTable = () => (
  <Table dataSource={dataSource} columns={columns} />
);
```

## 使用自定义图标

```tsx
import { FilterOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    ...TableHeadSearch(
      ({ confirm }) => (
        <div style={{ padding: 8 }}>
          <Select placeholder="请选择状态" style={{ width: '100%', marginBottom: 8 }}>
            <Option value="active">激活</Option>
            <Option value="inactive">未激活</Option>
          </Select>
          <Button type="primary" size="small" onClick={confirm}>
            确定
          </Button>
        </div>
      ),
      <FilterOutlined />
    ),
  },
];
```

## 复杂筛选示例

```tsx
const columns = [
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    ...TableHeadSearch(({ confirm, clearFilters, selectedKeys, setSelectedKeys }) => (
      <div style={{ padding: 8 }}>
        <Input.Search
          placeholder="搜索部门"
          style={{ marginBottom: 8 }}
          onSearch={(value) => {
            // 处理搜索逻辑
          }}
        />
        <Table
          size="small"
          dataSource={departmentList}
          columns={[
            { title: '部门名称', dataIndex: 'name' },
            { title: '人数', dataIndex: 'count' },
          ]}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys?.(keys),
          }}
          pagination={false}
        />
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <Button size="small" onClick={clearFilters}>
            重置
          </Button>
          <Button type="primary" size="small" onClick={confirm}>
            确定
          </Button>
        </div>
      </div>
    )),
  },
];
```

# 📚 API

## TableHeadSearch

高阶函数，用于创建表格列头筛选配置。

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| render | `FilterDropdownRender` | - | 渲染筛选下拉框内容的函数 |
| icon | `React.ReactNode` | `<SearchOutlined />` | 自定义的筛选图标 |

### 返回值

返回一个对象，包含以下属性：

| 属性 | 类型 | 说明 |
|------|------|------|
| filterIcon | `() => React.ReactNode` | 筛选图标渲染函数 |
| filterDropdown | `(props: FilterDropdownProps) => React.ReactNode` | 筛选下拉框渲染函数 |

## FilterDropdownProps

筛选下拉框的属性接口。

| 属性 | 类型 | 说明 |
|------|------|------|
| confirm | `() => void` | 确认筛选的回调函数 |
| clearFilters | `() => void` | 清除筛选的回调函数 |
| selectedKeys | `React.Key[]` | 当前选中的筛选值 |
| setSelectedKeys | `(selectedKeys: React.Key[]) => void` | 设置选中筛选值的回调函数 |
| visible | `boolean` | 是否可见 |
| close | `() => void` | 关闭下拉框的回调函数 |

## FilterDropdownRender

筛选下拉框的渲染函数类型。

```tsx
type FilterDropdownRender = (props: FilterDropdownProps) => React.ReactNode;
```

## TableHeadSearchResult

TableHeadSearch 函数的返回值类型。

```tsx
interface TableHeadSearchResult {
  filterIcon: () => React.ReactNode;
  filterDropdown: (props: FilterDropdownProps) => React.ReactNode;
}
```

# 🎯 TypeScript 支持

本组件提供完整的 TypeScript 类型支持：

```tsx
import TableHeadSearch, { 
  FilterDropdownProps, 
  FilterDropdownRender, 
  TableHeadSearchResult 
} from '@baifendian/adhere-ui-tableheadsearch';

// 类型安全的渲染函数
const renderFilter: FilterDropdownRender = ({ confirm, clearFilters }) => {
  return (
    <div>
      <Button onClick={confirm}>确定</Button>
      <Button onClick={clearFilters}>重置</Button>
    </div>
  );
};

// 使用类型安全的函数
const filterConfig: TableHeadSearchResult = TableHeadSearch(renderFilter);
```

# 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/tableheadsearch)
- [Ant Design Table](https://ant.design/components/table-cn/)
- [Ant Design Icons](https://ant.design/components/icon-cn/)

