import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import FormItemWrap from '../../FormItemWrap';

const { ScrollLayout } = FlexLayout;

export default () => {
  return (
    <div style={{ height: 500 }}>
      <ScrollLayout scrollY>
        <Space.Group direction="vertical">
          {Array.from({ length: 20 })
            .fill(1)
            .map((t, _index) => (
              <FormItemWrap key={`${_index + 1}`} />
            ))}
        </Space.Group>
      </ScrollLayout>
    </div>
  );
};
