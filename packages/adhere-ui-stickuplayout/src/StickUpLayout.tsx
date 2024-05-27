import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import { ResizeObserver } from '@juggle/resize-observer';

import StickupLayoutItem from './Item';
import type {
  IndexItem,
  StickupLayoutComponent,
  StickupLayoutHandle,
  StickupLayoutProps,
} from './types';

const selectorPrefix = 'adhere-ui-stickup-layout';

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

    const ro = useRef<ResizeObserver>({} as ResizeObserver);
    const el = useRef<HTMLDivElement | null>(null);
    const fixedEl = useRef<HTMLDivElement | null>(null);
    const innerEl = useRef<HTMLDivElement | null>(null);
    const key = useRef(false);
    const index = useRef<IndexItem[]>([]);
    const headerEls = useRef<NodeList>();
    const preScrollObj = useRef<IndexItem | null>(null);
    const maskEl = useRef<HTMLDivElement>();

    /**
     * updateInterval
     */
    function updateInterval() {
      return 'updateInterval' in screen ? screen['updateInterval'] : 16.7;
    }

    /**
     * createIndex
     */
    function createIndex() {
      let pre = 0;

      index.current = [];

      preScrollObj.current = null;

      for (let i = 0, len = headerEls.current!.length; i < len; i++) {
        const header = headerEls.current![i] as HTMLElement;

        let rangeStart = pre;

        let rangeEnd: number;

        if (i !== len - 1) {
          rangeEnd = (headerEls.current![i + 1] as HTMLElement).offsetTop - header.offsetHeight;
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

        if (pre > innerEl.current!.scrollHeight - innerEl.current!.offsetHeight) {
          break;
        }
      }
    }

    /**
     * position
     */
    function position() {
      const val = innerEl.current!.scrollTop;

      let low = 0,
        high = index.current.length - 1,
        middle: number,
        target;
      while (low <= high && low <= index.current.length - 1 && high <= index.current.length - 1) {
        middle = (high + low) >> 1;
        const targetVal = index.current[middle];
        if (val >= targetVal.start && val < targetVal.end) {
          target = targetVal;
          break;
        } else if (val < targetVal.start) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      if (target) {
        if (preScrollObj.current && preScrollObj.current?.index === target.index) {
          return false;
        } else {
          preScrollObj.current = target;
          fixedEl.current!.innerHTML = target.dom.outerHTML;

          if (onChange) {
            onChange(target.index);
          }
        }
      }
    }

    /**
     * initial
     */
    function initial() {
      key.current = false;
      index.current = [];
      headerEls.current = el.current?.querySelectorAll(`.${selectorPrefix}-item-header`);

      createIndex();
      position();

      innerEl.current?.removeEventListener?.('scroll', onScroll);
      innerEl.current?.addEventListener?.('scroll', onScroll);
    }

    /**
     * initMask
     */
    function initMask() {
      if (typeof window === 'undefined') return;

      if (!maskEl.current) {
        maskEl.current = document.createElement('div');

        maskEl.current.className = `${selectorPrefix}-mask`;

        window.document.body.appendChild(maskEl.current);
      }
    }

    /**
     * scrollAnimationTo
     * @access private
     * @param {number} targetTop
     * @param {number} duration
     */
    function scrollAnimationTo(targetTop: number = 0, duration: number = 300) {
      if (key.current) return;

      initMask();

      key.current = true;

      maskEl.current!.style.display = 'block';

      let srcTop = innerEl.current!.scrollTop,
        scrollVal = srcTop,
        /**
         * 一次滚动的步进
         * @type {number}
         */
        setp =
          innerEl.current!.scrollHeight /
          // @ts-ignore
          (duration / updateInterval() + (duration % updateInterval() !== 0 ? 1 : 0));

      /** *
       * 动画的滚动
       */
      function scrollAnimation() {
        if (srcTop < targetTop) {
          if (scrollVal + setp > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += setp;
          }
        } else if (scrollVal - setp < targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal -= setp;
        }

        innerEl.current!.scrollTop = scrollVal;

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

        function clear() {
          key.current = false;
          maskEl.current!.style.display = 'none';
        }
      }

      /** *
       * 滚动core
       */
      typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
    }

    /**
     * scrollTo
     * @param item
     * @param duration
     */
    function scrollTo(item: IndexItem, duration = 300) {
      const targetTop = item.start + (headerEls.current![item.index] as HTMLElement).offsetHeight;

      if (duration === 0) {
        innerEl.current!.scrollTop = targetTop;
      } else {
        scrollAnimationTo(targetTop, duration);
      }
    }

    /**
     * onScroll
     */
    function onScroll() {
      position();
    }

    useImperativeHandle(ref, () => ({
      /**
       * refresh
       */
      refresh: () => initial(),
      /**
       * scrollToByIndex
       * @param {number} _index
       * @param {number} _duration
       * @return {boolean}
       */
      scrollToByIndex: (_index: number, _duration: number = 300) => {
        let i = 0,
          item;
        for (; i < index.current.length; i++) {
          if (index.current[i].index === _index) {
            item = index.current[i];
            break;
          }
        }

        if (!item) {
          item = index.current[index.current.length - 1];
        }

        scrollTo(item, _duration);
      },
      /**
       * scrollToByHeaderEl
       * @param {HtmlElement} _headerEl
       * @param {number} _duration
       * @return {boolean}
       */
      scrollToByHeaderEl: (_headerEl, _duration = 300) => {
        let i = 0,
          item,
          current = -1;
        for (; i < index.current.length; i++) {
          if (index.current[i].dom === _headerEl) {
            item = index.current[i];
            current = i;
            break;
          }
        }

        if (!item) {
          item = index.current[index.current.length - 1];
        }

        scrollTo(item, _duration);
      },
    }));

    useLayoutEffect(() => {
      initial();

      return () => {
        if (maskEl.current) {
          maskEl.current?.parentElement?.removeChild(maskEl.current);
        }
      };
    }, []);

    useLayoutEffect(() => {
      const onResize = debounce(() => {
        initial();
      }, 300);

      ro.current = new ResizeObserver(onResize);

      ro.current.observe(el.current as HTMLElement);

      return () => {
        ro?.current?.disconnect();

        if (maskEl.current) {
          maskEl.current?.parentElement?.removeChild(maskEl.current);
        }
      };
    }, []);

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}} ref={el}>
        <div
          className={classNames(`${selectorPrefix}-fixed`, fixedClassName ?? '')}
          style={fixedStyle ?? {}}
          ref={fixedEl}
        />

        <div
          className={classNames(`${selectorPrefix}-inner`, innerClassName ?? '')}
          style={innerStyle ?? {}}
          ref={innerEl}
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
