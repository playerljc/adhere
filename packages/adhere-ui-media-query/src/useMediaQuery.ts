import { useLayoutEffect, useState } from 'react';

import Emitter from '@baifendian/adhere-util-emitter';

import { WINDOW_RESIZE } from './constant';
import type { BreakPoint, BreakPoints, BreakPointsCondition } from './types';
import { getMediaQueryByBreakPoints } from './utils';

/**
 * useMediaQuery
 * @param breakPoints
 */
export function useMediaQuery<T extends Record<string, BreakPoint>>(
  breakPoints: BreakPoints<T>,
): BreakPointsCondition<T> {
  const [mediaQuery, setMediaQuery] = useState(() => getMediaQueryByBreakPoints(breakPoints));

  useLayoutEffect(() => {
    function onWindowResize() {
      setMediaQuery(getMediaQueryByBreakPoints(breakPoints));
    }

    Emitter.on(WINDOW_RESIZE, onWindowResize);

    return () => {
      Emitter.remove(WINDOW_RESIZE, onWindowResize);
    };
  }, [breakPoints]);

  return mediaQuery;
}
