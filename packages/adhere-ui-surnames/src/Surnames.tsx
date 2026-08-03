import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type {
  Direction,
  EventHandler,
  MouseEventHandler,
  Position,
  SurnamesProps,
  SurnamesRefHandle,
  TouchEventHandler,
} from './types';

const selectorPrefix = 'adhere-ui-surnames';

const { useTheme } = ConfigProvider;

/** 默认动画持续时间（毫秒） */
const DEFAULT_DURATION = 100;

/** 默认屏幕刷新率（毫秒） */
const DEFAULT_REFRESH_RATE = 16.7;

/** 高亮指示器默认尺寸（与样式 --highlighted-width/height 保持一致） */
const DEFAULT_HIGHLIGHTED_SIZE = 44;

/**
 * 转义属性选择器中的值，避免特殊字符破坏 querySelector
 */
function escapeAttrValue(value: string): string {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value);
  }

  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/**
 * 按 data-name 查找内容区分组标题
 */
function findGroupTitleEl(container: HTMLElement, name: string): HTMLElement | null {
  return container.querySelector(
    `.${selectorPrefix}-group-title[data-name='${escapeAttrValue(name)}']`,
  ) as HTMLElement | null;
}

/**
 * 计算将元素顶部对齐到滚动容器顶部所需的 scrollTop（置顶）
 */
function getScrollTopToAlign(container: HTMLElement, element: HTMLElement): number {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return Math.max(0, elementRect.top - containerRect.top + container.scrollTop);
}

/**
 * 根据视口坐标查找索引项：先精确命中，未命中则取主轴最近项（填补间隙、减少失焦）
 */
function findIndexByClientPoint(
  map: Position[],
  direction: Direction,
  clientX: number,
  clientY: number,
): Position | null {
  if (!map.length) return null;

  for (let i = 0; i < map.length; i++) {
    const item = map[i];

    if (direction === 'vertical') {
      if (clientY >= (item.top as number) && clientY <= (item.bottom as number)) {
        return item;
      }
    } else if (clientX >= (item.left as number) && clientX <= (item.right as number)) {
      return item;
    }
  }

  let best = map[0];
  let bestDist = Number.POSITIVE_INFINITY;

  for (let i = 0; i < map.length; i++) {
    const item = map[i];
    let dist: number;

    if (direction === 'vertical') {
      const top = item.top as number;
      const bottom = item.bottom as number;
      if (clientY < top) dist = top - clientY;
      else if (clientY > bottom) dist = clientY - bottom;
      else dist = 0;
    } else {
      const left = item.left as number;
      const right = item.right as number;
      if (clientX < left) dist = left - clientX;
      else if (clientX > right) dist = clientX - right;
      else dist = 0;
    }

    if (dist < bestDist) {
      bestDist = dist;
      best = item;
    }
  }

  return best;
}

/**
 * Surnames 组件 - 姓氏索引列表组件
 *
 * 支持垂直和水平方向的索引导航，提供平滑滚动动画和触摸/鼠标交互
 *
 * @example
 * ```tsx
 * <Surnames
 *   position="right"
 *   indexes={[
 *     { index: 'A', renderIndex: (index) => <span>{index.index}</span> },
 *     { index: 'B', renderIndex: (index) => <span>{index.index}</span> }
 *   ]}
 *   dataSource={[
 *     { index: 'A', data: [{ name: 'Alice' }] },
 *     { index: 'B', data: [{ name: 'Bob' }] }
 *   ]}
 *   onScroll={(name) => console.log('滚动到:', name)}
 * />
 * ```
 */
const Surnames = memo<PropsWithoutRef<SurnamesProps> & RefAttributes<SurnamesRefHandle>>(
  forwardRef<SurnamesRefHandle, SurnamesProps>((props, ref) => {
    const {
      position = 'right',
      className,
      style = {},
      indexClassName,
      indexStyle = {},
      contentClassName,
      contentStyle,
      indexes = [],
      dataSource = [],
      onScroll,
      onBeforeScroll,
    } = props;

    // DOM 元素引用
    const el = useRef<HTMLDivElement | null>(null);
    const highlightedEl = useRef<HTMLDivElement | null>(null);
    const contentEl = useRef<HTMLDivElement | null>(null);
    const indexEl = useRef<HTMLDivElement | null>(null);
    const indexInnerEl = useRef<HTMLDivElement | null>(null);
    const maskEl = useRef<HTMLDivElement | null>(null);

    // 状态管理
    const key = useRef<boolean>(false);
    const isMouseClicked = useRef<boolean>(false);
    const isMouseMoved = useRef<boolean>(false);
    const curIndexName = useRef<string>('');
    const lastMoveIndexName = useRef<string>('');
    const indexPositionMap = useRef<Position[]>([]);
    const documentMouseTrackingBound = useRef<boolean>(false);

    // 事件处理函数引用，避免原生监听器闭包陈旧
    const eventHandlersRef = useRef<{
      onClick: EventHandler;
      onTouchstart: TouchEventHandler;
      onTouchmove: TouchEventHandler;
      onTouchend: EventHandler;
      onMousedown: MouseEventHandler;
      onMousemove: MouseEventHandler;
      onMouseup: MouseEventHandler;
      onResize: EventHandler;
    }>({
      onClick: () => undefined,
      onTouchstart: () => undefined,
      onTouchmove: () => undefined,
      onTouchend: () => undefined,
      onMousedown: () => undefined,
      onMousemove: () => undefined,
      onMouseup: () => undefined,
      onResize: () => undefined,
    });

    const documentMouseHandlersRef = useRef<{
      onMousemove: MouseEventHandler;
      onMouseup: MouseEventHandler;
    }>({
      onMousemove: () => undefined,
      onMouseup: () => undefined,
    });

    useTheme<HTMLElement>({
      elRef: el,
      group: 'normal',
      displayName: 'Surnames',
    });

    /**
     * 获取当前方向
     */
    const getDirection = useCallback((): Direction => {
      return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
    }, [position]);

    /**
     * 释放点击滚动锁并隐藏遮罩
     */
    const releaseInteractionLock = useCallback((): void => {
      key.current = false;
      isMouseClicked.current = false;
      if (maskEl.current) {
        maskEl.current.style.display = 'none';
      }
    }, []);

    /**
     * 隐藏高亮指示器
     */
    const hideHighlighted = useCallback((): void => {
      if (!highlightedEl.current) return;

      highlightedEl.current.style.display = 'none';
      highlightedEl.current.innerText = '';
      highlightedEl.current.style.transform = 'translate3d(0,0,0)';
    }, []);

    /**
     * 创建遮罩层
     */
    const createMask = useCallback((): void => {
      const maskWrapper = document.createElement('div');
      maskWrapper.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;
      maskEl.current = maskWrapper.firstElementChild as HTMLDivElement;
      document.body.appendChild(maskEl.current);
    }, []);

    /**
     * 适配容器尺寸
     */
    const adapterDimension = useCallback((): void => {
      if (!el.current || !indexInnerEl.current) return;

      const direction = getDirection();

      if (direction === 'vertical') {
        el.current.style.height = `${indexInnerEl.current.offsetHeight + 50}px`;
        el.current.style.width = '100%';
      } else {
        el.current.style.height = '100%';
      }
    }, [getDirection]);

    /**
     * 创建索引位置映射
     */
    const createIndexPosition = useCallback((): void => {
      if (!indexInnerEl.current) return;

      const indexItemEls = indexInnerEl.current.querySelectorAll(
        `.${selectorPrefix}-index-item`,
      ) as NodeListOf<HTMLElement>;

      indexPositionMap.current = [];

      for (let i = 0; i < indexItemEls.length; i++) {
        const indexItemEl = indexItemEls[i];
        const indexName = indexItemEl.dataset.name;
        const rect = indexItemEl.getBoundingClientRect();

        indexPositionMap.current.push({
          name: indexName,
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          offsetTop: indexItemEl.offsetTop,
          offsetLeft: indexItemEl.offsetLeft,
          width: indexItemEl.offsetWidth,
          height: indexItemEl.offsetHeight,
        });
      }
    }, []);

    /**
     * 根据视口坐标查找对应的索引
     */
    const findIndex = useCallback(
      (clientX: number, clientY: number): Position | null => {
        return findIndexByClientPoint(
          indexPositionMap.current,
          getDirection(),
          clientX,
          clientY,
        );
      },
      [getDirection],
    );

    /**
     * 绑定 / 解绑 document 级鼠标拖动跟踪（避免移出索引条就失焦）
     */
    const unbindDocumentMouseTracking = useCallback((): void => {
      if (!documentMouseTrackingBound.current || typeof document === 'undefined') return;

      document.removeEventListener(
        'mousemove',
        documentMouseHandlersRef.current.onMousemove as EventListener,
      );
      document.removeEventListener(
        'mouseup',
        documentMouseHandlersRef.current.onMouseup as EventListener,
      );
      documentMouseTrackingBound.current = false;
    }, []);

    const bindDocumentMouseTracking = useCallback((): void => {
      if (documentMouseTrackingBound.current || typeof document === 'undefined') return;

      document.addEventListener(
        'mousemove',
        documentMouseHandlersRef.current.onMousemove as EventListener,
      );
      document.addEventListener(
        'mouseup',
        documentMouseHandlersRef.current.onMouseup as EventListener,
      );
      documentMouseTrackingBound.current = true;
    }, []);

    /**
     * 带动画效果滚动，使对应分组 header 置顶
     */
    const scrollToAnimation = useCallback(
      (name?: string, duration: number = DEFAULT_DURATION): void => {
        if (!contentEl.current || !name) {
          releaseInteractionLock();
          return;
        }

        const targetEl = findGroupTitleEl(contentEl.current, name);

        if (!targetEl) {
          releaseInteractionLock();
          return;
        }

        const container = contentEl.current;
        const srcTop = container.scrollTop;
        const targetTop = getScrollTopToAlign(container, targetEl);
        const distance = Math.abs(targetTop - srcTop);

        onBeforeScroll?.(name);

        // 已在顶部时直接完成，避免空动画占住交互锁
        if (distance < 1) {
          container.scrollTop = targetTop;
          releaseInteractionLock();
          onScroll?.(name);
          return;
        }

        let scrollVal = srcTop;
        const refreshRate = (screen as any).updateInterval || DEFAULT_REFRESH_RATE;
        const frameCount = Math.max(1, Math.ceil(duration / refreshRate));
        const step = distance / frameCount;

        const scrollAnimation = (): void => {
          if (srcTop < targetTop) {
            if (scrollVal + step >= targetTop) {
              scrollVal = targetTop;
            } else {
              scrollVal += step;
            }
          } else if (scrollVal - step <= targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal -= step;
          }

          if (contentEl.current) {
            contentEl.current.scrollTop = scrollVal;
          }

          if (srcTop < targetTop) {
            if (scrollVal >= targetTop) {
              clear();
            } else if (typeof window !== 'undefined') {
              window.requestAnimationFrame(scrollAnimation);
            }
          } else if (scrollVal <= targetTop) {
            clear();
          } else if (typeof window !== 'undefined') {
            window.requestAnimationFrame(scrollAnimation);
          }

          function clear(): void {
            if (contentEl.current) {
              contentEl.current.scrollTop = targetTop;
            }
            releaseInteractionLock();
            onScroll?.(name);
          }
        };

        if (typeof window !== 'undefined') {
          window.requestAnimationFrame(scrollAnimation);
        }
      },
      [onBeforeScroll, onScroll, releaseInteractionLock],
    );

    /**
     * 直接滚动，使对应分组 header 置顶（无动画）
     */
    const scrollTo = useCallback(
      (name?: string): void => {
        if (!contentEl.current || !name) return;

        const targetEl = findGroupTitleEl(contentEl.current, name);

        if (targetEl) {
          contentEl.current.scrollTop = getScrollTopToAlign(contentEl.current, targetEl);
          onScroll?.(name);
        }
      },
      [onScroll],
    );

    /**
     * 处理点击详情
     */
    const clickDetail = useCallback(
      (name?: string): void => {
        if (key.current || !name) {
          return;
        }

        key.current = true;
        if (maskEl.current) {
          maskEl.current.style.display = 'block';
        }

        scrollToAnimation(name);
      },
      [scrollToAnimation],
    );

    /**
     * 处理移动详情
     */
    const moveDetail = useCallback(
      (clientX: number, clientY: number): void => {
        const index = findIndex(clientX, clientY);

        if (!index?.name || !highlightedEl.current) {
          return;
        }

        curIndexName.current = index.name;

        // 同一索引仅更新一次，避免频繁 scroll / 重绘导致卡顿失焦
        if (lastMoveIndexName.current !== index.name) {
          lastMoveIndexName.current = index.name;
          highlightedEl.current.innerText = index.name;
          highlightedEl.current.style.display = 'block';

          const direction = getDirection();

          if (direction === 'vertical') {
            const translateY = (index.offsetTop || 0) + Math.floor((index.height || 0) / 2);
            highlightedEl.current.style.transform = `translate3d(0,${translateY}px,0)`;
          } else {
            // 水平方向：指示器相对字母居中，并限制在容器内避免被裁切
            const bubbleWidth = highlightedEl.current.offsetWidth || DEFAULT_HIGHLIGHTED_SIZE;
            const containerWidth = el.current?.clientWidth || 0;
            const centerX = (index.offsetLeft || 0) + Math.floor((index.width || 0) / 2);
            const maxTranslateX = Math.max(0, containerWidth - bubbleWidth);
            const translateX = Math.max(
              0,
              Math.min(centerX - Math.floor(bubbleWidth / 2), maxTranslateX),
            );
            highlightedEl.current.style.transform = `translate3d(${translateX}px,0,0)`;
          }

          scrollTo(index.name);
        } else if (highlightedEl.current.style.display !== 'block') {
          highlightedEl.current.innerText = index.name;
          highlightedEl.current.style.display = 'block';
        }
      },
      [findIndex, getDirection, scrollTo],
    );

    /**
     * 从事件目标解析索引项，并更新当前索引名
     */
    const updateCurIndexFromTarget = useCallback((target: HTMLElement): HTMLElement | null => {
      const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`) as HTMLElement;

      if (indexItemEl?.dataset.name) {
        curIndexName.current = indexItemEl.dataset.name;
        return indexItemEl;
      }

      return null;
    }, []);

    const resetMoveState = useCallback((): void => {
      isMouseClicked.current = false;
      isMouseMoved.current = false;
      lastMoveIndexName.current = '';
      hideHighlighted();
      unbindDocumentMouseTracking();
    }, [hideHighlighted, unbindDocumentMouseTracking]);

    const onClick = useCallback(
      (e: Event): void => {
        e.preventDefault();
        e.stopPropagation();

        const indexItemEl = updateCurIndexFromTarget(e.target as HTMLElement);
        clickDetail(indexItemEl?.dataset.name);
      },
      [clickDetail, updateCurIndexFromTarget],
    );

    const onTouchstart = useCallback(
      (e: TouchEvent): void => {
        createIndexPosition();
        lastMoveIndexName.current = '';
        updateCurIndexFromTarget(e.target as HTMLElement);

        const touch = e.touches[0] || e.changedTouches[0];
        if (touch) {
          moveDetail(touch.clientX, touch.clientY);
        }
      },
      [createIndexPosition, moveDetail, updateCurIndexFromTarget],
    );

    const onTouchmove = useCallback(
      (e: TouchEvent): void => {
        e.preventDefault();

        const touch = e.touches[0] || e.changedTouches[0];
        if (!touch) return;

        // 直接按触点坐标命中，不依赖 e.target（touchmove 的 target 固定为起始元素）
        moveDetail(touch.clientX, touch.clientY);
      },
      [moveDetail],
    );

    const onTouchend = useCallback((): void => {
      lastMoveIndexName.current = '';
      hideHighlighted();
    }, [hideHighlighted]);

    const onMousedown = useCallback(
      (e: MouseEvent): void => {
        e.preventDefault();

        createIndexPosition();
        lastMoveIndexName.current = '';

        if (updateCurIndexFromTarget(e.target as HTMLElement)) {
          isMouseClicked.current = true;
          isMouseMoved.current = false;
          bindDocumentMouseTracking();
        }
      },
      [bindDocumentMouseTracking, createIndexPosition, updateCurIndexFromTarget],
    );

    const onMousemove = useCallback(
      (e: MouseEvent): void => {
        if (!isMouseClicked.current) return;

        isMouseMoved.current = true;
        e.preventDefault();

        moveDetail(e.clientX, e.clientY);
      },
      [moveDetail],
    );

    const onMouseup = useCallback(
      (e: MouseEvent): void => {
        if (!isMouseClicked.current) return;

        e.preventDefault();

        if (isMouseMoved.current) {
          resetMoveState();
          return;
        }

        const name = curIndexName.current;
        resetMoveState();
        clickDetail(name);
      },
      [clickDetail, resetMoveState],
    );

    const onResize = useCallback((): void => {
      adapterDimension();
      createIndexPosition();
    }, [adapterDimension, createIndexPosition]);

    eventHandlersRef.current = {
      onClick,
      onTouchstart,
      onTouchmove,
      onTouchend,
      onMousedown,
      onMousemove,
      onMouseup,
      onResize,
    };

    useImperativeHandle(
      ref,
      () => ({
        scrollToAnimation,
        scrollTo,
      }),
      [scrollToAnimation, scrollTo],
    );

    // 初始化遮罩层
    useLayoutEffect(() => {
      createMask();

      return () => {
        if (maskEl.current?.parentElement) {
          maskEl.current.parentElement.removeChild(maskEl.current);
        }
      };
    }, [createMask]);

    // 初始化事件监听器（通过 ref 转发到最新处理函数）
    useLayoutEffect(() => {
      const indexInner = indexInnerEl.current;
      if (!indexInner) return;

      const handleClick: EventHandler = (e) => eventHandlersRef.current.onClick(e);
      const handleTouchstart: TouchEventHandler = (e) => eventHandlersRef.current.onTouchstart(e);
      const handleTouchmove: TouchEventHandler = (e) => eventHandlersRef.current.onTouchmove(e);
      const handleTouchend: EventHandler = (e) => eventHandlersRef.current.onTouchend(e);
      const handleMousedown: MouseEventHandler = (e) => eventHandlersRef.current.onMousedown(e);
      const handleResize: EventHandler = (e) => eventHandlersRef.current.onResize(e);

      // document 级跟踪使用稳定包装函数，便于绑定/解绑
      documentMouseHandlersRef.current = {
        onMousemove: (e) => eventHandlersRef.current.onMousemove(e),
        onMouseup: (e) => eventHandlersRef.current.onMouseup(e),
      };

      if (Util.isTouch()) {
        indexInner.addEventListener('click', handleClick);
        indexInner.addEventListener('touchstart', handleTouchstart as EventListener);
        indexInner.addEventListener('touchmove', handleTouchmove as EventListener, {
          passive: false,
        });
        indexInner.addEventListener('touchend', handleTouchend);
      } else {
        // 仅在索引条上按下；移动/抬起挂到 document，避免移出索引条后失焦
        indexInner.addEventListener('mousedown', handleMousedown as EventListener);

        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
        }
      }

      return () => {
        indexInner.removeEventListener('click', handleClick);
        indexInner.removeEventListener('touchstart', handleTouchstart as EventListener);
        indexInner.removeEventListener('touchmove', handleTouchmove as EventListener);
        indexInner.removeEventListener('touchend', handleTouchend);
        indexInner.removeEventListener('mousedown', handleMousedown as EventListener);

        if (typeof document !== 'undefined') {
          document.removeEventListener(
            'mousemove',
            documentMouseHandlersRef.current.onMousemove as EventListener,
          );
          document.removeEventListener(
            'mouseup',
            documentMouseHandlersRef.current.onMouseup as EventListener,
          );
          documentMouseTrackingBound.current = false;
        }

        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, []);

    // 尺寸与索引坐标：position / indexes / dataSource 变化后重建
    useLayoutEffect(() => {
      adapterDimension();
      createIndexPosition();
    }, [adapterDimension, createIndexPosition, indexes, dataSource]);

    /**
     * 点击内容区分组 header 时置顶
     */
    const onGroupTitleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        clickDetail(e.currentTarget.dataset.name);
      },
      [clickDetail],
    );

    const contentElements = useMemo(
      () =>
        dataSource.map((record) => {
          const indexConfig = indexes.find((index) => index.index === record.index);

          return (
            <div key={record.index} className={`${selectorPrefix}-group`}>
              <a
                className={`${selectorPrefix}-group-title`}
                data-name={record.index}
                onClick={onGroupTitleClick}
              >
                {indexConfig?.renderTitle ? indexConfig.renderTitle(record) : indexConfig?.index}
              </a>
              <div className={`${selectorPrefix}-group-inner`}>
                {indexConfig?.renderContent ? indexConfig.renderContent(record) : null}
              </div>
            </div>
          );
        }),
      [dataSource, indexes, onGroupTitleClick],
    );

    const indexElements = useMemo(
      () =>
        indexes.map((index) => (
          <a key={index.index} className={`${selectorPrefix}-index-item`} data-name={index.index}>
            {index.renderIndex ? index.renderIndex(index) : index.index}
          </a>
        )),
      [indexes],
    );

    return (
      <div
        ref={el}
        className={classNames(
          selectorPrefix,
          `${selectorPrefix}-config-position-${position}`,
          className,
        )}
        style={style}
      >
        <div className={`${selectorPrefix}-highlighted`} ref={highlightedEl} />

        <div
          ref={contentEl}
          className={classNames(`${selectorPrefix}-content`, contentClassName)}
          style={contentStyle}
        >
          {contentElements}
        </div>

        <div
          ref={indexEl}
          className={classNames(`${selectorPrefix}-index`, indexClassName)}
          style={indexStyle}
        >
          <div className={`${selectorPrefix}-index-inner`} ref={indexInnerEl}>
            {indexElements}
          </div>
        </div>
      </div>
    );
  }),
);

Surnames.displayName = 'Surnames';

export default Surnames;
