# @baifendian/adhere-ui-fieldgeneratortodict

一个强大的字典生成器，能够将字典数据动态转换为各种 UI 组件，支持 PC 端和移动端的丰富组件类型。

## 简介

`@baifendian/adhere-ui-fieldgeneratortodict` 是一个专为现代 Web 应用设计的字典生成器。它能够将静态或动态的字典数据转换为各种 UI 组件，包括选择器、复选框、单选框、表格、列表、树形选择器等，支持 PC 端和移动端的完整组件生态。

## ✨ 特性

- 🚀 **丰富的组件支持** - 支持 50+ 种组件类型，涵盖所有常用 UI 组件
- 📱 **多端适配** - 同时支持 PC 端和移动端组件
- 🔄 **动态数据源** - 支持静态字典和动态数据源
- 🎯 **智能组件生成** - 基于字典名称和组件类型自动生成组件
- 🔧 **高阶组件模式** - 提供数据转换和分页处理 HOC
- 🌍 **国际化支持** - 内置多语言支持
- 🎨 **主题定制** - 支持动态主题切换
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入
- 🔍 **搜索功能** - 内置搜索表格和搜索列表组件
- 📊 **分页支持** - 支持各种分页场景的数据处理
- 🌳 **树形数据** - 完整的树形数据结构和异步加载支持

## 🖥 兼容环境

- React 18.x
- 现代浏览器，IE11
- Ant Design 5.x
- Ant Design Mobile 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-ui-fieldgeneratortodict --save

# 使用 yarn
yarn add @baifendian/adhere-ui-fieldgeneratortodict

# 使用 pnpm
pnpm add @baifendian/adhere-ui-fieldgeneratortodict
```

## 快速开始

### 基础用法

```tsx
import React from 'react';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

function App() {
  return (
    <div>
      {/* 使用字典生成的选择器组件 */}
      <FieldGeneratorToDict.UserStatusSelectStandard 
        placeholder="请选择用户状态"
        style={{ width: 200 }}
      />
      
      {/* 使用字典生成的多选复选框组件 */}
      <FieldGeneratorToDict.UserRolesCheckBoxVertical
        style={{ marginTop: 16 }}
      />
    </div>
  );
}
```

### 按需引入

```tsx
import { 
  Components, 
  getDictComponent, 
  genDictComponentName 
} from '@baifendian/adhere-ui-fieldgeneratortodict';

// 生成字典组件名
const componentName = genDictComponentName('UserStatus', Components.Select.Standard);

// 获取字典组件
const UserStatusSelect = getDictComponent(componentName);
```

## 🧩 核心功能

### 组件类型支持

#### PC 端组件

```tsx
// 选择器组件
<FieldGeneratorToDict.UserStatusSelectStandard />
<FieldGeneratorToDict.UserStatusSelectMulti />
<FieldGeneratorToDict.UserStatusSelectCheckAll />
<FieldGeneratorToDict.UserStatusSelectDropdownRender />

// 复选框组件
<FieldGeneratorToDict.UserRolesCheckBoxVertical />
<FieldGeneratorToDict.UserRolesCheckBoxHorizontal />
<FieldGeneratorToDict.UserRolesCheckBoxCustom />
<FieldGeneratorToDict.UserRolesCheckBoxCheckAllVertical />

// 单选框组件
<FieldGeneratorToDict.GenderRadioVertical />
<FieldGeneratorToDict.GenderRadioHorizontal />
<FieldGeneratorToDict.GenderRadioButton />
<FieldGeneratorToDict.GenderRadioCustom />

// 标签组件
<FieldGeneratorToDict.TagsTagVertical />
<FieldGeneratorToDict.TagsTagHorizontal />
<FieldGeneratorToDict.TagsTagVerticalCheckable />

// 列表组件
<FieldGeneratorToDict.UsersListStandard />
<FieldGeneratorToDict.UsersListSelect />
<FieldGeneratorToDict.UsersListMultiSelect />

// 表格组件
<FieldGeneratorToDict.ProductsTableStandard />
<FieldGeneratorToDict.ProductsTableSelect />
<FieldGeneratorToDict.ProductsTableMultiSelect />

// 树形选择器
<FieldGeneratorToDict.DepartmentsTreeStandard />
<FieldGeneratorToDict.DepartmentsTreeMulti />
<FieldGeneratorToDict.DepartmentsTreeLeaf />
<FieldGeneratorToDict.DepartmentsTreeLeafMulti />

// 级联选择器
<FieldGeneratorToDict.RegionsCascaderStandard />
<FieldGeneratorToDict.RegionsCascaderMulti />
<FieldGeneratorToDict.RegionsCascaderShowChild />

// 穿梭框
<FieldGeneratorToDict.PermissionsTransferStandard />
<FieldGeneratorToDict.PermissionsTransferSelect />

// 自动完成
<FieldGeneratorToDict.CitiesAutoCompleteStandard />
<FieldGeneratorToDict.CitiesAutoCompleteSelectInput />

// 搜索组件
<FieldGeneratorToDict.UsersSearchTableStandard />
<FieldGeneratorToDict.UsersSearchListStandard />
```

#### 移动端组件

```tsx
// 移动端选择器
<FieldGeneratorToDict.UserStatusMobileSelectorStandard />
<FieldGeneratorToDict.UserStatusMobileSelectorCheckAll />

// 移动端复选框
<FieldGeneratorToDict.UserRolesMobileCheckboxStandard />
<FieldGeneratorToDict.UserRolesMobileCheckboxCheckAll />

// 移动端单选框
<FieldGeneratorToDict.GenderMobileRadioStandard />

// 移动端复选框列表
<FieldGeneratorToDict.UserRolesMobileCheckListStandard />
<FieldGeneratorToDict.UserRolesMobileCheckListCheckAll />

// 移动端级联视图
<FieldGeneratorToDict.RegionsMobileCascaderViewStandard />

// 移动端树形选择器
<FieldGeneratorToDict.DepartmentsMobileTreeSelectStandard />
<FieldGeneratorToDict.DepartmentsMobileTreeSelectLeaf />
```

### 动态数据源

#### 静态字典

```tsx
// 使用静态字典数据
<FieldGeneratorToDict.UserStatusSelectStandard 
  cascadeParams={{ type: 'active' }}
  onDataSourceChange={(dataSource, extra) => {
    console.log('数据源变化:', dataSource);
  }}
/>
```

#### 动态字典

```tsx
// 使用动态字典数据
<FieldGeneratorToDict.UserStatusSelectDynamicStandard 
  cascadeParams={{ departmentId: 123 }}
  onDataSourceChange={(dataSource, extra) => {
    if (extra?.type === 'paging') {
      console.log('分页数据:', extra.info);
    }
  }}
/>
```

#### 自动完成字典

```tsx
// 使用自动完成字典
<FieldGeneratorToDict.CitiesAutoCompleteStandard 
  cascadeParams={{ keyword: '北京' }}
  onDataSourceChange={(dataSource, extra) => {
    console.log('搜索结果:', dataSource);
  }}
/>
```

### 高阶组件 (HOC)

#### 数组数据转换

```tsx
import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-fieldgeneratortodict';

function MyComponent() {
  return (
    <ArrayEntityValueHOC 
      getOptionsByDataSource={(dataSource) => {
        // 自定义数据转换逻辑
        return dataSource.map(item => ({
          label: item.name,
          value: item.id,
          disabled: !item.active
        }));
      }}
    >
      <FieldGeneratorToDict.UserStatusSelectStandard />
    </ArrayEntityValueHOC>
  );
}
```

#### 树形数据转换

```tsx
import { TreeEntityValueHOC } from '@baifendian/adhere-ui-fieldgeneratortodict';

function MyComponent() {
  return (
    <TreeEntityValueHOC 
      getTreeDataByDataSource={(dataSource) => {
        // 自定义树形数据转换逻辑
        return dataSource.map(item => ({
          title: item.name,
          key: item.id,
          children: item.children || [],
          disabled: !item.active
        }));
      }}
    >
      <FieldGeneratorToDict.DepartmentsTreeStandard />
    </TreeEntityValueHOC>
  );
}
```

#### 异步树形数据

```tsx
import { AsyncTreeEntityValueHOC } from '@baifendian/adhere-ui-fieldgeneratortodict';

function MyComponent() {
  return (
    <AsyncTreeEntityValueHOC 
      loadData={async (node) => {
        // 异步加载子节点数据
        const response = await fetch(`/api/departments/${node.key}/children`);
        return response.json();
      }}
    >
      <FieldGeneratorToDict.DepartmentsTreeAsyncStandard />
    </AsyncTreeEntityValueHOC>
  );
}
```

### 搜索功能

#### 搜索表格

```tsx
// 基础搜索表格
<FieldGeneratorToDict.UsersSearchTableStandard 
  columns={[
    { title: '姓名', dataIndex: 'name' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '状态', dataIndex: 'status' }
  ]}
  searchFields={[
    { name: 'name', label: '姓名', component: 'input' },
    { name: 'status', label: '状态', component: 'select' }
  ]}
/>

// 可编辑单元格搜索表格
<FieldGeneratorToDict.UsersSearchTableEditorCell 
  editable={true}
  onSave={(record) => {
    console.log('保存记录:', record);
  }}
/>

// 行拖拽排序搜索表格
<FieldGeneratorToDict.UsersSearchTableRowDragSort 
  onSort={(newData) => {
    console.log('排序后的数据:', newData);
  }}
/>

// 单选搜索表格
<FieldGeneratorToDict.UsersSearchTableSingleSelect 
  onSelect={(selectedRows) => {
    console.log('选中的行:', selectedRows);
  }}
/>

// 多选搜索表格
<FieldGeneratorToDict.UsersSearchTableMultipleSelect 
  onSelect={(selectedRows) => {
    console.log('选中的行:', selectedRows);
  }}
/>
```

#### 搜索列表

```tsx
// 基础搜索列表
<FieldGeneratorToDict.UsersSearchListStandard 
  renderItem={(item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.email}</p>
    </div>
  )}
/>

// 单选搜索列表
<FieldGeneratorToDict.UsersSearchListSingleSelect 
  onSelect={(selectedItems) => {
    console.log('选中的项:', selectedItems);
  }}
/>

// 多选搜索列表
<FieldGeneratorToDict.UsersSearchListMultipleSelect 
  onSelect={(selectedItems) => {
    console.log('选中的项:', selectedItems);
  }}
/>
```

### 分页支持

#### 列表分页

```tsx
// 分页列表
<FieldGeneratorToDict.UsersListPaginationStandard 
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100
  }}
  onPageChange={(page, pageSize) => {
    console.log('页码变化:', page, pageSize);
  }}
/>

// 分页多选列表
<FieldGeneratorToDict.UsersListPaginationMulti 
  onSelect={(selectedItems) => {
    console.log('选中的项:', selectedItems);
  }}
/>
```

#### 表格分页

```tsx
// 分页表格
<FieldGeneratorToDict.UsersTablePaginationStandard 
  pagination={{
    current: 1,
    pageSize: 20,
    total: 500,
    showSizeChanger: true,
    showQuickJumper: true
  }}
  onPageChange={(page, pageSize) => {
    console.log('页码变化:', page, pageSize);
  }}
/>
```

### 表单验证

```tsx
import { validatorNormal, validatorMulti } from '@baifendian/adhere-ui-fieldgeneratortodict';

function MyForm() {
  return (
    <Form>
      <Form.Item
        name="status"
        label="状态"
        rules={[validatorNormal('请选择状态')]}
      >
        <FieldGeneratorToDict.UserStatusSelectStandard />
      </Form.Item>
      
      <Form.Item
        name="roles"
        label="角色"
        rules={[validatorMulti('请选择至少一个角色')]}
      >
        <FieldGeneratorToDict.UserRolesCheckBoxVertical />
      </Form.Item>
    </Form>
  );
}
```

## 🔧 高级功能

### 自定义组件工厂

```tsx
import { setItem } from '@baifendian/adhere-ui-fieldgeneratortodict';

// 注册自定义组件
setItem('CustomSelect', 'Standard', (dictName) => {
  return ({ cascadeParams, onDataSourceChange, ...props }) => {
    const dataSource = useDict({
      dictName,
      cascadeParams,
      onDataSourceChange
    });
    
    return (
      <Select
        {...props}
        options={dataSource}
        style={{ 
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 8
        }}
      />
    );
  };
});

// 使用自定义组件
<FieldGeneratorToDict.UserStatusCustomSelectStandard />
```

### 字典刷新控制

```tsx
import { useRef } from 'react';

function MyComponent() {
  const selectRef = useRef();
  
  const handleRefresh = () => {
    // 刷新字典数据
    selectRef.current?.refresh();
  };
  
  return (
    <div>
      <button onClick={handleRefresh}>刷新数据</button>
      <FieldGeneratorToDict.UserStatusSelectStandard ref={selectRef} />
    </div>
  );
}
```

### 级联参数

```tsx
function CascadedSelects() {
  const [departmentId, setDepartmentId] = useState(null);
  
  return (
    <div>
      <FieldGeneratorToDict.DepartmentsSelectStandard 
        onChange={setDepartmentId}
        placeholder="请选择部门"
      />
      
      <FieldGeneratorToDict.UsersSelectStandard 
        cascadeParams={{ departmentId }}
        placeholder="请选择用户"
        disabled={!departmentId}
      />
    </div>
  );
}
```

### 异步数据加载

```tsx
function AsyncTreeSelect() {
  return (
    <FieldGeneratorToDict.DepartmentsTreeAsyncStandard 
      loadData={async (node) => {
        try {
          const response = await fetch(`/api/departments/${node.key}/children`);
          const data = await response.json();
          return data.map(item => ({
            title: item.name,
            key: item.id,
            isLeaf: !item.hasChildren
          }));
        } catch (error) {
          console.error('加载数据失败:', error);
          return [];
        }
      }}
    />
  );
}
```

### 移动端响应式

```tsx
import { useState, useEffect } from 'react';

function ResponsiveComponent() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (isMobile) {
    return (
      <FieldGeneratorToDict.UserStatusMobileSelectorStandard />
    );
  }
  
  return (
    <FieldGeneratorToDict.UserStatusSelectStandard />
  );
}
```

## 📚 API 参考

### 核心 API

#### `Components`
所有支持的组件类型常量。

```tsx
import { Components } from '@baifendian/adhere-ui-fieldgeneratortodict';

// 选择器组件类型
Components.Select.Standard        // 'SelectStandard'
Components.Select.Multi          // 'SelectMulti'
Components.Select.CheckAll       // 'SelectCheckAll'

// 复选框组件类型
Components.CheckBox.Vertical     // 'CheckBoxVertical'
Components.CheckBox.Horizontal   // 'CheckBoxHorizontal'
Components.CheckBox.Custom       // 'CheckBoxCustom'

// 更多组件类型...
```

#### `genDictComponentName(dictName, componentName)`
生成字典组件名称。

| 参数 | 类型 | 说明 |
|------|------|------|
| `dictName` | `string` | 字典名称 |
| `componentName` | `string` | 组件名称 |

```tsx
const componentName = genDictComponentName('UserStatus', Components.Select.Standard);
// 返回: 'UserStatusSelectStandard'
```

#### `getDictComponent(dictName, componentName)`
获取字典组件。

| 参数 | 类型 | 说明 |
|------|------|------|
| `dictName` | `string` | 字典名称 |
| `componentName` | `string` | 组件名称 |

```tsx
const UserStatusSelect = getDictComponent('UserStatus', Components.Select.Standard);
```

#### `validatorNormal(message)`
生成普通验证器。

| 参数 | 类型 | 说明 |
|------|------|------|
| `message` | `string` | 验证失败时的错误信息 |

#### `validatorMulti(message)`
生成多选验证器。

| 参数 | 类型 | 说明 |
|------|------|------|
| `message` | `string` | 验证失败时的错误信息 |

### 高阶组件 API

#### `ArrayEntityValueHOC`
数组数据转换高阶组件。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `getOptionsByDataSource` | `(dataSource?: any) => any` | - | 数据转换函数 |
| `optionsProp` | `string` | `'options'` | 选项属性名 |

#### `TreeEntityValueHOC`
树形数据转换高阶组件。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `getTreeDataByDataSource` | `(dataSource?: any) => any` | - | 树形数据转换函数 |
| `treeDataProp` | `string` | `'treeData'` | 树形数据属性名 |

#### `AsyncTreeEntityValueHOC`
异步树形数据高阶组件。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `loadData` | `(node: any) => Promise<any[]>` | - | 异步加载数据函数 |

### 组件属性

所有字典组件都支持以下通用属性：

| 属性 | 类型 | 说明 |
|------|------|------|
| `cascadeParams` | `object` | 级联参数 |
| `onDataSourceChange` | `(dataSource: any, extra?: object) => void` | 数据源变化回调 |

## 🔍 最佳实践

### 1. 字典命名规范

```tsx
// 推荐的字典命名方式
// 格式: [业务域][实体名][状态/类型]
const dictNames = {
  UserStatus: 'UserStatus',           // 用户状态
  UserRole: 'UserRole',              // 用户角色
  DepartmentType: 'DepartmentType',   // 部门类型
  ProductCategory: 'ProductCategory', // 产品分类
  OrderStatus: 'OrderStatus'          // 订单状态
};
```

### 2. 组件使用模式

```tsx
// 表单中使用
function UserForm() {
  return (
    <Form layout="vertical">
      <Form.Item
        name="status"
        label="用户状态"
        rules={[validatorNormal('请选择用户状态')]}
      >
        <FieldGeneratorToDict.UserStatusSelectStandard 
          placeholder="请选择状态"
          allowClear
        />
      </Form.Item>
      
      <Form.Item
        name="roles"
        label="用户角色"
        rules={[validatorMulti('请选择至少一个角色')]}
      >
        <FieldGeneratorToDict.UserRolesCheckBoxVertical />
      </Form.Item>
    </Form>
  );
}
```

### 3. 级联选择实现

```tsx
function CascadedForm() {
  const [form] = Form.useForm();
  const [departmentId, setDepartmentId] = useState(null);
  
  return (
    <Form form={form} layout="vertical">
      <Form.Item name="departmentId" label="部门">
        <FieldGeneratorToDict.DepartmentsSelectStandard 
          onChange={setDepartmentId}
          placeholder="请选择部门"
        />
      </Form.Item>
      
      <Form.Item name="userId" label="用户">
        <FieldGeneratorToDict.UsersSelectStandard 
          cascadeParams={{ departmentId }}
          placeholder="请选择用户"
          disabled={!departmentId}
        />
      </Form.Item>
    </Form>
  );
}
```

### 4. 移动端适配

```tsx
function ResponsiveForm() {
  const [isMobile] = useState(window.innerWidth < 768);
  
  if (isMobile) {
    return (
      <Form layout="vertical">
        <Form.Item name="status" label="状态">
          <FieldGeneratorToDict.UserStatusMobileSelectorStandard />
        </Form.Item>
        
        <Form.Item name="roles" label="角色">
          <FieldGeneratorToDict.UserRolesMobileCheckListStandard />
        </Form.Item>
      </Form>
    );
  }
  
  return (
    <Form layout="horizontal">
      <Form.Item name="status" label="状态">
        <FieldGeneratorToDict.UserStatusSelectStandard />
      </Form.Item>
      
      <Form.Item name="roles" label="角色">
        <FieldGeneratorToDict.UserRolesCheckBoxVertical />
      </Form.Item>
    </Form>
  );
}
```

### 5. 性能优化

```tsx
import { memo, useMemo } from 'react';

// 使用 memo 优化组件
const OptimizedSelect = memo(() => {
  const selectProps = useMemo(() => ({
    placeholder: '请选择',
    allowClear: true,
    showSearch: true
  }), []);
  
  return (
    <FieldGeneratorToDict.UserStatusSelectStandard {...selectProps} />
  );
});

// 使用 useMemo 优化级联参数
function OptimizedCascadedSelect() {
  const [departmentId, setDepartmentId] = useState(null);
  
  const cascadeParams = useMemo(() => ({
    departmentId
  }), [departmentId]);
  
  return (
    <div>
      <FieldGeneratorToDict.DepartmentsSelectStandard 
        onChange={setDepartmentId}
      />
      
      <FieldGeneratorToDict.UsersSelectStandard 
        cascadeParams={cascadeParams}
      />
    </div>
  );
}
```

## 🚀 性能优化

### 按需加载配置

```javascript
// .babelrc
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@baifendian/adhere-ui-fieldgeneratortodict",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

### 组件懒加载

```tsx
import { lazy, Suspense } from 'react';

const LazySelect = lazy(() => 
  import('@baifendian/adhere-ui-fieldgeneratortodict').then(module => ({
    default: module.default.UserStatusSelectStandard
  }))
);

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazySelect />
    </Suspense>
  );
}
```

### 字典数据缓存

```tsx
import { useMemo } from 'react';

function CachedSelect() {
  const [params, setParams] = useState({});
  
  const selectProps = useMemo(() => ({
    cascadeParams: params,
    onDataSourceChange: (dataSource) => {
      // 缓存数据源
      localStorage.setItem('cachedDataSource', JSON.stringify(dataSource));
    }
  }), [params]);
  
  return (
    <FieldGeneratorToDict.UserStatusSelectStandard {...selectProps} />
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
- [Ant Design Mobile](https://mobile.ant.design/)
- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/fieldgeneratortodict)

---

**注意：** 这是一个功能强大的字典生成器，能够将字典数据动态转换为各种 UI 组件，大大简化了数据驱动组件的开发工作。通过统一的 API 和丰富的组件类型，让您的应用开发更加高效和便捷。
