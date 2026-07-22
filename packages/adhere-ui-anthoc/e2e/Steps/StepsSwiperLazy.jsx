import React, { useMemo, useState } from 'react';

import { Button, Steps } from '../../src';

import '../../src/steps/StepsSwiper.less';
import './index.less';

export default () => {
  const [current, setCurrent] = useState(0);

  const items = useMemo(
    () => [
      {
        title: 'Step 1',
        description: 'lazy first visit',
        children: <div>Lazy step 1（仅首次访问时渲染，切走后保留）</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'Step 2',
        description: 'lazy keep visited',
        children: <div>Lazy step 2</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'Step 3',
        description: 'lazy last',
        children: <div>Lazy step 3</div>,
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
      direction="bottom"
      isFullWidth
      itemLayoutMode="auto"
      itemRenderMode="lazy"
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
