# TRBLC 布局组件

TRBLC 布局组件是一套基于 Flexbox 的复杂布局组件，支持 Top、Right、Bottom、Left、Center 五个区域的灵活组合。

## 组件列表

### 基础布局组件

- **CBLayout** - 中心-底部布局（垂直方向）
- **CRLayout** - 中心-右侧布局（水平方向）
- **TCLayout** - 顶部-中心布局（垂直方向）
- **TCBLayout** - 顶部-中心-底部布局（垂直方向）
- **LCLayout** - 左侧-中心布局（水平方向）
- **LCRLayout** - 左侧-中心-右侧布局（水平方向）

### 复杂嵌套布局组件

- **CBRLayout** - 中心-底部-右侧布局
- **CRBLayout** - 中心-右侧-底部布局
- **TCBRLayout** - 顶部-中心-底部-右侧布局
- **TCRLayout** - 顶部-中心-右侧布局
- **TRCLayout** - 顶部-右侧-中心布局
- **TLCLayout** - 顶部-左侧-中心布局
- **TLRCLayout** - 顶部-左侧-右侧-中心布局
- **TBLCRLayout** - 顶部-底部-左侧-中心-右侧布局
- **LBCLayout** - 左侧-底部-中心布局
- **LCBLayout** - 左侧-中心-底部布局
- **LCRBLayout** - 左侧-中心-右侧-底部布局
- **LTCLayout** - 左侧-顶部-中心布局
- **LTCBLayout** - 左侧-顶部-中心-底部布局
- **LRTCBLayout** - 左侧-右侧-顶部-中心-底部布局

## 通用属性

所有 TRBLC 布局组件都支持以下属性：

### 基础属性
- `wrapClassName` - 包装容器类名
- `wrapStyle` - 包装容器样式
- `className` - 布局容器类名
- `style` - 布局容器样式

### 区域属性
- `tProps` - 顶部区域属性（TBLRProps）
- `bProps` - 底部区域属性（TBLRProps）
- `lProps` - 左侧区域属性（TBLRProps）
- `rProps` - 右侧区域属性（TBLRProps）
- `cProps` - 中心区域属性（CenterProps）

### 分割线
- `tSplit` - 顶部分割线
- `bSplit` - 底部分割线
- `lSplit` - 左侧分割线
- `rSplit` - 右侧分割线

### 自动包装属性
- `autoWrapProps` - 自动包装容器属性（AutoProps）
- `autoInnerProps` - 自动内部容器属性（FlexLayoutProps）

## 使用示例

### 基础布局

```tsx
import { CBLayout, CRLayout, TCLayout } from '@baifendian/adhere-ui-flexlayout';

// 中心-底部布局
<CBLayout
  cProps={{ children: <div>中心区域</div> }}
  bProps={{ span: 6, children: <div>底部区域</div> }}
  bSplit={<div>分割线</div>}
/>

// 中心-右侧布局
<CRLayout
  cProps={{ children: <div>中心区域</div> }}
  rProps={{ span: 6, children: <div>右侧区域</div> }}
  rSplit={<div>分割线</div>}
/>

// 顶部-中心布局
<TCLayout
  tProps={{ span: 6, children: <div>顶部区域</div> }}
  cProps={{ children: <div>中心区域</div> }}
  tSplit={<div>分割线</div>}
/>
```

### 复杂嵌套布局

```tsx
import { TCBRLayout, TLRCLayout } from '@baifendian/adhere-ui-flexlayout';

// 顶部-中心-底部-右侧布局
<TCBRLayout
  tProps={{ span: 6, children: <div>顶部区域</div> }}
  cProps={{ children: <div>中心区域</div> }}
  bProps={{ span: 6, children: <div>底部区域</div> }}
  rProps={{ span: 6, children: <div>右侧区域</div> }}
  tSplit={<div>顶部分割线</div>}
  bSplit={<div>底部分割线</div>}
  rSplit={<div>右侧分割线</div>}
/>

// 顶部-左侧-右侧-中心布局
<TLRCLayout
  tProps={{ span: 6, children: <div>顶部区域</div> }}
  lProps={{ span: 6, children: <div>左侧区域</div> }}
  rProps={{ span: 6, children: <div>右侧区域</div> }}
  cProps={{ children: <div>中心区域</div> }}
  tSplit={<div>顶部分割线</div>}
  lSplit={<div>左侧分割线</div>}
  rSplit={<div>右侧分割线</div>}
/>
```

## 区域属性说明

### TBLRProps（顶部、底部、左侧、右侧区域）
- `span` - 栅格跨度（0-24）
- `collapseDirection` - 折叠方向（'L' | 'R' | 'T' | 'B'）
- `collapsedSize` - 折叠时的尺寸
- `defaultCollapsible` - 默认是否折叠
- `trigger` - 自定义触发器渲染函数
- `onCollapse` - 折叠状态变化回调
- `children` - 子元素

### CenterProps（中心区域）
- `autoFixed` - 是否自动固定
- `fit` - 是否适应容器
- `isUseNormal` - 是否使用普通模式
- `isUseMinFill` - 是否使用最小填充模式
- `children` - 子元素

## 工具函数

组件内部使用了以下工具函数来优化代码：

- `filterProps` - 过滤组件属性，移除 children 属性
- `getTRBLCClassList` - 计算 TRBLC 布局容器的类名
- `getAutoWrapClassList` - 计算自动包装容器的类名
- `getAutoInnerClassList` - 计算自动内部容器的类名

## 注意事项

1. 所有区域属性中的 `children` 会被自动过滤，避免传递给 Fixed 和 Auto 组件
2. 组件支持响应式布局，可以通过 `span` 属性控制区域大小
3. 支持区域折叠功能，可以通过 `collapseDirection` 和相关属性配置
4. 自动包装容器用于创建嵌套布局，支持复杂的布局组合
