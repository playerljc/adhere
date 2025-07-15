# 移动端标签页组件

基于 antd-mobile 的 Tabs 组件封装，提供了更丰富的功能和更好的类型支持。

## 功能特性

- 支持多种标签页样式（普通、胶囊、巨型、侧边栏、底部导航）
- 支持轮播模式
- 支持更多箭头功能
- 完整的 TypeScript 类型支持
- 主题配置支持

## 使用方法

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

// 底部导航
<MobileTabs.TabBar items={tabItems}>
  <div>主内容区域</div>
</MobileTabs.TabBar>
```

## API 文档

### Tabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| showArrowMore | 是否显示更多箭头 | boolean | true |
| swiper | 是否启用轮播模式 | boolean | false |
| swiperProps | 轮播组件属性 | SwiperProps | - |
| arrowZIndex | 箭头层级 | number | 100 |

### CapsuleTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | CapsuleTabProps[] | - |

### JumboTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | JumboTabProps[] | - |

### SideTabs 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 侧边栏配置项 | SideBarItemProps[] | - |

### TabBar 组件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页key | string | - |
| onChange | 标签页切换回调 | (key: string) => void | - |
| items | 标签页配置项 | TabBarItemProps[] | - |
| children | 主内容区域 | ReactNode | - |
