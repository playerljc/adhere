拖拽行进行排序

行的配置(RowDragSortConfig)

单元格的配置(ColumnRowDragSortConfig)

## 拖拽模式（dragSortType）

支持两种拖拽模式（仅在同一层级兄弟节点之间生效）：

- `swap`（默认）：拖拽行与目标行的字段内容互换，行的物理位置不动；落点时（drop）才执行。
- `sort`：实时换位。在拖拽过程中（hover 阶段）鼠标越过悬停行的垂直中线就立即触发一次位置交换，被影响的兄弟行同步顺移，给出"边拖边排"的视觉反馈。

### 解析顺序

drop / hover 时按以下顺序解析有效模式：

1. 行级 `RowDragSortConfig.dragSortType`（由 `onDragSortRow` 返回）
2. 表级 `getDragSortType()` 的返回值
3. 默认 `'swap'`

### sort 模式细节

- hover 阶段：使用中线检测避免抖动，使用异步锁避免 dispatch / setState 未完成时被重复触发。
- drop 阶段：数据已在 hover 时就位，**不会再次调用 `moveRow`**，但 `dropHooks.drop` 仍会被触发。
- 视觉提示：sort 模式不再叠加 `dropOverDownward` / `dropOverUpward` 上下边线（行已物理位移）。

### 交换/排序完成后调用接口（Hook/覆写点）

目前提供的 `RowDragSortConfig.dropHooks.drop` 是 **drop 落点** 回调，并不等价于“交换完成后”：

- **swap 模式**：`dropHooks.drop` 发生在 `moveRow` 之前（交换尚未执行）。
- **sort 模式**：排序在 hover 阶段已完成，drop 阶段只会触发 `dropHooks.drop`（适合在这里提交最终顺序到服务端）。

如果你需要一个统一的“交换/排序完成后”时机，推荐覆写表格类的 `moveRow`，在 `super.moveRow(...)` 完成后调接口：

```tsx
async moveRow(dragRecord, hoverRecord, dragSortType) {
  await super.moveRow(dragRecord, hoverRecord, dragSortType);
  await api.saveOrder(this.getData());
}
```

### sort 模式视觉增强

sort 模式默认启用四项 Sortable 风格视觉反馈：

| 效果 | 实现 |
| --- | --- |
| 被拖动行 ghost | `<tr>` 加 `…-row-drag-sort-dragging` 类，opacity 变低 + 浅色背景 |
| 行换位平滑动画 | FLIP：moveRow 前后测量 `tr` rect，对位置变化的行 transform 过渡 200ms（被拖动行除外） |
| 悬停目标行高亮 | `isOver` 时 `<tr>` 加 `…-row-drag-sort-hover-target` 类，td 背景色加深 |
| 全局 grabbing | `<DragGlobalEffect/>` 监听 `useDragLayer` 的 isDragging，给 `body` 切换 `…-row-drag-sort-grabbing` 类 |

每行 `<tr>` 在 sort 模式下会附加 `data-row-drag-sort-key="<rowKey 值>"`，供 FLIP 在重渲染前后追踪同一行使用。

可通过 CSS 变量自定义：

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `--row-drag-sort-dragging-opacity` | `0.35` | 被拖动行 opacity |
| `--row-drag-sort-dragging-bg` | `rgba(primary, 0.04)` | 被拖动行背景 |
| `--row-drag-sort-hover-target-bg` | `rgba(primary, 0.08)` | 悬停目标行 td 背景 |

### 类型声明

```ts
export type RowDragSortType = 'swap' | 'sort';

export interface RowDragSortConfig {
  // 行级覆盖；优先级高于表级 getDragSortType()
  dragSortType?: RowDragSortType;
  override?: { ... };
  dropHooks?: { ... };
}
```
