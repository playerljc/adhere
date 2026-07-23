import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import CascadeCompared from '../src/index';

import '../src/index.less';
import { createMasterItem, getIndicator, getMaster } from './mock';

import './index.less';

/**
 * 在底部插入分组
 */
export default () => {
  const ref = useRef();
  const [dataSource, setDataSource] = useState(getMaster());

  useEffect(() => {
    ref.current?.scrollToByIndex(dataSource.length - 1);
  }, [dataSource]);

  return (
    <>
      <div className="CascadeComparedE2E-toolbar">
        <Button
          type="primary"
          onClick={() => {
            setDataSource((data) => data.concat([createMasterItem(data.length)]));
          }}
        >
          插入
        </Button>
      </div>

      <div className="CascadeComparedE2E-wrapper">
        <CascadeCompared ref={ref} indicator={getIndicator()} master={dataSource} />
      </div>
    </>
  );
};
