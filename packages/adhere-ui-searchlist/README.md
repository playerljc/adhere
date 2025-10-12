# 简介

&ensp;&ensp;一种查询(CURD)列表的通用模式，基于 Ant Design List 组件封装的高级查询列表组件。如果 UI 没有明确给出查询列表的 UI，就可以用这个默认模式。

- 提供完整的查询列表 UI 解决方案
- 支持多种列表展示模式（表格、卡片、网格等）
- 内置搜索、分页、排序、筛选功能
- 支持状态管理和数据持久化
- 提供资源管理器模式
- 暴露最小集的事件让子类进行重写

# ✨ 特性

- 🚀 **多种列表模式**: 支持普通列表、网格列表、卡片列表等多种展示模式
- 🔍 **强大的搜索功能**: 内置搜索表单，支持多字段组合查询
- 📄 **分页支持**: 完整的分页功能，支持页码和每页条数设置
- 🎛️ **列表密度设置**: 支持紧凑、默认、宽松三种列表密度
- 📊 **数据导出**: 支持导出 Excel 功能
- 🔄 **状态管理**: 支持 Redux 状态管理模式
- 🎨 **主题定制**: 支持修改主题样式
- 🌍 **国际化**: 完整的国际化支持
- 📱 **响应式**: 支持移动端适配
- 🔧 **高度可定制**: 丰富的配置选项和扩展能力
- 📦 **按需加载**: 支持动态引入(babel-plugin-import)
- 🎯 **TypeScript**: 完整的 TypeScript 类型定义

# 🖥 兼容环境

- 现代浏览器，IE11+
- React >= 18.0.0
- Ant Design >= 5.0.0

# 📦 安装

```bash
npm install @baifendian/adhere-ui-searchlist --save
``` 

```bash
yarn add @baifendian/adhere-ui-searchlist
```

# 🔨 使用

## 基础用法

```jsx
import React from 'react';
import SearchList from '@baifendian/adhere-ui-searchlist';

const { ProSearchList } = SearchList;

class MySearchList extends ProSearchList {
  getServiceName() {
    return 'userService';
  }

  getColumns() {
    return [
      {
        dataIndex: 'name',
        title: '姓名',
        $search: {
          visible: true,
          type: 'input',
        },
      },
      {
        dataIndex: 'age',
        title: '年龄',
        $search: {
          visible: true,
          type: 'inputNumber',
        },
      },
    ];
  }

  getMetas() {
    return {
      title: { dataIndex: 'name' },
      description: { dataIndex: 'description' },
      actions: {
        dataIndex: 'actions',
        render: (val, record) => [
          <a key="edit">编辑</a>,
          <a key="delete">删除</a>,
        ],
      },
    };
  }

  renderItem(record, index) {
    return (
      <List.Item
        actions={this.getMetas().actions?.render?.(null, record, index)}
      >
        <List.Item.Meta
          title={record.name}
          description={record.description}
        />
      </List.Item>
    );
  }
}

export default MySearchList;
```

## 网格模式

```jsx
<MySearchList
  antdListProps={{
    grid: { gutter: 16, column: 3 },
  }}
/>
```

## 状态管理模式

```jsx
import { SearchListStateImplementFactory } from '@baifendian/adhere-ui-searchlist';

const Wrap = SearchListStateImplementFactory({
  serviceNames: ['userService'],
  models: [userModel],
})(MySearchList);

export default Wrap;
```

# 📚 API

## SearchList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wrapClassName | 外层容器类名 | string | - |
| wrapStyle | 外层容器样式 | CSSProperties | - |
| antdListProps | Ant Design List 组件属性 | ListProps | {} |
| fixedSelectionHeaderAutoList | 锁定选择头，列表体滚动 | boolean | true |
| fixedListSpaceBetween | 两端固定(列表主体始终在上方，分页始终在下方) | boolean | true |
| FieldGeneratorToDict | 字典生成器句柄 | any | - |

## 主要方法

### 抽象方法（需要子类实现）

| 方法名 | 说明 | 返回类型 |
| --- | --- | --- |
| getRowKey() | 获取列表的主键属性 | string |
| getData() | 获取列表数据 | object[] |
| setData(data) | 设置列表数据 | Promise<any[]> |
| getMetas() | 列表项配置 | Metas<any> |
| renderItem(record, index) | 渲染列表项 | ReactNode |
| renderListHeader() | 渲染列表头部 | ReactNode |
| isShowNumber() | 是否显示序号 | boolean |
| getNumberGeneratorRule() | 获取序号生成规则 | symbol |

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

## Metas 配置

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| title | 标题配置 | MetaItem<T> |
| subTitle | 副标题配置 | MetaItem<T> |
| description | 描述配置 | MetaItem<T> |
| avatar | 头像配置 | MetaItem<T> |
| actions | 操作配置 | MetaItem<T> & { cardActionProps?: 'extra' \| 'actions' } |
| content | 内容配置 | MetaItem<T> |
| extra | 额外内容配置 | MetaItem<T> |

## MetaItem 配置

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| dataIndex | 数据字段路径 | string |
| render | 自定义渲染函数 | (text, record, index) => ReactNode |

# 🎯 高级功能

## 资源管理器

组件提供了资源管理器模式，支持文件和目录的展示：

```jsx
import { ResourceManager } from '@baifendian/adhere-ui-searchlist';

// 使用资源管理器
<ResourceManager
  // 资源管理器相关配置
/>
```

## 列表密度设置

支持三种列表密度：

- `default`: 默认密度
- `small`: 紧凑密度  
- `large`: 宽松密度

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

# 🎨 主题定制

组件支持主题定制，可以通过 ConfigProvider 进行全局配置。

# 🌍 国际化

组件内置国际化支持，支持中英文切换。

# 📝 更新日志

查看 [CHANGELOG.md](./changelog/CHANGELOG.md) 了解详细的版本更新信息。

# 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/searchlist)
- [GitHub](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
