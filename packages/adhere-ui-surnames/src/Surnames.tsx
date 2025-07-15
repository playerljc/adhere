import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useMemo,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type { 
  Position, 
  SurnamesProps, 
  SurnamesRefHandle, 
  Direction,
  EventHandler,
  TouchEventHandler,
  MouseEventHandler
} from './types';

const selectorPrefix = 'adhere-ui-surnames';

const { useTheme } = ConfigProvider;

/** 默认动画持续时间（毫秒） */
const DEFAULT_DURATION = 100;

/** 默认屏幕刷新率（毫秒） */
const DEFAULT_REFRESH_RATE = 16.7;

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
    const startY = useRef<number>(0);
    const startX = useRef<number>(0);
    const curIndexName = useRef<string>('');
    const indexPositionMap = useRef<Position[]>([]);

    useTheme<HTMLElement>({
      elRef: el,
      group: 'normal',
      displayName: 'Surnames',
    });

    /**
     * 获取当前方向
     * @returns 方向类型：'vertical' | 'horizontal'
     */
    const getDirection = useCallback((): Direction => {
      return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
    }, [position]);

    /**
     * 初始化事件监听器
     */
    const initEvent = useCallback((): void => {
      if (!indexInnerEl.current) return;

      if (Util.isTouch()) {
        // 触摸设备事件
        indexInnerEl.current.addEventListener('click', onClick as EventHandler);
        indexInnerEl.current.addEventListener('touchmove', onTouchmove as TouchEventHandler);
        indexInnerEl.current.addEventListener('touchend', onTouchend as EventHandler);
      } else {
        // 鼠标设备事件
        indexInnerEl.current.addEventListener('mousedown', onMousedown as MouseEventHandler);
        indexInnerEl.current.addEventListener('mousemove', onMousemove as MouseEventHandler);
        indexInnerEl.current.addEventListener('mouseleave', onMouseleave as MouseEventHandler);
        indexInnerEl.current.addEventListener('mouseup', onMouseup as MouseEventHandler);

        // 窗口大小变化事件
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', onResize);
        }
      }
    }, []);

    /**
     * 移除事件监听器
     */
    const removeEvent = useCallback((): void => {
      if (!indexInnerEl.current) return;

      indexInnerEl.current.removeEventListener('click', onClick as EventHandler);
      indexInnerEl.current.removeEventListener('touchmove', onTouchmove as TouchEventHandler);
      indexInnerEl.current.removeEventListener('touchend', onTouchend as EventHandler);
      indexInnerEl.current.removeEventListener('mousedown', onMousedown as MouseEventHandler);
      indexInnerEl.current.removeEventListener('mousemove', onMousemove as MouseEventHandler);
      indexInnerEl.current.removeEventListener('mouseleave', onMouseleave as MouseEventHandler);
      indexInnerEl.current.removeEventListener('mouseup', onMouseup as MouseEventHandler);

      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    }, []);

    /**
     * 创建遮罩层
     */
    const createMask = useCallback((): void => {
      const el = document.createElement('div');
      el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;
      maskEl.current = el.firstElementChild as HTMLDivElement;
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
     * 渲染内容区域
     */
    const renderContent = useCallback((): React.ReactElement[] => {
      return dataSource.map((record) => {
        const indexConfig = indexes.find((index) => index.index === record.index);

        return (
          <div key={record.index} className={`${selectorPrefix}-group`}>
            <a className={`${selectorPrefix}-group-title`} data-name={record.index}>
              {indexConfig?.renderTitle ? indexConfig.renderTitle(record) : indexConfig?.index}
            </a>
            <div className={`${selectorPrefix}-group-inner`}>
              {indexConfig?.renderContent ? indexConfig.renderContent(record) : null}
            </div>
          </div>
        );
      });
    }, [dataSource, indexes]);

    /**
     * 渲染索引区域
     */
    const renderIndex = useCallback((): React.ReactElement[] => {
      return indexes.map((index) => (
        <a key={index.index} className={`${selectorPrefix}-index-item`} data-name={index.index}>
          {index.renderIndex ? index.renderIndex(index) : index.index}
        </a>
      ));
    }, [indexes]);

    /**
     * 创建索引位置映射
     */
    const createIndexPosition = useCallback((): void => {
      if (!indexInnerEl.current) return;

      const indexItemEls = indexInnerEl.current.querySelectorAll(
        `.${selectorPrefix}-index-item`,
      ) as NodeListOf<HTMLElement>;

      indexPositionMap.current = [];

      // 计算每一项距离视口的位置信息
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
     * 根据坐标查找对应的索引
     * @param x - X 坐标
     * @param y - Y 坐标
     * @returns 找到的索引位置信息，未找到则返回 null
     */
    const findIndex = useCallback((x: number, y: number): Position | null => {
      const direction = getDirection();
      const val = direction === 'vertical' ? y - startY.current : x - startX.current;
      const curIndex = indexPositionMap.current.find(
        (t) => t.name === curIndexName.current,
      ) as Position;

      if (!curIndex) return null;

      let low = 0;
      let high = indexPositionMap.current.length - 1;
      let middle: number;
      let target: Position | undefined;

      while (
        low <= high &&
        low <= indexPositionMap.current.length - 1 &&
        high <= indexPositionMap.current.length - 1
      ) {
        middle = (high + low) >> 1;
        const targetVal = indexPositionMap.current[middle];

        let t1: number;
        let t2: number;
        let t3: number;
        let t4: number;

        if (direction === 'vertical') {
          t1 = (curIndex.top as number) + val;
          t2 = (curIndex.bottom as number) + val;
          t3 = targetVal.top as number;
          t4 = targetVal.bottom as number;
        } else {
          t1 = (curIndex.left as number) + val;
          t2 = (curIndex.right as number) + val;
          t3 = targetVal.left as number;
          t4 = targetVal.right as number;
        }

        if (t1 >= t3 && t1 <= t4) {
          target = targetVal;
          break;
        } else if (t1 < t3) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      return target || null;
    }, [getDirection]);

    /**
     * 处理点击详情
     * @param e - 事件对象
     */
    const clickDetail = useCallback((e: Event): void => {
      const target = e.target as HTMLElement;
      e.preventDefault();

      if (key.current) {
        return;
      }

      key.current = true;
      if (maskEl.current) {
        maskEl.current.style.display = 'block';
      }

      scrollToAnimation(target.dataset.name);
    }, []);

    /**
     * 处理移动详情
     * @param x - X 坐标
     * @param y - Y 坐标
     */
    const moveDetail = useCallback((x: number, y: number): void => {
      const index = findIndex(x, y);

      if (index && highlightedEl.current) {
        highlightedEl.current.innerText = index.name || '';
        highlightedEl.current.style.display = 'block';

        const direction = getDirection();

        if (direction === 'vertical') {
          const translateY = (index.offsetTop || 0) + Math.floor((index.height || 0) / 2);
          highlightedEl.current.style.transform = `translate3d(0,${translateY}px,0)`;
        } else {
          const translateX = (index.offsetLeft || 0) + (index.width || 0);
          highlightedEl.current.style.transform = `translate3d(${translateX}px,0,0)`;
        }

        scrollTo(index.name);
      }
    }, [findIndex, getDirection]);

    /**
     * 带动画效果的滚动到指定位置
     * @param name - 目标索引名称
     * @param duration - 动画持续时间
     */
    const scrollToAnimation = useCallback((name?: string, duration: number = DEFAULT_DURATION): void => {
      if (!contentEl.current || !name) return;

      const targetEl = contentEl.current.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      ) as HTMLElement;

      if (!targetEl) return;

      const srcTop = contentEl.current.scrollTop;
      let scrollVal = srcTop;
      const targetTop = targetEl.offsetTop;

      // 获取屏幕刷新率
      const refreshRate = (screen as any).updateInterval || DEFAULT_REFRESH_RATE;
      const step = (el.current?.scrollHeight || 0) / (duration / refreshRate + (duration % refreshRate !== 0 ? 1 : 0));

      /**
       * 滚动动画函数
       */
      const scrollAnimation = (): void => {
        if (srcTop < targetTop) {
          if (scrollVal + step > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += step;
          }
        } else if (scrollVal - step < targetTop) {
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
          } else {
            if (typeof window !== 'undefined') {
              window.requestAnimationFrame(scrollAnimation);
            }
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          if (typeof window !== 'undefined') {
            window.requestAnimationFrame(scrollAnimation);
          }
        }

        function clear(): void {
          key.current = false;
          isMouseClicked.current = false;
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
          onScroll?.(name);
        }
      };

      onBeforeScroll?.(name);

      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(scrollAnimation);
      }
    }, [onBeforeScroll, onScroll]);

    /**
     * 直接滚动到指定位置（无动画）
     * @param name - 目标索引名称
     */
    const scrollTo = useCallback((name?: string): void => {
      if (!contentEl.current || !name) return;

      const targetEl = contentEl.current.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      ) as HTMLElement;

      if (targetEl) {
        contentEl.current.scrollTop = targetEl.offsetTop;
        onScroll?.(name);
      }
    }, [onScroll]);

    /**
     * 更新组件状态
     */
    const update = useCallback((): void => {
      adapterDimension();
      createIndexPosition();
    }, [adapterDimension, createIndexPosition]);

    // 事件处理函数
    const onClick = useCallback((e: Event): void => {
      e.preventDefault();
      e.stopPropagation();
      clickDetail(e);
    }, [clickDetail]);

    const onTouchmove = useCallback((e: TouchEvent): void => {
      e.preventDefault();

      const touch = e.changedTouches[0];
      const y = touch.pageY;
      const x = touch.pageX;
      const target = e.target as HTMLElement;

      const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`) as HTMLElement;
      if (indexItemEl?.dataset.name) {
        curIndexName.current = indexItemEl.dataset.name;
        moveDetail(x, y);
      }
    }, [moveDetail]);

    const onTouchend = useCallback((): void => {
      if (highlightedEl.current) {
        highlightedEl.current.style.display = 'none';
        highlightedEl.current.innerText = '';
        highlightedEl.current.style.transform = 'translate3d(0,0,0)';
      }
    }, []);

    const onMousedown = useCallback((e: MouseEvent): void => {
      e.preventDefault();

      startY.current = e.pageY;
      startX.current = e.pageX;

      const target = e.target as HTMLElement;
      const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`) as HTMLElement;

      if (indexItemEl?.dataset.name) {
        curIndexName.current = indexItemEl.dataset.name;
        isMouseClicked.current = true;
      }
    }, []);

    const onMousemove = useCallback((e: MouseEvent): void => {
      if (!isMouseClicked.current) return;

      isMouseMoved.current = true;
      e.preventDefault();

      moveDetail(e.pageX, e.pageY);
    }, [moveDetail]);

    const onMouseleave = useCallback((): void => {
      isMouseClicked.current = false;
      isMouseMoved.current = false;
      if (highlightedEl.current) {
        highlightedEl.current.style.display = 'none';
        highlightedEl.current.innerText = '';
        highlightedEl.current.style.transform = 'translate3d(0,0,0)';
      }
    }, []);

    const onMouseup = useCallback((e: MouseEvent): void => {
      if (isMouseMoved.current) {
        isMouseClicked.current = false;
        isMouseMoved.current = false;
        if (highlightedEl.current) {
          highlightedEl.current.style.display = 'none';
          highlightedEl.current.innerText = '';
          highlightedEl.current.style.transform = 'translate3d(0,0,0)';
        }
        return;
      }

      e.preventDefault();
      clickDetail(e);
    }, [clickDetail]);

    const onResize = useCallback((): void => {
      update();
    }, [update]);

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      scrollToAnimation,
      scrollTo,
    }));

    // 初始化遮罩层和尺寸适配
    useLayoutEffect(() => {
      createMask();
      adapterDimension();
      createIndexPosition();

      return () => {
        if (maskEl.current?.parentElement) {
          maskEl.current.parentElement.removeChild(maskEl.current);
        }
      };
    }, [createMask, adapterDimension, createIndexPosition]);

    // 初始化事件监听器
    useLayoutEffect(() => {
      initEvent();
      adapterDimension();
      createIndexPosition();
      return removeEvent;
    }, [initEvent, adapterDimension, createIndexPosition, removeEvent]);

    // 缓存渲染结果
    const contentElements = useMemo(() => renderContent(), [renderContent]);
    const indexElements = useMemo(() => renderIndex(), [renderIndex]);

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
