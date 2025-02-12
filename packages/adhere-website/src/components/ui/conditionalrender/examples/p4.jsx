import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [rNoMatchShow, setRNoMatchShow] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setRNoMatchShow(!rNoMatchShow);
          }}
        >
          {rNoMatchShow ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender.Show conditional={rNoMatchShow} noMatch={<p>noMatch</p>}>
        <p>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
        </p>
      </ConditionalRender.Show>
    </Card>
  );
};
