import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dispatch } from 'react';
import clone from 'rfdc';

import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DesignValue } from '../../types';
import { findDesignValueById } from '../../utils';
import type { DesignValueAction } from '../DesignValueReducer';

/** 深拷贝设计树，与 DesignValueReducer 使用同一套 clone 策略 */
const cloneDesignValue = clone();

/** 撤销栈 / 重做栈各自最多保留的快照数量 */
const DEFAULT_MAX_LENGTH = 50;

/**
 * 属性面板等高频变更的防抖间隔（毫秒）。
 * 同一段连续编辑（如连续改 label）在停止输入 debounceMs 后，才将「编辑开始前」的快照写入 past。
 */
const DEFAULT_DEBOUNCE_MS = 300;

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
 * 对当前设计树做不可变快照，供 past/future 存储。
 * @param value 当前 designValue，undefined 时不入栈
 */
function snapshotDesignValue(value: DesignValue | undefined): DesignValue | undefined {
  if (!value) return undefined;
  return cloneDesignValue(value);
}

/**
 * 判断两个快照是否语义相同（用于栈顶去重，避免连续相同状态占满历史）。
 * @description 使用 JSON.stringify 比较，对大型设计树有一定开销，但实现简单且与业务结构一致
 */
function snapshotsEqual(a: DesignValue | undefined, b: DesignValue | undefined): boolean {
  if (!a || !b) return a === b;
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * 限制栈长度，超出时丢弃最旧的记录（保留栈尾最近的 maxLength 条）
 */
function trimStack(stack: DesignValue[], maxLength: number): DesignValue[] {
  if (stack.length <= maxLength) return stack;
  return stack.slice(stack.length - maxLength);
}

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
export function useDesignHistory(options: UseDesignHistoryOptions) {
  const {
    getDesignValue,
    getActiveFieldId,
    dispatch,
    setActiveFieldId,
    maxLength = DEFAULT_MAX_LENGTH,
    debounceMs = DEFAULT_DEBOUNCE_MS,
  } = options;

  /** 撤销栈：每项为某次操作**之前**的完整 DesignValue 快照 */
  const [past, setPast] = useState<DesignValue[]>([]);
  /** 重做栈：undo 时把当前态压入，redo 时弹出并恢复 */
  const [future, setFuture] = useState<DesignValue[]>([]);
  /**
   * 是否存在尚未 flush 到 past 的防抖编辑段。
   * 为 true 时 getCanUndo 也应为 true（用户可 undo 以放弃当前 burst 并回到 burst 开始前）
   */
  const [hasPendingBurst, setHasPendingBurst] = useState(false);

  /** undo/redo 恢复快照时为 true，禁止 recordBeforeChange 再次入栈 */
  const isRestoringRef = useRef(false);
  /** 当前防抖编辑段的「开始前」快照，仅 immediate: false 时使用 */
  const burstStartRef = useRef<DesignValue | undefined>(undefined);
  /** 防抖定时器 id，用于合并属性面板连续输入 */
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * 将快照压入 past，并清空 future（新分支编辑标准行为）
   * @param snapshot 变更前的设计树；与栈顶相同时跳过
   */
  const pushPast = useCallback(
    (snapshot: DesignValue | undefined) => {
      if (!snapshot) return;
      setPast((prev) => {
        const top = prev[prev.length - 1];
        if (top && snapshotsEqual(top, snapshot)) {
          return prev;
        }
        return trimStack([...prev, snapshot], maxLength);
      });
      setFuture([]);
    },
    [maxLength],
  );

  /**
   * 用快照整树替换当前 designValue（走 replaceDesignValue）
   * @description 恢复后若 activeFieldId 在新树中不存在则清除选中，避免属性面板指向已删节点
   */
  const applySnapshot = useCallback(
    (snapshot: DesignValue | undefined) => {
      if (!snapshot) return;
      isRestoringRef.current = true;
      dispatch({
        type: REDUCER_ACTION_TYPE.replaceDesignValue,
        payload: { designValue: cloneDesignValue(snapshot) },
      });
      isRestoringRef.current = false;

      const activeId = getActiveFieldId();
      if (activeId && !findDesignValueById(activeId, snapshot)) {
        setActiveFieldId(undefined);
      }
    },
    [dispatch, getActiveFieldId, setActiveFieldId],
  );

  /**
   * 立即提交尚未入 past 的防抖编辑段
   * @description 在 immediate 操作、undo、redo 前应调用，避免 burst 状态与栈不一致
   */
  const flushPending = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (burstStartRef.current) {
      pushPast(burstStartRef.current);
      burstStartRef.current = undefined;
      setHasPendingBurst(false);
    }
  }, [pushPast]);

  /**
   * 在实际 dispatch 修改设计树**之前**调用，记录可撤销点
   * @param immediate
   * - true：结构类单次操作，立即把当前树入 past（并先 flush 未提交的 burst）
   * - false / undefined：属性类高频变更，走防抖 burst 合并
   */
  const recordBeforeChange = useCallback(
    (immediate?: boolean) => {
      if (isRestoringRef.current) return;

      if (immediate) {
        flushPending();
        pushPast(snapshotDesignValue(getDesignValue()));
        return;
      }

      // 防抖段：仅第一次记录「编辑开始前」的快照
      if (!burstStartRef.current) {
        burstStartRef.current = snapshotDesignValue(getDesignValue());
        setHasPendingBurst(true);
      }

      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        debounceTimerRef.current = null;
        if (burstStartRef.current) {
          pushPast(burstStartRef.current);
          burstStartRef.current = undefined;
          setHasPendingBurst(false);
        }
      }, debounceMs);
    },
    [debounceMs, flushPending, getDesignValue, pushPast],
  );

  /**
   * 撤销一步：past 栈顶 → 当前画布；当前画布 → future 栈顶
   */
  const undo = useCallback(() => {
    if (isRestoringRef.current) return;

    // 若用户正在属性面板连续输入但未满 debounce，先固化 burst 起点再执行栈操作
    flushPending();

    const prevPast = past;
    if (prevPast.length === 0) return;

    const previous = prevPast[prevPast.length - 1];
    const current = snapshotDesignValue(getDesignValue());

    setPast(prevPast.slice(0, -1));

    if (current) {
      setFuture((prevFuture) => {
        const top = prevFuture[0];
        if (top && snapshotsEqual(top, current)) {
          return prevFuture;
        }
        return trimStack([current, ...prevFuture], maxLength);
      });
    }

    applySnapshot(previous);
  }, [applySnapshot, flushPending, getDesignValue, maxLength, past]);

  /**
   * 重做一步：future 栈顶 → 当前画布；当前画布 → past 栈顶
   */
  const redo = useCallback(() => {
    if (isRestoringRef.current) return;

    flushPending();

    const prevFuture = future;
    if (prevFuture.length === 0) return;

    const next = prevFuture[0];
    const current = snapshotDesignValue(getDesignValue());

    setFuture(prevFuture.slice(1));

    if (current) {
      setPast((prevPast) => {
        const top = prevPast[prevPast.length - 1];
        if (top && snapshotsEqual(top, current)) {
          return prevPast;
        }
        return trimStack([...prevPast, current], maxLength);
      });
    }

    applySnapshot(next);
  }, [applySnapshot, flushPending, future, getDesignValue, maxLength]);

  /** 是否可撤销：past 非空，或存在未 flush 的防抖编辑段 */
  const getCanUndo = useCallback(() => past.length > 0 || hasPendingBurst, [past, hasPendingBurst]);

  /** 是否可重做：future 非空 */
  const getCanRedo = useCallback(() => future.length > 0, [future]);

  /** 卸载时清除防抖定时器，避免内存泄漏与卸载后 setState */
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    /** 在 commitDesignChange 中、dispatch 前调用 */
    recordBeforeChange,
    /** 手动刷入待处理的防抖快照（一般由 immediate / undo / redo 内部调用） */
    flushPending,
    undo,
    redo,
    getCanUndo,
    getCanRedo,
  };
}
