# Adhere UI Revolving 轮播图组件

基于 Swiper 实现的轮播图组件，支持自动播放、方向控制、循环播放等功能。

## ✨ 特性

- 🎯 支持 React 18.x
- 🌍 支持国际化
- 🎨 支持修改主题
- 📦 支持动态引入 (babel-plugin-import)
- 🔄 支持多种轮播方向 (上、下、左、右)
- ⚡ 支持自动播放和手动控制
- 🖱️ 支持鼠标滚轮控制
- 📱 支持触摸滑动

## 🖥 兼容环境

- 现代浏览器
- IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-revolving --save
```

```bash
yarn add @baifendian/adhere-ui-revolving
```

## 🔨 使用

### 基础用法

```tsx
import React, { useRef } from 'react';
import Revolving, { type RevolvingRefHandle } from '@baifendian/adhere-ui-revolving';

const MyComponent = () => {
  const revolvingRef = useRef<RevolvingRefHandle>(null);

  const items = [
    { key: '1', children: <div>第一页内容</div> },
    { key: '2', children: <div>第二页内容</div> },
    { key: '3', children: <div>第三页内容</div> },
  ];

  return (
    <Revolving
      ref={revolvingRef}
      items={items}
      direction="top"
      speed={1000}
      delay={2000}
      loop={true}
    />
  );
};
```

### 控制轮播图

```tsx
import React, { useRef } from 'react';
import Revolving, { type RevolvingRefHandle } from '@baifendian/adhere-ui-revolving';

const MyComponent = () => {
  const revolvingRef = useRef<RevolvingRefHandle>(null);

  const handleStart = () => {
    revolvingRef.current?.start();
  };

  const handleStop = () => {
    revolvingRef.current?.stop();
  };

  const handleCheckStatus = () => {
    const isRunning = revolvingRef.current?.isRunning();
    console.log('轮播图是否正在运行:', isRunning);
  };

  return (
    <div>
      <Revolving
        ref={revolvingRef}
        items={items}
        direction="left"
        speed={800}
        delay={3000}
      />
      <div>
        <button onClick={handleStart}>开始播放</button>
        <button onClick={handleStop}>停止播放</button>
        <button onClick={handleCheckStatus}>检查状态</button>
      </div>
    </div>
  );
};
```

### 自定义样式

```tsx
import React from 'react';
import Revolving from '@baifendian/adhere-ui-revolving';

const MyComponent = () => {
  const items = [
    { 
      key: '1', 
      className: 'custom-slide',
      style: { backgroundColor: '#f0f0f0' },
      children: <div>自定义样式的内容</div> 
    },
  ];

  return (
    <Revolving
      className="my-revolving"
      style={{ height: '300px' }}
      classNameWrapper="my-revolving-wrapper"
      styleWrapper={{ border: '1px solid #ccc' }}
      items={items}
      direction="bottom"
    />
  );
};
```

## 📖 API

### Revolving Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 外层容器类名 | `string` | - |
| style | 外层容器样式 | `CSSProperties` | - |
| classNameWrapper | Swiper 容器类名 | `string` | - |
| styleWrapper | Swiper 容器样式 | `CSSProperties` | - |
| speed | 切换速度（毫秒） | `number` | `1000` |
| delay | 自动播放延迟时间（毫秒） | `number` | `1000` |
| direction | 轮播方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| loop | 是否循环播放 | `boolean` | `true` |
| stopOnLastSlide | 是否在最后一页停止 | `boolean` | `false` |
| listeners | 事件监听器 | `Record<string, (...args: any[]) => void>` | - |
| items | 轮播项目列表 | `RevolvingItem[]` | `[]` |
| swiperConfig | Swiper 配置选项 | `SwiperOptions` | - |

### RevolvingRefHandle

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始自动播放 | - | `void` |
| stop | 停止自动播放 | - | `void` |
| isRunning | 检查是否正在运行 | - | `boolean` |

### RevolvingItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识符 | `string` | - |
| className | 项目类名 | `string` | - |
| style | 项目样式 | `CSSProperties` | - |
| children | 项目内容 | `ReactNode` | - |

## 🎨 主题定制

组件支持通过 CSS 变量进行主题定制：

```css
.adhere-ui-revolving {
  --adhere-ui-revolving-bg-color: #ffffff;
  --adhere-ui-revolving-border-color: #e8e8e8;
}
```

## 🔧 高级配置

### 自定义 Swiper 配置

```tsx
import { SwiperOptions } from 'swiper/types';

const customSwiperConfig: SwiperOptions = {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

<Revolving
  items={items}
  swiperConfig={customSwiperConfig}
/>
```

## 🌐 国际化

组件支持国际化，可以通过配置 `swiperConfig` 中的 `i18n` 选项来实现：

```tsx
const i18nConfig = {
  'zh-CN': {
    next: '下一页',
    prev: '上一页',
  },
  'en-US': {
    next: 'Next',
    prev: 'Previous',
  },
};

<Revolving
  items={items}
  swiperConfig={{
    i18n: i18nConfig,
  }}
/>
```

## 📝 更新日志

详细更新日志请查看 [CHANGELOG.md](./changelog/CHANGELOG.md)

## 🔗 相关链接

- [Swiper 官方文档](https://swiperjs.com/)
- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/revolving)
- [GitHub 仓库](https://github.com/playerljc/adhere)

