import { Button } from 'antd';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';

export default () => {
  const windRef = useRef();

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => {
          windRef.current.addWindLayer();
        }}
      >
        添加风场Layer
      </Button>

      <OLMap.OLMap zoom={5} ref={windRef} />
    </div>
  );
};
