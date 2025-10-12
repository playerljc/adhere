# @baifendian/adhere-ui-anthoc

一个基于 Ant Design 的高阶组件（HOC）库，为 PC 端应用提供丰富的增强组件和功能扩展。

## 简介

`@baifendian/adhere-ui-anthoc` 是 Adhere 组件库生态系统中专门为 PC 端设计的高阶组件库。它基于 Ant Design 5.x 构建，通过 HOC 模式提供了大量增强功能和扩展组件，让 PC 端开发更加高效和便捷。

## ✨ 特性

- 🚀 **基于 Ant Design 5.x** - 完全兼容 Ant Design 最新版本
- 💻 **PC 端优化** - 专为 PC 端交互体验设计
- 🔧 **高阶组件模式** - 通过 HOC 提供丰富的功能扩展
- 🌍 **国际化支持** - 内置多语言支持
- 🎨 **主题定制** - 支持动态主题切换和响应式设计
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入
- 🔄 **数据驱动** - 强大的数据转换和格式化功能
- 📊 **复杂组件** - 提供表格、表单、选择器等复杂组件增强

## 🖥 兼容环境

- 现代浏览器
- Internet Explorer 11+
- React 18.x
- Ant Design 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-ui-anthoc --save

# 使用 yarn
yarn add @baifendian/adhere-ui-anthoc

# 使用 pnpm
pnpm add @baifendian/adhere-ui-anthoc
```

## 快速开始

### 基础用法

```tsx
import React from 'react';
import { Button, Input, Select } from '@baifendian/adhere-ui-anthoc';

function App() {
  return (
    <div>
      <Button type="primary">增强按钮</Button>
      <Input placeholder="增强输入框" />
      <Select placeholder="增强选择器" />
    </div>
  );
}
```

### 按需引入

```tsx
// 按需引入组件
import { Button } from '@baifendian/adhere-ui-anthoc';

// 或使用 babel-plugin-import
import { Button } from '@baifendian/adhere-ui-anthoc/es/button';
```

## 🧩 核心组件

### 表单组件增强

#### Form 增强

```tsx
import { Form } from '@baifendian/adhere-ui-anthoc';

function MyForm() {
  return (
    <Form>
      <Form.Item label="用户名" name="username">
        <Input />
      </Form.Item>
    </Form>
  );
}
```

**特性：**
- 自定义错误信息显示位置
- 嵌套表单支持
- 自定义包装器组件
- 内置验证规则

#### 表单验证规则

```tsx
import { Form } from '@baifendian/adhere-ui-anthoc';

// 内置验证规则
Form.ValidatorRules.required({ invalidMessage: '此字段为必填项' });
Form.ValidatorRules.email({ invalidMessage: '请输入正确的邮箱格式' });
Form.ValidatorRules.phone({ invalidMessage: '请输入正确的手机号' });
```

### 选择器组件

#### Select 增强

```tsx
import { Select } from '@baifendian/adhere-ui-anthoc';

// 基础选择器
<Select 
  options={[
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' }
  ]}
/>

// 自动完成选择器
<Select.AutoCompleteSelect 
  onSearch={handleSearch}
  options={searchResults}
/>

// 下拉渲染选择器
<Select.DropdownRenderSelect>
  {({ originNode, value, onChange, options }) => (
    <div>
      {originNode}
      {/* 自定义下拉内容 */}
    </div>
  )}
</Select.DropdownRenderSelect>
```

#### 多选选择器

```tsx
import { MultipleSelect } from '@baifendian/adhere-ui-anthoc';

// 带全选的多选选择器
<MultipleSelect.CheckAllSelect 
  options={options}
  onChange={handleChange}
/>

// 自动完成多选选择器
<MultipleSelect.AutoCompleteMultipleSelect 
  onSearch={handleSearch}
  options={searchResults}
/>
```

### 树形选择器

#### TreeSelect 增强

```tsx
import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

// 基础树形选择器
<TreeSelect 
  treeData={treeData}
  onChange={handleChange}
/>

// 多选树形选择器
<TreeSelect.TreeMultiSelect 
  treeData={treeData}
  multiple
/>

// 叶子节点选择器
<TreeSelect.TreeLeafSelect 
  treeData={treeData}
  treeDefaultExpandedKeys={expandedKeys}
/>

// 异步树形选择器
<TreeSelect.AsyncTreeSelect 
  fetchData={fetchTreeData}
  defaultId="0"
  cascadeParams={params}
/>
```

### 级联选择器

#### Cascader 增强

```tsx
import { Cascader } from '@baifendian/adhere-ui-anthoc';

// 基础级联选择器
<Cascader 
  options={cascaderOptions}
  onChange={handleChange}
/>

// 多选级联选择器
<Cascader.CascaderMulti 
  options={cascaderOptions}
  multiple
/>

// 异步级联选择器
<Cascader.AsyncCascader 
  fetchData={fetchCascaderData}
  defaultId="0"
  cascadeParams={params}
/>
```

### 表格组件

#### Table 增强

```tsx
import { Table } from '@baifendian/adhere-ui-anthoc';

// 基础表格增强
<Table.TableExt 
  columns={columns}
  dataSource={dataSource}
  fixedHeaderAutoTable
/>

// 表格选择器
<Table.TableSelect 
  tableProps={{ columns, dataSource }}
  onChange={handleChange}
/>

// 分页表格选择器
<Table.TablePagingSelect 
  pagingProps={pagingConfig}
  tablePagingProps={tableConfig}
  onChange={handleChange}
/>
```

**特性：**
- 自动计算列宽
- 固定表头自动调整
- 表格选择功能
- 分页加载支持
- 树形表格支持

### 复选框组件

#### Checkbox 增强

```tsx
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

// 基础复选框
<Checkbox>选项1</Checkbox>

// 复选框组
<Checkbox.CheckboxGroupExt 
  options={options}
  onChange={handleChange}
/>

// 带全选的复选框组
<Checkbox.CheckAllCheckboxSelect 
  options={options}
  onChange={handleChange}
/>

// 水平布局复选框
<Checkbox.HorizontalCheckbox 
  options={options}
  direction="horizontal"
/>
```

### 单选框组件

#### Radio 增强

```tsx
import { Radio } from '@baifendian/adhere-ui-anthoc';

// 基础单选框
<Radio>选项1</Radio>

// 单选框组
<Radio.Group 
  options={options}
  onChange={handleChange}
/>

// 按钮样式单选框
<Radio.ButtonRadio 
  options={options}
  onChange={handleChange}
/>

// 自定义渲染单选框
<Radio.CustomRadio 
  options={options}
  children={({ data, defaultNode }) => (
    <div>
      {defaultNode}
      {/* 自定义内容 */}
    </div>
  )}
/>
```

### 日期时间组件

#### 日期选择器增强

```tsx
import { DatePicker } from '@baifendian/adhere-ui-anthoc';

// 基础日期选择器
<DatePicker />

// 格式化值日期选择器
<DatePicker.DatePickerFormatValueHOC 
  value={dateString}
  onChange={(dateString, datejs, extra) => {
    console.log('日期字符串:', dateString);
    console.log('dayjs对象:', datejs);
    console.log('额外信息:', extra);
  }}
/>

// 时间戳值日期选择器
<DatePicker.DatePickerTimestampValueHOC 
  value={timestamp}
  type="seconds"
  onChange={(timestamp, dateString, datejs, extra) => {
    console.log('时间戳:', timestamp);
  }}
/>
```

### 标签组件

#### Tag 增强

```tsx
import { Tag } from '@baifendian/adhere-ui-anthoc';

// 基础标签
<Tag>标签</Tag>

// 标签组
<Tag.HorizontalTagGroup 
  options={options}
  direction="horizontal"
/>

// 可选中标签组
<Tag.HorizontalCheckableTagGroup 
  options={options}
  value={selectedValues}
  onChange={handleChange}
  mode="multiple"
/>

// 标签选择器
<Tag.TagSelect 
  options={options}
  onChange={handleChange}
/>
```

## 🔧 高级功能

### 数据转换 HOC

#### 数组实体值转换

```tsx
import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

// 将数组转换为实体值格式
const EnhancedComponent = ArrayEntityValueHOC(MyComponent, {
  valueProp: 'id',
  optionsProp: 'options'
});
```

#### 树形实体值转换

```tsx
import { TreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

// 将树形数据转换为实体值格式
const EnhancedTreeComponent = TreeEntityValueHOC(TreeSelect, {
  valueProp: 'id',
  treeDataProp: 'treeData',
  childrenProp: 'children'
});
```

#### 分页实体值转换

```tsx
import { PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

// 分页数据转换
const EnhancedPagingComponent = PagingEntityValueHOC(PagingComponent, {
  valueProp: 'id',
  getOptionsByDataSource: (dataSource) => 
    dataSource.map(item => ({ label: item.name, value: item.id }))
});
```

### 自定义渲染

#### 下拉渲染

```tsx
import { Select } from '@baifendian/adhere-ui-anthoc';

<Select.DropdownRenderSelect>
  {({ originNode, value, onChange, options }) => (
    <div>
      <div>搜索框</div>
      {originNode}
      <div>自定义操作</div>
    </div>
  )}
</Select.DropdownRenderSelect>
```

#### 自定义复选框渲染

```tsx
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

<Checkbox.CustomCheckboxSelect 
  options={options}
  children={({ data, onChange, checked, defaultNode }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {defaultNode}
      <span style={{ marginLeft: 8 }}>{data.label}</span>
    </div>
  )}
/>
```

### 异步数据加载

#### 异步树形选择器

```tsx
import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

<TreeSelect.AsyncTreeSelect 
  fetchData={async (defaultId, cascadeParams) => {
    const response = await fetch(`/api/tree/${defaultId}`);
    return response.json();
  }}
  fetchBranch={async (value, cascadeParams) => {
    const response = await fetch(`/api/tree/branch/${value}`);
    return response.json();
  }}
  defaultId="0"
  cascadeParams={searchParams}
  onDataSourceChange={(treeData) => {
    console.log('数据源变化:', treeData);
  }}
/>
```

#### 异步级联选择器

```tsx
import { Cascader } from '@baifendian/adhere-ui-anthoc';

<Cascader.AsyncCascader 
  fetchData={async (defaultId, cascadeParams) => {
    const response = await fetch(`/api/cascader/${defaultId}`);
    return response.json();
  }}
  defaultId="0"
  cascadeParams={searchParams}
  treeDataSimpleMode={{
    id: 'value',
    pId: 'parentId'
  }}
/>
```

## 🎨 主题定制

### 响应式设计

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';

<ConfigProvider 
  media={{
    isUseMedia: true,
    designWidth: 1920
  }}
>
  <App />
</ConfigProvider>
```

### 主题配置

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';

<ConfigProvider 
  theme={{
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    }
  }}
>
  <App />
</ConfigProvider>
```

## 🌍 国际化

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';

<ConfigProvider 
  locale={{
    locale: 'zh_CN',
    messages: {
      'adhere.ui.required': '此字段为必填项',
      'adhere.ui.email': '请输入正确的邮箱格式'
    }
  }}
>
  <App />
</ConfigProvider>
```

## 📊 实用工具

### 数据验证

```tsx
import { Form } from '@baifendian/adhere-ui-anthoc';

// 内置验证规则
const rules = [
  Form.ValidatorRules.required({ invalidMessage: '必填项' }),
  Form.ValidatorRules.email({ invalidMessage: '邮箱格式错误' }),
  Form.ValidatorRules.phone({ invalidMessage: '手机号格式错误' }),
  Form.ValidatorRules.idCard({ invalidMessage: '身份证格式错误' }),
  Form.ValidatorRules.url({ invalidMessage: 'URL格式错误' })
];
```

### 数据转换工具

```tsx
import { 
  getValue, 
  getOptionsValue, 
  getTreeValue, 
  getCascaderValue,
  filterTreeValues 
} from '@baifendian/adhere-ui-anthoc';

// 媒体查询值转换
const responsiveValue = getValue(media, size);

// 选项值验证
const validValue = getOptionsValue(value, options);

// 树形数据值验证
const validTreeValue = getTreeValue({ value, treeData, treeDataSimpleMode });

// 级联数据值验证
const validCascaderValue = getCascaderValue({ value, options });
```

## 🔧 开发指南

### 自定义 HOC

```tsx
import { createFactory } from '@baifendian/adhere-ui-anthoc';

// 创建自定义 HOC
const MyComponentHOC = createFactory(MyComponent, {
  // 默认属性
  size: 'middle',
  allowClear: true
}, async (props) => {
  // 动态属性覆盖
  const dynamicProps = await fetchDynamicProps(props.id);
  return dynamicProps;
});
```

### 组件工厂模式

```tsx
import { createFactory } from '@baifendian/adhere-ui-anthoc';

// 基础工厂
const BaseComponent = createFactory(OriginalComponent, {
  defaultProp: 'defaultValue'
});

// 扩展组件
BaseComponent.ExtendedComponent = createFactory(ExtendedComponent, {
  extendedProp: 'extendedValue'
});
```

## 📚 API 参考

### 通用 Props

所有组件都支持以下通用属性：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| wrapperClassName | string | - | 包装器类名 |
| wrapperStyle | CSSProperties | - | 包装器样式 |

### 选择器通用 Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | any | - | 当前值 |
| onChange | (value: any) => void | - | 值变化回调 |
| options | OptionType[] | [] | 选项数据 |
| loading | boolean | false | 加载状态 |
| disabled | boolean | false | 禁用状态 |

### 表格增强 Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| fixedHeaderAutoTable | boolean | true | 自动固定表头 |
| fixedTableSpaceBetween | boolean | true | 固定表格间距 |
| defaultColumnTitleFontSize | number | 14 | 默认列标题字体大小 |
| defaultColumnFontFamily | string | - | 默认列标题字体族 |
| defaultCellFontSize | number | 14 | 默认单元格字体大小 |
| defaultCellFontFamily | string | - | 默认单元格字体族 |

### 分页 Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| defaultLimit | number | 10 | 默认每页条数 |
| paging | object | - | 分页配置 |
| totalCount | number | 0 | 总条数 |
| onPagingShowSizeChange | function | - | 每页条数变化回调 |
| onPagingChange | function | - | 页码变化回调 |

## 🚀 性能优化

### 按需加载配置

```javascript
// .babelrc
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@baifendian/adhere-ui-anthoc",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

### 代码分割

```tsx
import { lazy, Suspense } from 'react';

// 懒加载组件
const LazyTable = lazy(() => import('@baifendian/adhere-ui-anthoc/es/table'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyTable />
    </Suspense>
  );
}
```

## 🔍 最佳实践

### 1. 表单验证

```tsx
import { Form } from '@baifendian/adhere-ui-anthoc';

function MyForm() {
  return (
    <Form 
      onFinish={handleSubmit}
      scrollToFirstError
    >
      <Form.Item 
        label="用户名"
        name="username"
        rules={[
          Form.ValidatorRules.required({ invalidMessage: '请输入用户名' }),
          Form.ValidatorRules.minLength({ 
            min: 3, 
            invalidMessage: '用户名至少3个字符' 
          })
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
```

### 2. 异步数据加载

```tsx
import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

function AsyncTreeSelector() {
  const fetchData = async (defaultId, cascadeParams) => {
    try {
      const response = await fetch(`/api/tree/${defaultId}`);
      return await response.json();
    } catch (error) {
      console.error('加载失败:', error);
      return [];
    }
  };

  return (
    <TreeSelect.AsyncTreeSelect 
      fetchData={fetchData}
      defaultId="0"
      placeholder="请选择"
      loading={isLoading}
    />
  );
}
```

### 3. 表格优化

```tsx
import { Table } from '@baifendian/adhere-ui-anthoc';

function OptimizedTable() {
  const columns = useMemo(() => [
    {
      title: '姓名',
      dataIndex: 'name',
      width: { minWidth: 100, maxWidth: 200 }
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 80
    }
  ], []);

  return (
    <Table.TableExt 
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 20,
        showSizeChanger: true
      }}
      scroll={{ y: 400 }}
    />
  );
}
```

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 📄 许可证

本项目基于 [ISC 许可证](LICENSE) 开源。

## 🔗 相关链接

- [Adhere 组件库](https://github.com/playerljc/adhere)
- [Ant Design](https://ant.design/)
- [React](https://reactjs.org/)
- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/anthoc)

---

**注意：** 这是一个基于 Ant Design 的高阶组件库，在使用前请确保已安装 Ant Design 相关依赖。
