# Glass 玻璃效果面板

基于多层渐变边框与 `backdrop-filter` 的毛玻璃容器，支持四角亮/暗独立配置、边框色与透明度拆分、圆角与边框宽度可调。

## 特性

- React 18+ / 19（`peerDependencies`：`react`、`react-dom` ≥18 且 &lt;20）
- TypeScript 类型完整，并导出 `GlassProps` 及相关类型
- 边框由 4 个角向心渐变 + 4 条边线性渐变拼成，亮暗由 `corners` 驱动
- `borderColor` 支持任意合法 CSS 颜色；透明度通过 `strongColorAlpha` / `mediumColorAlpha` / `lightColorAlpha` 控制（内部使用 `color-mix`）
- 根节点、遮罩层、内层可分别传入 `className` / `style`

## 兼容环境

- **建议**：支持 [CSS `color-mix`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/color-mix) 的现代浏览器（如 Chrome 111+、Safari 16.2+、Firefox 113+）
- **效果依赖**：`backdrop-filter`（毛玻璃）

## 安装

```bash
npm install @baifendian/adhere-ui-glass --save
```

```bash
yarn add @baifendian/adhere-ui-glass
```

## 引入样式

样式与类名在 `index.less` 中定义，构建后随包提供 `es/index.less` / `lib/index.less`，请在工程中引入其一，例如：

```tsx
import '@baifendian/adhere-ui-glass/es/index.less';
```

## 使用

### 默认导出

包**仅默认导出** `Glass` 组件（无 `ContourBlock`、`Ratio` 等子导出）。

```tsx
import Glass from '@baifendian/adhere-ui-glass';
import '@baifendian/adhere-ui-glass/es/index.less';
```

### 基础用法

根节点需要明确尺寸（如 `width` / `height`），否则内部按百分比计算时可能无法撑开。

```tsx
<Glass style={{ width: 320, height: 200 }}>
  <p>内容</p>
</Glass>
```

### 边框颜色与透明度

- **`borderColor`**：任意合法 CSS 颜色（`#fff`、`rgb()`、`hsl()`、颜色关键字、`lab()`、`var(--token)` 等）
- 未传时默认 `#fff`
- **`strongColorAlpha` / `mediumColorAlpha` / `lightColorAlpha`**：0～1，分别对应「亮角/强区」「边亮端」「暗角/暗区」的不透明度，默认依次为 `0.6`、`0.7`、`0.1`

```tsx
<Glass
  style={{ width: 300, height: 180 }}
  borderColor="dodgerblue"
  strongColorAlpha={0.55}
  mediumColorAlpha={0.65}
  lightColorAlpha={0.12}
>
  内容
</Glass>
```

### 四角亮暗（`corners`）

每个角可为 `light` 或 `dark`：

- **`light`**：使用 `borderColor` + `strongColorAlpha`
- **`dark`**：使用 `borderColor` + `lightColorAlpha`
- 边的渐变由相邻两角共同决定（同亮/同暗则整条边同色；一亮一暗则按参考示例的 stop 过渡）

未传 `corners` 时的默认分布与常见「对角亮、对角暗」一致：

- `leftTop` / `rightBottom`：`light`
- `rightTop` / `leftBottom`：`dark`

```tsx
<Glass
  style={{ width: 300, height: 180 }}
  corners={{
    leftTop: 'light',
    rightTop: 'dark',
    rightBottom: 'light',
    leftBottom: 'dark',
  }}
>
  内容
</Glass>
```

### 圆角与边框宽度

```tsx
<Glass borderWidth={3} borderRadius={20} style={{ width: 280, height: 160 }}>
  内容
</Glass>
```

传数字时按 **px** 写入 CSS 变量。

### 分层样式

| 属性 | 作用节点 |
| --- | --- |
| `className` / `style` | 最外层 `.adhere-ui-glass` |
| `boxClassName` / `boxStyle` | `.adhere-ui-glass-mask` |
| `boxInnerClassName` / `boxInnerStyle` | `.adhere-ui-glass-inner` |

### `autoHeight`

- 默认 `true`：内层会带 `adhere-ui-glass-inner-auto-height`，`overflow` 为 `inherit`，便于高度随内容增长
- `false`：内层 `overflow: auto`，适合固定高度区域内滚动

```tsx
<Glass autoHeight={false} style={{ width: 200, height: 200 }}>
  {/* 长内容可滚动 */}
</Glass>
```

### 其余 DOM 属性

除上述业务属性外，其余 props 会透传到最外层 `div`（与原生 `div` 一致，如 `id`、`data-*`、`onClick` 等）。

## 导出的 TypeScript 类型

```ts
import type {
  GlassProps,
  GlassCornerKey,
  GlassCornerMode,
  GlassCorners,
  GlassEdgeGradientDirection,
  GlassGradientStopPair,
  GlassRootCSSVars,
} from '@baifendian/adhere-ui-glass';
```

## API：`GlassProps`

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `className` | 根节点类名 | `string` | - |
| `style` | 根节点样式 | `CSSProperties` | - |
| `boxClassName` | 遮罩层类名 | `string` | - |
| `boxStyle` | 遮罩层样式 | `CSSProperties` | - |
| `boxInnerClassName` | 内层类名 | `string` | - |
| `boxInnerStyle` | 内层样式 | `CSSProperties` | - |
| `borderWidth` | 边框宽度 | `number \| string` | `2`（px） |
| `borderRadius` | 圆角 | `number \| string` | `15`（px） |
| `autoHeight` | 是否内层随内容增高 | `boolean` | `true` |
| `borderColor` | 边框基础色（任意 CSS 颜色） | `string` | `'#fff'` |
| `strongColorAlpha` | 亮角等透明度 | `number` | `0.6` |
| `mediumColorAlpha` | 边「亮」端透明度 | `number` | `0.7` |
| `lightColorAlpha` | 暗角等透明度 | `number` | `0.1` |
| `corners` | 四角亮/暗 | `GlassCorners` | 见上文默认 |
| `children` | 子节点 | `ReactNode` | - |

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `adhere-ui-glass` | 根容器 |
| `adhere-ui-glass-mask` | 边框渐变所在层（`::before` 绘制边框） |
| `adhere-ui-glass-inner` | 毛玻璃内容区（`backdrop-filter`） |
| `adhere-ui-glass-inner-auto-height` | `autoHeight === true` 时加在内层 |

根节点上会设置若干 CSS 变量（如 `--glass-border-color`、`--glass-border-background-image`、`--border-width` 等），与 `index.less` 配套使用。

## 实现说明

- 边框图样由组件计算为 `--glass-border-background-image`，在 `.adhere-ui-glass-mask::before` 中引用。
- 带透明度的颜色通过 `color-mix(in srgb, var(--glass-border-color) N%, transparent)` 生成，以便支持任意 `borderColor` 写法。
- 若需兼容极旧浏览器，需自行评估 `color-mix` 与 `backdrop-filter` 的降级策略。

## 相关链接

- [GitHub 仓库](https://github.com/playerljc/adhere)
