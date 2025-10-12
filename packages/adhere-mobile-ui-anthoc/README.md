# @baifendian/adhere-mobile-ui-anthoc

一个基于 Ant Design Mobile 的高阶组件（HOC）库，为移动端应用提供丰富的增强组件和功能扩展。

## 简介

`@baifendian/adhere-mobile-ui-anthoc` 是 Adhere 组件库生态系统中专门为移动端设计的高阶组件库。它基于 Ant Design Mobile 构建，通过 HOC 模式提供了大量增强功能和扩展组件，让移动端开发更加高效和便捷。

## ✨ 特性

- 🚀 **基于 Ant Design Mobile** - 完全兼容 Ant Design Mobile 5.x
- 📱 **移动端优化** - 专为移动端交互体验设计
- 🔧 **高阶组件模式** - 通过 HOC 提供丰富的功能扩展
- 🌍 **国际化支持** - 内置多语言支持
- 🎨 **主题定制** - 支持动态主题切换
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入
- 🔄 **数据流增强** - 提供复杂的数据处理和管理功能
- 🎯 **类型安全** - 完整的 TypeScript 类型定义
- ⚡ **性能优化** - 内置性能优化和懒加载机制

## 🖥 兼容环境

- 现代浏览器
- React 18.x
- Ant Design Mobile 5.x
- TypeScript 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-mobile-ui-anthoc --save

# 使用 yarn
yarn add @baifendian/adhere-mobile-ui-anthoc

# 使用 pnpm
pnpm add @baifendian/adhere-mobile-ui-anthoc
```

## 快速开始

### 基础用法

```jsx
import React from 'react';
import { Button, Checkbox, Selector } from '@baifendian/adhere-mobile-ui-anthoc';

function App() {
  return (
    <div>
      {/* 基础按钮 */}
      <Button type="primary">点击我</Button>
      
      {/* 复选框组 */}
      <Checkbox.Group value={['option1']}>
        <Checkbox value="option1">选项1</Checkbox>
        <Checkbox value="option2">选项2</Checkbox>
      </Checkbox.Group>
      
      {/* 选择器 */}
      <Selector
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]}
        value={['1']}
      />
    </div>
  );
}
```

### 高级功能示例

```jsx
import React from 'react';
import { 
  CheckAllCheckbox, 
  FilterSelector, 
  AutoCompleteSelector,
  PagingCheckList 
} from '@baifendian/adhere-mobile-ui-anthoc';

function AdvancedExample() {
  return (
    <div>
      {/* 全选复选框 */}
      <CheckAllCheckbox
        options={[
          { label: '全选', value: 'all' },
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]}
        onCheckAllChange={(checkedValue, checked, changeValue) => {
          console.log('全选状态变化:', { checkedValue, checked, changeValue });
        }}
      />
      
      {/* 带过滤功能的选择器 */}
      <FilterSelector
        options={[
          { label: '苹果', value: 'apple' },
          { label: '香蕉', value: 'banana' },
          { label: '橙子', value: 'orange' },
        ]}
        filterProps={{
          placeholder: '搜索水果...',
          filterOption: (inputValue, option) => 
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        }}
      />
      
      {/* 自动完成选择器 */}
      <AutoCompleteSelector
        options={[]}
        loadData={async (keyword) => {
          // 模拟异步数据加载
          const response = await fetch(`/api/search?q=${keyword}`);
          return response.json();
        }}
      />
    </div>
  );
}
```

## 核心组件

### 表单组件

#### Checkbox 系列

- **Checkbox** - 基础复选框
- **CheckboxGroup** - 复选框组
- **CheckAllCheckbox** - 带全选功能的复选框
- **FilterCheckbox** - 带过滤功能的复选框
- **AutoCompleteCheckbox** - 自动完成复选框
- **PagingCheckbox** - 分页复选框

#### Radio 系列

- **Radio** - 基础单选框
- **RadioGroup** - 单选框组
- **FilterRadio** - 带过滤功能的单选框
- **AutoCompleteRadio** - 自动完成单选框
- **PagingRadio** - 分页单选框

#### Selector 系列

- **Selector** - 基础选择器
- **CheckAllSelector** - 带全选功能的选择器
- **FilterSelector** - 带过滤功能的选择器
- **AutoCompleteSelector** - 自动完成选择器
- **PagingSelector** - 分页选择器

### 列表组件

#### CheckList 系列

- **CheckList** - 基础勾选列表
- **CheckAllCheckList** - 带全选功能的勾选列表
- **FilterCheckList** - 带过滤功能的勾选列表
- **AutoCompleteCheckList** - 自动完成勾选列表
- **PagingCheckList** - 分页勾选列表

#### List 系列

- **List** - 基础列表
- **DataSourceList** - 数据源列表

### 弹层组件

#### Modal 系列

- **Modal** - 基础模态框
- **Modal.Trigger** - 模态框触发器
- **Modal.TriggerPrompt** - 提示型模态框触发器

#### Dialog 系列

- **Dialog** - 基础对话框
- **Dialog.Trigger** - 对话框触发器
- **Dialog.TriggerPrompt** - 提示型对话框触发器

#### Popup 系列

- **Popup** - 基础弹出层
- **Popup.Trigger** - 弹出层触发器
- **Popup.TriggerPrompt** - 提示型弹出层触发器
- **Popup.show** - 动态显示弹出层

### 日期时间组件

#### 日历组件

- **Calendar** - 基础日历
- **CalendarModal** - 模态框日历
- **CalendarDialog** - 对话框日历
- **CalendarPopup** - 弹出层日历
- **RangeCalendarModal** - 范围选择模态框日历

#### 日期选择器

- **DatePicker** - 基础日期选择器
- **DateModal** - 模态框日期选择器
- **DateDialog** - 对话框日期选择器
- **DatePopup** - 弹出层日期选择器

#### 时间选择器

- **TimePicker** - 基础时间选择器
- **TimeModal** - 模态框时间选择器
- **TimeDialog** - 对话框时间选择器
- **TimePopup** - 弹出层时间选择器

### 树形选择器

- **TreeSelect** - 基础树形选择器
- **TreeLeafSelect** - 叶子节点选择器
- **TreeShowAllSelect** - 显示所有节点选择器
- **TreeShowChildSelect** - 显示子节点选择器
- **AutoCompleteTreeSelect** - 自动完成树形选择器
- **AsyncTreeSelect** - 异步加载树形选择器

### 级联选择器

- **CascaderView** - 基础级联视图
- **FilterCascaderView** - 带过滤功能的级联视图
- **AsyncCascaderView** - 异步加载级联视图

### 特殊组件

#### PRSL (PullToRefresh + ScrollLoad)

```jsx
import { PRSL } from '@baifendian/adhere-mobile-ui-anthoc';

function ListWithRefresh() {
  return (
    <PRSL
      isLoading={false}
      pages={10}
      onRefresh={async () => {
        // 下拉刷新逻辑
      }}
      onLoadMore={async () => {
        // 上拉加载更多逻辑
      }}
    >
      {/* 列表内容 */}
    </PRSL>
  );
}
```

#### 表单增强

```jsx
import { Form } from '@baifendian/adhere-mobile-ui-anthoc';

function EnhancedForm() {
  return (
    <Form
      initialValues={{ name: '', age: 18 }}
      onFinish={async (values) => {
        console.log('表单提交:', values);
      }}
    >
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>
      
      <Form.Item name="age" label="年龄">
        <InputNumber min={0} max={120} />
      </Form.Item>
    </Form>
  );
}
```

## 高级功能

### 1. 数据过滤

所有支持过滤的组件都提供统一的过滤接口：

```jsx
<FilterSelector
  options={data}
  filterProps={{
    placeholder: '搜索...',
    filterOption: (inputValue, option) => {
      return option.label.toLowerCase().includes(inputValue.toLowerCase());
    }
  }}
/>
```

### 2. 自动完成

支持异步数据加载的自动完成功能：

```jsx
<AutoCompleteSelector
  loadData={async (keyword, page = 1, limit = 20) => {
    const response = await fetch(`/api/search?q=${keyword}&page=${page}&limit=${limit}`);
    const result = await response.json();
    return {
      total: result.total,
      data: result.data
    };
  }}
  onDataSourceChange={(page, dataSource) => {
    console.log('数据源变化:', page, dataSource);
  }}
/>
```

### 3. 分页加载

支持本地和远程分页加载：

```jsx
<PagingCheckList
  pagingProps={{
    // 本地分页
    isLocal: true,
    options: allData,
    defaultPaging: { page: 1, limit: 20 },
    
    // 或者远程分页
    // isLocal: false,
    // onLoad: async (page, limit) => {
    //   const response = await fetch(`/api/data?page=${page}&limit=${limit}`);
    //   return response.json();
    // }
  }}
/>
```

### 4. 全选功能

内置全选逻辑，自动处理选择状态：

```jsx
<CheckAllCheckbox
  options={options}
  onCheckAllChange={(checkedValue, checked, changeValue) => {
    // checkedValue: 当前选中的值数组
    // checked: 是否全选
    // changeValue: 本次变化的值数组
  }}
/>
```

### 5. 值转换 HOC

提供多种值转换的高阶组件：

```jsx
import { 
  DateFormatValueHOC, 
  DateTimestampValueHOC,
  TimeFormatValueHOC,
  TimeTimestampValueHOC,
  CalendarFormatValueHOC,
  CalendarTimestampValueHOC 
} from '@baifendian/adhere-mobile-ui-anthoc';

// 日期格式化 HOC
<DateFormatValueHOC format="YYYY-MM-DD">
  <DatePicker />
</DateFormatValueHOC>

// 时间戳 HOC
<DateTimestampValueHOC type="milliseconds">
  <DatePicker />
</DateTimestampValueHOC>
```

## 配置提供者

使用 `ConfigProvider` 进行全局配置：

```jsx
import { ConfigProvider } from '@baifendian/adhere-mobile-ui-anthoc';

function App() {
  return (
    <ConfigProvider
      locale="zh_CN"
      theme={{
        colorPrimary: '#1890ff',
        borderRadius: 8,
      }}
    >
      {/* 你的应用 */}
    </ConfigProvider>
  );
}
```

## 自定义主题

```jsx
import { ConfigProvider } from '@baifendian/adhere-mobile-ui-anthoc';

const theme = {
  colorPrimary: '#1890ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#f5222d',
  borderRadius: 8,
  fontSize: 14,
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      {/* 你的组件 */}
    </ConfigProvider>
  );
}
```

## 国际化

支持多语言切换：

```jsx
import { ConfigProvider } from '@baifendian/adhere-mobile-ui-anthoc';

function App() {
  return (
    <ConfigProvider locale="en_US">
      {/* 英文界面 */}
    </ConfigProvider>
  );
}
```

## 按需加载

使用 babel-plugin-import 进行按需加载：

```javascript
// .babelrc 或 babel.config.js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@baifendian/adhere-mobile-ui-anthoc",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

## API 参考

### 通用 Props

所有组件都支持以下通用属性：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| disabled | boolean | false | 是否禁用 |

### 过滤相关 Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| filterProps | object | - | 过滤配置 |
| filterWrapperClassName | string | - | 过滤容器类名 |
| filterWrapperStyle | CSSProperties | - | 过滤容器样式 |
| bodyWrapperClassName | string | - | 主体容器类名 |
| bodyWrapperStyle | CSSProperties | - | 主体容器样式 |

### 分页相关 Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| pagingProps | object | - | 分页配置 |
| isLocal | boolean | false | 是否本地分页 |
| defaultPaging | object | - | 默认分页配置 |
| onLoad | function | - | 异步加载数据函数 |
| onDataSourceChange | function | - | 数据源变化回调 |

## 最佳实践

### 1. 组件组合使用

```jsx
// 推荐的组件组合方式
<Form>
  <Form.Item name="fruits" label="选择水果">
    <CheckAllCheckbox
      options={fruitOptions}
      onCheckAllChange={handleCheckAllChange}
    />
  </Form.Item>
  
  <Form.Item name="category" label="分类">
    <FilterSelector
      options={categoryOptions}
      filterProps={{
        placeholder: '搜索分类...',
        filterOption: filterByLabel
      }}
    />
  </Form.Item>
</Form>
```

### 2. 异步数据加载

```jsx
// 推荐的异步数据加载方式
const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);

const loadData = useCallback(async (keyword, page = 1, limit = 20) => {
  setLoading(true);
  try {
    const response = await fetch(`/api/search?q=${keyword}&page=${page}&limit=${limit}`);
    const result = await response.json();
    return result;
  } finally {
    setLoading(false);
  }
}, []);

return (
  <AutoCompleteSelector
    loading={loading}
    loadData={loadData}
    onDataSourceChange={(page, dataSource) => {
      setData(dataSource);
    }}
  />
);
```

### 3. 性能优化

```jsx
// 使用 React.memo 优化性能
const OptimizedComponent = React.memo(({ options, value, onChange }) => {
  return (
    <FilterSelector
      options={options}
      value={value}
      onChange={onChange}
      filterProps={{
        filterOption: useCallback((inputValue, option) => {
          return option.label.toLowerCase().includes(inputValue.toLowerCase());
        }, [])
      }}
    />
  );
});
```

## 版本信息

- **当前版本**: 2.11.0
- **React 要求**: >=18.0.0 - <19.0.0
- **Ant Design Mobile 要求**: >=5.0.0 - <6.0.0
- **许可证**: ISC

## 相关链接

- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
- [在线示例](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/anthoc)
- [Ant Design Mobile 文档](https://mobile.ant.design/)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

ISC © [playerljc](https://github.com/playerljc)
