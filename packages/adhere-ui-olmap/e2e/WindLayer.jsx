import { Button } from 'antd';
import React, { useRef } from 'react';

import { OLMap } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * WindLayer
 * @description addWindLayer（无参时使用内置 DEFAULT_DATA）
 */
export default () => {
  const windRef = useRef();

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Button
          type="primary"
          onClick={() => {
            windRef.current?.addWindLayer?.();
          }}
        >
          添加风场 Layer
        </Button>
      </div>
      <OLMap zoom={5} ref={windRef} style={{ height: '100%' }} />
    </div>
  );
};
