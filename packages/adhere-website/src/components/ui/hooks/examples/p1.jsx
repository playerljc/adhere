import { Button } from 'antd';
import React from 'react';

import { Hooks } from '@baifendian/adhere';

const { useForceUpdate } = Hooks;

export default () => {
  const forceUpdate = useForceUpdate();

  return (
    <Button
      type="primary"
      onClick={() => {
        forceUpdate();
      }}
    >
      forceUpdate
    </Button>
  );
};
