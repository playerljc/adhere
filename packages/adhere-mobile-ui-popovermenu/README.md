# Adhere Mobile UI PopoverMenu

移动端弹出菜单组件，支持多级菜单、图标、禁用状态等功能。

## 特性

- 🎯 支持多级嵌套菜单
- 🎨 支持自定义图标和样式
- 🚫 支持菜单项禁用状态
- 📱 移动端友好的交互体验
- 🔄 统一的弹出层管理
- 📏 支持最大显示数量限制

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-popovermenu
```

## 基础用法

```tsx
import React from 'react';
import { Button } from 'antd-mobile';
import PopoverMenu from '@baifendian/adhere-mobile-ui-popovermenu';

const App = () => {
  const menuItems = [
    {
      key: 'item1',
      text: '菜单项1',
      icon: <Icon />,
      isLeaf: true,
      onClick: async () => {
        console.log('点击了菜单项1');
      },
    },
    {
      key: 'submenu1',
      text: '子菜单',
      icon: <SubIcon />,
      isLeaf: false,
      items: [
        {
          key: 'subitem1',
          text: '子菜单项1',
          isLeaf: true,
          onClick: async () => {
            console.log('点击了子菜单项1');
          },
        },
      ],
    },
  ];

  return (
    <PopoverMenu items={menuItems}>
      <Button>点击显示菜单</Button>
    </PopoverMenu>
  );
};
```

## API

### PopoverMenu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| menuClassName | 菜单容器的自定义类名 | `string` | - |
| menuStyle | 菜单容器的自定义样式 | `CSSProperties` | - |
| direction | 菜单展开方向 | `'vertical' \| 'horizontal'` | `'horizontal'` |
| maxCount | 最大显示菜单项数量，超出后显示滚动条 | `number` | - |
| items | 菜单项配置数组 | `PopoverMenuItemProps[]` | `[]` |
| popoverProps | Popover 组件的额外属性 | `Omit<PopoverProps, 'content' \| 'children'>` | - |
| children | 触发弹出菜单的子元素（必需） | `ReactElement` | - |

### PopoverMenuItemProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| key | 菜单项唯一标识 | `string` | - |
| isLeaf | 是否为叶子节点（没有子菜单） | `boolean` | - |
| text | 菜单项文本内容 | `ReactNode` | - |
| icon | 菜单项图标 | `ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击回调函数，返回 Promise | `() => Promise<any>` | - |
| popoverProps | Popover 组件的额外属性 | `Omit<PopoverProps, 'content' \| 'children'>` | - |
| items | 子菜单项配置 | `PopoverMenuItemProps[]` | - |

## 高级用法

### 禁用菜单项

```tsx
const menuItems = [
  {
    key: 'disabled-item',
    text: '禁用菜单项',
    isLeaf: true,
    disabled: true,
  },
];
```

### 限制最大显示数量

```tsx
<PopoverMenu 
  items={menuItems} 
  maxCount={5} // 最多显示5个菜单项，超出后显示滚动条
>
  <Button>显示菜单</Button>
</PopoverMenu>
```

### 自定义弹出位置

```tsx
<PopoverMenu 
  items={menuItems}
  popoverProps={{
    placement: 'top',
  }}
>
  <Button>显示菜单</Button>
</PopoverMenu>
```

### 垂直方向菜单

```tsx
<PopoverMenu 
  items={menuItems}
  direction="vertical"
>
  <Button>显示菜单</Button>
</PopoverMenu>
```

## 注意事项

1. `children` 是必需的，必须是有效的 ReactElement
2. 每个菜单项必须有唯一的 `key` 属性
3. `onClick` 回调函数应该返回 Promise，用于异步操作
4. 子菜单会自动注册到统一的弹出层管理系统中，点击任意菜单项会自动关闭所有弹出层
5. 当设置 `maxCount` 时，超出数量的菜单项会显示滚动条

## 样式定制

组件使用 CSS 类名进行样式定制，主要类名包括：

- `.adhere-mobile-ui-popover-menu` - 主容器
- `.adhere-mobile-ui-popovermenu` - 菜单容器
- `.adhere-mobile-ui-popovermenu-menu` - 菜单列表
- `.adhere-mobile-ui-popovermenu-menu-item` - 菜单项
- `.adhere-mobile-ui-popovermenu-sub-menu` - 子菜单项

## 更新日志

### 1.0.0

- 初始版本发布
- 支持基础菜单功能
- 支持多级嵌套菜单
- 支持图标和禁用状态
- 支持统一弹出层管理


