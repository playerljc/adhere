import { Button } from 'antd';
import React, { useRef } from 'react';

import { ForceUpdate } from '@baifendian/adhere';

import Table from '../table';

export default () => {
  const t1 = useRef();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          t1.current.reMount();
        }}
      >
        重置
      </Button>

      <ForceUpdate ref={t1}>
        <Table />
      </ForceUpdate>
    </>
  );
};
