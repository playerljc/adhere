import { useMount, useUpdateLayoutEffect } from 'ahooks';
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
  ({ children, firstLoading, isEmpty, renderEmpty, args, isUseMemo }, ref) => {
    const [data, setData] = useState();

    const asyncRef = useRef<Suspense.ASync>();

    const props = useMemo(() => {
      const _props: any = {};
      if (firstLoading) _props.firstLoading = firstLoading;
      if (renderEmpty) _props.renderEmpty = renderEmpty;
      if (isEmpty) _props.isEmpty = isEmpty;

      return _props;
    }, [firstLoading, renderEmpty, isEmpty]);

    useMount(() => {
      // console.log('Function Mount');
    });

    useUpdateLayoutEffect(() => {
      // console.log('Function Update', args);
      asyncRef?.current?.fetchData?.();
    }, args || []);

    useImperativeHandle(ref, () => ({
      reset: () => asyncRef.current.reset(),
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
  ({ children, firstLoading, isEmpty, renderEmpty }, ref) => {
    const [data, setData] = useState();

    const props = useMemo(() => {
      const _props: any = {};
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
      ? renderEmpty?.()
      : children?.(data);
  };

// 组件的config
const ComponentMap = new Map<string, (key: string | symbol) => any>([
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

      return ComponentCache.get(`Function_${key}`);
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

const Component: (key: string | symbol) => ForwardRefRenderFunction<any, any> =
  (key) => (props, ref) => {
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
export function set(key: string | symbol) {
  if (DictReactComponents[key]) return;

  DictReactComponents[key] = memo(forwardRef<any, any>(Component(key)));
}

/**
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
