import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { slider } from './SlideLayout';
import type { OverlayProps, SlideLayoutHandle } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slide-layout-overlay';

const { useTheme } = ConfigProvider;

/**
 * 覆盖层滑动布局组件
 * 滑动面板覆盖在主内容之上，支持四个方向的滑动
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 覆盖层滑动布局组件
 * 
 * @example
 * ```typescript
 * <Overlay
 *   direction="left"
 *   collapse={isOpen}
 *   width="300px"
 *   onAfterShow={() => console.log('展开完成')}
 * >
 *   <div>滑动面板内容</div>
 * </Overlay>
 * ```
 */
const Overlay = memo<PropsWithoutRef<OverlayProps> & RefAttributes<SlideLayoutHandle>>(
  forwardRef<SlideLayoutHandle, OverlayProps>((props, ref) => {
    const {
      className,
      style = {},
      zIndex = 9999,
      direction = 'left',
      onAfterShow,
      onAfterClose,
      children,
    } = props;

    const el = useRef<HTMLDivElement>(null);

    // 位置配置对象
    const positionConfig = useRef({
      init: {
        left: () => {
          if (el.current) {
            slider(el.current, '-100%', '0', '0', '0');
          }
        },
        right: () => {
          if (el.current?.parentElement) {
            const parentWidth = el.current.parentElement.offsetWidth;
            slider(el.current, `${parentWidth}px`, '0', '0', '0');
          }
        },
        top: () => {
          if (el.current) {
            slider(el.current, '0', '-100%', '0', '0');
          }
        },
        bottom: () => {
          if (el.current?.parentElement) {
            const parentHeight = el.current.parentElement.offsetHeight;
            slider(el.current, '0', `${parentHeight}px`, '0', '0');
          }
        },
      },
      show: {
        left: (time?: string | number | null | undefined) => {
          if (!el.current) return;
          
          slider(el.current, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!el.current?.parentElement) return;
          
          const parentWidth = el.current.parentElement.offsetWidth;
          const elementWidth = el.current.offsetWidth;
          const targetX = parentWidth - elementWidth;
          
          slider(el.current, `${targetX}px`, '0', '0', `${getDuration(time)}ms`, onAfterShow);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
        top: (time?: string | number | null | undefined) => {
          if (!el.current) return;
          
          slider(el.current, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
        bottom: (time?: string | number | null | undefined) => {
          if (!el.current?.parentElement) return;
          
          const parentHeight = el.current.parentElement.offsetHeight;
          const elementHeight = el.current.offsetHeight;
          const targetY = parentHeight - elementHeight;
          
          slider(el.current, '0', `${targetY}px`, '0', `${getDuration(time)}ms`, onAfterShow);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
      },
      close: {
        left: (time?: string | number | null | undefined) => {
          if (!el.current) return;
          
          slider(el.current, '-100%', '0', '0', `${getDuration(time)}ms`, onAfterClose);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!el.current?.parentElement) return;
          
          const parentWidth = el.current.parentElement.offsetWidth;
          slider(el.current, `${parentWidth}px`, '0', '0', `${getDuration(time)}ms`, onAfterClose);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
        top: (time?: string | number | null | undefined) => {
          if (!el.current?.parentElement) return;
          
          const parentHeight = el.current.parentElement.offsetHeight;
          slider(el.current, '0', `-${parentHeight}px`, '0', `${getDuration(time)}ms`, onAfterClose);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
        bottom: (time?: string | number | null | undefined) => {
          if (!el.current?.parentElement) return;
          
          const parentHeight = el.current.parentElement.offsetHeight;
          slider(el.current, '0', `${parentHeight}px`, '0', `${getDuration(time)}ms`, onAfterClose);
          
          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
      },
    });

    // 主题配置
    useTheme<HTMLElement>({
      elRef: el,
      group: 'normal',
      displayName: 'SlideLayout',
    });

    const { getDuration, maskEl } = useSlide(props, el, positionConfig);

    /**
     * 处理过渡动画结束事件
     */
    const handleTransitionEnd = useCallback(() => {
      if (!props.collapse && el.current) {
        el.current.classList.add(`${selectorPrefix}-hide`);
      }
    }, [props.collapse]);

    // 监听过渡动画结束事件
    useEffect(() => {
      const element = el.current;
      if (!element) return;

      element.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        element.removeEventListener('transitionend', handleTransitionEnd);
      };
    }, [handleTransitionEnd]);

    // 监听展开状态变化
    useEffect(() => {
      if (props.collapse && el.current) {
        el.current.classList.remove(`${selectorPrefix}-hide`);
      }
    }, [props.collapse]);

    // 初始化隐藏状态
    useEffect(() => {
      if (!props.collapse && el.current) {
        el.current.classList.add(`${selectorPrefix}-hide`);
      }
    }, []);

    // 暴露组件方法
    useImperativeHandle(ref, () => ({
      getEl: () => el.current,
    }));

    return (
      <div
        ref={el}
        className={classNames(selectorPrefix, direction, className)}
        style={{ ...style, zIndex }}
      >
        {children}
      </div>
    );
  }),
);

Overlay.displayName = 'Overlay';

export default Overlay;
