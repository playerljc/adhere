import { Button, Card } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

export default () => {
  const [rFragmentShow, setRFragmentShow] = useState(true);

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            setRFragmentShow(!rFragmentShow);
          }}
        >
          {rFragmentShow ? '隐藏' : '显示'}
        </Button>,
      ]}
    >
      <ConditionalRender.Show
        conditional={rFragmentShow}
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
      </ConditionalRender.Show>
    </Card>
  );
};
