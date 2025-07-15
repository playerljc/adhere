# Adhere UI ConfigProvider

全局配置提供者组件，负责国际化、主题、媒体等配置的管理和注入。

## 功能特性

- 🌍 **国际化支持**: 支持多语言切换和语言包管理
- 🎨 **主题系统**: 提供完整的主题配置和CSS变量注入
- 📱 **媒体适配**: 支持响应式设计和媒体查询配置
- 🔧 **类型安全**: 完整的TypeScript类型定义
- 📚 **文档完善**: 详细的JSDoc文档和使用示例

## 安装

```bash
npm install @baifendian/adhere-ui-configprovider
```

## 基本使用

```tsx
import React from 'react';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

const App = () => {
  return (
    <ConfigProvider
      intl={{
        lang: 'zh_CN',
        locales: {
          zh_CN: {
            hello: '你好',
            world: '世界'
          },
          en_US: {
            hello: 'Hello',
            world: 'World'
          }
        },
        mainLanguage: 'zh_CN'
      }}
      theme={{
        primaryColor: '#1890ff',
        components: {
          normal: {
            Button: {
              backgroundColor: '#1890ff',
              color: '#ffffff'
            }
          }
        }
      }}
      media={{
        isUseMedia: true,
        designWidth: 1920
      }}
      onIntlInit={() => {
        console.log('国际化初始化完成');
      }}
    >
      {() => <YourApp />}
    </ConfigProvider>
  );
};
```

## API 文档

### ConfigProvider Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `intl` | `IntlType` | - | 国际化配置 |
| `theme` | `ThemeConfig` | - | 主题配置 |
| `media` | `MediaConfig` | - | 媒体配置 |
| `router` | `'hash' \| 'browser'` | `'browser'` | 路由类型 |
| `publicPath` | `string` | `'/'` | 公共路径 |
| `isUseWrapper` | `boolean` | `true` | 是否使用包装器 |
| `onIntlInit` | `() => void` | - | 国际化初始化完成回调 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `children` | `() => ReactNode` | - | 子组件函数 |

### 国际化配置 (IntlType)

```tsx
interface IntlType {
  /** 当前语言 */
  lang?: 'en_US' | 'zh_CN' | 'pt_PT';
  /** 语言包配置 */
  locales?: Record<string, any>;
  /** 前缀 */
  prefix?: string;
  /** 主语言 */
  mainLanguage?: string;
}
```

### 主题配置 (ThemeConfig)

```tsx
interface ThemeConfig {
  /** 主色调 */
  primaryColor?: string;
  /** 普通颜色 */
  normalColor?: string;
  /** 背景色 */
  backColor?: string;
  /** 基础字体大小 */
  baseFontSize?: string;
  /** 小字体大小 */
  smallFontSize?: string;
  /** 最大层级 */
  commonMaxZIndex?: string;
  /** 组件主题配置 */
  components?: {
    normal?: Record<string, Record<string, string>>;
    mobile?: Record<string, Record<string, string>>;
    'normal-hoc'?: Record<string, string>;
    'mobile-hoc'?: Record<string, string>;
  };
}
```

### 媒体配置 (MediaConfig)

```tsx
interface MediaConfig {
  /** 是否使用媒体查询 */
  isUseMedia?: boolean;
  /** 设计稿宽度 */
  designWidth?: number;
}
```

## 主题注入

### 使用 useTheme Hook

```tsx
import { useRef } from 'react';
import { useTheme } from '@baifendian/adhere-ui-configprovider';

const MyComponent = () => {
  const elRef = useRef<HTMLDivElement>(null);
  
  useTheme({
    elRef,
    group: 'normal',
    displayName: 'Button'
  });

  return <div ref={elRef}>我的组件</div>;
};
```

### 使用 theme 函数

```tsx
import { useRef, useEffect } from 'react';
import { theme } from '@baifendian/adhere-ui-configprovider';
import { useContext } from 'react';
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

const MyComponent = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const context = useContext(ConfigProvider.Context);
  
  useEffect(() => {
    theme({
      elRef,
      group: 'normal',
      displayName: 'Button',
      theme: context.theme
    });
  }, [context.theme]);

  return <div ref={elRef}>我的组件</div>;
};
```

## 上下文使用

```tsx
import { useContext } from 'react';
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

const MyComponent = () => {
  const context = useContext(ConfigProvider.Context);
  
  return (
    <div>
      <p>当前语言: {context.intl.lang}</p>
      <p>主题色: {context.theme.primaryColor}</p>
      <p>路由类型: {context.router}</p>
    </div>
  );
};
```

## 类型导出

```tsx
import type {
  ConfigProviderProps,
  ConfigProviderContext,
  IntlType,
  ThemeConfig,
  MediaConfig,
  RouterType,
  IntlLanguage
} from '@baifendian/adhere-ui-configprovider';
```

## 优化内容

### TypeScript 类型优化

- ✅ 完整的类型定义和接口声明
- ✅ 泛型支持和类型约束
- ✅ 严格的类型检查
- ✅ 智能类型推导

### JSDoc 文档优化

- ✅ 详细的函数和组件文档
- ✅ 参数说明和返回值描述
- ✅ 使用示例和代码片段
- ✅ 中文注释和说明

### 代码结构优化

- ✅ 模块化设计和职责分离
- ✅ 错误处理和边界情况
- ✅ 性能优化和内存管理
- ✅ 代码可读性和维护性

### 功能增强

- ✅ 参数验证和错误提示
- ✅ 调试信息和日志输出
- ✅ 异步操作和Promise支持
- ✅ 组件生命周期管理

## 注意事项

1. **国际化初始化**: 确保在 `onIntlInit` 回调中处理国际化相关的初始化逻辑
2. **主题注入**: 使用 `useTheme` Hook 或 `theme` 函数来注入组件主题
3. **类型安全**: 充分利用 TypeScript 类型系统，避免类型错误
4. **性能优化**: 合理使用 `useMemo` 和 `useCallback` 来优化性能

## 许可证

MIT License
