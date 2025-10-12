# 简介

&ensp;&ensp;一种查询(CURD)表格的通用模式，基于 Ant Design Table 组件封装的高级查询表格组件。如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式。

- 提供完整的查询表格 UI 解决方案
- 支持多种表格展示模式和交互功能
- 内置搜索、分页、排序、筛选功能
- 支持可编辑表格、拖拽排序等高级功能
- 支持状态管理和数据持久化
- 暴露最小集的事件让子类进行重写

# ✨ 特性

- 🚀 **强大的查询功能**: 内置搜索表单，支持多字段组合查询和高级查询
- 📊 **丰富的表格功能**: 支持分页、排序、筛选、列设置、密度调整等
- ✏️ **可编辑表格**: 支持单元格编辑、行编辑、整表编辑等多种编辑模式
- 🔄 **拖拽排序**: 支持行拖拽排序，可自定义拖拽句柄
- 📤 **数据导出**: 内置 Excel 导出功能，支持复杂表头和样式
- 🎯 **行选择策略**: 支持多种行选择模式和选择策略
- 🔄 **状态管理**: 支持 Redux 状态管理模式
- 🎨 **主题定制**: 支持修改主题样式和列宽调整
- 🌍 **国际化**: 完整的国际化支持
- 📱 **响应式**: 支持移动端适配
- 🔧 **高度可定制**: 丰富的配置选项和扩展能力
- 📦 **按需加载**: 支持动态引入(babel-plugin-import)
- 🎯 **TypeScript**: 完整的 TypeScript 类型定义
- 🔌 **插件化**: 支持多种扩展插件和自定义组件

# 🖥 兼容环境

- 现代浏览器，IE11+
- React >= 18.0.0
- Ant Design >= 5.0.0

# 📦 安装

```bash
npm install @baifendian/adhere-ui-searchtable --save
``` 

```bash
yarn add @baifendian/adhere-ui-searchtable
```

# 🔨 使用

## 基础用法

```jsx
import React from 'react';
import SearchTable from '@baifendian/adhere-ui-searchtable';

const { ProSearchTable } = SearchTable;

class MySearchTable extends ProSearchTable {
  getServiceName() {
    return 'userService';
  }

  getColumns() {
    return [
      {
        dataIndex: 'name',
        title: '姓名',
        width: 120,
        $search: {
          visible: true,
          type: 'input',
        },
      },
      {
        dataIndex: 'age',
        title: '年龄',
        width: 80,
        $search: {
          visible: true,
          type: 'inputNumber',
        },
      },
      {
        dataIndex: 'email',
        title: '邮箱',
        width: 200,
      },
      {
        dataIndex: 'actions',
        title: '操作',
        width: 150,
        render: (text, record) => (
          <div>
            <a onClick={() => this.handleEdit(record)}>编辑</a>
            <a onClick={() => this.handleDelete(record)}>删除</a>
          </div>
        ),
      },
    ];
  }

  handleEdit = (record) => {
    console.log('编辑', record);
  };

  handleDelete = (record) => {
    console.log('删除', record);
  };
}

export default MySearchTable;
```

## 可编辑表格

```jsx
import { ProEditableCellSearchTable } from '@baifendian/adhere-ui-searchtable';

class EditableSearchTable extends ProEditableCellSearchTable {
  getColumns() {
    return [
      {
        dataIndex: 'name',
        title: '姓名',
        $editable: {
          type: 'input',
          rules: [{ required: true, message: '请输入姓名' }],
        },
      },
      {
        dataIndex: 'age',
        title: '年龄',
        $editable: {
          type: 'inputNumber',
          props: { min: 0, max: 120 },
        },
      },
    ];
  }
}
```

## 拖拽排序

```jsx
import { ProSearchRowDragSortTable } from '@baifendian/adhere-ui-searchtable';

class DragSortTable extends ProSearchRowDragSortTable {
  onDragSortEnd = (dragIndex, hoverIndex, dragRecord, hoverRecord) => {
    console.log('拖拽完成', { dragIndex, hoverIndex, dragRecord, hoverRecord });
    // 处理排序逻辑
  };
}
```

## 状态管理模式

```jsx
import { SearchTableStateImplementFactory } from '@baifendian/adhere-ui-searchtable';

const Wrap = SearchTableStateImplementFactory({
  serviceNames: ['userService'],
  models: [userModel],
})(MySearchTable);

export default Wrap;
```

# 📚 API

## SearchTable Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wrapClassName | 外层容器类名 | string | - |
| wrapStyle | 外层容器样式 | CSSProperties | - |
| antdTableProps | Ant Design Table 组件属性 | TableProps | {} |
| fixedTableSpaceBetween | 两端固定(表格头始终在上方，分页始终在下方) | boolean | true |
| fixedSelectionHeaderAutoTable | 锁定选择头，表格体滚动 | boolean | true |
| isShowExpandSearch | 是否显示展开搜索 | boolean | true |
| defaultExpandSearchCollapse | 默认展开搜索面板 | boolean | false |
| FieldGeneratorToDict | 字典生成器句柄 | any | - |

## 主要方法

### 抽象方法（需要子类实现）

| 方法名 | 说明 | 返回类型 |
| --- | --- | --- |
| getRowKey() | 获取表格的主键属性 | string |
| getData() | 获取表格数据 | object[] |
| getCurrent() | 获取当前页码 | number |
| getColumns() | 获取表格列配置 | ColumnType<object>[] |
| getOrderFieldProp() | 获取排序字段属性名 | string |
| getOrderProp() | 获取排序属性名 | string |
| getOrderPropValue() | 获取排序方向 | 'descend' \| 'ascend' |
| getOrderFieldValue() | 获取排序字段值 | string |
| isShowNumber() | 是否显示序号列 | boolean |
| getNumberGeneratorRule() | 获取序号生成规则 | symbol |
| getRowSelectionMode() | 获取行选择模式 | symbol |
| isUseCheckedStrategy() | 是否使用选择策略 | boolean |
| getCheckedStrategy() | 获取选择策略 | symbol |

### 实例方法

| 方法名 | 说明 | 参数 | 返回类型 |
| --- | --- | --- | --- |
| search() | 执行搜索 | - | Promise<void> |
| fetchData() | 加载数据 | - | void |
| appendData(data) | 追加数据 | T \| T[] | Promise<void> |
| prependData(data) | 前置插入数据 | T \| T[] | Promise<void> |
| insertData(id, data) | 在指定位置插入数据 | string, T \| T[] | Promise<void> |
| replaceData(id, data) | 替换指定数据 | string, T \| T[] | Promise<void> |
| removeData(id) | 删除指定数据 | string | Promise<void> |
| getRecordById(id) | 根据ID获取记录 | string | object |
| getSelectedRowKeys() | 获取选中的行键 | - | any[] |
| getSelectedRows() | 获取选中的行数据 | - | any[] |

## 列配置扩展

### $search 搜索配置

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 控件类型 | FormItemType | - |
| visible | 是否显示 | boolean | false |
| showColumnHeader | 是否显示在列头 | boolean | false |
| props | 控件属性 | any | - |
| order | 排序 | number | - |
| span | 栅格占位 | number | - |
| labelAttrs | 标签属性 | any | - |
| valueAttrs | 值属性 | any | - |

### $editable 编辑配置

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 编辑控件类型 | FormItemType | - |
| rules | 验证规则 | Rule[] | - |
| props | 控件属性 | any | - |
| editable | 是否可编辑 | boolean \| function | true |

### $dragSort 拖拽配置

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| handle | 自定义拖拽句柄 | ReactNode | - |

## 表单控件类型

支持的 FormItemType 包括：

- `input` - 输入框
- `textArea` - 文本域
- `inputNumber` - 数字输入框
- `inputNumberDecimal1` - 一位小数输入框
- `inputNumberDecimal2` - 两位小数输入框
- `inputNumberInteger` - 整数输入框
- `datePicker` - 日期选择器
- `timePicker` - 时间选择器
- `rangePicker` - 日期范围选择器
- `slider` - 滑动输入条
- `sliderRange` - 范围滑动条
- `rate` - 评分
- `switch` - 开关
- `dict` - 字典类型
- `custom` - 自定义类型

# 🎯 高级功能

## 可编辑表格

组件提供了多种可编辑表格模式：

### 单元格编辑
```jsx
import { ProEditableCellSearchTable } from '@baifendian/adhere-ui-searchtable';
```

### 行编辑
```jsx
import { ProEditableRowSearchTable } from '@baifendian/adhere-ui-searchtable';
```

### 整表编辑
```jsx
import { ProEditableSearchTable } from '@baifendian/adhere-ui-searchtable';
```

## 拖拽排序

支持行拖拽排序功能：

```jsx
import { ProSearchRowDragSortTable } from '@baifendian/adhere-ui-searchtable';

class DragTable extends ProSearchRowDragSortTable {
  onDragSortEnd = (dragIndex, hoverIndex, dragRecord, hoverRecord) => {
    // 处理拖拽排序逻辑
  };
}
```

## 数据导出

内置 Excel 导出功能：

```jsx
// 重写导出数据方法
getExportExcelData() {
  return this.getData();
}

// 重写导出列配置
getExportExcelColumns(columns) {
  return columns.filter(col => col.dataIndex !== '_number');
}
```

## 行选择策略

支持多种行选择策略：

- 默认策略：普通的行选择
- 连续选择策略：支持 Shift 键连续选择
- 异步加载策略：支持异步数据的行选择

## 列设置

支持动态显示/隐藏列、调整列顺序、重置列设置等功能。

## 表格密度

支持三种表格密度：

- `default`: 默认密度
- `small`: 紧凑密度  
- `large`: 宽松密度

# 🎨 主题定制

组件支持主题定制，可以通过 ConfigProvider 进行全局配置。

# 🌍 国际化

组件内置国际化支持，支持中英文切换。

# 📝 更新日志

查看 [CHANGELOG.md](./changelog/CHANGELOG.md) 了解详细的版本更新信息。

# 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/searchtable)
- [GitHub](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
