import classNames from 'classnames';
import React, { FC, useRef } from 'react';

import { slider } from './slidelayout';
import { OverlayProps } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slidelayout-overlay';

const Overlay: FC<OverlayProps> = (props) => {
  const {
    className = '',
    style = {},
    zIndex = 9999,
    direction = 'left',
    onAfterShow,
    onAfterClose,
    children,
  } = props;

  const el = useRef<HTMLDivElement>(null);

  const positionConfig = useRef({
    init: {
      left: () => slider(el.current as HTMLDivElement, '-100%', '0', '0', '0'),
      right: () =>
        slider(
          el.current as HTMLDivElement,
          `${el.current?.parentElement?.offsetWidth}px`,
          '0',
          '0',
          '0',
        ),
      top: () => slider(el.current as HTMLDivElement, '0', '-100%', '0', '0'),
      bottom: () =>
        slider(
          el.current as HTMLDivElement,
          '0',
          `${el.current?.parentElement?.offsetHeight}px`,
          '0',
          '0',
        ),
    },
    show: {
      left: (time) => {
        slider(el.current as HTMLElement, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
      right: (time) => {
        slider(
          el.current as HTMLElement,
          `${
            (el.current?.parentElement as HTMLElement).offsetWidth -
            (el.current as HTMLElement).offsetWidth
          }px`,
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterShow,
        );

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
      top: (time) => {
        slider(el.current as HTMLElement, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
      bottom: (time) => {
        slider(
          el.current as HTMLElement,
          '0',
          `${
            (el.current?.parentElement as HTMLElement).offsetHeight -
            (el.current as HTMLElement).offsetHeight
          }px`,
          '0',
          `${getDuration(time)}ms`,
          onAfterShow,
        );

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
    },
    close: {
      left: (time) => {
        slider(
          el.current as HTMLElement,
          '-100%',
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
      right: (time) => {
        slider(
          el.current as HTMLElement,
          `${(el.current?.parentElement as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
      top: (time) => {
        slider(
          el.current as HTMLElement,
          '0',
          `-${(el.current?.parentElement as HTMLElement).offsetHeight}px`,
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
      bottom: (time) => {
        slider(
          el.current as HTMLElement,
          '0',
          `${(el.current?.parentElement as HTMLElement).offsetHeight}px`,
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
    },
  });

  const { getDuration, maskEl } = useSlide(props, el, positionConfig);

  return (
    <div
      className={classNames(selectorPrefix, direction, className || '')}
      style={{ ...(style || {}), zIndex }}
      ref={el}
    >
      {children}
    </div>
  );
};

export default Overlay;
