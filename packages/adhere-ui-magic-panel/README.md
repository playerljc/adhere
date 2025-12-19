# @baifendian/adhere-ui-magic-panel

## 简介

魔法面板（MagicPanel）是一个功能强大的响应式面板组件，能够根据容器尺寸变化自动调整内部元素的位置和大小。它特别适用于需要在不同屏幕尺寸下保持元素相对位置的场景，如数据可视化大屏、交互式地图标注等。

## ✨ 特性

- 📱 **响应式布局** - 自动根据容器尺寸变化调整内部元素
- 🎯 **精确定位** - 基于原始坐标系自动计算新的元素位置和尺寸
- ✂️ **裁剪路径支持** - 支持 CSS clip-path 的所有裁剪形状（polygon、circle、ellipse、inset、path 等）
- 🔄 **实时监听** - 使用 ResizeObserver 实时监听容器尺寸变化
- 🎨 **灵活渲染** - 支持自定义渲染函数，完全控制内容展示
- 📦 **TypeScript** - 完整的类型定义支持
- 🌍 **国际化** - 支持国际化配置
- 🎭 **主题定制** - 支持修改主题
- 🚀 **按需加载** - 支持动态引入（babel-plugin-import）

## 🖥 兼容环境

- 现代浏览器
- Internet Explorer 11+

## 📦 安装

```bash
npm install @baifendian/adhere-ui-magic-panel --save
```

或使用 yarn：

```bash
yarn add @baifendian/adhere-ui-magic-panel
```

## 🔗 在线示例

[https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/magicpanel](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/magicpanel)

## 📖 快速开始

### 基础用法

```tsx
import React from 'react';
import MagicPanel from '@baifendian/adhere-ui-magic-panel';
import '@baifendian/adhere-ui-magic-panel/lib/index.css';

export default () => {
  return (
    <MagicPanel
      metaData={{
        elementsInfo: [
          { x: 99, y: 73, width: 45, height: 30, attrs: { type: '1' } },
          { x: 144, y: 202, width: 33, height: 27, attrs: { type: '2' } },
        ],
        originWidth: 740,
        originHeight: 317,
      }}
      renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
    >
      {(bodyElement, elements) => (
        <>
          {bodyElement}
          {elements?.map(({ x, y, width, height, attrs }) => (
            <div
              key={attrs.type}
              style={{
                border: '1px solid #ccc',
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: `${width}px`,
                height: `${height}px`,
              }}
              onClick={() => {
                console.log(x, y, width, height, attrs);
              }}
            />
          ))}
        </>
      )}
    </MagicPanel>
  );
};
```

### 使用 items 属性

使用 `items` 属性可以更优雅地定义面板项目：

```tsx
import React from 'react';
import MagicPanel from '@baifendian/adhere-ui-magic-panel';

const metaData = {
  elementsInfo: [
    { x: 99, y: 73, width: 45, height: 30, attrs: { type: '1' } },
    { x: 144, y: 202, width: 33, height: 27, attrs: { type: '2' } },
  ],
  originWidth: 740,
  originHeight: 317,
};

export default () => {
  const items = metaData.elementsInfo.map(({ attrs }) => ({
    key: attrs.type,
    children: ({ x, y, width, height, attrs }) => (
      <div
        style={{
          border: '1px solid #ccc',
          height: '100%',
        }}
        onClick={() => {
          console.log(x, y, width, height, attrs);
        }}
      />
    ),
  }));

  return (
    <MagicPanel
      metaData={metaData}
      renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
      items={items}
    >
      {(bodyElement, elements, items) => (
        <>
          {bodyElement}
          {items}
        </>
      )}
    </MagicPanel>
  );
};
```

### 使用裁剪路径

支持复杂的 clip-path 裁剪效果：

```tsx
import React from 'react';
import MagicPanel from '@baifendian/adhere-ui-magic-panel';

const metaData = {
  elementsInfo: [
    { x: 517, y: 134, width: 495, height: 65, attrs: { type: '1' } },
  ],
  originWidth: 1576.36,
  originHeight: 1147,
  clip: {
    type: 'basic-shape',
    shape: {
      type: 'polygon',
      fillRule: 'nonzero',
      points: [
        { x: 517, y: 134 },
        { x: 1012, y: 134 },
        { x: 1012, y: 199 },
        { x: 1397, y: 199 },
        { x: 1397, y: 915 },
        { x: 347, y: 915 },
        { x: 289, y: 814 },
        { x: 200, y: 759 },
        { x: 200, y: 199 },
        { x: 517, y: 199 },
      ],
    },
  },
};

export default () => {
  const items = metaData.elementsInfo.map(({ attrs }) => ({
    key: attrs.type,
    children: ({ x, y, width, height, attrs }) => (
      <div
        style={{
          border: '1px solid #ccc',
          height: '100%',
          backgroundColor: 'yellow',
        }}
        onClick={() => {
          console.log(x, y, width, height, attrs);
        }}
      />
    ),
  }));

  return (
    <MagicPanel
      metaData={metaData}
      renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
      renderClip={() => {
        return <div style={{ backgroundColor: 'red', height: '100%' }}></div>;
      }}
      items={items}
    >
      {(bodyElement, elements, items) => (
        <>
          {bodyElement}
          {items}
        </>
      )}
    </MagicPanel>
  );
};
```

## 📚 API

### MagicPanel Props

| 属性 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| metaData | 元数据，包含原始元素信息和尺寸 | `MetaData` | - | 否 |
| renderBody | 渲染主体内容的函数 | `(ref: RefObject<HTMLElement \| null>) => ReactElement` | - | 是 |
| renderClip | 渲染裁剪区域内容的函数 | `() => ReactElement` | - | 否 |
| items | 面板项目配置数组 | `Item[]` | - | 否 |
| children | 自定义渲染函数 | `(bodyElement: ReactElement, newElements: ElementInfo[], items?: ReactElement[]) => ReactNode` | - | 否 |
| onChange | 元素信息变化时的回调函数 | `(elements: ElementInfo[]) => void` | - | 否 |
| className | 容器的 CSS 类名 | `string` | - | 否 |
| style | 容器的内联样式 | `CSSProperties` | - | 否 |

### MetaData

元数据接口定义：

```typescript
interface MetaData {
  /** 原始元素信息数组 */
  elementsInfo: ElementInfo[];
  /** 原始宽度 */
  originWidth: number;
  /** 原始高度 */
  originHeight: number;
  /** 裁剪路径配置 */
  clip?: Clip;
}
```

### ElementInfo

元素信息接口：

```typescript
interface ElementInfo {
  /** 元素的 X 坐标（像素） */
  x: number;
  /** 元素的 Y 坐标（像素） */
  y: number;
  /** 元素的宽度（像素） */
  width: number;
  /** 元素的高度（像素） */
  height: number;
  /** 元素的额外属性 */
  attrs?: Record<string, string>;
}
```

### Item

面板项目配置接口：

```typescript
interface Item {
  /** 项目的唯一标识符 */
  key: string;
  /** 项目的 CSS 类名 */
  className?: string;
  /** 项目的内联样式 */
  style?: CSSProperties;
  /** 项目的渲染函数，接收元素信息参数 */
  children?: (params: ElementInfo) => ReactNode;
}
```

### Clip 裁剪路径类型

支持多种裁剪路径配置：

```typescript
type Clip =
  | { type: 'none' }
  | { type: 'basic-shape'; shape: BasicShape; geometryBox?: GeometryBox }
  | { type: 'geometry-box'; geometryBox: GeometryBox }
  | { type: 'url'; url: string }
  | { type: 'basic-shape-and-geometry-box'; shape: BasicShape; geometryBox: GeometryBox };
```

#### BasicShape 基础形状

支持以下形状类型：

##### InsetShape - 矩形裁剪

```typescript
interface InsetShape {
  type: 'inset';
  top: LengthValue;
  right?: LengthValue;
  bottom?: LengthValue;
  left?: LengthValue;
  round?: string; // 圆角半径
}
```

##### CircleShape - 圆形裁剪

```typescript
interface CircleShape {
  type: 'circle';
  radius?: LengthValue | 'closest-side' | 'farthest-side';
  position?: string; // 例如: 'at 50% 50%', 'at center'
}
```

##### EllipseShape - 椭圆裁剪

```typescript
interface EllipseShape {
  type: 'ellipse';
  radiusX?: LengthValue | 'closest-side' | 'farthest-side';
  radiusY?: LengthValue | 'closest-side' | 'farthest-side';
  position?: string;
}
```

##### PolygonShape - 多边形裁剪

```typescript
interface PolygonShape {
  type: 'polygon';
  fillRule?: 'nonzero' | 'evenodd';
  points: Array<{ x: LengthValue; y: LengthValue }>;
}
```

##### PathShape - SVG 路径裁剪

```typescript
interface PathShape {
  type: 'path';
  fillRule?: 'nonzero' | 'evenodd';
  d: string; // SVG 路径数据
}
```

## 🛠 工具函数

### calculateNewElementsInfo

计算新的元素信息：

```typescript
function calculateNewElementsInfo(params: CalculateElementsParams): ElementInfo[];

interface CalculateElementsParams {
  elementsInfo: ElementInfo[];
  widthOrigin: number;
  heightOrigin: number;
  widthNew: number;
  heightNew: number;
}
```

**使用示例：**

```typescript
import { calculateNewElementsInfo } from '@baifendian/adhere-ui-magic-panel';

const newElements = calculateNewElementsInfo({
  elementsInfo: [{ x: 100, y: 100, width: 50, height: 50 }],
  widthOrigin: 800,
  heightOrigin: 600,
  widthNew: 400,
  heightNew: 300,
});
```

### calculateNewClip

计算新的裁剪路径信息：

```typescript
function calculateNewClip(params: CalculateClipParams): Clip;

interface CalculateClipParams {
  clip: Clip;
  widthOrigin: number;
  heightOrigin: number;
  widthNew: number;
  heightNew: number;
}
```

### scaleLengthValue

缩放长度值：

```typescript
function scaleLengthValue(value: LengthValue, scale: number): LengthValue;

type LengthValue = string | number;
```

**使用示例：**

```typescript
import { scaleLengthValue } from '@baifendian/adhere-ui-magic-panel';

scaleLengthValue(100, 0.5); // 50
scaleLengthValue('100px', 0.5); // '50px'
scaleLengthValue('50%', 0.5); // '50%' (百分比不变)
```

### scaleBasicShape

缩放基础形状：

```typescript
function scaleBasicShape(
  shape: BasicShape,
  scaleX: number,
  scaleY: number
): BasicShape;
```

### scaleSvgPath

缩放 SVG 路径数据：

```typescript
function scaleSvgPath(pathData: string, scaleX: number, scaleY: number): string;
```

## 🔧 ClipPathConverter 工具类

将 Clip 对象转换为 CSS clip-path 字符串：

```typescript
import { ClipPathConverter } from '@baifendian/adhere-ui-magic-panel';

const clipCSS = ClipPathConverter.toCSS({
  type: 'basic-shape',
  shape: {
    type: 'circle',
    radius: '50%',
    position: 'at center',
  },
});
// 输出: 'circle(50% at center)'
```

## 🎯 使用场景

### 1. 数据可视化大屏

在大屏可视化中，需要在不同分辨率下保持元素的相对位置：

```tsx
<MagicPanel
  metaData={{
    elementsInfo: [
      // 图表位置信息
    ],
    originWidth: 1920,
    originHeight: 1080,
  }}
  renderBody={(ref) => <div ref={ref} className="dashboard-bg" />}
>
  {(bodyElement, elements) => (
    <>
      {bodyElement}
      {elements.map((el) => (
        <Chart key={el.attrs.id} {...el} />
      ))}
    </>
  )}
</MagicPanel>
```

### 2. 交互式地图标注

在地图上标注多个可交互的热点区域：

```tsx
<MagicPanel
  metaData={{
    elementsInfo: hotspots,
    originWidth: mapWidth,
    originHeight: mapHeight,
  }}
  renderBody={(ref) => <img ref={ref} src={mapImage} />}
  items={hotspots.map((spot) => ({
    key: spot.attrs.id,
    children: () => <HotspotMarker {...spot} />,
  }))}
/>
```

### 3. 不规则裁剪区域

使用 clip-path 创建不规则的可视区域：

```tsx
<MagicPanel
  metaData={{
    elementsInfo: [],
    originWidth: 1600,
    originHeight: 1200,
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'polygon',
        points: [
          // 不规则多边形顶点
        ],
      },
    },
  }}
  renderBody={(ref) => <div ref={ref} className="content" />}
  renderClip={() => <div className="clipped-area" />}
/>
```

## 📋 类型定义

完整的类型定义请参考：

```typescript
export type {
  Item,
  ElementInfo,
  MetaData,
  ComputeElementsInfoData,
  ComputeClipData,
  MagicPanelProps,
  Clip,
  BasicShape,
  InsetShape,
  CircleShape,
  EllipseShape,
  PolygonShape,
  PathShape,
  GeometryBox,
  LengthValue,
  CalculateElementsParams,
  CalculateClipParams,
} from '@baifendian/adhere-ui-magic-panel';
```

## ⚙️ 高级配置

### 自定义样式

可以通过 `className` 和 `style` 属性自定义容器样式：

```tsx
<MagicPanel
  className="custom-magic-panel"
  style={{ border: '1px solid #ddd', borderRadius: '8px' }}
  // ... 其他属性
/>
```

### 监听尺寸变化

通过 `onChange` 回调函数监听元素信息变化：

```tsx
<MagicPanel
  metaData={metaData}
  renderBody={renderBody}
  onChange={(elements) => {
    console.log('元素信息已更新:', elements);
    // 可以在这里做一些额外的处理
  }}
/>
```

## 🔍 注意事项

1. **ResizeObserver 支持**：组件内部使用 ResizeObserver API，确保目标浏览器支持该 API，或使用 polyfill。

2. **性能优化**：对于包含大量元素的场景，建议使用 `items` 属性而不是手动渲染，以获得更好的性能。

3. **坐标系统**：所有坐标和尺寸都是基于像素单位，确保 `metaData` 中的数据准确。

4. **裁剪路径兼容性**：某些复杂的 clip-path 在旧版浏览器中可能不支持，请根据目标浏览器选择合适的裁剪方式。

5. **ref 的正确使用**：`renderBody` 函数接收的 ref 必须正确传递给实际的 DOM 元素，否则尺寸监听将无法工作。

## 📄 许可证

ISC

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 作者：playerljc
- 仓库：[https://github.com/playerljc/adhere](https://github.com/playerljc/adhere)
- Issues：[https://github.com/playerljc/adhere/issues](https://github.com/playerljc/adhere/issues)

## 🔗 相关链接

- [在线文档](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/magicpanel)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [NPM 包](https://www.npmjs.com/package/@baifendian/adhere-ui-magic-panel)
