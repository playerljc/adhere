# JdCategoryTab 京东分类标签组件

一个支持横向滚动的分类标签组件，常用于电商类应用的分类导航。该组件提供了左侧菜单导航和右侧内容区域的布局，支持平滑滚动和自定义样式。

## 特性

- 🎯 **类型安全**: 完整的 TypeScript 类型定义
- 🎨 **高度可定制**: 支持自定义样式和渲染函数
- 📱 **移动端友好**: 支持触摸滚动，防止滚动穿透
- ⚡ **性能优化**: 使用 React.memo 和 useCallback 优化渲染性能
- 🔧 **灵活配置**: 支持多种配置选项和回调函数

## 安装

```bash
npm install @baifendian/adhere-ui-jdcategorytab
```

## 基础用法

```tsx
import React, { useState } from 'react';
import JdCategoryTab from '@baifendian/adhere-ui-jdcategorytab';

const App = () => {
  const [activeKey, setActiveKey] = useState('category1');

  const menuData = [
    { key: 'category1', name: '手机数码' },
    { key: 'category2', name: '电脑办公' },
    { key: 'category3', name: '家用电器' },
    { key: 'category4', name: '服装配饰' },
  ];

  return (
    <JdCategoryTab
      activeKey={activeKey}
      menuData={menuData}
      onChange={setActiveKey}
    >
      <JdCategoryTab.Item key="category1">
        <div>手机数码相关内容</div>
      </JdCategoryTab.Item>
      <JdCategoryTab.Item key="category2">
        <div>电脑办公相关内容</div>
      </JdCategoryTab.Item>
      <JdCategoryTab.Item key="category3">
        <div>家用电器相关内容</div>
      </JdCategoryTab.Item>
      <JdCategoryTab.Item key="category4">
        <div>服装配饰相关内容</div>
      </JdCategoryTab.Item>
    </JdCategoryTab>
  );
};
```

## 高级用法

### 自定义菜单项渲染

```tsx
const CustomMenuItem = ({ item }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span>{item.name}</span>
    {item.properties?.badge && (
      <span style={{ 
        background: 'red', 
        color: 'white', 
        borderRadius: '10px', 
        padding: '2px 6px',
        fontSize: '12px',
        marginLeft: '8px'
      }}>
        {item.properties.badge}
      </span>
    )}
  </div>
);

<JdCategoryTab
  activeKey={activeKey}
  menuData={menuData}
  renderMenuItem={CustomMenuItem}
  onChange={setActiveKey}
>
  {/* 内容区域 */}
</JdCategoryTab>
```

### 使用 ref 控制滚动

```tsx
import React, { useRef } from 'react';

const App = () => {
  const tabRef = useRef<JdCategoryTabRefHandle>(null);

  const handleScrollToCategory = () => {
    // 滚动到指定分类，动画时长500ms
    tabRef.current?.scrollTo('category3', 500);
  };

  return (
    <div>
      <button onClick={handleScrollToCategory}>
        跳转到家用电器分类
      </button>
      
      <JdCategoryTab
        ref={tabRef}
        activeKey={activeKey}
        menuData={menuData}
        onChange={setActiveKey}
      >
        {/* 内容区域 */}
      </JdCategoryTab>
    </div>
  );
};
```

### 切换前确认

```tsx
<JdCategoryTab
  activeKey={activeKey}
  menuData={menuData}
  onBeforeChange={(activeKey, currentKey) => {
    // 返回 false 可以阻止切换
    if (hasUnsavedChanges) {
      return confirm('有未保存的更改，确定要切换吗？');
    }
    return true;
  }}
  onChange={setActiveKey}
>
  {/* 内容区域 */}
</JdCategoryTab>
```

## API

### JdCategoryTab Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活的菜单项key | `string` | - | - |
| menuData | 菜单数据数组 | `MenuDataItem[]` | `[]` | - |
| children | 子组件，通常是JdCategoryTab.Item组件 | `ReactNode` | - | - |
| className | 根容器的CSS类名 | `string` | - | - |
| style | 根容器的内联样式 | `CSSProperties` | - | - |
| menuClassName | 菜单容器的CSS类名 | `string` | - | - |
| menuStyle | 菜单容器的内联样式 | `CSSProperties` | - | - |
| menuInnerClassName | 菜单内部容器的CSS类名 | `string` | - | - |
| menuInnerStyle | 菜单内部容器的内联样式 | `CSSProperties` | - | - |
| tabClassName | 标签容器的CSS类名 | `string` | - | - |
| tabStyle | 标签容器的内联样式 | `CSSProperties` | - | - |
| menuItemClassName | 菜单项的CSS类名 | `string` | - | - |
| menuItemStyle | 菜单项的内联样式 | `CSSProperties` | - | - |
| renderMenuItem | 自定义菜单项渲染函数 | `(item: MenuDataItem) => ReactNode` | - | - |
| onChange | 菜单项切换回调函数 | `(currentKey: string) => void` | - | - |
| onBeforeChange | 菜单项切换前的回调函数，返回false可阻止切换 | `(activeKey: string, currentKey: string) => boolean` | - | - |

### JdCategoryTab.Item Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | 标签项的唯一标识，必须与menuData中的key对应 | `string` | - | - |
| className | 标签项的CSS类名 | `string` | - | - |
| style | 标签项的内联样式 | `CSSProperties` | - | - |
| children | 标签项内容 | `ReactNode` | - | - |

### JdCategoryTabRefHandle

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| scrollTo | 滚动到指定key对应的菜单项 | `(key: string, time?: number, easing?: any) => void` |

### MenuDataItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 菜单项的唯一标识 | `string` | - |
| name | 菜单项显示名称 | `string` | - |
| properties | 菜单项的额外属性 | `Record<string, any>` | - |

## CSS 变量

组件支持通过 CSS 变量进行样式定制：

```css
.adhere-ui-jd-category-tab {
  /* 菜单内部容器样式 */
  --menu-inner-margin: 0;
  --menu-inner-padding: 0;
  
  /* 菜单项样式 */
  --menu-item-margin: 0;
  --menu-item-padding: 0;
  --menu-item-not-last-child-a-border-bottom: 1px solid #e8e8e8;
  --menu-item-active-a-color: #f15353;
  --menu-item-active-a-border-right: 1px solid #fff;
  --menu-item-a-padding: 5px 10px;
  --menu-item-a-font-size: 14px;
  --menu-item-a-background: #f3f4f6;
  --menu-item-a-border-right: 1px solid #e8e8e8;
  
  /* 标签容器样式 */
  --tab-margin: 0 0 0 20px;
  --tab-padding: 0;
  
  /* 标签项样式 */
  --tab-item-margin: 0;
  --tab-item-padding: 0;
}
```

## 注意事项

1. **key 值对应**: `menuData` 中的 `key` 必须与 `JdCategoryTab.Item` 的 `key` 属性一一对应
2. **性能优化**: 当菜单数据较多时，建议使用 `renderMenuItem` 进行虚拟化渲染
3. **移动端适配**: 组件已内置移动端触摸事件处理，无需额外配置
4. **样式覆盖**: 可以通过 CSS 变量或直接覆盖类名来自定义样式

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基础的分类标签功能
- 完整的 TypeScript 类型定义
- 移动端触摸支持

