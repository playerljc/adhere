import classNames from 'classnames';
import React, { memo, useContext, useLayoutEffect, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import * as TRBLC from './TRBLC';
import type {
  DirectionProps,
  DragEventParams,
  FixedElementPosition,
  ResizeCursor,
  SplitLayoutComponent,
  SplitLayoutProps,
} from './types';

const FlexContext = FlexLayout.Context;
const flexLayoutSelectorPrefix = FlexLayout.selectorPrefix;
const selectorPrefix = 'adhere-ui-split-layout';

const { useTheme } = ConfigProvider;

/**
 * 将百分比字符串转换为小数
 * @param percent - 百分比字符串，如 "50%"
 * @returns 对应的小数值，如 0.5
 * @example
 * toPoint("50%") // 返回 0.5
 * toPoint("25%") // 返回 0.25
 */
function toPoint(percent: string): number {
  const str = Number(percent.replace('%', ''));
  return str / 100;
}

/**
 * SplitLayout 可拖拽分割线
 *
 * ## 使用前提（DOM 结构）
 * 必须作为 FlexLayout 的直接子节点，且左右（或上下）兄弟为一对：
 * - `fixed` + `auto`，或
 * - `auto` + `fixed`
 *
 * 例：`<Fixed /><SplitLayout /><Auto />`
 *
 * ## 拖动交互设计要点（维护时勿轻易改回旧方案）
 * 1. **document 级监听**：按下后把 mousemove/mouseup 挂到 document。
 *    旧实现只挂在句柄和相邻面板上，鼠标稍快移出就会断拖。
 * 2. **关闭 transition**：FlexLayout.Fixed 默认有 `transition: all 0.2s`，
 *    拖动时若不关掉，尺寸会永远慢半拍跟不上指针。
 * 3. **回调走 ref + 事件只绑一次**：父组件常在 onChange 里 setState，
 *    若把回调放进 effect 依赖，会在拖动中反复拆绑 document 监听。
 * 4. **尺寸直接写 DOM**：拖动中改 `fixedEl.style.width/height`，不走 React state，
 *    保证跟手；业务侧通过 onChange 自行同步受控值。
 *
 * ## 尺寸计算公式（保持稳定，勿改语义）
 * - 按下时记录：`startVal`（指针位置）、`fixedValue`（fixed 面板当前尺寸）
 * - 移动时：`delta = 当前指针 - startVal`
 * - fixed 在前（prev）：`target = fixedValue + delta`
 * - fixed 在后（next）：`target = fixedValue - delta`
 * - 再按 minSize / maxSize 钳制后写入 style
 */
const InternalSplitLayout = memo<SplitLayoutProps>((props) => {
  const {
    className,
    style,
    maxSize = '100%',
    minSize = 10,
    onCanDrag,
    onDragStarted,
    onDragFinished,
    onChange,
    onOut,
  } = props;

  // 方向来自外层 FlexLayout.Context：horizontal → 改 width；vertical → 改 height
  const { direction } = useContext(FlexContext);

  // ---------- DOM 引用 ----------
  /** 分割线自身 */
  const el = useRef<HTMLDivElement | null>(null);
  /** 被拖拽改尺寸的 Fixed 面板 */
  const fixedEl = useRef<HTMLElement | null>(null);
  /** 自适应的 Auto 面板（拖动时会跟着被 flex 挤压/扩展） */
  const autoEl = useRef<HTMLElement | null>(null);
  /** 父级 FlexLayout 容器 */
  const containerEl = useRef<HTMLElement | null>(null);
  /** 句柄上的 mouseenter/mousedown/mouseout 是否已绑定，防止重复 addEventListener */
  const eventsAttached = useRef(false);

  /**
   * 合法兄弟组合：只有 fixed↔auto 才能拖。
   * key 形如 `adhere-ui-flex-layout-fixed_adhere-ui-flex-layout-auto`
   */
  const situation = useRef(
    new Map([
      [`${flexLayoutSelectorPrefix}-fixed_${flexLayoutSelectorPrefix}-auto`, true],
      [`${flexLayoutSelectorPrefix}-auto_${flexLayoutSelectorPrefix}-fixed`, true],
    ]),
  );

  // ---------- 拖动状态机（全部用 ref，避免触发重渲染） ----------
  /** 指针是否在句柄悬停区内 */
  const isEnter = useRef(false);
  /** 指针是否已离开句柄（拖动中离开也会置 true，用于松手时清光标） */
  const isOut = useRef(false);
  /** 是否处于按下拖动中 */
  const isDown = useRef(false);
  /** 本次按下后是否发生过移动（预留/兼容旧逻辑） */
  const isMove = useRef(false);

  // ---------- 尺寸计算中间量 ----------
  /** 按下时的 pageX / pageY */
  const startVal = useRef(0);
  /** 相对按下点的位移 delta */
  const changeVal = useRef(0);
  /** 历史累计位移（旧逻辑保留，当前热路径未依赖） */
  const changeBaseVal = useRef(0);
  /** 按下瞬间 fixed 面板的 offsetWidth / offsetHeight */
  const fixedValue = useRef(0);
  /**
   * 本次拖动可用的总空间缓存：fixed 尺寸 + auto 尺寸。
   * 在 mousedown 时清零并重测；拖动过程中复用，避免反复读 layout。
   */
  const maxDimension = useRef(0);

  // ---------- 拖动热路径缓存（mousedown 时写入，mousemove 只读） ----------
  /** 'pageX' | 'pageY' */
  const dragPage = useRef<DirectionProps['page']>('pageX');
  /** 'width' | 'height' */
  const dragDimension = useRef<DirectionProps['dimension']>('width');
  /** fixed 在分割线前还是后：决定 delta 加还是减 */
  const dragPosition = useRef<FixedElementPosition>('prev');
  /** 本次拖动的最小/最大尺寸（已解析为 px） */
  const dragMinSize = useRef(0);
  const dragMaxSize = useRef(0);
  /**
   * 拖动前面板上的 inline transition，结束时还原。
   * 必须关掉 Fixed 的 `transition: all 0.2s`，否则视觉滞后。
   */
  const prevFixedTransition = useRef('');
  const prevAutoTransition = useRef('');
  /** 拖动前 body 的 user-select，结束时还原，避免拖选中文本 */
  const prevBodyUserSelect = useRef('');
  /** 当前挂在 document 上的移动/抬起处理函数，便于精确 removeEventListener */
  const documentMoveHandler = useRef<((e: MouseEvent) => void) | null>(null);
  const documentUpHandler = useRef<((e: MouseEvent) => void) | null>(null);

  /**
   * props / 回调的最新值镜像。
   * useLayoutEffect 依赖为 []，句柄事件通过这些 ref 读到最新回调，
   * 这样 onChange 引起的父级重渲染不会拆掉正在进行的 document 监听。
   */
  const directionRef = useRef(direction);
  const maxSizeRef = useRef(maxSize);
  const minSizeRef = useRef(minSize);
  const onCanDragRef = useRef(onCanDrag);
  const onDragStartedRef = useRef(onDragStarted);
  const onDragFinishedRef = useRef(onDragFinished);
  const onChangeRef = useRef(onChange);
  const onOutRef = useRef(onOut);

  directionRef.current = direction;
  maxSizeRef.current = maxSize;
  minSizeRef.current = minSize;
  onCanDragRef.current = onCanDrag;
  onDragStartedRef.current = onDragStarted;
  onDragFinishedRef.current = onDragFinished;
  onChangeRef.current = onChange;
  onOutRef.current = onOut;

  useTheme<HTMLElement>({
    elRef: el,
    group: 'normal',
    displayName: 'SplitLayout',
  });

  /**
   * 检查前后兄弟是否构成可拖组合（fixed↔auto）
   */
  const checked = (): boolean => {
    if (!el.current) {
      return false;
    }

    const { previousElementSibling, nextElementSibling } = el.current;
    const keys = Array.from(situation.current.keys());

    return keys.some((key) => {
      const arr = key.split('_');
      const prevKey = arr[0];
      const nextKey = arr[1];

      return (
        previousElementSibling?.classList.contains(prevKey) &&
        nextElementSibling?.classList.contains(nextKey)
      );
    });
  };

  /** 取 fixed 面板 DOM（可能在前，也可能在后） */
  const getFixedEl = (): HTMLElement | null => {
    if (!el.current) {
      return null;
    }

    const { previousElementSibling, nextElementSibling } = el.current;
    const fixedClass = `${flexLayoutSelectorPrefix}-fixed`;

    if (previousElementSibling?.classList.contains(fixedClass)) {
      return previousElementSibling as HTMLElement;
    }

    if (nextElementSibling?.classList.contains(fixedClass)) {
      return nextElementSibling as HTMLElement;
    }

    return null;
  };

  /** 取 auto 面板 DOM */
  const getAutoEl = (): HTMLElement | null => {
    if (!el.current) {
      return null;
    }

    const { previousElementSibling, nextElementSibling } = el.current;
    const autoClass = `${flexLayoutSelectorPrefix}-auto`;

    if (previousElementSibling?.classList.contains(autoClass)) {
      return previousElementSibling as HTMLElement;
    }

    if (nextElementSibling?.classList.contains(autoClass)) {
      return nextElementSibling as HTMLElement;
    }

    return null;
  };

  /** 悬停时光标 class：横向 col-resize，纵向 row-resize */
  const getResizeClass = (): ResizeCursor => {
    return directionRef.current === 'vertical' ? 'row-resize' : 'col-resize';
  };

  /**
   * 按方向返回指针坐标字段、样式维度字段、测量 offset 字段
   */
  const getProps = (): DirectionProps => {
    return directionRef.current === 'vertical'
      ? { page: 'pageY', dimension: 'height', offset: 'offsetHeight' }
      : { page: 'pageX', dimension: 'width', offset: 'offsetWidth' };
  };

  /**
   * fixed 相对分割线的位置：
   * - prev：Fixed | Split | Auto → 指针右移应增大 fixed
   * - next：Auto | Split | Fixed → 指针右移应减小 fixed
   */
  const getFixedElPosition = (): FixedElementPosition => {
    const { previousElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? 'prev'
      : 'next';
  };

  /**
   * 可分配总空间 = fixed 当前尺寸 + auto 当前尺寸（不含分割线自身）。
   * 结果缓存在 maxDimension，同一次拖动内只测一次。
   */
  const getMaxDimension = (): number => {
    if (maxDimension.current) {
      return maxDimension.current;
    }

    const fixed = getFixedEl();
    const auto = getAutoEl();
    const { offset } = getProps();

    if (!fixed || !auto) {
      return 0;
    }

    maxDimension.current = fixed[offset] + auto[offset];

    return maxDimension.current;
  };

  /**
   * 解析 maxSize：
   * - 字符串百分比：相对 maxDimension
   * - 数字：按 px
   * 且不得超过 maxDimension
   */
  const getMaxSize = (): number => {
    let resultVal = 0;
    const maxDim = getMaxDimension();
    const maxSizeProp = maxSizeRef.current;

    if (typeof maxSizeProp === 'string') {
      resultVal = maxDim * toPoint(maxSizeProp);
    } else if (typeof maxSizeProp === 'number') {
      resultVal = maxSizeProp;
    }

    return resultVal > maxDim ? maxDim : resultVal;
  };

  /**
   * 解析 minSize；不得小于分割线自身占用（el 的 offset），
   * 否则 fixed 缩到比句柄还窄时布局会异常。
   */
  const getMinSize = (): number => {
    let resultVal = 0;
    const maxDim = getMaxDimension();
    const { offset } = getProps();
    const elSize = el.current?.[offset] || 0;
    const minSizeProp = minSizeRef.current;

    if (typeof minSizeProp === 'string') {
      resultVal = maxDim * toPoint(minSizeProp);
    } else if (typeof minSizeProp === 'number') {
      resultVal = minSizeProp;
    }

    return resultVal < elSize ? elSize : resultVal;
  };

  /** 组装对外回调参数 */
  const createDragEventParams = (event: MouseEvent, targetValue: number): DragEventParams => {
    const { page } = getProps();
    return {
      event,
      currentPosition: event[page],
      startPosition: startVal.current,
      delta: changeVal.current,
      targetSize: targetValue,
    };
  };

  /** 拖动结束：还原面板 inline transition */
  const restoreTransitions = () => {
    if (fixedEl.current) {
      fixedEl.current.style.transition = prevFixedTransition.current;
    }
    if (autoEl.current) {
      autoEl.current.style.transition = prevAutoTransition.current;
    }
    prevFixedTransition.current = '';
    prevAutoTransition.current = '';
  };

  /**
   * 卸下 document 监听，并清理拖动期临时样式/class
   * （抬起、卸载、异常结束都会走到这里）
   */
  const detachDocumentDrag = () => {
    if (documentMoveHandler.current) {
      document.removeEventListener('mousemove', documentMoveHandler.current);
      documentMoveHandler.current = null;
    }

    if (documentUpHandler.current) {
      document.removeEventListener('mouseup', documentUpHandler.current);
      documentUpHandler.current = null;
    }

    document.body.style.userSelect = prevBodyUserSelect.current;
    prevBodyUserSelect.current = '';

    el.current?.classList.remove(`${selectorPrefix}-is-dragging`);
    // 去掉容器上的 dragging：恢复面板 transition / pointer-events（见 index.less）
    containerEl.current?.classList.remove(`${selectorPrefix}-dragging`);
    containerEl.current?.classList.remove(`${selectorPrefix}-no-select`);
    restoreTransitions();
  };

  /**
   * 根据当前 DOM 兄弟关系刷新 fixed/auto/container 引用。
   * @returns 结构合法且引用已更新时为 true
   */
  const syncPaneRefs = () => {
    if (!checked()) {
      return false;
    }

    const nextFixedEl = getFixedEl();
    const nextAutoEl = getAutoEl();

    if (!nextFixedEl || !nextAutoEl) {
      return false;
    }

    fixedEl.current = nextFixedEl;
    autoEl.current = nextAutoEl;
    containerEl.current = el.current?.parentElement as HTMLElement;

    return true;
  };

  /**
   * 按指针位置计算并写入 fixed 尺寸（拖动热路径核心）
   * @param pagePos - 当前 event.pageX 或 pageY
   * @returns 钳制后的目标尺寸（px）
   */
  const computeAndApplySize = (pagePos: number): number => {
    isMove.current = true;
    changeVal.current = pagePos - startVal.current;

    // prev：指针正向移动 → fixed 变大；next：反向
    const computedValue =
      dragPosition.current === 'prev'
        ? fixedValue.current + changeVal.current
        : fixedValue.current - changeVal.current;

    const maxSizeVal = dragMaxSize.current;
    const minSizeVal = dragMinSize.current;

    let targetValue: number;
    if (computedValue >= maxSizeVal) {
      targetValue = maxSizeVal;
    } else if (computedValue <= minSizeVal) {
      targetValue = minSizeVal;
    } else {
      targetValue = computedValue;
    }

    // 直接改 style，不经过 React，保证跟手
    if (fixedEl.current) {
      fixedEl.current.style[dragDimension.current] = `${targetValue}px`;
    }

    return targetValue;
  };

  /** 进入句柄：显示 resize 光标，通知可拖 */
  const onMouseenter = (e: MouseEvent) => {
    el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);
    isOut.current = false;
    isEnter.current = true;
    onCanDragRef.current?.(createDragEventParams(e, 0));
  };

  /**
   * document mousemove：持续改尺寸并 onChange。
   * 注意：此函数在 mousedown 时被挂到 document，必须始终通过 ref 读最新 onChange。
   */
  const onMousemove = (e: MouseEvent) => {
    if (!isDown.current) {
      return;
    }

    const targetValue = computeAndApplySize(e[dragPage.current]);
    onChangeRef.current?.(createDragEventParams(e, targetValue));
  };

  /**
   * document mouseup：结束拖动
   * - 再算一次尺寸，保证抬起瞬间与指针对齐
   * - 不重复触发 onChange（移动过程已通知；抬起只走 onDragFinished）
   * - 按 isOut 决定是否保留 resize 光标，避免拖出句柄后光标残留
   */
  const endDrag = (e: MouseEvent) => {
    const resizeClass = `${selectorPrefix}-${getResizeClass()}`;

    if (isOut.current) {
      el.current?.classList.remove(resizeClass);
    } else {
      el.current?.classList.add(resizeClass);
    }

    if (isDown.current) {
      const targetValue = computeAndApplySize(e[dragPage.current]);
      // 先回调再清零 startVal / delta，保证 onDragFinished 拿到真实结束尺寸
      onDragFinishedRef.current?.(createDragEventParams(e, targetValue));

      isDown.current = false;
      isMove.current = false;
      isEnter.current = !isOut.current;
      startVal.current = 0;
      changeBaseVal.current = changeBaseVal.current + changeVal.current;
      // 下次拖动重新测量可用空间
      maxDimension.current = 0;
      detachDocumentDrag();
    } else {
      detachDocumentDrag();
    }
  };

  /**
   * 句柄 mousedown：开始拖动
   * 1. 刷新面板引用（兼容兄弟晚挂载）
   * 2. 缓存方向 / min / max / 起始尺寸
   * 3. 关闭 transition，禁用文本选中
   * 4. 把 move/up 挂到 document
   */
  const onMousedown = (e: MouseEvent) => {
    // 仅主按键
    if (e.button !== 0) {
      return;
    }

    if (!syncPaneRefs()) {
      return;
    }

    e.preventDefault();

    el.current?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);
    el.current?.classList.add(`${selectorPrefix}-is-dragging`);
    // 容器 class 见 index.less：拖动期 transition:none + 面板 pointer-events:none
    containerEl.current?.classList.add(`${selectorPrefix}-dragging`);

    const propsDir = getProps();
    isEnter.current = true;
    isOut.current = false;
    isDown.current = true;
    maxDimension.current = 0;
    dragPage.current = propsDir.page;
    dragDimension.current = propsDir.dimension;
    dragPosition.current = getFixedElPosition();
    startVal.current = e[propsDir.page];
    fixedValue.current = fixedEl.current?.[propsDir.offset] || 0;
    // min/max 只在按下时解析一次，避免 mousemove 里读 offset 触发布局抖动
    dragMinSize.current = getMinSize();
    dragMaxSize.current = getMaxSize();

    // Fixed 样式表有 transition: all 0.2s —— 拖动时必须关掉
    if (fixedEl.current) {
      prevFixedTransition.current = fixedEl.current.style.transition;
      fixedEl.current.style.transition = 'none';
    }
    if (autoEl.current) {
      prevAutoTransition.current = autoEl.current.style.transition;
      autoEl.current.style.transition = 'none';
    }

    prevBodyUserSelect.current = document.body.style.userSelect;
    document.body.style.userSelect = 'none';
    containerEl.current?.classList.add(`${selectorPrefix}-no-select`);

    // 记录引用以便 detach 时精确移除；passive 移动监听减少主线程阻塞
    documentMoveHandler.current = onMousemove;
    documentUpHandler.current = endDrag;
    document.addEventListener('mousemove', onMousemove, { passive: true });
    document.addEventListener('mouseup', endDrag);

    onDragStartedRef.current?.(createDragEventParams(e, 0));
  };

  /**
   * 离开句柄：
   * - 拖动中只记 isOut，不结束拖动（拖动由 document mouseup 结束）
   * - 非拖动则清光标并 onOut
   */
  const onMouseout = (e: MouseEvent) => {
    // 仍在句柄子树内（含伪元素相关边界情况）则忽略
    const related = e.relatedTarget as Node | null;
    if (related && el.current?.contains(related)) {
      return;
    }

    isOut.current = true;

    if (!isDown.current) {
      isEnter.current = false;
      el.current?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);
      onOutRef.current?.(createDragEventParams(e, 0));
    }
  };

  /**
   * 稳定包装：addEventListener 只绑这些 wrapper 一次，
   * 内部每次调用最新的 onMouse*（经下方 ref 更新）。
   */
  const onMouseenterRef = useRef(onMouseenter);
  const onMousedownRef = useRef(onMousedown);
  const onMouseoutRef = useRef(onMouseout);
  onMouseenterRef.current = onMouseenter;
  onMousedownRef.current = onMousedown;
  onMouseoutRef.current = onMouseout;

  /**
   * 初始化：
   * - 校验 fixed/auto 结构并缓存引用
   * - 绑定句柄悬停/按下事件（只绑一次）
   * - MutationObserver：兄弟节点晚到或 childList 变化时再 tryInit / 刷新引用
   *
   * 依赖刻意为空：业务 props 变化不重绑；拖动中的 document 监听不能被 effect cleanup 拆掉。
   */
  useLayoutEffect(() => {
    const node = el.current;
    if (!node) {
      return undefined;
    }

    const handleEnter = (e: MouseEvent) => onMouseenterRef.current(e);
    const handleDown = (e: MouseEvent) => onMousedownRef.current(e);
    const handleOut = (e: MouseEvent) => onMouseoutRef.current(e);

    const attachEvents = () => {
      if (eventsAttached.current) {
        return;
      }
      node.addEventListener('mouseenter', handleEnter);
      node.addEventListener('mousedown', handleDown);
      node.addEventListener('mouseout', handleOut);
      eventsAttached.current = true;
    };

    const tryInit = () => {
      // 结构尚不合法（例如 Fixed/Auto 还没挂上）则等 MutationObserver
      if (!syncPaneRefs()) {
        return false;
      }
      attachEvents();
      return true;
    };

    tryInit();

    const parent = node.parentElement;
    let observer: MutationObserver | undefined;
    if (parent) {
      observer = new MutationObserver(() => {
        tryInit();
        // 已绑定过则只需刷新面板引用（例如兄弟被替换）
        if (eventsAttached.current) {
          syncPaneRefs();
        }
      });
      observer.observe(parent, { childList: true });
    }

    return () => {
      observer?.disconnect();
      if (eventsAttached.current) {
        node.removeEventListener('mouseenter', handleEnter);
        node.removeEventListener('mousedown', handleDown);
        node.removeEventListener('mouseout', handleOut);
        eventsAttached.current = false;
      }
      detachDocumentDrag();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={el}
      className={classNames(selectorPrefix, `${selectorPrefix}-${direction}`, className)}
      style={style ?? {}}
    />
  );
});

InternalSplitLayout.displayName = 'InternalSplitLayout';

const SplitLayout = InternalSplitLayout as SplitLayoutComponent;

SplitLayout.displayName = 'SplitLayout';

/** 预置的 Top/Right/Bottom/Left/Center 组合布局 */
SplitLayout.TRBLC = TRBLC;

export default SplitLayout;
