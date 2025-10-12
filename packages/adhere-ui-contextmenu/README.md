# @baifendian/adhere-ui-contextmenu

一个功能强大的上下文菜单组件，支持传统右键菜单和创新的圆形扇形菜单两种展示方式。

## 简介

`@baifendian/adhere-ui-contextmenu` 是一个专为现代 Web 应用设计的上下文菜单组件库。它提供了两种不同的菜单展示方式：传统的下拉菜单和创新的圆形扇形菜单，满足不同场景下的交互需求。

## ✨ 特性

- 🎯 **双重展示方式** - 支持传统下拉菜单和圆形扇形菜单
- 📱 **响应式设计** - 自动调整菜单位置，避免超出屏幕边界
- 🎨 **高度可定制** - 支持自定义样式、图标、分隔线等
- 🌳 **多级菜单** - 支持无限层级的子菜单
- 🎪 **动画效果** - 流畅的显示和隐藏动画
- 🔧 **灵活配置** - 丰富的配置选项和事件处理
- 🎭 **主题支持** - 支持主题定制和响应式设计
- 📦 **按需加载** - 支持 babel-plugin-import 按需引入

## 🖥 兼容环境

- 现代浏览器
- Internet Explorer 11+
- React 18.x

## 📦 安装

```bash
# 使用 npm
npm install @baifendian/adhere-ui-contextmenu --save

# 使用 yarn
yarn add @baifendian/adhere-ui-contextmenu

# 使用 pnpm
pnpm add @baifendian/adhere-ui-contextmenu
```

## 快速开始

### 基础用法

```tsx
import React from 'react';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

function App() {
  const handleRightClick = (e) => {
    e.preventDefault();
    
    const menuData = [
      {
        id: 'copy',
        name: '复制',
        icon: 'fa fa-copy'
      },
      {
        id: 'paste',
        name: '粘贴',
        icon: 'fa fa-paste'
      },
      {
        id: 'delete',
        name: '删除',
        icon: 'fa fa-trash',
        disabled: true
      }
    ];

    ContextMenu.open(menuData, {
      x: e.clientX,
      y: e.clientY,
      width: 150,
      maskClosable: true,
      handler: (id, attribute) => {
        console.log('点击了菜单项:', id);
      }
    });
  };

  return (
    <div onContextMenu={handleRightClick}>
      右键点击我显示菜单
    </div>
  );
}
```

### 圆形扇形菜单

```tsx
import React from 'react';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

function App() {
  const handleRightClick = (e) => {
    e.preventDefault();
    
    const config = {
      totalAngle: 180,
      spaceDeg: 2,
      background: '#323232',
      backgroundHover: '#515151',
      diameter: 300,
      position: 'top',
      hideAfterClick: true,
      menus: [
        {
          title: '复制',
          icon: 'fa fa-copy',
          click: () => console.log('复制')
        },
        {
          title: '粘贴',
          icon: 'fa fa-paste',
          click: () => console.log('粘贴')
        },
        {
          title: '删除',
          icon: 'fa fa-trash',
          click: () => console.log('删除'),
          disabled: true
        }
      ]
    };

    ContextMenu.openCircular(config, {
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div onContextMenu={handleRightClick}>
      右键点击我显示圆形菜单
    </div>
  );
}
```

## 🧩 核心组件

### 传统上下文菜单

#### 基础菜单

```tsx
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

const menuData = [
  {
    id: 'file',
    name: '文件',
    icon: 'fa fa-file'
  },
  {
    id: 'edit',
    name: '编辑',
    icon: 'fa fa-edit'
  },
  {
    id: 'separator',
    separation: true  // 分隔线
  },
  {
    id: 'help',
    name: '帮助',
    icon: 'fa fa-question-circle'
  }
];

// 打开菜单
const menuElement = ContextMenu.open(menuData, {
  x: 100,
  y: 100,
  width: 200,
  maskClosable: true,
  handler: (id, attribute) => {
    console.log('菜单项被点击:', id);
  }
});

// 关闭菜单
ContextMenu.close(menuElement);
```

#### 多级子菜单

```tsx
const menuData = [
  {
    id: 'file',
    name: '文件',
    icon: 'fa fa-file',
    children: [
      {
        id: 'new',
        name: '新建',
        icon: 'fa fa-plus'
      },
      {
        id: 'open',
        name: '打开',
        icon: 'fa fa-folder-open',
        children: [
          {
            id: 'open-file',
            name: '打开文件',
            icon: 'fa fa-file-o'
          },
          {
            id: 'open-folder',
            name: '打开文件夹',
            icon: 'fa fa-folder'
          }
        ]
      },
      {
        id: 'save',
        name: '保存',
        icon: 'fa fa-save'
      }
    ]
  }
];
```

#### 自定义样式菜单

```tsx
const menuData = [
  {
    id: 'custom1',
    name: '自定义项1',
    icon: 'fa fa-star',
    className: 'custom-menu-item',
    style: { color: '#ff6b6b' },
    subMenuClassName: 'custom-submenu',
    subMenuStyle: { backgroundColor: '#f8f9fa' }
  }
];

ContextMenu.open(menuData, {
  x: 100,
  y: 100,
  width: 200,
  className: 'custom-context-menu',
  style: { 
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }
});
```

### 圆形扇形菜单

#### 基础圆形菜单

```tsx
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

const config = {
  totalAngle: 360,        // 总角度
  spaceDeg: 0,           // 菜单项间距角度
  background: '#323232', // 背景色
  backgroundHover: '#515151', // 悬停背景色
  diameter: 300,         // 直径
  position: 'top',       // 位置
  hideAfterClick: true,  // 点击后隐藏
  menus: [
    {
      title: '首页',
      icon: 'fa fa-home',
      click: () => console.log('首页')
    },
    {
      title: '用户',
      icon: 'fa fa-user',
      click: () => console.log('用户')
    },
    {
      title: '设置',
      icon: 'fa fa-cog',
      click: () => console.log('设置')
    }
  ]
};

ContextMenu.openCircular(config, { x: 400, y: 300 });
```

#### 半圆形菜单

```tsx
const config = {
  totalAngle: 180,       // 半圆
  spaceDeg: 2,          // 菜单项间距
  background: '#2196F3',
  backgroundHover: '#1976D2',
  diameter: 250,
  position: 'bottom',   // 底部位置
  menus: [
    { title: '复制', icon: 'fa fa-copy', click: () => {} },
    { title: '粘贴', icon: 'fa fa-paste', click: () => {} },
    { title: '剪切', icon: 'fa fa-cut', click: () => {} },
    { title: '删除', icon: 'fa fa-trash', click: () => {} }
  ]
};
```

#### 自定义圆形菜单

```tsx
const config = {
  totalAngle: 270,      // 3/4 圆
  spaceDeg: 3,
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  backgroundHover: 'linear-gradient(45deg, #FF5252, #26A69A)',
  pageBackground: 'rgba(0,0,0,0.5)',
  diameter: 400,
  position: 'right',
  start: 45,           // 起始角度
  horizontal: false,   // 垂直排列
  menus: [
    {
      title: '文档',
      icon: 'fa fa-file-text',
      href: { url: '/docs', blank: true }
    },
    {
      title: 'API',
      icon: 'fa fa-code',
      click: () => window.open('/api')
    },
    {
      title: '帮助',
      icon: 'fa fa-question-circle',
      disabled: true
    }
  ]
};
```

## 🔧 高级功能

### 动态菜单生成

```tsx
function generateDynamicMenu(context) {
  const baseMenu = [
    { id: 'view', name: '查看', icon: 'fa fa-eye' }
  ];

  if (context.type === 'file') {
    baseMenu.push(
      { id: 'edit', name: '编辑', icon: 'fa fa-edit' },
      { id: 'delete', name: '删除', icon: 'fa fa-trash' }
    );
  }

  if (context.permissions?.includes('admin')) {
    baseMenu.push({
      id: 'admin',
      name: '管理',
      icon: 'fa fa-cog',
      children: [
        { id: 'users', name: '用户管理', icon: 'fa fa-users' },
        { id: 'settings', name: '系统设置', icon: 'fa fa-wrench' }
      ]
    });
  }

  return baseMenu;
}

// 使用动态菜单
const menuData = generateDynamicMenu({ 
  type: 'file', 
  permissions: ['admin'] 
});
```

### 菜单状态管理

```tsx
import { useState, useCallback } from 'react';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

function MenuManager() {
  const [activeMenus, setActiveMenus] = useState(new Set());

  const openMenu = useCallback((menuData, config) => {
    const menuElement = ContextMenu.open(menuData, {
      ...config,
      handler: (id, attribute) => {
        console.log('菜单点击:', id);
        // 处理菜单点击逻辑
      }
    });

    setActiveMenus(prev => new Set([...prev, menuElement]));
    return menuElement;
  }, []);

  const closeAllMenus = useCallback(() => {
    activeMenus.forEach(menuElement => {
      ContextMenu.close(menuElement);
    });
    setActiveMenus(new Set());
  }, [activeMenus]);

  return {
    openMenu,
    closeAllMenus,
    hasActiveMenus: activeMenus.size > 0
  };
}
```

### 菜单动画控制

```tsx
// 圆形菜单样式控制
const config = {
  // ... 其他配置
  animation: 'fadeIn'  // 动画类型
};

// 动态修改样式
ContextMenu.stylesCircular({
  background: '#FF6B6B',
  backgroundHover: '#FF5252',
  diameter: 350
});
```

### 自定义渲染器

```tsx
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

// 设置自定义渲染器
ContextMenu.setRenderToWrapper((children) => {
  return (
    <div className="custom-menu-wrapper">
      <div className="menu-header">自定义菜单</div>
      {children()}
    </div>
  );
});
```

## 🎨 主题定制

### CSS 变量定制

```css
/* 传统菜单主题 */
.adhere-ui-context-menu {
  --menu-bg-color: #ffffff;
  --menu-border-color: #e1e5e9;
  --menu-text-color: #333333;
  --menu-hover-bg: #f5f5f5;
  --menu-disabled-color: #cccccc;
}

/* 圆形菜单主题 */
.adhere-ui-context-circular-menu {
  --circular-bg: #323232;
  --circular-hover-bg: #515151;
  --circular-text-color: #ffffff;
  --circular-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

### 动态主题切换

```tsx
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

function ThemeManager() {
  const [theme, setTheme] = useState('light');

  const openThemedMenu = useCallback((menuData, config) => {
    const themedConfig = {
      ...config,
      className: `${config.className || ''} theme-${theme}`,
      style: {
        ...config.style,
        ...(theme === 'dark' ? {
          backgroundColor: '#2d3748',
          color: '#ffffff',
          borderColor: '#4a5568'
        } : {
          backgroundColor: '#ffffff',
          color: '#333333',
          borderColor: '#e2e8f0'
        })
      }
    };

    return ContextMenu.open(menuData, themedConfig);
  }, [theme]);

  return { openThemedMenu, setTheme };
}
```

## 📊 实用工具

### 菜单位置计算

```tsx
function calculateMenuPosition(event, menuWidth = 200, menuHeight = 300) {
  const { clientX: x, clientY: y } = event;
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

  let finalX = x;
  let finalY = y;

  // 防止菜单超出右边界
  if (x + menuWidth > windowWidth) {
    finalX = windowWidth - menuWidth - 10;
  }

  // 防止菜单超出下边界
  if (y + menuHeight > windowHeight) {
    finalY = windowHeight - menuHeight - 10;
  }

  return { x: finalX, y: finalY };
}

// 使用位置计算
const handleRightClick = (e) => {
  e.preventDefault();
  const position = calculateMenuPosition(e);
  
  ContextMenu.open(menuData, {
    ...position,
    width: 200,
    maskClosable: true
  });
};
```

### 菜单权限控制

```tsx
function filterMenuByPermissions(menuData, permissions) {
  return menuData.filter(item => {
    if (item.permission && !permissions.includes(item.permission)) {
      return false;
    }
    
    if (item.children) {
      item.children = filterMenuByPermissions(item.children, permissions);
      // 如果子菜单全部被过滤掉，则隐藏父菜单
      return item.children.length > 0;
    }
    
    return true;
  });
}

// 使用权限过滤
const filteredMenu = filterMenuByPermissions(menuData, userPermissions);
```

## 📚 API 参考

### ContextMenu 对象

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `open` | `data: MenuData[], config: Config` | `HTMLDivElement` | 打开传统菜单 |
| `close` | `el: HTMLDivElement` | `void` | 关闭菜单 |
| `openCircular` | `config: CircularMenuConfig, point: Point` | `void` | 打开圆形菜单 |
| `hideCircular` | - | `void` | 隐藏圆形菜单 |
| `stylesCircular` | `properties: object` | `void` | 设置圆形菜单样式 |
| `setRenderToWrapper` | `renderToWrapper: function` | `void` | 设置自定义渲染器 |

### MenuData 接口

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `id` | `string` | - | 唯一标识符 |
| `name` | `string \| ReactElement` | - | 菜单名称 |
| `icon` | `string \| ReactElement` | - | 图标 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `separation` | `boolean` | `false` | 是否为分隔线 |
| `children` | `MenuData[]` | `[]` | 子菜单 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `subMenuClassName` | `string` | - | 子菜单类名 |
| `subMenuStyle` | `CSSProperties` | - | 子菜单样式 |
| `attribute` | `object` | - | 自定义属性 |

### Config 接口

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `x` | `number` | - | X 坐标 |
| `y` | `number` | - | Y 坐标 |
| `width` | `number` | `200` | 菜单宽度 |
| `maskClosable` | `boolean` | `true` | 点击遮罩是否关闭 |
| `handler` | `Function` | - | 点击事件处理器 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |

### CircularMenuConfig 接口

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `totalAngle` | `number` | `360` | 总角度 |
| `spaceDeg` | `number` | `0` | 菜单项间距角度 |
| `background` | `string` | `#323232` | 背景色 |
| `backgroundHover` | `string` | `#515151` | 悬停背景色 |
| `pageBackground` | `string` | `transparent` | 页面背景色 |
| `diameter` | `number` | `300` | 直径 |
| `position` | `string` | `top` | 位置 |
| `start` | `number` | `0` | 起始角度 |
| `horizontal` | `boolean` | `true` | 是否水平排列 |
| `hideAfterClick` | `boolean` | `true` | 点击后是否隐藏 |
| `menus` | `Array` | `[]` | 菜单项配置 |

## 🔍 最佳实践

### 1. 性能优化

```tsx
import { useMemo, useCallback } from 'react';

function OptimizedMenu() {
  // 缓存菜单数据
  const menuData = useMemo(() => [
    { id: 'item1', name: '项目1', icon: 'fa fa-file' },
    { id: 'item2', name: '项目2', icon: 'fa fa-folder' }
  ], []);

  // 缓存事件处理函数
  const handleMenuClick = useCallback((id, attribute) => {
    console.log('菜单点击:', id);
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    ContextMenu.open(menuData, {
      x: e.clientX,
      y: e.clientY,
      handler: handleMenuClick
    });
  }, [menuData, handleMenuClick]);

  return <div onContextMenu={handleRightClick}>右键菜单</div>;
}
```

### 2. 菜单状态管理

```tsx
import { useReducer } from 'react';

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        activeMenus: new Set([...state.activeMenus, action.element])
      };
    case 'CLOSE_MENU':
      const newMenus = new Set(state.activeMenus);
      newMenus.delete(action.element);
      return {
        ...state,
        activeMenus: newMenus
      };
    case 'CLOSE_ALL':
      return {
        ...state,
        activeMenus: new Set()
      };
    default:
      return state;
  }
};

function MenuStateManager() {
  const [state, dispatch] = useReducer(menuReducer, {
    activeMenus: new Set()
  });

  const openMenu = useCallback((menuData, config) => {
    const element = ContextMenu.open(menuData, config);
    dispatch({ type: 'OPEN_MENU', element });
    return element;
  }, []);

  const closeMenu = useCallback((element) => {
    ContextMenu.close(element);
    dispatch({ type: 'CLOSE_MENU', element });
  }, []);

  return { openMenu, closeMenu, activeMenus: state.activeMenus };
}
```

### 3. 无障碍访问

```tsx
function AccessibleMenu() {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'F10' || (e.key === 'Shift' && e.keyCode === 121)) {
      e.preventDefault();
      // 打开上下文菜单
      ContextMenu.open(menuData, {
        x: e.target.offsetLeft,
        y: e.target.offsetTop + e.target.offsetHeight,
        handler: handleMenuClick
      });
    }
  }, []);

  return (
    <div 
      onContextMenu={handleRightClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="右键菜单"
    >
      可访问的菜单区域
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
        "libraryName": "@baifendian/adhere-ui-contextmenu",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

### 菜单项虚拟化

```tsx
import { useMemo } from 'react';

function VirtualizedMenu({ items, visibleCount = 10 }) {
  const visibleItems = useMemo(() => {
    return items.slice(0, visibleCount);
  }, [items, visibleCount]);

  const handleShowMore = useCallback(() => {
    // 显示更多菜单项的逻辑
  }, []);

  const menuData = [
    ...visibleItems,
    ...(items.length > visibleCount ? [{
      id: 'show-more',
      name: '显示更多...',
      icon: 'fa fa-ellipsis-h'
    }] : [])
  ];

  return menuData;
}
```

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 📄 许可证

本项目基于 [ISC 许可证](LICENSE) 开源。

## 🔗 相关链接

- [Adhere 组件库](https://github.com/playerljc/adhere)
- [React](https://reactjs.org/)
- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/contextmenu)

---

**注意：** 这是一个功能丰富的上下文菜单组件，支持传统菜单和创新的圆形扇形菜单两种展示方式，为您的应用提供更好的用户体验。

