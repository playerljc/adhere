import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import { ResizeObserver } from '@juggle/resize-observer';

import StickupLayoutItem from './Item';
import type {
  IndexItem,
  StickupLayoutComponent,
  StickupLayoutHandle,
  StickupLayoutProps,
  // ScrollAnimationConfig,
} from './types';

const selectorPrefix = 'adhere-ui-stickup-layout';

const { useTheme } = ConfigProvider;

/**
 * 获取屏幕刷新率间隔时间
 * @returns 屏幕刷新率间隔时间（毫秒）
 */
function getUpdateInterval(): number {
  return 'updateInterval' in screen ? (screen as any)['updateInterval'] : 16.7;
}

/**
 * 内部 StickupLayout 组件
 * 
 * 实现粘性布局功能，当滚动时头部会固定在顶部
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns React 元素
 */
const InternalStickupLayout = memo<
  PropsWithoutRef<StickupLayoutProps> & RefAttributes<StickupLayoutHandle>
>(
  forwardRef<StickupLayoutHandle, StickupLayoutProps>((props, ref) => {
    const {
      className,
      style,
      fixedClassName,
      fixedStyle,
      innerClassName,
      innerStyle,
      onChange,
      children,
    } = props;

    // 引用定义
    const ro = useRef<ResizeObserver | null>(null);
    const el = useRef<HTMLDivElement | null>(null);
    const fixedEl = useRef<HTMLDivElement | null>(null);
    const innerEl = useRef<HTMLDivElement | null>(null);
    const key = useRef<boolean>(false);
    const index = useRef<IndexItem[]>([]);
    const headerEls = useRef<NodeListOf<Element> | null>(null);
    const preScrollObj = useRef<IndexItem | null>(null);
    const maskEl = useRef<HTMLDivElement | null>(null);

    useTheme<HTMLElement>({
      elRef: el,
      group: 'normal',
      displayName: 'StickupLayout',
    });

    /**
     * 创建索引数组，记录每个头部元素的位置范围
     */
    const createIndex = useCallback((): void => {
      if (!headerEls.current || !innerEl.current) return;

      let pre = 0;
      index.current = [];
      preScrollObj.current = null;

      const headerElements = headerEls.current;
      const len = headerElements.length;

      for (let i = 0; i < len; i++) {
        const header = headerElements[i] as HTMLElement;
        const rangeStart = pre;
        let rangeEnd: number;

        if (i !== len - 1) {
          const nextHeader = headerElements[i + 1] as HTMLElement;
          rangeEnd = nextHeader.offsetTop - header.offsetHeight;
        } else {
          rangeEnd = innerEl.current!.scrollHeight;
        }

        index.current.push({
          start: rangeStart,
          end: rangeEnd,
          dom: header,
          index: i,
        });

        pre = rangeEnd;

        // 如果超出可视区域则停止
        if (pre > innerEl.current!.scrollHeight - innerEl.current!.offsetHeight) {
          break;
        }
      }
    }, []);

    /**
     * 计算当前位置并更新固定头部
     */
    const position = useCallback((): boolean => {
      if (!innerEl.current || !fixedEl.current) return false;

      const scrollTop = innerEl.current.scrollTop;
      const indexArray = index.current;

      // 使用二分查找优化性能
      let low = 0;
      let high = indexArray.length - 1;
      let target: IndexItem | undefined;

      while (low <= high && low <= indexArray.length - 1 && high <= indexArray.length - 1) {
        const middle = (high + low) >> 1;
        const targetVal = indexArray[middle];
        
        if (scrollTop >= targetVal.start && scrollTop < targetVal.end) {
          target = targetVal;
          break;
        } else if (scrollTop < targetVal.start) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      if (target) {
        // 避免重复更新
        if (preScrollObj.current?.index === target.index) {
          return false;
        }

        preScrollObj.current = target;
        fixedEl.current.innerHTML = target.dom.outerHTML;

        // 触发变化回调
        onChange?.(target.index);
        return true;
      }

      return false;
    }, [onChange]);

    /**
     * 初始化组件
     */
    const initial = useCallback((): void => {
      if (!el.current || !innerEl.current) return;

      key.current = false;
      index.current = [];
      headerEls.current = el.current.querySelectorAll(`.${selectorPrefix}-item-header`);

      createIndex();
      position();

      // 移除旧的事件监听器
      innerEl.current.removeEventListener('scroll', onScroll);
      // 添加新的事件监听器
      innerEl.current.addEventListener('scroll', onScroll);
    }, [createIndex, position]);

    /**
     * 初始化遮罩层
     */
    const initMask = useCallback((): void => {
      if (typeof window === 'undefined' || maskEl.current) return;

      maskEl.current = document.createElement('div');
      maskEl.current.className = `${selectorPrefix}-mask`;
      document.body.appendChild(maskEl.current);
    }, []);

    /**
     * 滚动动画到指定位置
     * 
     * @param targetTop - 目标滚动位置
     * @param duration - 动画持续时间（毫秒）
     */
    const scrollAnimationTo = useCallback((targetTop: number = 0, duration: number = 300): void => {
      if (key.current || !innerEl.current) return;

      initMask();
      key.current = true;

      if (maskEl.current) {
        maskEl.current.style.display = 'block';
      }

      const srcTop = innerEl.current.scrollTop;
      let scrollVal = srcTop;
      const updateInterval = getUpdateInterval();
      const step = innerEl.current.scrollHeight / (duration / updateInterval + (duration % updateInterval !== 0 ? 1 : 0));

      /**
       * 执行滚动动画
       */
      const scrollAnimation = (): void => {
        if (!innerEl.current) return;

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

        innerEl.current.scrollTop = scrollVal;

        const clear = (): void => {
          key.current = false;
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        };

        if (srcTop < targetTop) {
          if (scrollVal >= targetTop) {
            clear();
          } else {
            typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
        }
      };

      // 开始动画
      typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
    }, [initMask]);

    /**
     * 滚动到指定项
     * 
     * @param item - 目标索引项
     * @param duration - 动画持续时间（毫秒）
     */
    const scrollTo = useCallback((item: IndexItem, duration: number = 300): void => {
      if (!headerEls.current || !innerEl.current) return;

      const targetTop = item.start + (headerEls.current[item.index] as HTMLElement).offsetHeight;

      if (duration === 0) {
        innerEl.current.scrollTop = targetTop;
      } else {
        scrollAnimationTo(targetTop, duration);
      }
    }, [scrollAnimationTo]);

    /**
     * 滚动事件处理函数
     */
    const onScroll = useCallback((): void => {
      position();
    }, [position]);

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      /**
       * 刷新组件状态，重新计算索引
       */
      refresh: () => initial(),
      
      /**
       * 根据索引滚动到指定项
       * 
       * @param index - 目标索引
       * @param duration - 动画持续时间（毫秒）
       */
             scrollToByIndex: (targetIndex: number, duration: number = 300): void => {
         const item = index.current.find(item => item.index === targetIndex) || index.current[index.current.length - 1];
         if (item) {
           scrollTo(item, duration);
         }
       },
      
      /**
       * 根据头部元素滚动到指定项
       * 
       * @param headerEl - 目标头部元素
       * @param duration - 动画持续时间（毫秒）
       */
      scrollToByHeaderEl: (headerEl: HTMLElement, duration: number = 300): void => {
        const item = index.current.find(item => item.dom === headerEl) || index.current[index.current.length - 1];
        if (item) {
          scrollTo(item, duration);
        }
      },
    }), [initial, scrollTo]);

    // 组件挂载时初始化
    useLayoutEffect(() => {
      initial();

      return () => {
        // 清理遮罩层
        if (maskEl.current?.parentElement) {
          maskEl.current.parentElement.removeChild(maskEl.current);
        }
      };
    }, [initial]);

    // 监听容器大小变化
    useLayoutEffect(() => {
      const onResize = debounce(() => {
        initial();
      }, 300);

      if (el.current) {
        ro.current = new ResizeObserver(onResize);
        ro.current.observe(el.current);
      }

      return () => {
        ro.current?.disconnect();
        
        // 清理遮罩层
        if (maskEl.current?.parentElement) {
          maskEl.current.parentElement.removeChild(maskEl.current);
        }
      };
    }, [initial]);

    return (
      <div ref={el} className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        <div
          ref={fixedEl}
          className={classNames(`${selectorPrefix}-fixed`, fixedClassName ?? '')}
          style={fixedStyle ?? {}}
        />
        <div
          ref={innerEl}
          className={classNames(`${selectorPrefix}-inner`, innerClassName ?? '')}
          style={innerStyle ?? {}}
        >
          {children}
        </div>
      </div>
    );
  }),
);

const StickupLayout = InternalStickupLayout as StickupLayoutComponent;

StickupLayout.displayName = 'StickupLayout';
StickupLayout.Item = StickupLayoutItem;

export default StickupLayout;
