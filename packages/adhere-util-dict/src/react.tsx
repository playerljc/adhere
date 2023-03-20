import { useUpdateLayoutEffect } from 'ahooks';
import React, { forwardRef, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import Util from '@baifendian/adhere-util';

import Dict from './dict';
import type {
  DictComponentHandler,
  DictComponentProps,
  DictFunctionComponentProps,
  DictReactComponentObj,
} from './types';

/**
 * set - 设置字典对应的组件
 * @param {string} key - 字典名称
 * @return {void}
 */
export function set(key) {
  if (DictReactComponents[key]) return;

  const value = Dict.value[key].value;

  // isFunction
  if (Util.isFunction(value)) {
    DictReactComponents[key] = forwardRef<DictComponentHandler, DictFunctionComponentProps>(
      ({ children, firstLoading, isEmpty, renderEmpty, args, isUseMemo }, ref) => {
        const [data, setData] = useState();

        const props: any = {};
        if (firstLoading) props.firstLoading = firstLoading;
        if (renderEmpty) props.renderEmpty = renderEmpty;
        if (isEmpty) props.isEmpty = isEmpty;

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
          fetchData();
        }, args || []);

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
    );
  }
  // isNotFunction
  else {
    // isNotPromise
    if (!value.then) {
      DictReactComponents[key] = ({ children }) => children?.(Dict.value[key].value);
    }
    // Promise
    else {
      DictReactComponents[key] = forwardRef<DictComponentHandler, DictComponentProps>(
        ({ children, firstLoading, isEmpty, renderEmpty }, ref) => {
          const [data, setData] = useState();

          const props: any = {};
          if (firstLoading) props.firstLoading = firstLoading;
          if (renderEmpty) props.renderEmpty = renderEmpty;
          if (isEmpty) props.isEmpty = isEmpty;

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
      );
    }
  }
}

/**
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
