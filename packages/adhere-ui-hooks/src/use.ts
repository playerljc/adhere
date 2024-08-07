import { useMount } from 'ahooks';
import { useState } from 'react';

import type { Use } from './types';

const DEFAULT_STATUS = {
  data: null,
  isPending: true,
  isValidate: false,
};

const SUCCESS_STATUS = {
  isPending: false,
  isValidate: false,
};

const FAIL_STATUS = {
  isPending: false,
  isValidate: true,
};

/**
 * use
 * @description use promise
 * @param { data: any; isPending: boolean; isValidate: boolean; } p
 * @param defaultArgs
 */
const use: Use = (p: (...args: any[]) => Promise<any>, defaultArgs) => {
  const [result, setResult] = useState({
    ...DEFAULT_STATUS,
  });

  /**
   * executePromise
   * @description execute promise
   * @param {any[]} _defaultArgs
   */
  function executePromise(_defaultArgs: any[]) {
    // @ts-ignore
    p?.apply?.(this, _defaultArgs)
      ?.then((res) => {
        setResult({
          data: res,
          ...SUCCESS_STATUS,
        });
      })
      .catch((err) => {
        setResult({
          data: err,
          ...FAIL_STATUS,
        });
      });
  }

  /**
   * reset
   * @description 重新调用接口
   * @param {any[]} args
   */
  function reset(...args: any[]) {
    setResult({
      ...DEFAULT_STATUS,
    });

    executePromise(args);
  }

  useMount(() => {
    executePromise(defaultArgs ?? []);
  });

  return {
    ...result,
    reset,
  };
};

export default use;
