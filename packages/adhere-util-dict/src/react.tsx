import React, { forwardRef, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';

import Dict from './dict';
import type { DictComponentHandler, DictComponentProps, DictReactComponentObj } from './types';

/**
 * init - 初始化字典对应的组件
 */
export function set(key) {
  if (DictReactComponents[key]) return;

  const value = Dict.value[key].value;

  // 除了Promise类型
  if (!value.then) {
    DictReactComponents[key] = function ({ children }) {
      return children?.(Dict.value[key].value);
    };
  }
  // Promise类型
  else {
    DictReactComponents[key] = forwardRef<DictComponentHandler, DictComponentProps>(
      ({ children, firstLoading, isEmpty, renderEmpty }, ref) => {
        const [data, setData] = useState();

        const fetchData = () => Dict.value[key].value.then((res) => setData(res));

        const props: any = {};
        if (firstLoading) props.firstLoading = firstLoading;
        if (renderEmpty) props.renderEmpty = renderEmpty;
        if (isEmpty) props.isEmpty = isEmpty;

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

/**
 * Components - 字典对用的React组件
 * 调用init后会自动填充
 */
const DictReactComponents: DictReactComponentObj = {};

export default DictReactComponents;
