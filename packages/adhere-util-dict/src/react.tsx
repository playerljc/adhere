import { useMount, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import React, {
  FC,
  ForwardRefRenderFunction,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import type SuspenseAsync from '@baifendian/adhere-ui-suspense/es/async';
import Util from '@baifendian/adhere-util';

import Dict from './dict';
import type {
  DictComponentHandler,
  DictFunctionComponentProps,
  DictNoPromiseComponentProps,
  DictPromiseComponentProps,
  DictReactComponentObj,
  StateData,
  UseDictOptions,
  UseDictState,
} from './types';

// 组件的缓存
const ComponentCache = new Map<string, any>();

// data, isValidate, isPending

/**
 * FunctionComponent
 * @constructor
 * @param key
 */
const FunctionComponent: (
  key: string,
) => ForwardRefRenderFunction<DictComponentHandler, DictFunctionComponentProps> =
  (key: string) =>
  (
    { children, firstLoading, renderNormalLoading, isEmpty, renderEmpty, args, isUseMemo, ...rest },
    ref,
  ) => {
    const [data, setData] = useState<StateData>({
      data: null,
      isValidate: false,
      isPending: true,
    });

    const asyncRef = useRef<SuspenseAsync>();

    const props = useMemo(() => {
      const _props: any = { ...rest };
      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderNormalLoading) _props.renderNormalLoading = renderNormalLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderNormalLoading, renderEmpty, isEmpty]);

    useUpdateLayoutEffect(() => {
      setData((_preData) => ({
        data: _preData.data,
        isValidate: true,
        isPending: true,
      }));

      asyncRef?.current?.fetchData?.();
    }, args || []);

    useImperativeHandle(ref, () => ({
      reload: () => {
        setData((_preData) => ({
          data: _preData.data,
          isValidate: true,
          isPending: true,
        }));

        return asyncRef?.current?.fetchData?.();
      },
      reset: () => {
        setData((_preData) => ({
          data: null,
          isValidate: true,
          isPending: true,
        }));

        return asyncRef?.current?.reset?.();
      },
    }));

    const fetchData = () => {
      Dict.handlers[key].isUseMemo = isUseMemo || false;

      const result = Dict.value[key].value(...(args || []));

      // 返回的Promise
      if (result.then) {
        return result
          .then((res) => {
            setData({
              data: res,
              isValidate: true,
              isPending: false,
            });

            return res;
          })
          .catch((error) => {
            setData({
              data: error,
              isValidate: false,
              isPending: false,
            });

            return error;
          });
      }
      // 非Promise
      else {
        setData({
          data: result,
          isValidate: true,
          isPending: false,
        });

        return Promise.resolve(result);
      }
    };

    return (
      <Suspense.ASync
        ref={asyncRef}
        fetchData={fetchData}
        {...props}
        isEmpty={() => data === null || data === undefined || isEmpty?.(data)}
      >
        {children?.(data)}
      </Suspense.ASync>
    );
  };

/**
 * PromiseComponent
 * @constructor
 * @param key
 */
const PromiseComponent: (
  key: string,
) => ForwardRefRenderFunction<DictComponentHandler, DictPromiseComponentProps> =
  (key: string) =>
  ({ children, firstLoading, renderNormalLoading, isEmpty, renderEmpty, ...rest }, ref) => {
    const [data, setData] = useState<StateData>({
      data: null,
      isPending: true,
      isValidate: true,
    });

    const props = useMemo(() => {
      const _props: any = { ...rest };

      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderNormalLoading) _props.renderNormalLoading = renderNormalLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderNormalLoading, renderEmpty, isEmpty]);

    const fetchData = () =>
      Dict.value[key].value
        .then((res) => {
          setData({
            data: res,
            isValidate: true,
            isPending: false,
          });

          return res;
        })
        .catch((error) => {
          setData({
            data: error,
            isValidate: false,
            isPending: false,
          });

          return error;
        });

    return (
      <Suspense.ASync
        ref={ref}
        fetchData={fetchData}
        {...props}
        isEmpty={() => data === null || data === undefined || isEmpty?.(data)}
      >
        {children?.(data)}
      </Suspense.ASync>
    );
  };

/**
 * NoPromiseComponent
 * @constructor
 * @param key
 */
const NoPromiseComponent: (key: string) => FC<DictNoPromiseComponentProps> =
  (key: string) =>
  ({ children, isEmpty, renderEmpty }) => {
    const data = Dict.value[key].value;

    if (data === null || data === undefined || isEmpty?.(data)) {
      if (renderEmpty) {
        return renderEmpty?.();
      }

      return null;
    }

    return children?.({
      data,
      isValidate: true,
      isPending: false,
    });
  };

// 组件的config
const ComponentMap = new Map<string, (key: string) => any>([
  [
    'Function',
    (key) => {
      if (!ComponentCache.has(`Function_${key}`)) {
        ComponentCache.set(
          `Function_${key}`,
          memo(
            // @ts-ignore
            forwardRef<DictComponentHandler, DictFunctionComponentProps>(FunctionComponent(key)),
          ),
        );
      }

      return ComponentCache.get(`Function_${key}`);
    },
  ],
  [
    'Promise',
    (key) => {
      if (!ComponentCache.has(`Promise_${key}`)) {
        ComponentCache.set(
          `Promise_${key}`,
          // @ts-ignore
          memo(forwardRef<DictComponentHandler, DictPromiseComponentProps>(PromiseComponent(key))),
        );
      }

      return ComponentCache.get(`Promise_${key}`);
    },
  ],
  [
    'NotPromise',
    (key) => {
      if (!ComponentCache.has(`NotPromise_${key}`)) {
        ComponentCache.set(`NotPromise_${key}`, memo(NoPromiseComponent(key)));
      }
      return ComponentCache.get(`NotPromise_${key}`);
    },
  ],
]);

const Component: (key: string) => ForwardRefRenderFunction<any, any> = (key) => (props, ref) => {
  const value = Dict.value[key].value;

  let Component;

  // isFunction
  if (Util.isFunction(value)) {
    Component = ComponentMap.get('Function')?.(key);
  }
  // isNotFunction
  else {
    // isNotPromise
    if (!value.then) {
      Component = ComponentMap.get('NotPromise')?.(key);
    }
    // Promise
    else {
      Component = ComponentMap.get('Promise')?.(key);
    }
  }

  return Component && <Component ref={ref} {...props} />;
};

/**
 * set - 设置字典对应的组件
 * @param {string} key - 字典名称
 * @return {void}
 */
export function set(key: string) {
  if (DictReactComponents[key]) return;

  DictReactComponents[key] = memo(forwardRef<any, any>(Component(key)));
}

/**
 * useDict
 * @description dict的hook
 * @param {string} dictName - 字典名称 如：SystemUser
 * @param {UseDictOptions} _options 配置
 * @return { data: any, isPending: boolean, isValidate: boolean, refresh:Function }
 */
export const useDict = (dictName: string, _options?: UseDictOptions) => {
  const value = Dict.value[dictName].value;

  const refresh = Dict.value[dictName].refresh;

  const options = _options ?? {};

  const [data, setData] = useState<UseDictState>({
    data: null,
    isPending: true,
    isValidate: true,
    refresh,
  });

  const getData = useCallback(() => {
    // isFunction
    if (Util.isFunction(value)) {
      Dict.handlers[dictName].isUseMemo = !!options?.isUseMemo;

      const result = value(options?.functionArgs ?? []);

      if (result.then) {
        result
          .then((res) => {
            setData({
              data: res,
              isValidate: true,
              isPending: false,
              refresh,
            });
          })
          .catch((error) => {
            setData({
              data: error,
              isValidate: false,
              isPending: false,
              refresh,
            });
          });
      } else {
        setData({
          data: result,
          isValidate: true,
          isPending: false,
          refresh,
        });
      }
    } else {
      // isNotPromise
      if (!value.then) {
        setData({
          data: value,
          isValidate: true,
          isPending: false,
          refresh,
        });
      }
      // Promise
      else {
        value
          .then((res) => {
            setData({
              data: res,
              isValidate: true,
              isPending: false,
              refresh,
            });
          })
          .catch((error) => {
            setData({
              data: error,
              isValidate: false,
              isPending: false,
              refresh,
            });
          });
      }
    }
  }, [dictName, value, refresh, JSON.stringify(options)]);

  useMount(() => {
    getData();
  });

  useUpdateEffect(() => {
    setData(({ data: _preData }) => ({
      data: _preData,
      isValidate: true,
      isPending: true,
      refresh,
    }));

    getData();
  }, [dictName, value, refresh, JSON.stringify(options)]);

  return data;
};

/**
 * Components - 字典对应的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
