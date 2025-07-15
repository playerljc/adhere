# Ellipsis 文字省略组件

一个功能强大的 React 文字省略组件，支持单行/多行省略、自定义 tooltip、展开/收起等功能。

## ✨ 特性

- 🎯 支持单行和多行文本省略
- 🎨 支持自定义 tooltip 提示
- 🔄 支持展开/收起功能
- 🌍 支持国际化
- 🎨 支持主题定制
- 📦 支持动态引入 (babel-plugin-import)
- ♿ 支持无障碍访问 (ARIA)
- 📱 支持 React 18.x

## 🖥 兼容环境

- 现代浏览器
- IE11+

## 📦 安装

```bash
npm install @baifendian/adhere-ui-ellipsis --save
```

```bash
yarn add @baifendian/adhere-ui-ellipsis
```

## 🔨 使用

### 基础用法

```tsx
import Ellipsis from '@baifendian/adhere-ui-ellipsis';

// 单行省略
<Ellipsis>这是一段很长的文本内容，超出部分会显示省略号</Ellipsis>

// 多行省略
<Ellipsis wrap wrapLines={3}>
  这是一段很长的文本内容，超出三行部分会显示省略号
</Ellipsis>
```

### 自定义 Tooltip

```tsx
// 使用原生 title 属性
<Ellipsis tooltip="完整的文本内容">省略的文本</Ellipsis>

// 使用自定义 tooltip
<Ellipsis 
  isUseNativeTooltip={false}
  tooltip="完整的文本内容"
  tooltipClassName="custom-tooltip"
>
  省略的文本
</Ellipsis>
```

### 展开/收起功能

```tsx
<Ellipsis 
  tooltipMaxLength={50}
  tooltipMore={<span>展开更多</span>}
  tooltipClose={<span>收起</span>}
>
  这是一段超过50个字符的文本内容，会显示展开/收起按钮
</Ellipsis>
```

## 📖 API

### EllipsisProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS 类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| tooltip | 提示内容(如果没有则是children，只能是纯文本) | `string` | - |
| wrap | 是否换行显示 | `boolean` | `false` |
| wrapLines | 显示的行数，仅在 wrap 为 true 时生效 | `number` | `2` |
| tooltipMaxLength | tooltip 最大字符数，超过此长度将显示展开/收起按钮 | `number` | `1024` |
| isUseNativeTooltip | 是否使用原生 title 属性作为 tooltip | `boolean` | `true` |
| trigger | 触发 tooltip 显示的事件类型 | `'hover' \| 'click' \| 'focus' \| Array<'hover' \| 'click' \| 'focus'>` | `'hover'` |
| tooltipClassName | 自定义 tooltip 的 CSS 类名(仅在 isUseNativeTooltip 为 false 时生效) | `string` | - |
| tooltipStyle | 自定义 tooltip 的样式(仅在 isUseNativeTooltip 为 false 时生效) | `CSSProperties` | - |
| tooltipArrowClassName | 自定义 tooltip 箭头的 CSS 类名(仅在 isUseNativeTooltip 为 false 时生效) | `string` | - |
| tooltipArrowStyle | 自定义 tooltip 箭头的样式(仅在 isUseNativeTooltip 为 false 时生效) | `CSSProperties` | - |
| tooltipMore | 展开按钮内容(tooltip 长度大于 tooltipMaxLength 时生效) | `ReactNode` | - |
| tooltipClose | 收起按钮内容(tooltip 长度大于 tooltipMaxLength 时生效) | `ReactNode` | - |
| customTooltipOptions | 自定义 tooltip 的 popper.js 配置选项 | `Options` | - |
| children | 子元素内容，支持纯文本 | `string` | - |
| dangerouslySetInnerHTML | 使用 innerHTML 渲染内容 | `{ __html: string }` | - |

## 🎨 样式类名

| 类名 | 说明 |
| --- | --- |
| `adhere-ui-ellipsis` | 根容器 |
| `adhere-ui-ellipsis-inner` | 内容容器 |
| `adhere-ui-ellipsis-line-ellipsis` | 单行省略样式 |
| `adhere-ui-ellipsis-multi-line-ellipsis` | 多行省略样式 |
| `adhere-ui-ellipsis-wrap` | 换行样式 |
| `adhere-ui-ellipsis-show-more` | 展开按钮 |
| `adhere-ui-ellipsis-hide-more` | 收起按钮 |
| `adhere-ui-ellipsis-custom-tool-tip` | 自定义 tooltip 容器 |
| `adhere-ui-ellipsis-custom-tool-tip-inner` | 自定义 tooltip 内容 |
| `adhere-ui-ellipsis-custom-tool-tip-arrow` | 自定义 tooltip 箭头 |

## 🌍 国际化

组件内置了国际化支持，默认的展开/收起文本可以通过 `Intl` 工具进行配置：

```tsx
import Intl from '@baifendian/adhere-util-intl';

// 配置国际化文本
Intl.setMessages({
  'zh-CN': {
    expand: '展开',
    collapse: '收起'
  },
  'en-US': {
    expand: 'Expand',
    collapse: 'Collapse'
  }
});
```

## 🎨 主题定制

组件支持通过 `ConfigProvider` 进行主题定制：

```tsx
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

<ConfigProvider theme={{ primaryColor: '#1890ff' }}>
  <Ellipsis>文本内容</Ellipsis>
</ConfigProvider>
```

## 📱 动态引入

支持通过 `babel-plugin-import` 进行按需加载：

```javascript
// .babelrc
{
  "plugins": [
    ["import", { "libraryName": "@baifendian/adhere-ui-ellipsis" }]
  ]
}
```

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/ellipsis)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)
