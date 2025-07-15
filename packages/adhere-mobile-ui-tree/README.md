# @baifendian/adhere-mobile-ui-tree

移动端树形组件，支持展开/折叠、选择、勾选、搜索等功能。

## 简介

`adhere-mobile-ui-tree` 是一个专为移动端设计的树形组件，基于 React 18 和 antd-mobile 5.x 构建。组件提供了丰富的功能，包括节点展开/折叠、多选/单选、复选框勾选、搜索过滤、异步加载等，适用于移动端应用中的层级数据展示和选择场景。

## ✨ 特性

- 🚀 支持 React 18.x
- 📱 基于 antd-mobile 5.x，专为移动端优化
- 🌍 支持国际化
- 🎨 支持主题定制
- 📦 支持按需引入 (babel-plugin-import)
- 🔍 内置搜索功能
- ☑️ 支持复选框勾选
- 📂 支持异步加载数据
- 🎯 支持简单数据模式
- 📏 支持多种尺寸和间距配置
- ♿ 支持节点禁用和不可选择

## 🖥 兼容环境

- 现代浏览器
- IE11+

## 📦 安装

```bash
npm install @baifendian/adhere-mobile-ui-tree --save
```

```bash
yarn add @baifendian/adhere-mobile-ui-tree
```

## 🔧 使用

### 基础用法

```tsx
import React, { useState } from 'react';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const treeData = [
  {
    key: '1',
    title: '父节点1',
    children: [
      {
        key: '1-1',
        title: '子节点1-1',
      },
      {
        key: '1-2',
        title: '子节点1-2',
      },
    ],
  },
  {
    key: '2',
    title: '父节点2',
    children: [
      {
        key: '2-1',
        title: '子节点2-1',
      },
    ],
  },
];

const App = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return (
    <Tree
      treeData={treeData}
      expandedKeys={expandedKeys}
      selectedKeys={selectedKeys}
      onExpand={(keys) => setExpandedKeys(keys)}
      onSelect={(keys) => setSelectedKeys(keys)}
    />
  );
};
```

### 复选框模式

```tsx
import React, { useState } from 'react';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);

  return (
    <Tree
      treeData={treeData}
      checkable
      checkedKeys={checkedKeys}
      onCheck={(keys) => setCheckedKeys(keys)}
    />
  );
};
```

### 搜索功能

```tsx
import React from 'react';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  return (
    <Tree
      treeData={treeData}
      showSearch
      filterKey="title"
    />
  );
};
```

### 异步加载

```tsx
import React from 'react';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  const loadData = async (nodeData) => {
    // 模拟异步加载数据
    const children = await fetchChildren(nodeData.key);
    return children;
  };

  return (
    <Tree
      treeData={treeData}
      loadData={loadData}
    />
  );
};
```

### TreeSelect 组件

```tsx
import React, { useState } from 'react';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Tree.TreeSelect
      treeData={treeData}
      value={value}
      onChange={(keys) => setValue(keys)}
    />
  );
};
```

## 📖 API

### Tree Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| treeData | 树形数据 | `TreeData` | `[]` |
| checkable | 节点前添加 Checkbox 复选框 | `boolean` | `false` |
| checkedKeys | 选中复选框的树节点 | `string[]` | `[]` |
| expandAll | 是否全部展开 | `boolean` | `false` |
| expandedKeys | 展开节点的keys | `string[]` | `[]` |
| selectedKeys | 选择节点的keys | `string[]` | `[]` |
| switcherIcon | 自定义树节点的展开/折叠图标 | `(expanded: boolean, nodeData: TreeDataItemExtra) => ReactNode` | - |
| titleRender | 自定义渲染节点 | `(nodeData: TreeDataItemExtra) => ReactNode` | - |
| renderEmpty | 没有数据时候的UI | `() => ReactNode` | - |
| size | 节点密度 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| multiple | 支持点选多个节点 | `boolean` | `false` |
| checkStrictly | checkable 状态下节点选择完全受控 | `boolean` | `true` |
| icon | title之前的节点的图标 | `(nodeData: TreeDataItemExtra) => ReactNode` | - |
| loadData | 异步加载的hook | `(nodeData: TreeDataItemExtra) => Promise<void>` | - |
| loadedKeys | 已经加载的节点 | `string[]` | `[]` |
| treeDataSimpleMode | 使用简单格式的 treeData | `boolean \| TreeDataSimpleModeFromObject` | `false` |
| showSearch | 是否可以搜索 | `boolean` | `false` |
| filterKey | 搜索数据的key | `string` | `'title'` |
| rowGap | 行距 | `number` | - |
| checkboxWidth | checkbox的宽度 | `number` | `25` |
| checkboxGap | checkbox的间距 | `number` | `5` |
| titleGap | title元素的间距 | `number` | `5` |
| iconGap | icon的间距 | `number` | `5` |
| indent | 缩进 | `number` | `30` |
| onSelect | 选中的hook | `(selectedKeys: string[], e: SelectEvent) => void` | - |
| onExpand | 展开的hook | `(expandedKeys: string[], e: ExpandEvent) => void` | - |
| onCheck | 复选的hook | `(checkedKeys: string[], e: CheckEvent) => void` | - |

### TreeSelect Props

继承 Tree 的所有属性，除了以下属性：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| treeClassName | 树组件的类名 | `string` | - |
| treeStyle | 树组件的样式 | `CSSProperties` | - |
| value | 选中的值 | `string[]` | `[]` |
| onChange | 值变化回调 | `(checkedKeys: string[], e: CheckEvent) => void` | - |

### TreeDataItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 节点的唯一标识 | `string` | - |
| title | 节点的显示标题 | `ReactNode` | - |
| disabled | 是否禁用节点 | `boolean` | `false` |
| selectable | 是否可选择节点 | `boolean` | `true` |
| checkable | 是否显示复选框 | `boolean` | `true` |
| props | 节点的额外属性 | `Record<string, any>` | - |
| children | 子节点数据 | `TreeData` | - |
| checkboxWidth | checkbox的宽度 | `number` | - |
| checkboxGap | checkbox的间距 | `number` | - |
| titleGap | title元素的间距 | `number` | - |
| iconGap | icon的间距 | `number` | - |
| indent | 缩进 | `number` | - |

### TreeDataSimpleModeFromObject

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| keyAttr | 键属性名 | `string` | - |
| titleAttr | 标题属性名 | `string` | - |
| parentIdAttr | 父ID属性名 | `string` | - |
| rootParentId | 根节点父ID值 | `string \| number` | - |

## 🎨 主题定制

组件支持通过 ConfigProvider 进行主题定制：

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        // 自定义主题配置
      }}
    >
      <Tree treeData={treeData} />
    </ConfigProvider>
  );
};
```

## 🌍 国际化

组件支持国际化，通过 ConfigProvider 配置：

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';
import Tree from '@baifendian/adhere-mobile-ui-tree';

const App = () => {
  return (
    <ConfigProvider
      locale={{
        // 国际化配置
      }}
    >
      <Tree treeData={treeData} />
    </ConfigProvider>
  );
};
```

## 📦 按需引入

使用 babel-plugin-import 实现按需引入：

```javascript
// .babelrc 或 babel.config.js
{
  "plugins": [
    ["import", { "libraryName": "@baifendian/adhere-mobile-ui-tree", "style": false }]
  ]
}
```

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/tree)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

## 📄 许可证

ISC


