import { useMemo } from 'react';

import Fetch from '../../fetch';

/**
 * useFetch
 * @param {string} targetOrigin
 */
export default function useFetch(targetOrigin: string) {
  return useMemo(
    () => ({
      fetch: new Fetch(window, window.location.origin),
      targetOrigin: targetOrigin,
    }),
    [targetOrigin],
  );
}
