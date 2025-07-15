# SwipeOut 滑动组件

一个基于 Swiper 的滑动组件，支持前置和后置内容的显示与隐藏。

## 特性

- 🎯 基于 Swiper 实现，性能优秀
- 📱 支持水平和垂直滑动方向
- ⚡ 支持自定义动画持续时间
- 🎨 支持自定义样式和类名
- 🔄 支持多种回调函数
- 📦 TypeScript 支持

## 安装

```bash
npm install @baifendian/adhere-ui-swipeout
```

## 基本用法

```tsx
import React, { useState } from 'react';
import SwipeOut from '@baifendian/adhere-ui-swipeout';

const App = () => {
  const [beforeShow, setBeforeShow] = useState(false);
  const [afterShow, setAfterShow] = useState(false);

  return (
    <div style={{ width: '300px', height: '200px' }}>
      <SwipeOut
        beforeShow={beforeShow}
        afterShow={afterShow}
        before={() => (
          <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            前置内容
          </div>
        )}
        after={() => (
          <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
            后置内容
          </div>
        )}
        onInit={() => console.log('Swiper 初始化完成')}
        slideChangeTransitionStart={(index) => console.log('滑动开始:', index)}
        slideChangeTransitionEnd={(index) => console.log('滑动结束:', index)}
      >
        <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
          主内容区域
          <br />
          <button onClick={() => setBeforeShow(!beforeShow)}>
            {beforeShow ? '隐藏' : '显示'}前置内容
          </button>
          <br />
          <button onClick={() => setAfterShow(!afterShow)}>
            {afterShow ? '隐藏' : '显示'}后置内容
          </button>
        </div>
      </SwipeOut>
    </div>
  );
};
```

## API

### SwipeOutProps

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | `string` | `''` | 容器的 CSS 类名 |
| style | `CSSProperties` | `{}` | 容器的内联样式 |
| beforeClassName | `string` | `''` | 前置内容区域的 CSS 类名 |
| beforeStyle | `CSSProperties` | `{}` | 前置内容区域的内联样式 |
| afterClassName | `string` | `''` | 后置内容区域的 CSS 类名 |
| afterStyle | `CSSProperties` | `{}` | 后置内容区域的内联样式 |
| contentClassName | `string` | `''` | 主内容区域的 CSS 类名 |
| contentStyle | `CSSProperties` | `{}` | 主内容区域的内联样式 |
| beforeShow | `boolean` | `false` | 是否显示前置内容 |
| afterShow | `boolean` | `false` | 是否显示后置内容 |
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | 滑动方向 |
| before | `() => ReactElement \| null` | `undefined` | 前置内容渲染函数 |
| after | `() => ReactElement \| null` | `undefined` | 后置内容渲染函数 |
| duration | `number` | `0` | 滑动动画持续时间（毫秒） |
| onInit | `() => void` | `undefined` | Swiper 初始化完成回调 |
| slideChangeTransitionStart | `(activeIndex?: number) => void` | `undefined` | 滑动开始过渡回调 |
| slideChangeTransitionEnd | `(activeIndex?: number) => void` | `undefined` | 滑动结束过渡回调 |
| children | `ReactNode` | `undefined` | 主内容 |

## 滑动状态说明

组件根据 `beforeShow` 和 `afterShow` 的组合状态自动决定显示哪个 slide：

- `[true, true]` 或 `[false, false]`: 显示主内容 (slide index: 1)
- `[true, false]`: 显示前置内容 (slide index: 0)
- `[false, true]`: 显示后置内容 (slide index: 2)

## 高级用法

### 垂直滑动

```tsx
<SwipeOut
  direction="vertical"
  beforeShow={true}
  before={() => <div>上滑内容</div>}
  after={() => <div>下滑内容</div>}
>
  <div>主内容</div>
</SwipeOut>
```

### 自定义动画时长

```tsx
<SwipeOut
  duration={500}
  beforeShow={true}
  before={() => <div>前置内容</div>}
>
  <div>主内容</div>
</SwipeOut>
```

### 自定义样式

```tsx
<SwipeOut
  className="custom-swipeout"
  beforeClassName="custom-before"
  afterClassName="custom-after"
  contentClassName="custom-content"
  beforeShow={true}
  afterShow={true}
  before={() => <div>前置内容</div>}
  after={() => <div>后置内容</div>}
>
  <div>主内容</div>
</SwipeOut>
```

## 注意事项

1. 组件需要容器有明确的宽高，建议设置 `width` 和 `height` 样式
2. 前置和后置内容建议设置合适的宽度，避免影响主内容的显示
3. 组件基于 Swiper 实现，确保项目中已正确引入 Swiper 的 CSS 样式
4. 在组件卸载时会自动清理 Swiper 实例，无需手动处理

## 类型定义

```tsx
import type { SwipeOutProps, SwiperRef, SlideStateMap } from '@baifendian/adhere-ui-swipeout';
```

## 许可证

MIT

