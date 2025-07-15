# Adhere UI Space

无侵入性的上下留白和左右留白组件，支持水平和垂直方向的间距设置。

## ✨ 特性

- 支持 React 18.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 支持媒体查询自适应
- 支持 Fragment 自动处理
- 提供 SpaceGroup 组件自动处理多个元素间距

## 🖥 兼容环境

- 现代浏览器，IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-space --save
```

```bash
yarn add @baifendian/adhere-ui-space
```

## 🔨 使用

### 基础用法

```tsx
import Space from '@baifendian/adhere-ui-space';

// 水平间距
<Space size={20} />

// 垂直间距
<Space direction="vertical" size={16} />

// 自定义样式
<Space size="1rem" className="custom-space" />
```

### SpaceGroup 用法

```tsx
import Space from '@baifendian/adhere-ui-space';

// 自动在多个元素之间添加间距
<Space.Group size={20}>
  <div>元素1</div>
  <div>元素2</div>
  <div>元素3</div>
</Space.Group>

// 处理 Fragment
<Space.Group size={16}>
  <>
    <span>文本1</span>
    <span>文本2</span>
  </>
  <button>按钮</button>
</Space.Group>
```

### 媒体查询支持

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

<ConfigProvider media={{ isUseMedia: true, designWidth: 750 }}>
  <Space size={40} /> {/* 会根据设计稿宽度自动转换为 rem */}
</ConfigProvider>
```

## 📖 API

### Space Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS 类名 | `string` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| direction | 间距方向 | `'vertical' \| 'horizontal'` | `'horizontal'` |
| size | 间距大小，可以是数字（像素）或字符串（CSS 值） | `string \| number` | `40` |
| horizontalFit | 水平方向时是否适应容器高度 | `boolean` | `false` |

### SpaceGroup Props

继承 `SpaceProps` 的所有属性，额外包含：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | `ReactNode` | - |

## 🎨 样式定制

### CSS 变量

```css
.adhere-ui-space {
  /* 可以通过 CSS 变量自定义样式 */
}
```

### 主题定制

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

<ConfigProvider theme={{ /* 主题配置 */ }}>
  <Space />
</ConfigProvider>
```

## 🔧 开发

```bash
# 安装依赖
npm install

# 构建
npm run buildpackage

# 测试
npm test
```

## 📄 许可证

ISC

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/space)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

