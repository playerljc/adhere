import React from 'react';

import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <Radio.CustomRadio
    options={Array.from({ length: 26 }).map((t, _index) => {
      const letter = String.fromCharCode(97 + _index).toUpperCase();

      return {
        label: letter,
        value: letter,
      };
    })}
  >
    {(options) => (
      <Row gutter={[16, 24]}>
        {options.map(({ data }) => (
          <Col span={4}>
            <Radio key={data?.value} {...(data ?? {})}>
              {data?.label}
            </Radio>
          </Col>
        ))}
      </Row>
    )}
  </Radio.CustomRadio>
);
