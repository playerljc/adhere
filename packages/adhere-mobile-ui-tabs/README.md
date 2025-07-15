# @baifendian/adhere-mobile-ui-tabs

## 简介
&ensp;&ensp;移动端标签页组件集合，基于 antd-mobile 封装，提供了多种标签页样式和丰富的功能特性。

## ✨ 特性
- 支持 react(18.x)
- antd-mobile(5.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- 完整的 TypeScript 类型支持
- 多种标签页样式（普通、胶囊、巨型、侧边栏、底部导航）
- 支持轮播模式
- 支持更多箭头功能
- 支持路由集成

## 🖥 兼容环境
- 现代浏览器，IE11

## 📦 安装
```javascript
npm install @baifendian/adhere-mobile-ui-tabs --save
``` 

```javascript
yarn add @baifendian/adhere-mobile-ui-tabs
```

## 🔨 使用

### 基础用法

```tsx
import MobileTabs from '@baifendian/adhere-mobile-ui-tabs';

// 普通标签页
<MobileTabs.Tabs activeKey="tab1" onChange={handleChange}>
  <MobileTabs.Tabs.Tab title="标签1" key="tab1">
    内容1
  </MobileTabs.Tabs.Tab>
  <MobileTabs.Tabs.Tab title="标签2" key="tab2">
    内容2
  </MobileTabs.Tabs.Tab>
</MobileTabs.Tabs>

// 胶囊标签页
<MobileTabs.CapsuleTabs activeKey="tab1">
  <MobileTabs.CapsuleTabs.Tab title="标签1" key="tab1">
    内容1
  </MobileTabs.CapsuleTabs.Tab>
</MobileTabs.CapsuleTabs>

// 巨型标签页
<MobileTabs.JumboTabs activeKey="tab1">
  <MobileTabs.JumboTabs.Tab title="标签1" key="tab1">
    内容1
  </MobileTabs.JumboTabs.Tab>
</MobileTabs.JumboTabs>

// 侧边栏标签页
<MobileTabs.SideTabs activeKey="tab1">
  <MobileTabs.SideTabs.Tab title="标签1" key="tab1">
    内容1
  </MobileTabs.SideTabs.Tab>
</MobileTabs.SideTabs>

// 底部导航
<MobileTabs.TabBar items={tabItems}>
  <div>主内容区域</div>
</MobileTabs.TabBar>
```

### 高级用法

```tsx
// 轮播模式
<MobileTabs.Tabs 
  activeKey="tab1" 
  swiper={true}
  swiperProps={{
    loop: true,
    autoplay: false
  }}
>
  <MobileTabs.Tabs.Tab title="标签1" key="tab1">
    内容1
  </MobileTabs.Tabs.Tab>
  <MobileTabs.Tabs.Tab title="标签2" key="tab2">
    内容2
  </MobileTabs.Tabs.Tab>
</MobileTabs.Tabs>

// 更多箭头功能
<MobileTabs.Tabs 
  activeKey="tab1" 
  showArrowMore={true}
  arrowZIndex={100}
>
  {/* 标签页内容 */}
</MobileTabs.Tabs>

// 自定义样式
<MobileTabs.Tabs 
  activeKey="tab1"
  className="custom-tabs"
  style={{ backgroundColor: '#f5f5f5' }}
  innerClassName="custom-tabs-inner"
  innerStyle={{ padding: '10px' }}
>
  {/* 标签页内容 */}
</MobileTabs.Tabs>
```

## 📖 API 文档

### Tabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| showArrowMore | 是否显示更多箭头 | boolean | true |
| swiper | 是否启用轮播模式 | boolean | false |
| swiperProps | 轮播组件属性 | SwiperProps | - |
| arrowZIndex | 箭头层级 | number | 100 |
| className | 外层容器类名 | string | - |
| style | 外层容器样式 | CSSProperties | - |
| innerClassName | 内层容器类名 | string | - |
| innerStyle | 内层容器样式 | CSSProperties | - |
| children | 子元素 | ReactElement[] | - |

### CapsuleTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | CapsuleTabProps[] | - |
| className | 外层容器类名 | string | - |
| style | 外层容器样式 | CSSProperties | - |
| innerClassName | 内层容器类名 | string | - |
| innerStyle | 内层容器样式 | CSSProperties | - |
| children | 子元素 | ReactElement[] | - |

### JumboTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | JumboTabProps[] | - |
| className | 外层容器类名 | string | - |
| style | 外层容器样式 | CSSProperties | - |
| innerClassName | 内层容器类名 | string | - |
| innerStyle | 内层容器样式 | CSSProperties | - |
| children | 子元素 | ReactElement[] | - |

### SideTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 侧边栏配置项 | SideBarItemProps[] | - |
| className | 外层容器类名 | string | - |
| style | 外层容器样式 | CSSProperties | - |

### TabBar 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | TabBarItemProps[] | - |
| children | 主内容区域 | ReactNode | - |
| className | 外层容器类名 | string | - |
| style | 外层容器样式 | CSSProperties | - |
| wrapperClassName | 包装器类名 | string | - |
| wrapperStyle | 包装器样式 | CSSProperties | - |
| mainClassName | 主内容区类名 | string | - |
| mainStyle | 主内容区样式 | CSSProperties | - |
| bottomClassName | 底部区域类名 | string | - |
| bottomStyle | 底部区域样式 | CSSProperties | - |

## 🎨 主题定制

组件支持通过 CSS 变量进行主题定制：

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;
  --adm-font-size-main: 17px;
  --adm-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}
```

## 🔧 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 测试
npm run test
```

## 📝 更新日志

详细的更新日志请查看 [CHANGELOG.md](./changelog/CHANGELOG.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request

## 📄 许可证

ISC

## 🔗 相关链接

- [antd-mobile](https://mobile.ant.design/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 线上地址(临时)
[http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/tabs](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/tabs)


