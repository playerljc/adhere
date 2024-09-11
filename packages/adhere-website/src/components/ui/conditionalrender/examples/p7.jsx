import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [rNoMatchVisibility, setRNoMatchVisibility] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setRNoMatchVisibility(!rNoMatchVisibility);
          }}
        >
          {rNoMatchVisibility ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender.Visibility conditional={rNoMatchVisibility} noMatch={<p>noMatch</p>}>
        <p>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
        </p>
      </ConditionalRender.Visibility>
    </Card>
  );
};
