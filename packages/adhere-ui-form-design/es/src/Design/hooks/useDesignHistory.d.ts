import type { Dispatch } from 'react';
import type { DesignValue } from '../../types';
import type { DesignValueAction } from '../DesignValueReducer';
/**
 * useDesignHistory 入参
 */
export type UseDesignHistoryOptions = {
    /** 读取当前设计树（用于快照与 undo/redo 时取当前态） */
    getDesignValue: () => DesignValue | undefined;
    /** 读取当前选中的字段 id（恢复快照后校验是否仍存在） */
    getActiveFieldId: () => string | null | undefined;
    /** 设计值 reducer 的 dispatch，undo/redo 通过 replaceDesignValue 整树替换 */
    dispatch: Dispatch<DesignValueAction>;
    /** 当选中项在恢复后的树中不存在时，清除选中 */
    setActiveFieldId: (id: string | undefined) => void;
    /** 历史栈最大长度，默认 50 */
    maxLength?: number;
    /** 防抖入栈间隔，默认 300ms */
    debounceMs?: number;
};
/**
 * useDesignHistory
 * @description 表单设计器设计树的 undo/redo 历史管理（双栈模型）
 *
 * ## 数据模型
 * - **past**：已发生变更之前的快照序列，栈顶为「上一步」可恢复到的状态
 * - **future**：undo 之后被丢弃的状态序列，栈顶为 redo 目标
 * - 任意**新编辑**（recordBeforeChange 成功入栈）会清空 future
 *
 * ## 入栈策略
 * 1. **immediate: true**（结构类操作：拖拽添加、删除、交换、重置等）
 *    - 先 flush 未提交的防抖快照，再把**当前** designValue 立即 push 到 past
 * 2. **immediate: false**（属性面板 onFieldsChange 等高频变更）
 *    - 首次变更时记录 burstStartSnapshot = 当前树（编辑 burst 开始前的状态）
 *    - debounceMs 内连续变更共用一个 burstStart，定时器到期后仅 push 这一条到 past
 *    - 用户在中途按 undo 会先 flush，从而整段 burst 一次回退
 *
 * ## 与 Design/index.tsx 的配合
 * - 所有会改树的 dispatch 应经 commitDesignChange 调用 recordBeforeChange 后再 dispatch
 * - undo/redo 期间 isRestoringRef 为 true，recordBeforeChange 直接跳过，避免恢复操作本身写入历史
 *
 * @example
 * ```ts
 * const { recordBeforeChange, undo, redo, getCanUndo, getCanRedo } = useDesignHistory({
 *   getDesignValue: () => designValue,
 *   getActiveFieldId: () => activeFieldId,
 *   dispatch,
 *   setActiveFieldId,
 * });
 *
 * function commitDesignChange(action, options) {
 *   recordBeforeChange(options?.immediate);
 *   dispatch(action);
 * }
 * ```
 */
export declare function useDesignHistory(options: UseDesignHistoryOptions): {
    /** 在 commitDesignChange 中、dispatch 前调用 */
    recordBeforeChange: (immediate?: boolean) => void;
    /** 手动刷入待处理的防抖快照（一般由 immediate / undo / redo 内部调用） */
    flushPending: () => void;
    undo: () => void;
    redo: () => void;
    getCanUndo: () => boolean;
    getCanRedo: () => boolean;
};
