import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [baseUseShow, setBaseUserShow] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setBaseUserShow(!baseUseShow);
          }}
        >
          {baseUseShow ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender conditional={baseUseShow}>
        {() => (
          <p>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </p>
        )}
      </ConditionalRender>
    </Card>
  );
};
