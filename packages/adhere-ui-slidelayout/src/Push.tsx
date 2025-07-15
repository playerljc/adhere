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
import type { PushProps, SlideLayoutHandle } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slide-layout-push';

const { useTheme } = ConfigProvider;

/**
 * 推送滑动布局组件
 * 滑动面板推动主内容移动，只支持左右方向的滑动
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 推送滑动布局组件
 * 
 * @example
 * ```typescript
 * <Push
 *   direction="left"
 *   collapse={isOpen}
 *   width="300px"
 *   slide={<div>侧边栏内容</div>}
 *   master={<div>主内容</div>}
 * />
 * ```
 */
const Push = memo<PropsWithoutRef<PushProps> & RefAttributes<SlideLayoutHandle>>(
  forwardRef<SlideLayoutHandle, PushProps>((props, ref) => {
    const {
      masterClassName,
      masterStyle = {},
      className,
      style = {},
      slaveClassName,
      slaveStyle = {},
      zIndex = 9999,
      direction = 'left',
      slide,
      master,
      onAfterShow,
      onAfterClose,
    } = props;

    const pMasterEl = useRef<HTMLDivElement>(null);
    const el = useRef<HTMLDivElement>(null);
    const pSlaveEl = useRef<HTMLDivElement>(null);

    // 位置配置对象
    const positionConfig = useRef({
      init: {
        left: () => {
          if (!el.current || !pSlaveEl.current || !pMasterEl.current) return;

          el.current.style.left = '0';

          const slideWidth = el.current.offsetWidth;
          pSlaveEl.current.style.left = `${slideWidth}px`;

          slider(pMasterEl.current, `-${slideWidth}px`, '0', '0', '0');
        },
        right: () => {
          if (!el.current || !pSlaveEl.current || !pMasterEl.current) return;

          el.current.style.right = '0';

          const slideWidth = el.current.offsetWidth;
          pSlaveEl.current.style.right = `${slideWidth}px`;

          slider(pMasterEl.current, `${slideWidth}px`, '0', '0', '0');
        },
      },
      show: {
        left: (time?: string | number | null | undefined) => {
          if (!pMasterEl.current) return;

          slider(pMasterEl.current, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);

          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!pMasterEl.current) return;

          slider(pMasterEl.current, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);

          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
      },
      close: {
        left: (time?: string | number | null | undefined) => {
          if (!el.current || !pMasterEl.current) return;

          const slideWidth = el.current.offsetWidth;
          slider(pMasterEl.current, `-${slideWidth}px`, '0', '0', `${getDuration(time)}ms`, onAfterClose);

          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!el.current || !pMasterEl.current) return;

          const slideWidth = el.current.offsetWidth;
          slider(pMasterEl.current, `${slideWidth}px`, '0', '0', `${getDuration(time)}ms`, onAfterClose);

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
      const element = pMasterEl.current;
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
      getEl: () => pMasterEl.current,
    }));

    return (
      <div
        className={classNames(`${selectorPrefix}-master`, masterClassName)}
        style={{ ...masterStyle, zIndex: (zIndex as number) - 1 }}
        ref={pMasterEl}
      >
        <div
          className={classNames(selectorPrefix, direction, className)}
          style={{ ...style, zIndex }}
          ref={el}
        >
          {slide}
        </div>

        <div
          className={classNames(`${selectorPrefix}-slave`, slaveClassName)}
          style={{ ...slaveStyle, zIndex: (zIndex as number) - 2 }}
          ref={pSlaveEl}
        >
          {master}
        </div>
      </div>
    );
  }),
);

Push.displayName = 'Push';

export default Push;
