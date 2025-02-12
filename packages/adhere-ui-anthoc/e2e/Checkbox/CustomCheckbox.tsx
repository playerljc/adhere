import React from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';

export default () => (
  <Checkbox.CustomCheckbox
    options={Array.from({ length: 26 }).map((t, _index) => {
      const letter = String.fromCharCode(97 + _index).toUpperCase();

      return {
        label: letter,
        value: letter,
      };
    })}
    onChange={(v) => {
      console.log('v', v);
    }}
  >
    {(options) => (
      <Row gutter={[16, 24]}>
        {options.map(({ data, onChange, checked, disabled }) => (
          <Col span={4}>
            <Checkbox
              key={data?.value}
              {...(data ?? {})}
              checked={checked}
              disabled={disabled}
              onChange={(e) => {
                onChange(e, data.value);
              }}
            >
              {data?.label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    )}
  </Checkbox.CustomCheckbox>
);
