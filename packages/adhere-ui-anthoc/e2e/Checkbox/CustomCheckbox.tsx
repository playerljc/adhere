import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
  };
});

export default () => {
  const [value, setValue] = useState(['A', 'B']);

  return (
    <Checkbox.CustomCheckbox value={value} onChange={setValue} options={options}>
      {(items) => (
        <Row gutter={[16, 24]}>
          {items.map(({ data, onChange, checked, disabled }) => (
            <Col key={data?.value} span={4}>
              <Checkbox
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
