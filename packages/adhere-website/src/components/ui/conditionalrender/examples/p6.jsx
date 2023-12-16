import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [rVisibility, setRVisibility] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setRVisibility(!rVisibility);
          }}
        >
          {rVisibility ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender.Visibility conditional={rVisibility}>
        <p>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
        </p>
      </ConditionalRender.Visibility>
    </Card>
  );
};
