# RevolvingTable 轮播表格

基于 [Swiper](https://swiperjs.com/) 的纵向轮播表格组件：表头固定，表体以垂直轮播方式展示数据行，适用于大屏看板、数据滚动展示等场景。

## 功能特性

- 表头 + 表体分离布局，表体纵向自动轮播
- 列配置与 Table 类似（`columns` / `dataSource` / `render`）
- 内置自动播放、鼠标滚轮切换（`Autoplay` + `Mousewheel` 模块）
- 数据条数不少于 `slidesPerView` 时自动开启 `loop`（可通过 `revolvingConfig` 覆盖）
- 支持 `small` / `middle` / `large` 三种尺寸
- 支持奇偶行异色（`parity`）
- 支持表头/表体前后插槽渲染
- 空数据时展示内置 `Empty` 或自定义空状态
- 集成 `ConfigProvider` 主题与响应式 `media`（列宽数值/rem 转换）
- 支持 `ref` 转发至底层 `Swiper` 实例（`SwiperRef`）
- 支持 `defaultProps` / `override` 工厂方法（与 anthoc 其他组件一致）

## 安装依赖

组件已随 `@baifendian/adhere-ui-anthoc` 发布。使用前需引入样式（包入口样式已包含本组件）：

```tsx
import { RevolvingTable } from '@baifendian/adhere-ui-anthoc';
import '@baifendian/adhere-ui-anthoc/es/index.less';
```

## 基础用法

```tsx
import React from 'react';
import { RevolvingTable } from '@baifendian/adhere-ui-anthoc';
import '@baifendian/adhere-ui-anthoc/es/index.less';

const columns = [
  { dataIndex: 'name', key: 'name', title: '姓名', width: 200, align: 'center' },
  { dataIndex: 'age', key: 'age', title: '年龄', ellipsis: true },
  { dataIndex: 'address', key: 'address', title: '地址' },
];

const dataSource = [
  { id: '1', name: '张三', age: 28, address: '北京市' },
  { id: '2', name: '李四', age: 32, address: '上海市' },
];

export default () => (
  <RevolvingTable
    style={{ height: 300 }}
    rowKey="id"
    columns={columns}
    dataSource={dataSource}
    parity
    revolvingConfig={{
      slidesPerView: 3,
      spaceBetween: 16,
    }}
  />
);
```

## 轮播行为说明

组件内部对 Swiper 做了如下默认配置（可通过 `revolvingConfig` 合并覆盖）：

| 行为 | 默认值 | 说明 |
| --- | --- | --- |
| `direction` | `'vertical'` | 纵向轮播，固定不可通过 props 关闭 |
| `slidesPerView` | `5` | 可视区域内同时显示的行数 |
| `loop` | `dataSource.length >= slidesPerView` | 数据不足一屏时不循环；可在 `revolvingConfig` 中显式设置 |
| `mousewheel` | `{ releaseOnEdges: true, sensitivity: 1 }` | 滚轮切换，边缘释放 |
| `autoplay` | `{ pauseOnMouseEnter: true, disableOnInteraction: true }` | 悬停暂停，交互后停止自动播放 |
| `modules` | `[Autoplay, Mousewheel]` | 已注册模块，一般无需修改 |

示例：关闭循环、自定义可视行数与行间距：

```tsx
<RevolvingTable
  revolvingConfig={{
    loop: false,
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 800,
  }}
  // ...
/>
```

更多 Swiper 配置见 [SwiperOptions](https://swiperjs.com/swiper-api#parameters)。

## 插槽渲染

| 属性 | 说明 |
| --- | --- |
| `renderHeaderBefore` | 表头区域之前渲染 |
| `renderHeaderAfter` | 表头区域之后渲染 |
| `renderBodyBefore` | 表体区域之前渲染 |
| `renderBodyAfter` | 表体区域之后渲染 |
| `renderEmpty` | 无数据时的自定义内容，默认使用 anthoc `Empty` |

## 列宽与对齐

- `width` 为 `number` 或带 `%` 的 `string` 时：固定宽度；数值会经 `ConfigProvider.media` 做 rem 适配（开启 `isUseMedia` 时）。
- 未设置 `width` 时：列 `flex: 1` 均分剩余空间。
- `align`：`'left' \| 'center' \| 'right'`，同时作用于 flex 对齐与文本对齐。
- `ellipsis`：超出省略，表头单元格支持 `tooltip` 作为 `title` 提示。

## 工厂方法

与其他 anthoc 组件相同，支持全局默认 props 与异步覆盖：

```tsx
// 设置全局默认属性
RevolvingTable.defaultProps = {
  size: 'small',
  revolvingConfig: { slidesPerView: 4 },
};

// 异步覆盖（如按权限、配置中心下发）
RevolvingTable.override = async (props) => ({
  ...props,
  parity: true,
});
```

## API

### RevolvingTableProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 根节点类名 | `string` | - |
| style | 根节点样式，建议设置 `height` 以限定轮播区域 | `CSSProperties` | - |
| headerClassName | 表头类名 | `string` | - |
| headerStyle | 表头样式 | `CSSProperties` | - |
| bodyClassName | 表体类名 | `string` | - |
| bodyStyle | 表体样式 | `CSSProperties` | - |
| rowKey | 行唯一键字段名 | `string` | `'id'` |
| columns | 列定义 | `RevolvingTableColumn[]` | - |
| dataSource | 数据源 | `T[]` | `[]` |
| revolvingConfig | Swiper 配置，与内置默认值 `merge` | `SwiperOptions` | `{ slidesPerView: 5 }` |
| size | 尺寸 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| parity | 是否启用奇偶行背景色 | `boolean` | `false` |
| renderHeaderBefore | 表头前插槽 | `() => ReactNode` | - |
| renderHeaderAfter | 表头后插槽 | `() => ReactNode` | - |
| renderBodyBefore | 表体前插槽 | `() => ReactNode` | - |
| renderBodyAfter | 表体后插槽 | `() => ReactNode` | - |
| renderEmpty | 空状态自定义渲染 | `() => ReactNode` | 内置 `Empty` |

`ref` 类型为 `SwiperRef`，可调用 `swiper.slideNext()` 等方法。

> 类型中另有 `renderBodyScrollBefore` / `renderBodyScrollAfter`，当前版本尚未在组件内挂载，请勿使用。

### RevolvingTableColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列 key（表头 `li` 的 React key） | `string` | - |
| dataIndex | 字段名 | `string` | - |
| title | 表头标题 | `ReactNode` | - |
| width | 列宽，数字或百分比字符串 | `number \| string` | 均分 |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| ellipsis | 是否省略超出内容 | `boolean` | `false` |
| tooltip | 表头 `title` 提示文案 | `string` | - |
| render | 自定义单元格渲染 | `(value, record, rowIndex) => ReactNode` | 取 `record[dataIndex]` |

## 样式定制

根类名为 `adhere-ui-anthoc-revolving-table`，尺寸与奇偶行修饰类：

- `adhere-ui-anthoc-revolving-table-size-small|middle|large`
- `adhere-ui-anthoc-revolving-table-parity`

可通过 CSS 变量覆盖（节选）：

| 变量 | 说明 |
| --- | --- |
| `--header-cell-text-color` | 表头文字色 |
| `--header-cell-bg` | 表头背景色 |
| `--header-split-color` | 表头分隔线色 |
| `--body-cell-text-color` | 表体文字色 |
| `--body-cell-bg` | 表体单元格背景 |
| `--body-odd-row-bg` | 奇数行背景（`parity` 时） |
| `--revolving-table-header-cell-color` | 表头文字色（优先级更高） |
| `--revolving-table-header-cell-background-color` | 表头背景色（优先级更高） |
| `--revolving-table-row-cell-background-color` | 奇数行单元格背景（`parity`） |
| `--size-*-revolving-table-header-cell-padding` | 各尺寸表头内边距 |
| `--size-*-revolving-table-row-cell-padding` | 各尺寸表体内边距 |

组件挂载在 `ConfigProvider` 下时会应用 `normal-hoc` 主题分组。

## 目录结构

```
revolving-table/
├── index.ts                 # 导出入口
├── RevolvingTable.tsx       # createFactory 包装
├── InternalRevolvingTable.tsx  # 核心实现
├── index.less               # 样式（含 swiper less）
└── README.md
```

## 注意事项

1. **容器高度**：表体使用 `flex: 1` 占满剩余空间，父级需有明确高度（如 `style={{ height: 300 }}`），否则轮播区域可能无法正确计算高度。
2. **循环与数据量**：默认仅在 `dataSource.length >= slidesPerView` 时开启 `loop`；数据较少时建议在 `revolvingConfig` 中设置 `loop: false`。
3. **行 key**：请保证 `rowKey` 对应字段在每条记录中唯一，默认使用 `'id'`。
4. **样式依赖**：依赖 `swiper` 的 less 入口，请确保构建链路能解析 `~swiper/less` 别名。

## 本地示例

可参考 e2e 示例：`packages/adhere-ui-anthoc/e2e/RevolvingTable/normal.jsx`。
