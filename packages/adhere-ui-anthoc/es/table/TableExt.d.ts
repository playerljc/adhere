import { type FC } from 'react';
import type { TableExtProps } from '../types';
/**
 * TableExt
 *
 * @description Ant Design Table 增强封装，主要能力：
 * 1. 固定表头高度自适应（`fixedHeaderAutoTable`）：根据容器高度计算 `scroll.y`
 * 2. 列宽按内容测算：支持 `width: {}` / `width: { minWidth, maxWidth, ... }`
 * 3. 虚拟滚动兼容（`virtual: true`）：将列宽规范为 number，并设置数值 `scroll.x` + `tableLayout: 'fixed'`
 *
 * @remarks
 * ## 为何要把列宽「钉死」为明确的 width
 * 开启固定表头 / 固定列时，antd 会把表头、表体拆成多张 `<table>`。
 * 它们共用同一份 columns 配置，但若某列没有有效 `width`（只有 minWidth 或测算失败），
 * 浏览器会在各表内按该表内容各自撑开 → 表头按 title、表体按 cell，横向滚动易错位。
 * 因此本组件在可测算时会把结果写回 `column.width`（定宽），保证多表共用同一套列宽。
 *
 * ## virtual 额外约束（antd）
 * - 列宽必须是 number（不能是 `"200px"` / rem）
 * - `scroll.x` / `scroll.y` 必须是 number
 * - 建议 `tableLayout: 'fixed'`
 *
 * ## 列宽配置示例
 * ```ts
 * width: 120
 * width: {}                                    // 按表头+单元格内容测算
 * width: { minWidth: 100, maxWidth: 300 }      // 测算后用 min/max 夹逼，再写成定宽 width
 * ```
 * ReactNode 表头需配 `titleToString`；自定义 `render` 建议配 `renderToString`，否则测量可能不准。
 */
declare const TableExt: FC<TableExtProps>;
export default TableExt;
