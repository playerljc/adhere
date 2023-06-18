import { useUpdateLayoutEffect } from 'ahooks';
import React, {
  FC,
  ForwardRefRenderFunction,
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import SuspenseAsync from '@baifendian/adhere-ui-suspense/es/async';
import Util from '@baifendian/adhere-util';

import Dict from './dict';
import type {
  DictComponentHandler,
  DictFunctionComponentProps,
  DictNoPromiseComponentProps,
  DictPromiseComponentProps,
  DictReactComponentObj,
} from './types';

// 组件的缓存
const ComponentCache = new Map<string, any>();

/**
 * FunctionComponent
 * @constructor
 * @param key
 */
const FunctionComponent: (
  key: string,
) => ForwardRefRenderFunction<DictComponentHandler, DictFunctionComponentProps> =
  (key: string) =>
  ({ children, firstLoading, isEmpty, renderEmpty, args, isUseMemo, ...others }, ref) => {
    const [data, setData] = useState();

    const asyncRef = useRef<SuspenseAsync>();

    const props = useMemo(() => {
      const _props: any = { ...others };
      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderEmpty, isEmpty]);

    useUpdateLayoutEffect(() => {
      asyncRef?.current?.fetchData?.();
    }, args || []);

    useImperativeHandle(ref, () => ({
      reload: () => asyncRef?.current?.fetchData?.(),
      reset: () => asyncRef?.current?.reset?.(),
    }));

    const fetchData = () => {
      Dict.handlers[key].isUseMemo = isUseMemo || false;

      const result = Dict.value[key].value(...(args || []));

      if (result.then) {
        return result.then((res) => {
          setData(res);
          return res;
        });
      } else {
        setData(result);
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
  ({ children, firstLoading, isEmpty, renderEmpty, ...others }, ref) => {
    const [data, setData] = useState();

    const props = useMemo(() => {
      const _props: any = { ...others };
      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderEmpty, isEmpty]);

    const fetchData = () =>
      Dict.value[key].value.then((res) => {
        setData(res);
        return res;
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

    return data === null || data === undefined || isEmpty?.(data)
      ? renderEmpty
        ? renderEmpty?.()
        : null
      : children?.(data);
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

  return Component ? <Component ref={ref} {...props} /> : null;
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
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
