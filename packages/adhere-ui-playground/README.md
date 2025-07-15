# @baifendian/adhere-ui-playground

一个功能完整的代码展示和文档生成组件库，专为 React 应用设计，提供丰富的代码演示、属性说明和文档展示功能。

## ✨ 特性

- 🎯 **完整的代码展示功能** - 支持多种代码展示模式，包括基础展示、标签页展示、多配置展示等
- 📝 **属性说明组件** - 提供标准化的属性说明表格和函数说明组件
- 🎨 **主题定制** - 支持自定义主题和样式
- 🌍 **国际化支持** - 内置国际化功能
- 📱 **移动端适配** - 提供专门的移动端组件
- 🔧 **动态引入** - 支持 babel-plugin-import 按需加载
- 🎪 **锚点导航** - 提供页面内导航功能
- 📋 **代码复制** - 支持一键复制代码
- 🔍 **代码高亮** - 支持多种代码高亮主题

## 🖥 兼容环境

- 现代浏览器
- IE11+
- React 18.x

## 📦 安装

```bash
npm install @baifendian/adhere-ui-playground --save
```

```bash
yarn add @baifendian/adhere-ui-playground
```

## 🚀 快速开始

### 基础使用

```tsx
import PlayGround from '@baifendian/adhere-ui-playground';

// 基础代码展示
<PlayGround.PlayGround 
  codeText="console.log('Hello World')"
  title="基础示例"
>
  <div>这里是代码演示内容</div>
</PlayGround.PlayGround>
```

### 属性说明

```tsx
import PlayGround from '@baifendian/adhere-ui-playground';

// 属性说明表格
<PlayGround.Props 
  data={[
    { 
      params: 'name', 
      desc: '组件名称', 
      type: 'string', 
      defaultVal: '-' 
    },
    { 
      params: 'disabled', 
      desc: '是否禁用', 
      type: 'boolean', 
      defaultVal: 'false' 
    }
  ]}
/>
```

## 📚 组件说明

### 核心组件

#### PlayGround
基础代码展示组件，用于展示单个代码示例。

```tsx
<PlayGround.PlayGround 
  codeText="const message = 'Hello World';"
  title="基础示例"
  expand={true}
>
  <div>演示内容</div>
</PlayGround.PlayGround>
```

#### PlayGroundTab
标签页代码展示组件，支持多个代码示例切换。

```tsx
<PlayGround.PlayGroundTab 
  config={[
    {
      key: 'jsx',
      title: 'JSX',
      codeText: '<div>JSX 示例</div>'
    },
    {
      key: 'tsx', 
      title: 'TSX',
      codeText: '<div>TSX 示例</div>'
    }
  ]}
>
  <div>演示内容</div>
</PlayGround.PlayGroundTab>
```

#### PlayGroundMulti
多配置代码展示组件，支持多种配置的代码展示。

```tsx
<PlayGround.PlayGroundMulti 
  config={[
    {
      title: '配置1',
      codeText: 'console.log("配置1")'
    },
    {
      title: '配置2', 
      codeText: 'console.log("配置2")'
    }
  ]}
>
  <div>多配置演示</div>
</PlayGround.PlayGroundMulti>
```

#### PlayGroundTabMobile
移动端标签页代码展示组件，支持二维码预览。

```tsx
<PlayGround.PlayGroundTabMobile 
  url="https://example.com/mobile-demo"
  config={[
    {
      key: 'mobile',
      title: '移动端',
      codeText: '// 移动端代码'
    }
  ]}
>
  <div>移动端演示</div>
</PlayGround.PlayGroundTabMobile>
```

### 文档组件

#### Props
属性说明表格组件。

```tsx
<PlayGround.Props 
  title="组件属性"
  data={[
    {
      params: 'value',
      desc: '输入值',
      type: 'string | number',
      defaultVal: '-'
    }
  ]}
/>
```

#### FunctionProps
函数属性说明组件。

```tsx
<PlayGround.FunctionProps 
  title="方法说明"
  data={[
    {
      name: 'onChange',
      desc: '值变化回调',
      modifier: 'public',
      params: [
        {
          name: 'value',
          desc: '变化后的值',
          type: 'string',
          defaultVal: '-',
          required: true
        }
      ],
      returnType: 'void',
      returnDesc: '无返回值'
    }
  ]}
/>
```

#### AnchorNavigation
锚点导航组件。

```tsx
<PlayGround.AnchorNavigation 
  anchors={[
    { anchor: 'basic', name: '基础用法' },
    { anchor: 'advanced', name: '高级用法' }
  ]}
  anchorPosition={{ top: 100, width: 200 }}
>
  <div id="basic">基础用法内容</div>
  <div id="advanced">高级用法内容</div>
</PlayGround.AnchorNavigation>
```

### 页面组件

#### PlayGroundPage
完整的代码展示页面组件。

```tsx
<PlayGround.PlayGroundPage>
  <PlayGround.PlayGroundPage.Section title="基础用法">
    <PlayGround.PlayGround codeText="// 基础代码">
      <div>基础示例</div>
    </PlayGround.PlayGround>
  </PlayGround.PlayGroundPage.Section>
  
  <PlayGround.PlayGroundPage.PropsSection 
    title="属性说明"
    config={[
      {
        data: [
          { params: 'name', desc: '名称', type: 'string', defaultVal: '-' }
        ]
      }
    ]}
  />
</PlayGround.PlayGroundPage>
```

## 🎨 主题定制

组件支持自定义主题和样式：

```tsx
import '@baifendian/adhere-ui-playground/lib/index.css';

// 自定义样式
<PlayGround.PlayGround 
  className="custom-playground"
  style={{ backgroundColor: '#f5f5f5' }}
>
  <div>自定义样式演示</div>
</PlayGround.PlayGround>
```

## 🔧 高级配置

### 代码高亮主题

```tsx
<PlayGround.CodePanel 
  codeText="const example = 'code';"
  theme="vs-dark" // 支持多种主题
/>
```

### 自定义渲染

```tsx
<PlayGround.CodeBoxPanel 
  config={[
    {
      type: 'PlayGround',
      title: '自定义渲染',
      codeText: '// 代码内容',
      renderWrap: (columnIndex, index, config, children) => (
        <div className="custom-wrap">{children}</div>
      )
    }
  ]}
/>
```

## 📖 API 文档

### PlayGroundProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| codeText | 代码文本内容 | string | - |
| theme | 代码高亮主题 | string | 'default' |
| title | 标题 | ReactNode | - |
| expand | 是否展开 | boolean | false |
| isActive | 是否激活 | boolean | true |
| cardProps | 卡片属性 | Partial<CardProps> | - |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
| children | 子元素 | ReactNode | - |

### PropsProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 属性数据列表 | PropDataItem[] | - |
| title | 标题 | ReactNode | - |
| defaultCollapse | 默认折叠状态 | boolean | false |
| border | 是否显示边框 | boolean | true |

### FunctionPropsProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 函数数据列表 | FunctionDataItem[] | - |
| title | 标题 | ReactNode | - |
| defaultCollapse | 默认折叠状态 | boolean | false |

## 🌍 国际化

组件支持国际化配置：

```tsx
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

<ConfigProvider locale={zhCN}>
  <PlayGround.PlayGround codeText="// 代码">
    <div>国际化演示</div>
  </PlayGround.PlayGround>
</ConfigProvider>
```

## 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/playground)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

## 📄 许可证

ISC License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 本组件库基于 React 18.x 开发，请确保您的项目使用兼容的 React 版本。

