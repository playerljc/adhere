import { Button } from 'antd';
import React, { useRef } from 'react';

import { ForceUpdate, Spin } from '@baifendian/adhere';

import Table from '../table';

export default () => {
  const t2 = useRef();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          t2.current.reMount();
        }}
      >
        重置
      </Button>

      <ForceUpdate ref={t2}>
        <Table
          firstLoading={
            <div style={{ position: 'relative' }}>
              <Spin spinning />
            </div>
          }
        />
      </ForceUpdate>
    </>
  );
};
