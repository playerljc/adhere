import { Button } from 'antd';
import React, { useMemo, useState } from 'react';

import Steps from '../../src/steps';

import '../../src/steps/StepsSwiper.less';
import './index.less';

const description = 'This is a description.';
export default () => {
  const [current, setCurrent] = useState(1);

  const onChange = (value) => {
    setCurrent(value);
  };

  const items = useMemo(
    () => [
      {
        title: 'Finished',
        description,
        children: <div>11111111</div>,
        onPrev: () => {
          return Promise.resolve();
        },
        onNext: () => {
          return Promise.reject();
        },
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
        children: <div>2222222</div>,
        onPrev: () => {
          return Promise.resolve();
        },
        onNext: () => {
          return Promise.resolve();
        },
      },
      {
        title: 'Waiting',
        description,
        children: <div>3333333</div>,
        onPrev: () => {
          return Promise.resolve();
        },
        onNext: () => {
          return Promise.resolve();
        },
      },
    ],
    [],
  );

  return (
    <Steps.StepsSwiper
      current={current}
      onChange={onChange}
      items={items}
      direction="top"
      isFullWidth
      isFullHeight={false}
      itemLayoutMode="surplus"
      itemRenderMode="forceRecreate"
      navigation={({ next, prev, isShowPrev, isShowNext }) => {
        console.log('navigation', isShowPrev, isShowNext);
        return (
          <div className="Navigation">
            {isShowPrev && (
              <Button
                onClick={() => {
                  return prev().then(() => {
                    setCurrent(current - 1);
                  });
                }}
              >
                pre
              </Button>
            )}

            {isShowNext && (
              <Button
                onClick={() => {
                  return next().then(() => {
                    setCurrent(current + 1);
                  });
                }}
              >
                next
              </Button>
            )}
          </div>
        );
      }}
    />
  );
};
