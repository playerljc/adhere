import { Button } from 'antd';
import React, { useState } from 'react';

import { Space, Spin } from '@baifendian/adhere';

export default () => {
  const [show1, setShow1] = useState(false);

  return (
    <div>
      <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
        <Spin spinning={show1} text="处理中..." />
      </div>

      <div>
        <Space.Group direction="horizontal" size={5}>
          <Button
            type="primary"
            onClick={() => {
              setShow1(true);
            }}
          >
            显示
          </Button>

          <Button
            onClick={() => {
              setShow1(false);
            }}
          >
            取消
          </Button>
        </Space.Group>
      </div>
    </div>
  );
};
