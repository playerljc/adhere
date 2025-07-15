# Adhere UI AutoComplete

一个基于 Ant Design 的自动完成组件，提供搜索、防抖、自定义渲染等功能。

## 特性

- 🔍 **智能搜索**: 支持关键词搜索和防抖处理
- 🎨 **自定义渲染**: 支持自定义下拉内容和加载状态
- 🌳 **树形结构**: 提供 TreeAutoComplete 子组件支持树形数据
- ⚡ **性能优化**: 使用 memo 和 useCallback 优化渲染性能
- 📝 **TypeScript**: 完整的 TypeScript 类型支持
- 🎯 **主题支持**: 集成 ConfigProvider 主题系统

## 安装

```bash
npm install @baifendian/adhere-ui-auto-complete
```

## 基本用法

### AutoComplete

```tsx
import React, { useState } from 'react';
import AutoComplete from '@baifendian/adhere-ui-auto-complete';

const App = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState();

  const loadData = async (keyword) => {
    // 模拟 API 调用
    const data = await fetchOptions(keyword);
    setOptions(data);
  };

  return (
    <AutoComplete
      placeholder="请输入搜索内容"
      value={value}
      options={options}
      loadData={loadData}
      onChange={setValue}
      debounceTimeout={500}
    />
  );
};
```

### TreeAutoComplete

```tsx
import React, { useState } from 'react';
import { TreeAutoComplete } from '@baifendian/adhere-ui-auto-complete';

const App = () => {
  const [treeData, setTreeData] = useState([]);
  const [value, setValue] = useState();

  const loadData = async (keyword) => {
    // 模拟 API 调用
    const data = await fetchTreeData(keyword);
    setTreeData(data);
  };

  return (
    <TreeAutoComplete
      placeholder="请选择节点"
      value={value}
      treeData={treeData}
      loadData={loadData}
      onChange={setValue}
      treeDataSimpleMode={false}
      isUsePath={true}
    />
  );
};
```

## API

### AutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| classNameWrap | 外层容器类名 | `string` | - |
| styleWrap | 外层容器样式 | `CSSProperties` | - |
| renderLoading | 自定义加载状态渲染函数 | `() => ReactElement` | - |
| debounceTimeout | 防抖延迟时间（毫秒） | `number` | `300` |
| loadData | 数据加载函数 | `(kw?: string) => Promise<void>` | - |
| emptyContent | 空状态内容 | `ReactElement` | `<Empty />` |
| defaultOptions | 默认选项数据 | `OptionType[]` | - |
| options | 选项数据 | `OptionType[]` | - |
| children | 自定义下拉内容渲染函数 | `(arg: RenderProps) => ReactElement` | - |

### TreeAutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | `TreeNodeType[]` | - |
| defaultTreeData | 默认树形数据 | `TreeNodeType[]` | - |
| treeDataSimpleMode | 是否为简单模式 | `boolean` | `false` |
| isUsePath | 是否使用路径模式 | `boolean` | `true` |

### 类型定义

```typescript
interface OptionType {
  value: string | number;
  label?: string;
  title?: string;
  disabled?: boolean;
  children?: OptionType[];
  [key: string]: any;
}

interface TreeNodeType {
  key: string | number;
  value: string | number;
  title: string;
  pId?: string | number;
  children?: TreeNodeType[];
  disabled?: boolean;
  [key: string]: any;
}
```

## 高级用法

### 自定义渲染

```tsx
<AutoComplete
  loadData={loadData}
  options={options}
  children={({ originNode, value, onChange, options, loading }) => (
    <div>
      {loading && <Spin />}
      {options.map(option => (
        <div key={option.value} onClick={() => onChange(option.value)}>
          {option.label}
        </div>
      ))}
    </div>
  )}
/>
```

### 自定义加载状态

```tsx
<AutoComplete
  loadData={loadData}
  renderLoading={() => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Spin size="large" />
      <div>正在搜索...</div>
    </div>
  )}
/>
```

### 自定义空状态

```tsx
<AutoComplete
  loadData={loadData}
  emptyContent={
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Empty description="暂无数据" />
    </div>
  }
/>
```

## 优化内容

### TypeScript 类型优化

- ✅ 完整的类型定义和接口
- ✅ 详细的 JSDoc 文档注释
- ✅ 类型安全的组件属性
- ✅ 泛型支持

### 代码优化

- ✅ 使用 `useCallback` 优化函数性能
- ✅ 使用 `useMemo` 优化计算性能
- ✅ 使用 `memo` 优化组件渲染
- ✅ 防抖处理优化搜索性能
- ✅ 错误处理和边界情况处理

### 文档优化

- ✅ 详细的 API 文档
- ✅ 使用示例和代码片段
- ✅ 类型定义说明
- ✅ 最佳实践指南

## 注意事项

1. **数据格式**: 确保传入的数据格式符合组件要求
2. **异步处理**: `loadData` 函数应该是异步的，返回 Promise
3. **性能考虑**: 大数据量时建议使用虚拟滚动
4. **主题配置**: 组件依赖 ConfigProvider 进行主题配置

## 更新日志

### v2.0.0

- 🎉 完整的 TypeScript 类型支持
- 📝 详细的 JSDoc 文档
- ⚡ 性能优化和代码重构
- 🎨 更好的主题集成
- 🔧 修复已知问题和类型错误

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
