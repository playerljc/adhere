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
import type { RevealProps, SlideLayoutHandle } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slide-layout-reveal';

const { useTheme } = ConfigProvider;

/**
 * 揭示滑动布局组件
 * 滑动面板揭示主内容，只支持左右方向的滑动
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 揭示滑动布局组件
 * 
 * @example
 * ```typescript
 * <Reveal
 *   direction="left"
 *   collapse={isOpen}
 *   width="300px"
 *   slide={<div>侧边栏内容</div>}
 *   master={<div>主内容</div>}
 * />
 * ```
 */
const Reveal = memo<PropsWithoutRef<RevealProps> & RefAttributes<SlideLayoutHandle>>(
  forwardRef<SlideLayoutHandle, RevealProps>((props, ref) => {
    const {
      masterClassName,
      masterStyle = {},
      slaveClassName,
      slaveStyle = {},
      zIndex = 9999,
      direction = 'left',
      slide = null,
      master = null,
      onAfterShow,
      onAfterClose,
    } = props;

    const el = useRef<HTMLDivElement>(null);
    const rMasterEl = useRef<HTMLDivElement>(null);

    // 位置配置对象
    const positionConfig = useRef({
      init: {
        left: () => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;
          rMasterEl.current.style.zIndex = `${(zIndex as number) + 1}`;
          el.current.style.left = '0';
        },
        right: () => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;
          rMasterEl.current.style.zIndex = `${(zIndex as number) + 1}`;
          el.current.style.right = '0';
        },
      },
      show: {
        left: (time?: string | number | null | undefined) => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;

          if (maskEl.current) {
            maskEl.current.style.zIndex = `${(zIndex as number) + 1}`;
          }

          rMasterEl.current.style.zIndex = `${(zIndex as number) - 2}`;

          const slideWidth = el.current.offsetWidth;
          slider(
            rMasterEl.current,
            `${slideWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            onAfterShow,
          );

          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;

          if (maskEl.current) {
            maskEl.current.style.zIndex = `${(zIndex as number) + 1}`;
          }

          rMasterEl.current.style.zIndex = `${(zIndex as number) - 2}`;

          const slideWidth = el.current.offsetWidth;
          slider(
            rMasterEl.current,
            `-${slideWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            onAfterShow,
          );

          if (maskEl.current) {
            maskEl.current.style.display = 'block';
          }
        },
      },
      close: {
        left: (time?: string | number | null | undefined) => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;
          rMasterEl.current.style.zIndex = `${(zIndex as number) + 1}`;

          slider(
            rMasterEl.current,
            '0',
            '0',
            '0',
            `${getDuration(time)}ms`,
            onAfterClose,
          );

          if (maskEl.current) {
            maskEl.current.style.display = 'none';
          }
        },
        right: (time?: string | number | null | undefined) => {
          if (!el.current || !rMasterEl.current) return;

          el.current.style.zIndex = `${zIndex}`;
          rMasterEl.current.style.zIndex = `${(zIndex as number) + 1}`;

          slider(
            rMasterEl.current,
            '0',
            '0',
            '0',
            `${getDuration(time)}ms`,
            onAfterClose,
          );

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
      const element = rMasterEl.current;
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
      <>
        <div
          className={classNames(`${selectorPrefix}`, direction, slaveClassName)}
          style={{ ...slaveStyle, zIndex }}
          ref={el}
        >
          {slide}
        </div>
        <div
          className={classNames(`${selectorPrefix}-master`, masterClassName)}
          style={{ ...masterStyle, zIndex: (zIndex as number) + 1 }}
          ref={rMasterEl}
        >
          {master}
        </div>
      </>
    );
  }),
);

Reveal.displayName = 'Reveal';

export default Reveal;
