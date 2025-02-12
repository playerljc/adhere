import { Button } from 'antd';
import React, { useState } from 'react';

import { Spin } from '@baifendian/adhere';

import Table from './table';

export default () => {
  const [reset1, setReset1] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setReset1(true);
        }}
      >
        重置
      </Button>

      <Table
        firstLoading={
          <div style={{ position: 'relative' }}>
            <Spin spinning />
          </div>
        }
        reset={reset1}
      />
    </>
  );
};
