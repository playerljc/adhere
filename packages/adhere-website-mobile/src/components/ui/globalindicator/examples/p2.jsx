import { Button } from 'antd-mobile';
import React, { useRef } from 'react';

import { MobileGlobalIndicator, Space } from '@baifendian/adhere';

export default () => {
  const ref = useRef();

  return (
    <div>
      <div ref={ref} style={{ position: 'relative', wordBreak: 'break-all' }}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
      </div>

      <Space.Group direction="horizontal" size={5}>
        <Button
          block
          color="primary"
          onClick={() => {
            const handler = MobileGlobalIndicator.show(ref.current, '处理中...');

            setTimeout(() => {
              MobileGlobalIndicator.hide(handler);
            }, 2000);
          }}
        >
          显示
        </Button>
      </Space.Group>
    </div>
  );
};
