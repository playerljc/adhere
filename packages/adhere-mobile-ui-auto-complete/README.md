# Adhere Mobile UI AutoComplete

移动端自动完成组件，提供搜索、选择和数据展示功能。

## ✨ 特性

- 🚀 支持 React 18.x
- 📱 基于 antd-mobile 5.x
- 🌍 支持国际化
- 🎨 支持主题定制
- 📦 支持动态引入 (babel-plugin-import)
- 🔍 支持搜索过滤
- 🌳 支持树形数据结构
- 🎯 支持多选和单选
- 📋 支持自定义渲染

## 🖥 兼容环境

- 现代浏览器
- IE11+

## 📦 安装

```bash
npm install @baifendian/adhere-mobile-ui-auto-complete --save
```

```bash
yarn add @baifendian/adhere-mobile-ui-auto-complete
```

## 🔨 使用

### 基础用法

```tsx
import React, { useState } from 'react';
import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';
import { CheckList } from 'antd-mobile';

const dataSource = [
  { id: '1', label: '选项1', value: 'value1' },
  { id: '2', label: '选项2', value: 'value2' },
  { id: '3', label: '选项3', value: 'value3' },
];

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <AutoComplete
      searchDataSource={dataSource}
      value={value}
      onChange={setValue}
    >
      {({ value, onChange, searchDataSource }) => (
        <CheckList
          value={value}
          onChange={onChange}
        >
          {searchDataSource.map(item => (
            <CheckList.Item key={item.id} value={item.id}>
              {item.label}
            </CheckList.Item>
          ))}
        </CheckList>
      )}
    </AutoComplete>
  );
};
```

### 树形数据用法

```tsx
import React, { useState } from 'react';
import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';

const treeData = [
  {
    key: '1',
    title: '父节点1',
    children: [
      { key: '1-1', title: '子节点1-1' },
      { key: '1-2', title: '子节点1-2' },
    ],
  },
  {
    key: '2',
    title: '父节点2',
    children: [
      { key: '2-1', title: '子节点2-1' },
    ],
  },
];

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <AutoComplete.TreeAutoComplete
      searchDataSource={treeData}
      value={value}
      onChange={setValue}
      treeSelectProps={{
        treeDataSimpleMode: false,
        multiple: true,
      }}
    />
  );
};
```

### 异步数据加载

```tsx
import React, { useState } from 'react';
import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  const loadData = async (keyword: string) => {
    // 模拟API调用
    const response = await fetch(`/api/search?q=${keyword}`);
    const data = await response.json();
    return data;
  };

  return (
    <AutoComplete
      loadData={loadData}
      value={value}
      onChange={setValue}
    >
      {({ value, onChange, searchDataSource }) => (
        <CheckList value={value} onChange={onChange}>
          {searchDataSource.map(item => (
            <CheckList.Item key={item.id} value={item.id}>
              {item.label}
            </CheckList.Item>
          ))}
        </CheckList>
      )}
    </AutoComplete>
  );
};
```

## 📖 API

### AutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 根容器的CSS类名 | `string` | - |
| style | 根容器的内联样式 | `CSSProperties` | - |
| searchBarClassName | 搜索栏的CSS类名 | `string` | - |
| searchBarStyle | 搜索栏的内联样式 | `CSSProperties` | - |
| bodyClassName | 内容区域的CSS类名 | `string` | - |
| bodyStyle | 内容区域的内联样式 | `CSSProperties` | - |
| placeholder | 搜索框占位符文本 | `string` | - |
| searchBarProps | 搜索栏组件的属性 | `SearchBarProps` | - |
| loadData | 数据加载函数 | `(keyword?: string) => Promise<DataRecord[]>` | - |
| rowKey | 数据记录的唯一标识字段名 | `string` | `'id'` |
| labelProp | 数据记录的显示文本字段名 | `string` | `'label'` |
| valueProp | 数据记录的值字段名 | `string` | `'value'` |
| renderResultItem | 自定义结果项渲染函数 | `(record: DataRecord, defaultItem: ReactNode) => ReactNode` | - |
| renderEmpty | 自定义空状态渲染函数 | `() => ReactNode` | - |
| defaultDataSource | 默认数据源 | `DataRecord[]` | - |
| searchDataSource | 搜索数据源 | `DataRecord[]` | - |
| value | 当前选中的值 | `(CheckListValue \| DataRecord)[]` | - |
| onChange | 值变化回调函数 | `(values: CheckListValue[]) => void` | - |
| children | 子渲染函数 | `(arg: { value?: CheckListValue[]; onChange?: (values: CheckListValue[] \| CheckListValue) => void; searchDataSource?: DataRecord[] }) => ReactNode` | - |
| showResult | 是否显示结果面板 | `boolean` | `true` |

### TreeAutoComplete Props

继承 `AutoCompleteProps` 的所有属性，额外包含：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeSelectProps | 树选择组件的属性 | `TreeSelectProps` | - |

### DataRecord

```tsx
interface DataRecord {
  [key: string]: any;
  key?: string;
  id?: string | number;
  value?: string | number;
  label?: string;
  title?: ReactNode;
  children?: DataRecord[];
  pId?: string | number;
}
```

## 🎨 主题定制

组件支持主题定制，可以通过 ConfigProvider 进行配置：

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

<ConfigProvider
  theme={{
    mobile: {
      AutoComplete: {
        // 自定义主题配置
      }
    }
  }}
>
  <AutoComplete />
</ConfigProvider>
```

## 🌍 国际化

组件支持国际化，可以通过 Intl 工具进行配置：

```tsx
import Intl from '@baifendian/adhere-util-intl';

// 设置语言
Intl.setLocale('zh-CN');
```

## 📦 动态引入

支持通过 babel-plugin-import 进行动态引入：

```javascript
// .babelrc
{
  "plugins": [
    ["import", { "libraryName": "@baifendian/adhere-mobile-ui-auto-complete" }]
  ]
}
```

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/autocomplete)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)


