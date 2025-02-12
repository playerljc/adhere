import React, { useMemo, useState } from 'react';

import Steps from '../../src/steps';

import '../../src/steps/StepsSwiper.less';

const description = 'This is a description.';
export default () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    setCurrent(value);
  };

  const items = useMemo(
    () => [
      {
        title: 'Finished',
        description,
        children: <div>11111111</div>,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
        children: <div>2222222</div>,
      },
      {
        title: 'Waiting',
        description,
        children: <div>3333333</div>,
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
      isFullHeight
      itemLayoutMode="surplus"
      itemRenderMode="forceRecreate"
    />
  );
};
