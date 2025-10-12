# @baifendian/adhere-ui-flexlayout

一个功能强大的 Flex 布局组件库，提供了丰富的布局解决方案，包括基础 Flex 布局、栅格系统、工具栏布局、TRBLC 布局等。

## 简介

`@baifendian/adhere-ui-flexlayout` 是一个专为现代 Web 应用设计的 Flex 布局组件库。它基于 CSS Flexbox 构建，提供了完整的布局解决方案，包括基础 Flex 布局、栅格系统、工具栏布局、多种预定义布局模式等，让您的应用布局更加灵活和高效。

## ✨ 特性

- 🚀 **完整的 Flex 布局系统** - 基于 CSS Flexbox 的完整布局解决方案
- 📐 **栅格系统** - 24 列栅格系统，支持响应式布局
- 🔧 **多种布局模式** - 支持水平、垂直、工具栏、TRBLC 等多种布局模式
- 📱 **响应式设计** - 内置响应式支持和媒体查询
- 🎨 **主题定制** - 支持动态主题切换和自定义样式
- 🌍 **国际化支持** - 内置多语言支持
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入
- 🎯 **折叠功能** - 支持侧边栏折叠和展开
- 🔄 **自动适应** - 智能的自动适应布局
- 🛠️ **丰富的工具组件** - 提供多种实用的布局工具组件

## 🖥 兼容环境

- React 18.x
- 现代浏览器，IE11
- Ant Design 5.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-ui-flexlayout --save

# 使用 yarn
yarn add @baifendian/adhere-ui-flexlayout

# 使用 pnpm
pnpm add @baifendian/adhere-ui-flexlayout
```

## 快速开始

### 基础用法

```tsx
import React from 'react';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

function App() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={6}>
        <div>左侧固定区域</div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div>右侧自动适应区域</div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### 按需引入

```tsx
import { 
  FlexLayout, 
  Fixed, 
  Auto, 
  HorizontalFlexLayout,
  VerticalFlexLayout 
} from '@baifendian/adhere-ui-flexlayout';

// 或者按需引入特定组件
import FlexLayout from '@baifendian/adhere-ui-flexlayout/es/FlexLayout';
import Fixed from '@baifendian/adhere-ui-flexlayout/es/Fixed';
```

## 🧩 核心功能

### 基础 Flex 布局

#### 水平布局

```tsx
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

function HorizontalLayout() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          左侧固定区域 (6/24)
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          中间自动适应区域
        </div>
      </FlexLayout.Auto>
      
      <FlexLayout.Fixed span={4}>
        <div style={{ background: '#f6ffed', padding: 16 }}>
          右侧固定区域 (4/24)
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

#### 垂直布局

```tsx
function VerticalLayout() {
  return (
    <FlexLayout direction="vertical" gutter={[16, 8]}>
      <FlexLayout.Fixed>
        <div style={{ background: '#f0f0f0', padding: 16, height: 60 }}>
          顶部固定区域
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          中间自动适应区域
        </div>
      </FlexLayout.Auto>
      
      <FlexLayout.Fixed>
        <div style={{ background: '#f6ffed', padding: 16, height: 40 }}>
          底部固定区域
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

### 栅格系统

#### 基础栅格

```tsx
function GridLayout() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          6/24 宽度
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={12}>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          12/24 宽度
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f6ffed', padding: 16 }}>
          6/24 宽度
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

#### 响应式栅格

```tsx
function ResponsiveGrid() {
  return (
    <FlexLayout direction="horizontal" gutter={[16, 8]}>
      <FlexLayout.Fixed span={24}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          全宽 (24/24)
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={12}>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          半宽 (12/24)
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={12}>
        <div style={{ background: '#f6ffed', padding: 16 }}>
          半宽 (12/24)
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

### Fixed 组件

#### 基础用法

```tsx
function FixedExample() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={6} fit>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          固定宽度区域
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          自动适应区域
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

#### 折叠功能

```tsx
function CollapsibleSidebar() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed 
        span={6}
        collapseDirection="L"
        collapsedSize={80}
        defaultCollapsible={false}
        trigger={(collapsed, defaultTrigger) => (
          <div style={{ 
            background: collapsed ? '#ff4d4f' : '#52c41a',
            color: 'white',
            padding: '8px 12px',
            cursor: 'pointer'
          }}>
            {collapsed ? '展开' : '折叠'}
          </div>
        )}
        onCollapse={(collapsed) => {
          console.log('折叠状态:', collapsed);
        }}
      >
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          可折叠侧边栏
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          主内容区域
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### Auto 组件

#### 基础用法

```tsx
function AutoExample() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          固定区域
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto autoFixed fit>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          自动适应区域
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

#### 不同模式

```tsx
function AutoModes() {
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      {/* 普通模式 */}
      <FlexLayout.Auto isUseNormal>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          普通模式
        </div>
      </FlexLayout.Auto>
      
      {/* 最小填充模式 */}
      <FlexLayout.Auto isUseMinFill>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          最小填充模式
        </div>
      </FlexLayout.Auto>
      
      {/* 自动固定模式 */}
      <FlexLayout.Auto autoFixed>
        <div style={{ background: '#f6ffed', padding: 16 }}>
          自动固定模式
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### 水平 Flex 布局

```tsx
import { HorizontalFlexLayout } from '@baifendian/adhere-ui-flexlayout';

function HorizontalLayoutExample() {
  return (
    <HorizontalFlexLayout
      renderLeft={() => (
        <div style={{ background: '#f0f0f0', padding: 16, width: 200 }}>
          左侧区域
        </div>
      )}
      renderMain={() => (
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          主内容区域
        </div>
      )}
      renderRight={() => (
        <div style={{ background: '#f6ffed', padding: 16, width: 150 }}>
          右侧区域
        </div>
      )}
    />
  );
}
```

### 垂直 Flex 布局

```tsx
import { VerticalFlexLayout } from '@baifendian/adhere-ui-flexlayout';

function VerticalLayoutExample() {
  return (
    <VerticalFlexLayout
      renderTop={() => (
        <div style={{ background: '#f0f0f0', padding: 16, height: 60 }}>
          顶部区域
        </div>
      )}
      renderMain={() => (
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          主内容区域
        </div>
      )}
      renderBottom={() => (
        <div style={{ background: '#f6ffed', padding: 16, height: 40 }}>
          底部区域
        </div>
      )}
    />
  );
}
```

### 工具栏布局

```tsx
import { ToolBarLayout } from '@baifendian/adhere-ui-flexlayout';
import { Button, Space } from 'antd';

function ToolbarExample() {
  const topToolBarItems = [
    <Button key="save" type="primary">保存</Button>,
    <Button key="cancel">取消</Button>,
    <Button key="delete" danger>删除</Button>
  ];
  
  const bottomToolBarItems = [
    <Button key="preview">预览</Button>,
    <Button key="export">导出</Button>
  ];
  
  return (
    <ToolBarLayout
      topToolBarItems={topToolBarItems}
      bottomToolBarItems={bottomToolBarItems}
      topProps={{ span: 1 }}
      bottomProps={{ span: 1 }}
    >
      <div style={{ background: '#e6f7ff', padding: 16, height: '100%' }}>
        主内容区域
      </div>
    </ToolBarLayout>
  );
}
```

### 返回布局

```tsx
import { BackLayout } from '@baifendian/adhere-ui-flexlayout';

function BackLayoutExample() {
  return (
    <BackLayout
      backPath="/home"
      backTitle="返回首页"
      isShowBack={true}
      topProps={{ span: 1 }}
    >
      <div style={{ background: '#e6f7ff', padding: 16 }}>
        带返回按钮的布局
      </div>
    </BackLayout>
  );
}
```

### 滚动布局

```tsx
import { ScrollLayout, useScrollLayout } from '@baifendian/adhere-ui-flexlayout';

function ScrollLayoutExample() {
  return (
    <ScrollLayout scrollY style={{ height: 400 }}>
      <div style={{ padding: 16 }}>
        <h3>滚动内容区域</h3>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>
            内容项 {i + 1}
          </div>
        ))}
      </div>
    </ScrollLayout>
  );
}

// 使用 Hook 获取滚动元素
function ScrollHookExample() {
  const { getEl } = useScrollLayout();
  
  const scrollToTop = () => {
    const el = getEl();
    if (el) {
      el.scrollTop = 0;
    }
  };
  
  return (
    <ScrollLayout scrollY style={{ height: 400 }}>
      <div style={{ padding: 16 }}>
        <Button onClick={scrollToTop}>回到顶部</Button>
        {/* 滚动内容 */}
      </div>
    </ScrollLayout>
  );
}
```

### TRBLC 布局系统

TRBLC 布局系统提供了多种预定义的布局模式，其中 T(Top)、B(Bottom)、L(Left)、R(Right)、C(Center) 分别代表顶部、底部、左侧、右侧和中心区域。

#### LCLayout (左侧-中心布局)

```tsx
import { TRBLC } from '@baifendian/adhere-ui-flexlayout';

function LCLayoutExample() {
  return (
    <TRBLC.LCLayout
      lProps={{
        span: 6,
        children: <div style={{ background: '#f0f0f0', padding: 16 }}>左侧区域</div>
      }}
      cProps={{
        children: <div style={{ background: '#e6f7ff', padding: 16 }}>中心区域</div>
      }}
      lSplit={<div style={{ width: 1, background: '#d9d9d9' }} />}
    />
  );
}
```

#### TCLayout (顶部-中心布局)

```tsx
function TCLayoutExample() {
  return (
    <TRBLC.TCLayout
      tProps={{
        span: 1,
        children: <div style={{ background: '#f0f0f0', padding: 16 }}>顶部区域</div>
      }}
      cProps={{
        children: <div style={{ background: '#e6f7ff', padding: 16 }}>中心区域</div>
      }}
      tSplit={<div style={{ height: 1, background: '#d9d9d9' }} />}
    />
  );
}
```

#### TLCLayout (顶部-左侧-中心布局)

```tsx
function TLCLayoutExample() {
  return (
    <TRBLC.TLCLayout
      tProps={{
        span: 1,
        children: <div style={{ background: '#f0f0f0', padding: 16 }}>顶部区域</div>
      }}
      lProps={{
        span: 6,
        children: <div style={{ background: '#f6ffed', padding: 16 }}>左侧区域</div>
      }}
      cProps={{
        children: <div style={{ background: '#e6f7ff', padding: 16 }}>中心区域</div>
      }}
    />
  );
}
```

#### TBLCRLayout (全布局)

```tsx
function TBLCRLayoutExample() {
  return (
    <TRBLC.TBLCRLayout
      tProps={{
        span: 1,
        children: <div style={{ background: '#f0f0f0', padding: 16 }}>顶部</div>
      }}
      bProps={{
        span: 1,
        children: <div style={{ background: '#f0f0f0', padding: 16 }}>底部</div>
      }}
      lProps={{
        span: 6,
        children: <div style={{ background: '#f6ffed', padding: 16 }}>左侧</div>
      }}
      rProps={{
        span: 4,
        children: <div style={{ background: '#fff7e6', padding: 16 }}>右侧</div>
      }}
      cProps={{
        children: <div style={{ background: '#e6f7ff', padding: 16 }}>中心</div>
      }}
    />
  );
}
```

### 空间分布组件

#### SpaceBetween (两端对齐)

```tsx
import { SpaceBetween } from '@baifendian/adhere-ui-flexlayout';

function SpaceBetweenExample() {
  return (
    <SpaceBetween direction="horizontal">
      <div>左侧内容</div>
      <div>右侧内容</div>
    </SpaceBetween>
  );
}
```

#### SpaceAround (环绕分布)

```tsx
import { SpaceAround } from '@baifendian/adhere-ui-flexlayout';

function SpaceAroundExample() {
  return (
    <SpaceAround direction="horizontal">
      <div>项目 1</div>
      <div>项目 2</div>
      <div>项目 3</div>
    </SpaceAround>
  );
}
```

## 🔧 高级功能

### 自定义栅格间隙

```tsx
function CustomGutter() {
  return (
    <FlexLayout 
      direction="horizontal" 
      gutter={[24, 16]} // [水平间隙, 垂直间隙]
    >
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          项目 1
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          项目 2
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Fixed span={6}>
        <div style={{ background: '#f6ffed', padding: 16 }}>
          项目 3
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

### 响应式布局

```tsx
import { useMediaQuery } from 'react-responsive';

function ResponsiveLayout() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <FlexLayout direction={isMobile ? 'vertical' : 'horizontal'} gutter={16}>
      <FlexLayout.Fixed span={isMobile ? 24 : 6}>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          {isMobile ? '移动端全宽' : '桌面端固定宽度'}
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div style={{ background: '#e6f7ff', padding: 16 }}>
          自适应区域
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### 嵌套布局

```tsx
function NestedLayout() {
  return (
    <FlexLayout direction="vertical" gutter={16}>
      {/* 顶部区域 */}
      <FlexLayout.Fixed>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          顶部导航
        </div>
      </FlexLayout.Fixed>
      
      {/* 中间区域 */}
      <FlexLayout.Auto>
        <FlexLayout direction="horizontal" gutter={16}>
          {/* 左侧边栏 */}
          <FlexLayout.Fixed span={6}>
            <div style={{ background: '#f6ffed', padding: 16 }}>
              左侧边栏
            </div>
          </FlexLayout.Fixed>
          
          {/* 主内容区 */}
          <FlexLayout.Auto>
            <div style={{ background: '#e6f7ff', padding: 16 }}>
              主内容区域
            </div>
          </FlexLayout.Auto>
          
          {/* 右侧边栏 */}
          <FlexLayout.Fixed span={4}>
            <div style={{ background: '#fff7e6', padding: 16 }}>
              右侧边栏
            </div>
          </FlexLayout.Fixed>
        </FlexLayout>
      </FlexLayout.Auto>
      
      {/* 底部区域 */}
      <FlexLayout.Fixed>
        <div style={{ background: '#f0f0f0', padding: 16 }}>
          底部信息
        </div>
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

### 动态布局切换

```tsx
import { useState } from 'react';

function DynamicLayout() {
  const [layout, setLayout] = useState('horizontal');
  
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <button 
          onClick={() => setLayout('horizontal')}
          style={{ marginRight: 8 }}
        >
          水平布局
        </button>
        <button onClick={() => setLayout('vertical')}>
          垂直布局
        </button>
      </div>
      
      <FlexLayout direction={layout} gutter={16}>
        <FlexLayout.Fixed span={layout === 'horizontal' ? 6 : 24}>
          <div style={{ background: '#f0f0f0', padding: 16 }}>
            区域 1
          </div>
        </FlexLayout.Fixed>
        
        <FlexLayout.Auto>
          <div style={{ background: '#e6f7ff', padding: 16 }}>
            区域 2
          </div>
        </FlexLayout.Auto>
      </FlexLayout>
    </div>
  );
}
```

### 自定义样式

```tsx
function CustomStyledLayout() {
  return (
    <FlexLayout 
      direction="horizontal" 
      gutter={16}
      className="custom-flex-layout"
      style={{
        border: '1px solid #d9d9d9',
        borderRadius: 8,
        overflow: 'hidden'
      }}
    >
      <FlexLayout.Fixed 
        span={6}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <div style={{ padding: 16 }}>
          渐变背景区域
        </div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white'
        }}
      >
        <div style={{ padding: 16 }}>
          渐变背景主区域
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

## 📚 API 参考

### FlexLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | 布局方向 |
| `gutter` | `number \| number[]` | `[0, 0]` | 栅格间隙 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `children` | `ReactNode` | - | 子元素 |

### Fixed 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `span` | `number` | - | 栅格跨度 (0-24) |
| `fit` | `boolean` | `false` | 是否适应容器 |
| `collapseDirection` | `'L' \| 'R' \| 'T' \| 'B'` | `'L'` | 折叠方向 |
| `collapsedSize` | `number \| string` | `80` | 折叠时的尺寸 |
| `defaultCollapsible` | `boolean` | `false` | 默认是否折叠 |
| `trigger` | `(collapsed: boolean, defaultTrigger: ReactNode) => ReactNode` | - | 自定义触发器 |
| `onCollapse` | `(collapsed: boolean) => void` | - | 折叠状态变化回调 |

### Auto 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `autoFixed` | `boolean` | `true` | 是否自动固定 |
| `fit` | `boolean` | `true` | 是否适应容器 |
| `isUseNormal` | `boolean` | `false` | 是否使用普通模式 |
| `isUseMinFill` | `boolean` | `false` | 是否使用最小填充模式 |

### HorizontalFlexLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `renderLeft` | `RenderFunction` | - | 渲染左侧区域 |
| `renderMain` | `RenderFunction` | - | 渲染主区域 |
| `renderRight` | `RenderFunction` | - | 渲染右侧区域 |
| `renderTop` | `RenderFunction` | - | 渲染顶部区域 |
| `renderBottom` | `RenderFunction` | - | 渲染底部区域 |

### VerticalFlexLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `renderTop` | `RenderFunction` | - | 渲染顶部区域 |
| `renderMain` | `RenderFunction` | - | 渲染主区域 |
| `renderBottom` | `RenderFunction` | - | 渲染底部区域 |
| `renderLeft` | `RenderFunction` | - | 渲染左侧区域 |
| `renderRight` | `RenderFunction` | - | 渲染右侧区域 |

### ToolBarLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `topToolBarItems` | `ReactElement[]` | `[]` | 顶部工具栏项目 |
| `bottomToolBarItems` | `ReactElement[]` | `[]` | 底部工具栏项目 |
| `topProps` | `Partial<FixedProps>` | `{}` | 顶部区域属性 |
| `bottomProps` | `Partial<FixedProps>` | `{}` | 底部区域属性 |

### BackLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `backPath` | `string` | - | 返回路径 |
| `enforceBackPath` | `string` | - | 强制返回路径 |
| `isShowBack` | `boolean` | `true` | 是否显示返回按钮 |
| `history` | `any` | - | 历史对象 |
| `backTitle` | `ReactNode` | - | 返回按钮标题 |

### ScrollLayout 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `scrollY` | `boolean` | `false` | 是否启用垂直滚动 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |

### TRBLC 布局组件

所有 TRBLC 布局组件都支持以下通用属性：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `wrapClassName` | `string` | - | 包装类名 |
| `wrapStyle` | `CSSProperties` | - | 包装样式 |
| `tProps` | `TBLRProps` | - | 顶部属性 |
| `bProps` | `TBLRProps` | - | 底部属性 |
| `lProps` | `TBLRProps` | - | 左侧属性 |
| `rProps` | `TBLRProps` | - | 右侧属性 |
| `cProps` | `CenterProps` | - | 中心属性 |

## 🔍 最佳实践

### 1. 布局规划

```tsx
// 推荐的布局结构
function RecommendedLayout() {
  return (
    <FlexLayout direction="vertical" gutter={0}>
      {/* 顶部导航 */}
      <FlexLayout.Fixed>
        <Header />
      </FlexLayout.Fixed>
      
      {/* 主内容区域 */}
      <FlexLayout.Auto>
        <FlexLayout direction="horizontal" gutter={16}>
          {/* 侧边栏 */}
          <FlexLayout.Fixed span={6}>
            <Sidebar />
          </FlexLayout.Fixed>
          
          {/* 内容区域 */}
          <FlexLayout.Auto>
            <Content />
          </FlexLayout.Auto>
        </FlexLayout>
      </FlexLayout.Auto>
      
      {/* 底部信息 */}
      <FlexLayout.Fixed>
        <Footer />
      </FlexLayout.Fixed>
    </FlexLayout>
  );
}
```

### 2. 响应式设计

```tsx
import { useBreakpoint } from 'antd';

function ResponsiveBestPractice() {
  const breakpoints = useBreakpoint();
  
  const getSpan = () => {
    if (breakpoints.xs) return 24; // 移动端全宽
    if (breakpoints.sm) return 12; // 平板半宽
    if (breakpoints.md) return 8;  // 桌面端 1/3
    return 6; // 大屏 1/4
  };
  
  return (
    <FlexLayout direction="horizontal" gutter={16}>
      <FlexLayout.Fixed span={getSpan()}>
        <div>响应式侧边栏</div>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <div>主内容区域</div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### 3. 性能优化

```tsx
import { memo, useMemo } from 'react';

// 使用 memo 优化组件
const OptimizedLayout = memo(() => {
  const layoutProps = useMemo(() => ({
    direction: 'horizontal' as const,
    gutter: 16
  }), []);
  
  return (
    <FlexLayout {...layoutProps}>
      <FlexLayout.Fixed span={6}>
        <Sidebar />
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <Content />
      </FlexLayout.Auto>
    </FlexLayout>
  );
});

// 使用 useMemo 优化复杂布局
function OptimizedComplexLayout() {
  const layoutConfig = useMemo(() => ({
    direction: 'vertical' as const,
    gutter: [16, 8]
  }), []);
  
  return (
    <FlexLayout {...layoutConfig}>
      <FlexLayout.Fixed>
        <Header />
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <MainContent />
      </FlexLayout.Auto>
    </FlexLayout>
  );
}
```

### 4. 主题定制

```tsx
import { ConfigProvider } from 'antd';

function ThemedLayout() {
  const customTheme = {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 8,
    },
  };
  
  return (
    <ConfigProvider theme={customTheme}>
      <FlexLayout 
        direction="horizontal" 
        gutter={16}
        style={{
          border: '1px solid var(--ant-color-border)',
          borderRadius: 'var(--ant-border-radius)',
        }}
      >
        <FlexLayout.Fixed span={6}>
          <div style={{ 
            background: 'var(--ant-color-primary-bg)',
            color: 'var(--ant-color-primary)'
          }}>
            主题化侧边栏
          </div>
        </FlexLayout.Fixed>
        
        <FlexLayout.Auto>
          <div>主内容区域</div>
        </FlexLayout.Auto>
      </FlexLayout>
    </ConfigProvider>
  );
}
```

### 5. 可访问性

```tsx
function AccessibleLayout() {
  return (
    <FlexLayout 
      direction="horizontal" 
      gutter={16}
      role="main"
      aria-label="主要内容布局"
    >
      <FlexLayout.Fixed span={6}>
        <nav role="navigation" aria-label="侧边导航">
          <Sidebar />
        </nav>
      </FlexLayout.Fixed>
      
      <FlexLayout.Auto>
        <main role="main" aria-label="主内容区域">
          <Content />
        </main>
      </FlexLayout.Auto>
    </FlexLayout>
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
        "libraryName": "@baifendian/adhere-ui-flexlayout",
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

const LazyFlexLayout = lazy(() => 
  import('@baifendian/adhere-ui-flexlayout').then(module => ({
    default: module.default
  }))
);

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <LazyFlexLayout direction="horizontal">
        <LazyFlexLayout.Fixed span={6}>
          <Sidebar />
        </LazyFlexLayout.Fixed>
        
        <LazyFlexLayout.Auto>
          <Content />
        </LazyFlexLayout.Auto>
      </LazyFlexLayout>
    </Suspense>
  );
}
```

### 样式优化

```tsx
// 使用 CSS-in-JS 优化样式
import styled from 'styled-components';

const StyledFlexLayout = styled(FlexLayout)`
  .adhere-ui-flex-layout-fixed {
    transition: all 0.3s ease;
  }
  
  .adhere-ui-flex-layout-auto {
    min-height: 0; // 防止 flex 子项溢出
  }
`;

function OptimizedStyledLayout() {
  return (
    <StyledFlexLayout direction="horizontal" gutter={16}>
      <StyledFlexLayout.Fixed span={6}>
        <div>优化样式的侧边栏</div>
      </StyledFlexLayout.Fixed>
      
      <StyledFlexLayout.Auto>
        <div>主内容区域</div>
      </StyledFlexLayout.Auto>
    </StyledFlexLayout>
  );
}
```

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 📄 许可证

本项目基于 [ISC 许可证](LICENSE) 开源。

## 🔗 相关链接

- [Adhere 组件库](https://github.com/playerljc/adhere)
- [CSS Flexbox 指南](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Ant Design](https://ant.design/)
- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/flexlayout)

---

**注意：** 这是一个功能强大的 Flex 布局组件库，提供了完整的布局解决方案。通过灵活的组件组合和丰富的配置选项，让您的应用布局更加高效和美观。

