# 简介
&ensp;&ensp;响应式媒体查询组件，用于根据不同的屏幕断点（breakPoints）动态控制内容的显示和隐藏。

# ✨ 特性
- 支持 React(18.x)
- 支持自定义断点配置（minWidth、maxWidth）
- 提供组件式和 Hook 式两种使用方式
- 支持监听窗口大小变化，实时响应
- 支持 rootValue 和 designWidth 配置
- 提供工具函数：isInBetween、getMediaQueryByBreakPoints、antdNumberTokenToRem
- 支持动态引入(babel-plugin-import)

# 🖥 兼容环境
- 现代浏览器

# 📦 安装
```javascript
npm install @baifendian/adhere-ui-media-query --save
``` 

```javascript
yarn add @baifendian/adhere-ui-media-query
```

# 📖 使用

## MediaQuery 组件

```tsx
import MediaQuery from '@baifendian/adhere-ui-media-query';

const breakPoints = {
  mobile: {
    minWidth: 0,
    maxWidth: 767,
    rootValue: 16,
    designWidth: 375,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1023,
    rootValue: 16,
    designWidth: 768,
  },
  desktop: {
    minWidth: 1024,
    maxWidth: Number.MAX_VALUE,
    rootValue: 16,
    designWidth: 1920,
  },
};

function App() {
  return (
    <div>
      <MediaQuery 
        breakPoints={breakPoints} 
        breakPoint="mobile"
        noMatch={() => <div>不是移动端</div>}
      >
        <div>移动端内容</div>
      </MediaQuery>
      
      <MediaQuery 
        breakPoints={breakPoints} 
        breakPoint="desktop"
      >
        <div>桌面端内容</div>
      </MediaQuery>
    </div>
  );
}
```

## useMediaQuery Hook

```tsx
import { useMediaQuery } from '@baifendian/adhere-ui-media-query';

const breakPoints = {
  mobile: {
    minWidth: 0,
    maxWidth: 767,
    rootValue: 16,
    designWidth: 375,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1023,
    rootValue: 16,
    designWidth: 768,
  },
  desktop: {
    minWidth: 1024,
    maxWidth: Number.MAX_VALUE,
    rootValue: 16,
    designWidth: 1920,
  },
};

function App() {
  const mediaQuery = useMediaQuery(breakPoints);
  
  return (
    <div>
      {mediaQuery.isMobile && <div>移动端</div>}
      {mediaQuery.isTablet && <div>平板端</div>}
      {mediaQuery.isDesktop && <div>桌面端</div>}
    </div>
  );
}
```

## 工具函数

```tsx
import { 
  isInBetween, 
  getMediaQueryByBreakPoints,
  antdNumberTokenToRem,
  WINDOW_RESIZE 
} from '@baifendian/adhere-ui-media-query';

// 判断当前宽度是否在断点范围内
const inRange = isInBetween({
  breakpoint: { minWidth: 768, maxWidth: 1023, rootValue: 16, designWidth: 768 },
  width: 800,
}); // true

// 获取所有断点的匹配状态
const mediaQuery = getMediaQueryByBreakPoints(breakPoints);
// 返回：{ isMobile: boolean, isTablet: boolean, isDesktop: boolean }

// 转换 antd token 数字值为 rem
const remToken = antdNumberTokenToRem(token, 16, 14);
```

# API

## MediaQuery Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| breakPoints | 断点配置对象 | `BreakPoints<T>` | - |
| breakPoint | 当前要匹配的断点名称 | `keyof BreakPoints<T>` | - |
| children | 匹配成功时渲染的内容 | `React.ReactNode` | - |
| noMatch | 匹配失败时渲染的内容 | `() => React.ReactNode` | - |

## BreakPoint 类型

```typescript
interface BreakPoint {
  minWidth?: number;        // 最小宽度
  maxWidth?: number;        // 最大宽度
  rootValue: number | {     // 根字体大小
    '1x': number;
    '2x': number;
  };
  designWidth: number;      // 设计稿宽度
}
```

## useMediaQuery

```typescript
function useMediaQuery<T extends Record<string, BreakPoint>>(
  breakPoints: BreakPoints<T>
): BreakPointsCondition<T>;
```

返回一个对象，key 为 `is${BreakPointName}`，value 为 boolean 值。

## 工具函数

### isInBetween

判断给定宽度是否在断点范围内。

```typescript
function isInBetween(params: {
  breakpoint: BreakPoint;
  width: number;
}): boolean;
```

### getMediaQueryByBreakPoints

获取所有断点的匹配状态。

```typescript
function getMediaQueryByBreakPoints<T extends Record<string, BreakPoint>>(
  breakPoints: BreakPoints<T>
): BreakPointsCondition<T>;
```

### antdNumberTokenToRem

将 Ant Design 的 token 数字值转换为 rem。

```typescript
function antdNumberTokenToRem(
  token: AliasToken,
  rootValue: number,
  fontSize: number
): Record<string, any>;
```

## 常量

### WINDOW_RESIZE

窗口大小改变事件名称。

```typescript
const WINDOW_RESIZE = 'ADHERE_MEDIA_QUERY_WINDOW_RESIZE';
```

# 线上地址(临时)
[https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/mediaquery](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/mediaquery)
