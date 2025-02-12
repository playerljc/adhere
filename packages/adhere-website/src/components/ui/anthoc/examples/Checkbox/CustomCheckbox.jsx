import React, { useState } from 'react';

import { Checkbox, Col, Row } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CustomCheckbox
      value={value}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
      onChange={setValue}
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
};
