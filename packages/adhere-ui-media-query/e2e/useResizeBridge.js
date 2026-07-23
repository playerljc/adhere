import { useEffect, useState } from 'react';

import Emitter from '@baifendian/adhere-util-emitter';

import { WINDOW_RESIZE } from '../src/index';

/**
 * 将 window.resize 桥接到 MediaQuery 使用的 Emitter 事件，并返回当前宽度
 */
export function useResizeBridge() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      Emitter.trigger(WINDOW_RESIZE);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
}
