import { Button } from 'antd';
import React from 'react';

import { Space, WatchMemoized } from '@baifendian/adhere';

const { createRef, memoized } = WatchMemoized;

export default () => {
  // 单值监控light比较
  const [get1Value, set1Value, property1] = createRef([{ a: 1 }]);
  console.log('srcValue1', get1Value());
  memoized.watch.race(() => {
    console.log('changeValue', get1Value());
  }, [
    {
      property: property1,
      mode: 'light',
    },
  ]);

  // 单值监控deep比较
  const [get2Value, set2Value, property2] = createRef({ a: 1 });
  console.log('srcValue2', get2Value());
  memoized.watch.race(() => {
    console.log('changeValue', get2Value());
  }, [
    {
      property: property2,
      mode: 'deep',
    },
  ]);

  // 单值监控自定义比较
  const [get3Value, set3Value, property3] = createRef({ a: 1 });
  console.log('srcValue3', get3Value());
  memoized.watch.race(() => {
    console.log('changeValue', get3Value());
  }, [
    {
      property: property3,
      mode: function (oldValue, newValue) {
        return oldValue === newValue;
      },
    },
  ]);

  return (
    <Space.Group direction="horizontal" size={10}>
      <Button
        onClick={() => {
          set1Value([{ a: 1 }]);
        }}
      >
        light比较
      </Button>

      <Button
        onClick={() => {
          set2Value({ a: 2 });
        }}
      >
        deep比较
      </Button>

      <Button
        onClick={() => {
          set3Value({ a: 2 });
        }}
      >
        自定义比较
      </Button>
    </Space.Group>
  );
};
