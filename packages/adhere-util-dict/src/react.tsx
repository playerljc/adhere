import { useUpdateLayoutEffect } from 'ahooks';
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import Util from '@baifendian/adhere-util';

import Dict from './dict';
import type {
  DictComponentHandler,
  DictComponentProps,
  DictFunctionComponentProps,
  DictReactComponentObj,
} from './types';

const ComponentCache = new Map<string, any>();

const ComponentMap = new Map<string, (key: string | symbol) => any>([
  [
    'Function',
    (key) => {
      if (!ComponentCache.has(`Function_${key}`)) {
        ComponentCache.set(
          `Function_${key}`,
          forwardRef<DictComponentHandler, DictFunctionComponentProps>(
            ({ children, firstLoading, isEmpty, renderEmpty, args, isUseMemo }, ref) => {
              const [data, setData] = useState();

              const asyncRef = useRef<Suspense.ASync>();

              // const props: any = {};
              // if (firstLoading) props.firstLoading = firstLoading;
              // if (renderEmpty) props.renderEmpty = renderEmpty;
              // if (isEmpty) props.isEmpty = isEmpty;
              const props = useMemo(() => {
                const _props: any = {};
                if (firstLoading) _props.firstLoading = firstLoading;
                if (renderEmpty) _props.renderEmpty = renderEmpty;
                if (isEmpty) _props.isEmpty = isEmpty;

                return _props;
              }, [firstLoading, renderEmpty, isEmpty]);

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

              useUpdateLayoutEffect(() => {
                asyncRef?.current?.fetchData?.();
              }, args || []);

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
            },
          ),
        );
      }

      return ComponentCache.get(`Function_${key}`);
    },
  ],
  [
    'NotPromise',
    (key) =>
      ({ children }) =>
        children?.(Dict.value[key].value),
  ],
  [
    'Promise',
    (key) => {
      if (!ComponentCache.has(`Promise_${key}`)) {
        ComponentCache.set(
          `Promise_${key}`,
          forwardRef<DictComponentHandler, DictComponentProps>(
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
            },
          ),
        );
      }

      return ComponentCache.get(`Promise_${key}`);
    },
  ],
]);

/**
 * set - 设置字典对应的组件
 * @param {string} key - 字典名称
 * @return {void}
 */
export function set(key: string | symbol) {
  if (DictReactComponents[key]) return;

  DictReactComponents[key] = forwardRef<any, any>((props, ref) => {
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
  });
}

/**
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
