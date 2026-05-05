行拖拽的排序

## 拖拽模式（dragSortType）

行拖拽支持两种模式：

- `swap`（默认）：拖拽行与目标行的字段内容互换，行的物理位置不动；落点时（drop）才生效。
- `sort`：实时换位。拖拽过程中（hover 阶段）鼠标越过悬停行的垂直中线即触发一次位置交换，被影响的兄弟行立即顺移；drop 时数据已就位，不再二次重排。

仅在同一层级（兄弟节点）之间生效。

## 表级 override（推荐）

```tsx
class MyTable extends ProSearchRowDragSortStateTable {
  getDragSortType() {
    return 'sort';
  }
}
```

## 行级 override

```tsx
onDragSortRow(params) {
  return { dragSortType: 'sort' };
}
```

行级优先级高于表级，最终回退到 `'swap'`。

## moveRow 第 3 参

`moveRow(dragRecord, hoverRecord, dragSortType?)` 第 3 参为可选，未传时使用 `this.getDragSortType()` 的返回值；外部直接调用旧签名 `moveRow(a, b)` 行为保持不变。

sort 模式下 `moveRow` 由 hover 实时调用，并在内部使用异步锁，防止 dispatch / setState 期间被重复触发同一次换位。

## sort 模式视觉效果

sort 模式下默认开启以下 Sortable 风格的视觉反馈：

- 被拖动行 ghost：`opacity` 变低 + 浅色背景。
- 行换位平滑动画：基于 FLIP（First / Last / Invert / Play），被影响的兄弟行 200ms 平移过渡，被拖动的那一行不参与 transform 以避免影响 react-dnd 的命中检测。
- 悬停目标行高亮：当前 hover 落点行的背景色变深。
- 全局 grabbing 光标：拖拽期间整个文档使用 `cursor: grabbing` 并禁止文本选中。

可通过 CSS 变量自定义：

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `--row-drag-sort-dragging-opacity` | `0.35` | 被拖动行 opacity |
| `--row-drag-sort-dragging-bg` | `rgba(primary, 0.04)` | 被拖动行背景 |
| `--row-drag-sort-hover-target-bg` | `rgba(primary, 0.08)` | 悬停目标行 td 背景 |

swap 模式不附加上述 className，行为零变化。
