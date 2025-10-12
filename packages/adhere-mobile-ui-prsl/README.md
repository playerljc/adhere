# @baifendian/adhere-mobile-ui-prsl

一个功能强大的移动端列表组件，集成了下拉刷新、上拉加载、搜索、筛选、排序、选择、拖拽排序等丰富功能。

## 简介

`@baifendian/adhere-mobile-ui-prsl` 是一个专为移动端设计的全能列表组件。PRSL 代表 **P**ull to **R**efresh（下拉刷新）、**S**earch（搜索）、**L**oad more（上拉加载更多），提供了完整的移动端列表交互解决方案。

## ✨ 特性

- 🔄 **下拉刷新** - 支持下拉重置数据，完全重置和分页重置两种模式
- ⬆️ **上拉加载** - 自动检测滚动到底部，支持分页加载更多数据
- 🔍 **智能搜索** - 支持关键词搜索和历史记录功能
- 🎛️ **筛选排序** - 内置筛选和排序功能，支持多条件组合
- ✅ **多选模式** - 支持单选和多选模式，内置全选功能
- 🎯 **拖拽排序** - 支持拖拽重新排序，实时预览效果
- 🎨 **视图设置** - 支持多种视图模式切换
- 📱 **移动端优化** - 专为移动端交互设计，触摸友好
- 🌍 **国际化支持** - 内置多语言支持
- 🎨 **主题定制** - 支持动态主题切换
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入
- 🔧 **高度可配置** - 丰富的配置选项和自定义渲染
- ⚡ **性能优化** - 内置虚拟化和懒加载机制
- 🎯 **类型安全** - 完整的 TypeScript 类型定义

## 🖥 兼容环境

- 现代浏览器
- React 18.x
- Ant Design Mobile 5.x
- TypeScript 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-mobile-ui-prsl --save

# 使用 yarn
yarn add @baifendian/adhere-mobile-ui-prsl

# 使用 pnpm
pnpm add @baifendian/adhere-mobile-ui-prsl
```

## 快速开始

### 基础用法

```jsx
import React from 'react';
import PRSL from '@baifendian/adhere-mobile-ui-prsl';

function BasicExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async (params) => {
    setLoading(true);
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(params)
      });
      const result = await response.json();
      setData(result.data);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async (params) => {
    return await loadData(params);
  };

  const handleLoadMore = async (params) => {
    return await loadData(params);
  };

  return (
    <PRSL
      isLoading={loading}
      isUseFirstLoading={true}
      loadData={loadData}
      onRefresh={handleRefresh}
      onLoadMore={handleLoadMore}
      paging={{ page: 1, defaultPageSize: 20 }}
    >
      {({ dataSource }) => (
        <div>
          {dataSource.map((item, index) => (
            <PRSL.Item key={item.id} record={item}>
              {({ actionSheetTrigger }) => (
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {actionSheetTrigger}
                </div>
              )}
            </PRSL.Item>
          ))}
        </div>
      )}
    </PRSL>
  );
}
```

### 高级功能示例

```jsx
import React from 'react';
import PRSL from '@baifendian/adhere-mobile-ui-prsl';

function AdvancedExample() {
  return (
    <PRSL
      // 基础配置
      isLoading={loading}
      isUseFirstLoading={true}
      loadData={loadData}
      onRefresh={handleRefresh}
      onLoadMore={handleLoadMore}
      
      // 搜索配置
      showKeyWordSearchBar={true}
      searchKeyWordMode="history"
      searchKeyWordHistoryMaxSize={10}
      
      // 工具栏配置
      showToolBar={true}
      isShowFilterTrigger={true}
      isShowSortTrigger={true}
      isShowViewSettingTrigger={true}
      
      // 筛选配置
      filterConfig={[
        {
          key: 'category',
          name: 'category',
          label: '分类',
          render: (formIns) => (
            <Selector
              options={categoryOptions}
              value={formIns.getFieldValue('category')}
              onChange={(value) => formIns.setFieldValue('category', value)}
            />
          )
        }
      ]}
      
      // 排序配置
      sortConfig={[
        { name: 'createTime', label: '创建时间' },
        { name: 'updateTime', label: '更新时间' }
      ]}
      
      // 选择模式
      isUseSelection={true}
      selectionMultiple={true}
      onSelectChange={(selectedRowKeys, selectedRows, changeRowKeys, info) => {
        console.log('选择变化:', { selectedRowKeys, selectedRows, changeRowKeys, info });
      }}
      
      // 拖拽排序
      isUseDND={true}
      onDNDChange={(sortChangeValue) => {
        console.log('排序变化:', sortChangeValue);
      }}
      
      // 操作配置
      actionTriggerMode="ActionSheet"
      onAction={(record, rowIndex) => [
        {
          key: 'edit',
          text: '编辑',
          onClick: () => handleEdit(record)
        },
        {
          key: 'delete',
          text: '删除',
          onClick: () => handleDelete(record)
        }
      ]}
    >
      {({ dataSource }) => (
        <div>
          {dataSource.map((item, index) => (
            <PRSL.Item key={item.id} record={item}>
              {({ actionSheetTrigger }) => (
                <div className="list-item">
                  <div className="item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  {actionSheetTrigger}
                </div>
              )}
            </PRSL.Item>
          ))}
        </div>
      )}
    </PRSL>
  );
}
```

## 核心功能

### 1. 下拉刷新

支持两种刷新模式：

- **完全重置** - 重置所有状态（搜索、筛选、排序、分页）
- **分页重置** - 只重置分页状态，保持搜索、筛选、排序状态

```jsx
<PRSL
  onRefresh={async (params) => {
    // 完全重置模式
    return await loadData(params);
  }}
  onRefreshBefore={async (params) => {
    // 刷新前的准备工作
    console.log('准备刷新:', params);
  }}
/>
```

### 2. 上拉加载更多

自动检测滚动到底部，支持分页加载：

```jsx
<PRSL
  onLoadMore={async (params) => {
    // 加载更多数据
    return await loadMoreData(params);
  }}
  scrollLoadProps={{
    distance: 50, // 触发距离
    disabled: false // 是否禁用
  }}
/>
```

### 3. 智能搜索

支持关键词搜索和历史记录：

```jsx
<PRSL
  showKeyWordSearchBar={true}
  searchKeyWordMode="history" // 'normal' | 'history'
  searchKeyWordHistoryMaxSize={10}
  searchKeyWordHistoryStoreType="session" // 'session' | 'local'
  searchKeyWordBarProps={{
    placeholder: '请输入搜索关键词'
  }}
/>
```

### 4. 筛选功能

支持多条件筛选：

```jsx
<PRSL
  filterConfig={[
    {
      key: 'category',
      name: 'category',
      label: '分类',
      formItemProps: { required: true },
      render: (formIns) => (
        <Selector
          options={categoryOptions}
          value={formIns.getFieldValue('category')}
          onChange={(value) => formIns.setFieldValue('category', value)}
        />
      )
    },
    {
      key: 'status',
      name: 'status',
      label: '状态',
      render: (formIns) => (
        <Radio.Group
          value={formIns.getFieldValue('status')}
          onChange={(value) => formIns.setFieldValue('status', value)}
        >
          <Radio value="active">启用</Radio>
          <Radio value="inactive">禁用</Radio>
        </Radio.Group>
      )
    }
  ]}
  defaultFilterValues={{ category: 'all', status: 'active' }}
/>
```

### 5. 排序功能

支持多字段排序：

```jsx
<PRSL
  sortConfig={[
    { name: 'createTime', label: '创建时间' },
    { name: 'updateTime', label: '更新时间' },
    { name: 'title', label: '标题' }
  ]}
  defaultSortValues={[
    { name: 'createTime', order: 'desc' }
  ]}
/>
```

### 6. 选择模式

支持单选和多选：

```jsx
<PRSL
  isUseSelection={true}
  selectionMultiple={true} // 多选模式
  selectedRowKeys={['1', '2', '3']}
  selectionLabel="选择"
  selectionFinishLabel="完成"
  selectionCancelLabel="取消"
  onSelectChange={(selectedRowKeys, selectedRows, changeRowKeys, info) => {
    console.log('选择变化:', { selectedRowKeys, selectedRows, changeRowKeys, info });
  }}
/>
```

### 7. 拖拽排序

支持拖拽重新排序：

```jsx
<PRSL
  isUseDND={true}
  dndLabel="排序"
  dndFinishLabel="完成"
  dndCancelLabel="取消"
  dndDragHandle={<HolderOutlined />}
  onDNDChange={(sortChangeValue) => {
    console.log('排序变化:', sortChangeValue);
  }}
/>
```

### 8. 视图设置

支持多种视图模式：

```jsx
<PRSL
  viewSettingConfig={[
    { name: 'normal', label: '列表视图' },
    { name: 'multi', label: '多列视图' },
    { name: 'waterfall', label: '瀑布流' }
  ]}
  defaultViewSettingValue="normal"
  onViewSetting={(value) => {
    console.log('视图切换:', value);
  }}
/>
```

### 9. 操作菜单

支持两种操作模式：

```jsx
<PRSL
  actionTriggerMode="ActionSheet" // 'ActionSheet' | 'Swipe'
  onAction={(record, rowIndex) => [
    {
      key: 'edit',
      text: '编辑',
      onClick: () => handleEdit(record)
    },
    {
      key: 'delete',
      text: '删除',
      onClick: () => handleDelete(record)
    },
    {
      key: 'share',
      text: '分享',
      disabled: !record.canShare,
      onClick: () => handleShare(record)
    }
  ]}
/>
```

## 组件结构

### PRSL 主组件

```jsx
<PRSL
  // 样式配置
  className="custom-prsl"
  style={{ height: '100vh' }}
  innerClassName="custom-inner"
  innerStyle={{ padding: '16px' }}
  
  // 数据配置
  rowKey="id"
  isUseLocal={false}
  loadData={loadData}
  
  // 加载状态
  isLoading={loading}
  isUseFirstLoading={true}
  firstLoading={() => <CustomLoading />}
  loadMoreLoading={() => <CustomLoadMore />}
  
  // 刷新和加载
  onRefresh={handleRefresh}
  onLoadMore={handleLoadMore}
  onRefreshBefore={handleRefreshBefore}
  
  // 分页配置
  paging={{ page: 1, defaultPageSize: 20 }}
  
  // 搜索配置
  showKeyWordSearchBar={true}
  searchKeyWordMode="history"
  
  // 工具栏配置
  showToolBar={true}
  showTotal={true}
  
  // 其他配置...
>
  {({ dataSource }) => (
    <div>
      {dataSource.map(item => (
        <PRSL.Item key={item.id} record={item}>
          {/* 列表项内容 */}
        </PRSL.Item>
      ))}
    </div>
  )}
</PRSL>
```

### PRSL.Item 子组件

```jsx
<PRSL.Item
  className="custom-item"
  style={{ marginBottom: '8px' }}
  record={item}
  actions={[
    { key: 'edit', text: '编辑', onClick: () => {} },
    { key: 'delete', text: '删除', onClick: () => {} }
  ]}
>
  {({ actionSheetTrigger }) => (
    <div className="item-content">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {actionSheetTrigger}
    </div>
  )}
</PRSL.Item>
```

## API 参考

### PRSL Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| innerClassName | string | - | 内部容器类名 |
| innerStyle | CSSProperties | - | 内部容器样式 |
| rowKey | string | 'id' | 数据主键字段名 |
| isUseLocal | boolean | false | 是否使用本地数据模式 |
| loadData | function | - | 加载数据的函数 |
| isLoading | boolean | true | 是否正在加载 |
| isUseFirstLoading | boolean | true | 是否显示首次加载动画 |
| firstLoading | function | - | 自定义首次加载组件 |
| loadMoreLoading | function | - | 自定义加载更多组件 |
| onRefresh | function | - | 下拉刷新回调 |
| onLoadMore | function | - | 上拉加载更多回调 |
| onRefreshBefore | function | - | 刷新前回调 |
| paging | boolean \| object | true | 分页配置 |
| showKeyWordSearchBar | boolean | true | 是否显示搜索框 |
| searchKeyWordMode | string | 'normal' | 搜索模式 |
| searchKeyWordHistoryMaxSize | number | 50 | 搜索历史最大数量 |
| showToolBar | boolean | true | 是否显示工具栏 |
| showTotal | boolean | true | 是否显示总数 |
| isShowFilterTrigger | boolean | true | 是否显示筛选按钮 |
| isShowSortTrigger | boolean | true | 是否显示排序按钮 |
| isShowViewSettingTrigger | boolean | true | 是否显示视图设置按钮 |
| filterConfig | FilterConfigItem[] | - | 筛选配置 |
| sortConfig | SortConfigItem[] | - | 排序配置 |
| viewSettingConfig | ViewSettingConfigItem[] | - | 视图设置配置 |
| isUseSelection | boolean | false | 是否启用选择模式 |
| selectionMultiple | boolean | true | 是否多选模式 |
| selectedRowKeys | (string \| number)[] | - | 选中的行键 |
| onSelectChange | function | - | 选择变化回调 |
| isUseDND | boolean | false | 是否启用拖拽排序 |
| onDNDChange | function | - | 拖拽排序变化回调 |
| actionTriggerMode | string | 'ActionSheet' | 操作触发模式 |
| onAction | function | - | 操作配置函数 |
| renderEmpty | function | - | 自定义空数据组件 |
| renderOffLine | function | - | 自定义离线组件 |
| children | function | - | 渲染函数 |

### PRSL.Item Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| record | object | - | 数据记录 |
| actions | ActionConfigItem[] | - | 操作配置 |
| children | function | - | 渲染函数 |

### 方法引用

通过 ref 可以调用以下方法：

```jsx
const prslRef = useRef<PRSLHandle>(null);

// 获取滚动容器
prslRef.current?.getScrollEl();

// 隐藏所有加载状态
prslRef.current?.scrollLoadHideAll();

// 完全重置
prslRef.current?.resetAll();

// 重置分页
prslRef.current?.resetPagination();

// 重新加载数据
prslRef.current?.loadData();

// 重置分页并加载数据
prslRef.current?.resetPaginationAndLoadData();
```

## 高级配置

### 自定义渲染

```jsx
<PRSL
  // 自定义工具栏
  renderToolBar={(defaultToolItems, showTotalElement, disabled) => (
    <div className="custom-toolbar">
      {showTotalElement}
      <div className="custom-tools">
        {defaultToolItems}
        <Button size="small">自定义按钮</Button>
      </div>
    </div>
  )}
  
  // 自定义筛选UI
  renderFilter={(defaultFilterValues) => (
    <Form>
      <Form.Item name="category" label="分类">
        <Selector options={categoryOptions} />
      </Form.Item>
      <Form.Item name="status" label="状态">
        <Radio.Group>
          <Radio value="active">启用</Radio>
          <Radio value="inactive">禁用</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )}
  
  // 自定义排序UI
  renderSort={(defaultSortValues) => (
    <div className="sort-panel">
      <Checkbox.Group value={defaultSortValues}>
        <Checkbox value="createTime">按创建时间</Checkbox>
        <Checkbox value="updateTime">按更新时间</Checkbox>
        <Checkbox value="title">按标题</Checkbox>
      </Checkbox.Group>
    </div>
  )}
  
  // 自定义视图设置
  renderViewSetting={(defaultViewSettingValue) => (
    <div className="view-setting">
      <Radio.Group value={defaultViewSettingValue}>
        <Radio value="normal">列表视图</Radio>
        <Radio value="multi">多列视图</Radio>
        <Radio value="waterfall">瀑布流</Radio>
      </Radio.Group>
    </div>
  )}
>
  {({ dataSource }) => (
    <div>
      {dataSource.map(item => (
        <PRSL.Item key={item.id} record={item}>
          {({ actionSheetTrigger }) => (
            <div className="list-item">
              <div className="item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {actionSheetTrigger}
            </div>
          )}
        </PRSL.Item>
      ))}
    </div>
  )}
</PRSL>
```

### 本地数据模式

```jsx
<PRSL
  isUseLocal={true}
  loadData={async (params) => {
    // 返回本地数据
    return {
      data: localData,
      total: localData.length
    };
  }}
  // 本地模式下，筛选和排序会自动处理
  filterConfig={[
    {
      key: 'category',
      name: 'category',
      label: '分类',
      render: (formIns) => (
        <Selector options={categoryOptions} />
      )
    }
  ]}
  sortConfig={[
    { name: 'createTime', label: '创建时间' },
    { name: 'title', label: '标题' }
  ]}
>
  {({ dataSource }) => (
    <div>
      {dataSource.map(item => (
        <PRSL.Item key={item.id} record={item}>
          {/* 列表项内容 */}
        </PRSL.Item>
      ))}
    </div>
  )}
</PRSL>
```

## 最佳实践

### 1. 性能优化

```jsx
// 使用 React.memo 优化列表项
const ListItem = React.memo(({ item, onAction }) => (
  <PRSL.Item key={item.id} record={item}>
    {({ actionSheetTrigger }) => (
      <div className="list-item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {actionSheetTrigger}
      </div>
    )}
  </PRSL.Item>
));

// 使用 useCallback 优化回调函数
const handleRefresh = useCallback(async (params) => {
  return await loadData(params);
}, [loadData]);

const handleLoadMore = useCallback(async (params) => {
  return await loadMoreData(params);
}, [loadMoreData]);
```

### 2. 状态管理

```jsx
// 使用状态管理库管理复杂状态
const [state, setState] = useState({
  data: [],
  loading: false,
  selectedKeys: [],
  filterValues: {},
  sortValues: []
});

// 使用 useImmer 管理复杂状态
const [state, setState] = useImmer({
  data: [],
  loading: false,
  selectedKeys: [],
  filterValues: {},
  sortValues: []
});
```

### 3. 错误处理

```jsx
<PRSL
  loadData={async (params) => {
    try {
      const result = await fetchData(params);
      return result;
    } catch (error) {
      // 处理错误
      message.error('数据加载失败');
      throw error;
    }
  }}
  renderEmpty={() => (
    <Empty description="暂无数据" />
  )}
  renderOffLine={() => (
    <ErrorBlock status="disconnected">
      <Button onClick={() => window.location.reload()}>
        重新加载
      </Button>
    </ErrorBlock>
  )}
>
  {/* 内容 */}
</PRSL>
```

## 版本信息

- **当前版本**: 2.11.0
- **React 要求**: >=18.0.0 - <19.0.0
- **Ant Design Mobile 要求**: >=5.0.0 - <6.0.0
- **许可证**: ISC

## 相关链接

- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
- [在线示例](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/prsl)
- [Ant Design Mobile 文档](https://mobile.ant.design/)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

ISC © [playerljc](https://github.com/playerljc)


