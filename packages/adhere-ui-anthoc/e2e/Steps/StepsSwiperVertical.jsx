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
        description: 'vertical left',
        children: <div style={{ minHeight: 120 }}>Vertical step 1</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'Step 2',
        description: 'content panel',
        children: <div style={{ minHeight: 120 }}>Vertical step 2</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
      {
        title: 'Step 3',
        description: 'last',
        children: <div style={{ minHeight: 120 }}>Vertical step 3</div>,
        onPrev: () => Promise.resolve(),
        onNext: () => Promise.resolve(),
      },
    ],
    [],
  );

  return (
    <div style={{ height: 360 }}>
      <Steps.StepsSwiper
        current={current}
        onChange={setCurrent}
        items={items}
        direction="left"
        isFullWidth
        isFullHeight
        itemLayoutMode="grow"
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
    </div>
  );
};
