import classNames from 'classnames';
import React, { FC, useLayoutEffect, useRef } from 'react';

import Resource from '@baifendian/adhere-util-resource';

import { BackTopAnimationProps } from './types';

const selectorPrefix = 'adhere-ui-backtopanimation';

/**
 * BackTopAnimation
 * @param props
 * @constructor
 */
const BackTopAnimation: FC<BackTopAnimationProps> = (props): React.ReactElement => {
  const {
    className,
    style,
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value,
    getContainer,
    onScrollTop,
    duration = 300,
  } = props;

  const elRef = useRef<HTMLDivElement>(null);
  const mask = useRef<HTMLDivElement | null>(null);
  const key = useRef(false);

  /**
   * getUpdateInterval
   */
  function getUpdateInterval() {
    return 'updateInterval' in screen ? screen['updateInterval'] : 16.7;
  }

  /**
   * onTrigger
   */
  function onTrigger() {
    if (key.current) return;

    if (!props.onTrigger) return;

    props.onTrigger().then(() => {
      key.current = true;

      mask.current!.style.display = 'block';

      const container = getContainer();

      const srcTop = container.scrollTop;
      let scrollVal = srcTop;
      const targetTop = 0;

      // 一次滚动的步进
      const step =
        container.scrollHeight /
        (duration / getUpdateInterval() + (duration % getUpdateInterval() !== 0 ? 1 : 0));

      /**
       * 动画的滚动
       */
      function scrollAnimation() {
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

        container.scrollTop = scrollVal;

        if (onScrollTop) {
          onScrollTop(scrollVal);
        }

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
          mask.current!.style.display = 'none';

          key.current = false;
        }
      }

      typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
    });
  }

  /**
   * renderMask
   */
  function renderMask() {
    mask.current = document.body.querySelector(`.${selectorPrefix}-mask`);

    if (!mask.current) {
      mask.current = document.createElement('div');
      mask.current.className = `${selectorPrefix}-mask`;
      mask.current.style.zIndex = `${zIndex}`;
      document.body.appendChild(mask.current);
    }
  }

  useLayoutEffect(() => renderMask(), []);

  useLayoutEffect(() => {
    const container = getContainer();

    function onScroll() {
      if (container.scrollTop !== 0) {
        elRef.current!.style.display = 'block';
      } else {
        elRef.current!.style.display = 'none';
      }
    }

    container.addEventListener('scroll', onScroll);

    return () => container.removeEventListener('scroll', onScroll);
  });

  return (
    <div
      ref={elRef}
      className={classNames(selectorPrefix, className || '')}
      style={{ zIndex, ...(style || {}) }}
      onClick={onTrigger}
    />
  );
};

export default BackTopAnimation;
