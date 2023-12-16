import { Button } from 'antd';
import React, { useRef } from 'react';

import { GlobalIndicator, Space } from '@baifendian/adhere';

export default () => {
  const ref = useRef();
  let handler = null;

  return (
    <div>
      <div
        ref={ref}
        style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}
      >
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
      </div>

      <div>
        <Space.Group direction="horizontal" size={5}>
          <Button
            type="primary"
            onClick={() => {
              handler = GlobalIndicator.show(ref.current, '处理中...');
            }}
          >
            显示
          </Button>

          <Button
            onClick={() => {
              GlobalIndicator.hide(handler);
            }}
          >
            取消
          </Button>
        </Space.Group>
      </div>
    </div>
  );
};
