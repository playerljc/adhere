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
import type SuspenseAsync from '@baifendian/adhere-ui-suspense/es/Async';
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

/** Component cache for memoization to prevent unnecessary re-renders */
const ComponentCache = new Map<string, React.ComponentType<any>>();

/**
 * Create a function component for dictionary with arguments
 * @param key - Dictionary key
 * @returns ForwardRefRenderFunction for function-based dictionary component
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

    const asyncRef = useRef<SuspenseAsync>(null);

    const props = useMemo(() => {
      const _props: any = { ...rest };
      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderNormalLoading) _props.renderNormalLoading = renderNormalLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderNormalLoading, renderEmpty, isEmpty, rest]);

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

    const fetchData = useCallback(() => {
      const handler = Dict.handlers[key];
      if (handler) {
        handler.isUseMemo = isUseMemo || false;
      }

      const result = Dict.value[key]?.value(...(args || []));

      // Handle Promise result
      if (result && typeof result.then === 'function') {
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
      // Handle non-Promise result
      else {
        setData({
          data: result,
          isValidate: true,
          isPending: false,
        });

        return Promise.resolve(result);
      }
    }, [key, args, isUseMemo]);

    return (
      <Suspense.ASync
        ref={asyncRef}
        fetchData={fetchData}
        {...props}
        isEmpty={() => data.data === null || data.data === undefined || isEmpty?.(data.data)}
      >
        {children?.(data)}
      </Suspense.ASync>
    );
  };

/**
 * Create a promise component for dictionary
 * @param key - Dictionary key
 * @returns ForwardRefRenderFunction for promise-based dictionary component
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
    }, [firstLoading, renderNormalLoading, renderEmpty, isEmpty, rest]);

    const fetchData = useCallback(
      () =>
        Dict.value[key]?.value
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
          }),
      [key],
    );

    return (
      <Suspense.ASync
        ref={ref}
        fetchData={fetchData}
        {...props}
        isEmpty={() => data.data === null || data.data === undefined || isEmpty?.(data.data)}
      >
        {children?.(data)}
      </Suspense.ASync>
    );
  };

/**
 * Create a non-promise component for dictionary
 * @param key - Dictionary key
 * @returns FC for non-promise dictionary component
 */
const NoPromiseComponent: (key: string) => FC<DictNoPromiseComponentProps> =
  (key: string) =>
  ({ children, isEmpty, renderEmpty }) => {
    const data = Dict.value[key]?.value;

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

/** Component factory map for creating different types of dictionary components */
const ComponentMap = new Map<string, (key: string) => React.ComponentType<any>>([
  [
    'Function',
    (key) => {
      if (!ComponentCache.has(`Function_${key}`)) {
        ComponentCache.set(
          `Function_${key}`,
          memo(
            forwardRef<DictComponentHandler, DictFunctionComponentProps>(FunctionComponent(key)),
          ),
        );
      }

      return ComponentCache.get(`Function_${key}`)!;
    },
  ],
  [
    'Promise',
    (key) => {
      if (!ComponentCache.has(`Promise_${key}`)) {
        ComponentCache.set(
          `Promise_${key}`,
          memo(forwardRef<DictComponentHandler, DictPromiseComponentProps>(PromiseComponent(key))),
        );
      }

      return ComponentCache.get(`Promise_${key}`)!;
    },
  ],
  [
    'NotPromise',
    (key) => {
      if (!ComponentCache.has(`NotPromise_${key}`)) {
        ComponentCache.set(`NotPromise_${key}`, memo(NoPromiseComponent(key)));
      }
      return ComponentCache.get(`NotPromise_${key}`)!;
    },
  ],
]);

/**
 * Create appropriate component based on dictionary value type
 * @param key - Dictionary key
 * @returns ForwardRefRenderFunction for the appropriate component type
 */
const Component: (key: string) => ForwardRefRenderFunction<any, any> = (key) => (props, ref) => {
  const value = Dict.value[key]?.value;

  let Component: React.ComponentType<any> | undefined;

  // Determine component type based on value
  if (Util.isFunction(value)) {
    Component = ComponentMap.get('Function')?.(key);
  } else {
    // Check if value is a Promise
    if (value && typeof value.then === 'function') {
      Component = ComponentMap.get('Promise')?.(key);
    } else {
      Component = ComponentMap.get('NotPromise')?.(key);
    }
  }

  return Component ? <Component ref={ref} {...props} /> : null;
};

/**
 * Set up dictionary component for the given key
 * @param key - Dictionary key
 */
export function set(key: string): void {
  if (DictReactComponents[key]) return;

  DictReactComponents[key] = memo(forwardRef<any, any>(Component(key)));
}

/**
 * Hook for using dictionaries in React components
 * @param dictName - Dictionary name (e.g., 'SystemUser')
 * @param _options - Configuration options
 * @returns Dictionary state with data, loading status, and refresh function
 */
export const useDict = (dictName: string, _options?: UseDictOptions): UseDictState => {
  const value = Dict.value[dictName]?.value;
  const refresh = Dict.value[dictName]?.refresh as UseDictState['refresh'];
  const options = _options ?? {};

  const [data, setData] = useState<UseDictState>({
    data: null,
    isPending: true,
    isValidate: true,
    refresh,
  });

  const getData = useCallback(() => {
    // Handle function-based dictionaries
    if (Util.isFunction(value)) {
      const handler = Dict.handlers[dictName];
      if (handler) {
        handler.isUseMemo = !!options?.isUseMemo;
      }

      const result = value(options?.functionArgs ?? []);

      if (result && typeof result.then === 'function') {
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
      // Handle non-function dictionaries
      if (value && typeof value.then === 'function') {
        // Promise-based dictionary
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
      } else {
        // Static dictionary
        setData({
          data: value,
          isValidate: true,
          isPending: false,
          refresh,
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
 * Dictionary React components - automatically populated after init
 * Maps dictionary keys to their corresponding React components
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
