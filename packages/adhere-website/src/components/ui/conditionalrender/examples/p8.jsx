import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [rFragmentVisibility, setRFragmentVisibility] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setRFragmentVisibility(!rFragmentVisibility);
          }}
        >
          {rFragmentVisibility ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender.Visibility
        conditional={rFragmentVisibility}
        noMatch={
          <>
            <p>NoMatchFragment1</p>
            <p>NoMatchFragment2</p>
            <p>NoMatchFragment3</p>
          </>
        }
      >
        <p>Fragment1</p>
        <p>Fragment2</p>
        <p>Fragment3</p>
      </ConditionalRender.Visibility>
    </Card>
  );
};
