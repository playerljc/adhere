import React from 'react';
import type { TableRowComponentReducer } from '../../../types';
/**
 * DragSortRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
declare const DragSortRow: TableRowComponentReducer;
/**
 * DragGlobalEffect
 * @description 拖拽期间为 body 切换 grabbing className，实现全局 grabbing 光标 + 文本不可选。
 * 必须放在 DndProvider 内部使用（依赖 useDragLayer）。
 */
export declare const DragGlobalEffect: React.FC;
export default DragSortRow;
