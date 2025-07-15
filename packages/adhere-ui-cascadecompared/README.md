# Adhere UI Cascade Compared

一个用于对比多组数据的级联表格组件，支持固定列、同步滚动等功能。

## 功能特性

- 🎯 **固定列支持** - 可以设置固定列，在水平滚动时保持可见
- 🔄 **同步滚动** - 多个表格区域支持同步水平滚动
- 📱 **触摸优化** - 针对移动端触摸操作进行了优化
- 🎨 **主题支持** - 支持主题定制
- 🔧 **高度可配置** - 支持自定义样式、类名、渲染函数等
- 📊 **数据驱动** - 完全基于数据驱动的表格渲染

## 安装

```bash
npm install @baifendian/adhere-ui-cascadecompared
```

## 基础用法

```tsx
import React from 'react';
import CascadeCompared from '@baifendian/adhere-ui-cascadecompared';

const App = () => {
  const indicator = {
    columns: [
      { dataIndex: 'name', width: 100, isFixed: true },
      { dataIndex: 'value', width: 120 },
      { dataIndex: 'percentage', width: 100 },
    ],
    dataSource: { name: '总计', value: 1000, percentage: '100%' }
  };

  const master = [
    {
      title: <span>分组1</span>,
      columns: [
        { dataIndex: 'name', width: 100, isFixed: true },
        { dataIndex: 'value', width: 120 },
        { dataIndex: 'percentage', width: 100 },
      ],
      dataSource: [
        { name: '项目1', value: 300, percentage: '30%' },
        { name: '项目2', value: 400, percentage: '40%' },
        { name: '项目3', value: 300, percentage: '30%' },
      ]
    },
    {
      title: <span>分组2</span>,
      columns: [
        { dataIndex: 'name', width: 100, isFixed: true },
        { dataIndex: 'value', width: 120 },
        { dataIndex: 'percentage', width: 100 },
      ],
      dataSource: [
        { name: '项目A', value: 200, percentage: '20%' },
        { name: '项目B', value: 800, percentage: '80%' },
      ]
    }
  ];

  return (
    <CascadeCompared
      indicator={indicator}
      master={master}
      onStickChange={(index) => console.log('当前分组:', index)}
    />
  );
};
```

## API

### CascadeComparedProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 根容器类名 |
| style | CSSProperties | - | 根容器样式 |
| indicator | IndicatorTableConfig | - | 指示器配置（必需） |
| master | IMasterItem[] | [] | 主内容配置数组（必需） |
| onStickChange | (index: number) => void | - | 粘性变化回调函数 |
| defaultCellWidth | number \| string | 120 | 默认单元格宽度 |

### 样式相关属性

#### 指示器样式
- `indicatorClassName` - 指示器容器类名
- `indicatorStyle` - 指示器容器样式
- `indicatorFixedWrapClassName` - 指示器固定区域包装器类名
- `indicatorFixedWrapStyle` - 指示器固定区域包装器样式
- `indicatorAutoWrapClassName` - 指示器自动滚动区域包装器类名
- `indicatorAutoWrapStyle` - 指示器自动滚动区域包装器样式

#### 主内容样式
- `masterClassName` - 主内容容器类名
- `masterStyle` - 主内容容器样式
- `masterInnerClassName` - 主内容内包装器类名
- `masterInnerStyle` - 主内容内包装器样式
- `masterStickFixedClassName` - 主内容固定区域类名
- `masterStickFixedStyle` - 主内容固定区域样式
- `masterStickInnerClassName` - 主内容固定区域内包装器类名
- `masterStickInnerStyle` - 主内容固定区域内包装器样式

### ColumnConfig

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| dataIndex | string | - | 数据字段名（必需） |
| width | string \| number | - | 列宽度 |
| isFixed | boolean | false | 是否固定列 |
| className | string | - | 列的自定义类名 |
| style | CSSProperties | - | 列的自定义样式 |
| render | function | - | 自定义渲染函数 |

### IMasterItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columns | ColumnConfig[] | [] | 列配置数组 |
| dataSource | Record<string, any>[] | [] | 数据源 |
| title | ReactElement | - | 分组标题 |
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |

### CascadeComparedHandle

组件实例方法：

| 方法 | 参数 | 说明 |
|------|------|------|
| scrollToByIndex | (index: number, duration?: number) => void | 根据索引滚动到指定位置 |
| scrollToByHeaderEl | (headerEl: HTMLElement, duration?: number) => void | 根据头部元素滚动到指定位置 |
| scrollToByColumn | (columnIndex: number) => void | 根据列索引滚动到指定列 |

## 高级用法

### 自定义渲染函数

```tsx
const columns = [
  {
    dataIndex: 'status',
    width: 100,
    render: (value, record, groupIndex, rowIndex, columnIndex) => (
      <span style={{ color: value === 'success' ? 'green' : 'red' }}>
        {value}
      </span>
    )
  }
];
```

### 使用组件实例方法

```tsx
import React, { useRef } from 'react';
import CascadeCompared, { CascadeComparedHandle } from '@baifendian/adhere-ui-cascadecompared';

const App = () => {
  const cascadeRef = useRef<CascadeComparedHandle>(null);

  const handleScrollToGroup = () => {
    // 滚动到第二个分组
    cascadeRef.current?.scrollToByIndex(1, 500);
  };

  const handleScrollToColumn = () => {
    // 滚动到第三列
    cascadeRef.current?.scrollToByColumn(2);
  };

  return (
    <div>
      <button onClick={handleScrollToGroup}>滚动到分组2</button>
      <button onClick={handleScrollToColumn}>滚动到第3列</button>
      
      <CascadeCompared
        ref={cascadeRef}
        indicator={indicator}
        master={master}
      />
    </div>
  );
};
```

### 自定义样式

```tsx
<CascadeCompared
  indicator={indicator}
  master={master}
  style={{ height: '500px' }}
  indicatorStyle={{ backgroundColor: '#f5f5f5' }}
  masterStyle={{ border: '1px solid #d9d9d9' }}
  defaultCellWidth={150}
/>
```

## 注意事项

1. **固定列**：建议至少设置一列为固定列（`isFixed: true`），以提供更好的用户体验
2. **数据一致性**：所有分组的列配置应该保持一致，特别是 `dataIndex` 和 `width`
3. **性能优化**：对于大量数据，建议使用虚拟滚动或分页加载
4. **移动端适配**：组件已针对移动端进行了优化，支持触摸滚动

## 更新日志

### v1.0.0
- 初始版本发布
- 支持固定列和同步滚动
- 支持自定义渲染和样式
- 支持主题定制
