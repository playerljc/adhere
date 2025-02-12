import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { createMask } from './SlideLayout';
import type { OverlayProps } from './types';

export default (
  props: OverlayProps,
  el: RefObject<HTMLDivElement>,
  positionConfig: MutableRefObject<{
    init: { top?: () => void; left?: () => void; bottom?: () => void; right?: () => void };
    show: {
      top?: (time?: number | string) => void;
      left?: (time?: number | string) => void;
      bottom?: (time?: number | string) => void;
      right?: (time?: number | string) => void;
    };
    close: {
      top?: (time?: number | string) => void;
      left?: (time?: number | string) => void;
      bottom?: (time?: number | string) => void;
      right?: (time?: number | string) => void;
    };
  }>,
) => {
  const {
    time = 300,
    mask = true,
    zIndex = 9999,
    direction = 'left',
    width = '80%',
    height = '40%',
    onBeforeClose,
  } = props;

  const [collapse, setCollapse] = useState(props.collapse);
  const maskEl = useRef<HTMLDivElement>();

  function close() {
    onBeforeClose && onBeforeClose();

    setCollapse(false);
  }

  function initial() {
    if (direction === 'left' || direction === 'right') {
      // 赋值宽度
      (el.current as HTMLElement).style.height = '100%';

      if (typeof width === 'string') {
        (el.current as HTMLElement).style.width = width;
      } else {
        (el.current as HTMLElement).style.width = `${
          (el.current?.parentElement as HTMLElement).offsetWidth * 0.9
        }px`;
      }
    } else {
      // 赋值高度
      (el.current as HTMLElement).style.width = '100%';

      if (typeof height === 'string') {
        (el.current as HTMLElement).style.height = height;
      } else {
        (el.current as HTMLElement).style.height = `${
          (el.current?.parentElement as HTMLElement).offsetHeight * 0.3
        }px`;
      }
    }

    // 赋值默认位置
    positionConfig.current['init'][direction]?.();

    if (collapse) {
      positionConfig.current['show'][direction]?.(0);
    }
  }

  useEffect(() => {
    setCollapse(props.collapse as boolean);
  }, [props.collapse]);

  useLayoutEffect(() => {
    if (mask) {
      maskEl.current = createMask(zIndex!, () => close());

      (el.current?.parentElement as HTMLDivElement).insertBefore(
        maskEl.current as HTMLElement,
        el.current,
      );
    }

    initial();

    return () => {
      if (maskEl.current) {
        try {
          maskEl.current?.parentElement?.removeChild(maskEl?.current);
        } catch (e) {}

        // @ts-ignore
        maskEl.current = null;
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (collapse) {
      positionConfig.current['show'][direction]?.();
    } else {
      positionConfig.current['close'][direction]?.();
    }
  }, [collapse]);

  function getDuration(_time: undefined | null | string | number) {
    return _time !== undefined && _time !== null ? _time : time;
  }

  return {
    getDuration,
    maskEl,
  };
};
