# Adhere UI TableList

一个功能强大的表格列表组件，支持表格和列表两种显示模式，提供搜索、分页、排序、拖拽等功能。

## 特性

- 🎯 **TypeScript 支持** - 完整的类型定义和类型安全
- 📊 **双模式显示** - 支持表格和列表两种显示模式
- 🔍 **搜索功能** - 内置搜索表单和实时搜索
- 📄 **分页支持** - 完整的分页功能和配置
- 🎨 **工具栏** - 丰富的工具栏功能（全选、刷新、设置等）
- 🖱️ **拖拽排序** - 支持表格行拖拽排序
- ⚙️ **列设置** - 可配置列显示和拖拽排序
- 🎛️ **行选择** - 支持单选、多选、跨页选择
- 📱 **响应式** - 适配不同屏幕尺寸

## 安装

```bash
npm install @baifendian/adhere-ui-tablelist
```

## 基本用法

```tsx
import React from 'react';
import TableList, { TableListProps } from '@baifendian/adhere-ui-tablelist';

interface UserData {
  id: string;
  name: string;
  email: string;
  age: number;
}

const MyTableList: React.FC = () => {
  const tableProps: TableListProps<UserData> = {
    mode: 'table',
    search: {
      columns: [
        {
          name: 'name',
          label: '姓名',
          type: 'input',
        },
        {
          name: 'email',
          label: '邮箱',
          type: 'input',
        },
      ],
    },
    table: {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
      ],
      dataSource: [
        { id: '1', name: '张三', email: 'zhangsan@example.com', age: 25 },
        { id: '2', name: '李四', email: 'lisi@example.com', age: 30 },
      ],
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log('选中的行:', selectedRowKeys, selectedRows);
        },
      },
    },
    request: async (params) => {
      // 发起数据请求
      const response = await fetch('/api/users', { params });
      return response.json();
    },
  };

  return <TableList {...tableProps} />;
};

export default MyTableList;
```

## API

### TableListProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| mode | 'table' \| 'list' | 'table' | 显示模式 |
| search | SearchProps | - | 搜索栏配置 |
| toolbar | ToolbarProps | - | 工具栏配置 |
| table | ITableProps | - | 表格模式配置 |
| list | ListProps | - | 列表模式配置 |
| request | Function | - | 数据请求函数 |

### SearchProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 搜索栏类名 |
| beforeContent | ReactNode | - | 搜索栏前内容 |
| afterContent | ReactNode | - | 搜索栏后内容 |
| columns | ColumnItemProps[] | - | 搜索表单列配置 |
| optionRender | boolean \| ReactElement | - | 是否显示操作按钮 |
| searchText | string | - | 搜索按钮文本 |
| resetText | string | - | 重置按钮文本 |
| size | SizeType | 'middle' | 组件尺寸 |

### ToolbarProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 工具栏类名 |
| title | ReactNode | - | 工具栏标题 |
| total | boolean \| string \| ReactElement | - | 总数显示配置 |
| selectAll | boolean \| ToolbarSelectAllProps | - | 全选配置 |
| search | ColumnItemProps[] | - | 工具栏搜索配置 |
| reload | boolean \| ReloadProps | - | 刷新按钮配置 |
| setting | boolean \| SettingProps | - | 设置按钮配置 |
| toolbarOptionRender | ReactElement | - | 自定义工具栏选项 |

### ITableProps

继承自 Ant Design 的 TableProps，并扩展了以下属性：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| sortable | boolean \| SortableProps | false | 是否支持拖拽排序 |
| showNumber | boolean \| ShowNumberProps | false | 是否显示序号列 |

## 高级用法

### 拖拽排序表格

```tsx
const tableProps = {
  table: {
    sortable: true, // 启用拖拽排序
    columns: [...],
    dataSource: [...],
  },
};
```

### 自定义工具栏

```tsx
const tableProps = {
  toolbar: {
    title: '用户列表',
    total: true,
    selectAll: {
      total: true, // 支持跨页全选
    },
    reload: true,
    setting: true,
  },
};
```

### 实时搜索

```tsx
const tableProps = {
  search: {
    optionRender: false, // 隐藏搜索按钮，启用实时搜索
    columns: [
      {
        name: 'keyword',
        label: '关键词',
        type: 'search',
      },
    ],
  },
};
```

## 类型定义

组件提供了完整的 TypeScript 类型定义：

```tsx
import type {
  TableListProps,
  ITableProps,
  SearchProps,
  ToolbarProps,
  TableListState,
  SortableTableState,
} from '@baifendian/adhere-ui-tablelist';
```

## 更新日志

### v2.0.0

- ✨ 完整的 TypeScript 类型支持
- 📝 详细的 JSDoc 文档
- 🔧 代码结构优化
- 🎯 类型安全改进
- 📚 更好的开发体验

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT

