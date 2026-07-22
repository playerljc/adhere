import React, { useMemo, useState } from 'react';

import { Button, Steps } from '../../src';

import '../../src/steps/StepsSwiper.less';
import './index.less';

const description = 'This is a description.';

export default () => {
  const [current, setCurrent] = useState(0);

  const items = useMemo(
    () => [
      {
        title: 'Finished',
        description,
        children: <div>Step 1 content</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
        children: <div>Step 2 content</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'Waiting',
        description,
        children: <div>Step 3 content</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
    ],
    [],
  );

  return (
    <Steps.StepsSwiper
      current={current}
      onChange={setCurrent}
      items={items}
      direction="top"
      isFullWidth
      isFullHeight={false}
      itemLayoutMode="surplus"
      itemRenderMode="forceRecreate"
      navigation={({ next, prev, isShowPrev, isShowNext }) => (
        <div className="Navigation">
          {isShowPrev && (
            <Button
              onClick={() => {
                prev().then(() => {
                  setCurrent((c) => c - 1);
                });
              }}
            >
              prev
            </Button>
          )}

          {isShowNext && (
            <Button
              onClick={() => {
                next().then(() => {
                  setCurrent((c) => c + 1);
                });
              }}
            >
              next
            </Button>
          )}
        </div>
      )}
    />
  );
};
