import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CustomCheckboxSelect
      style={{ width: 280 }}
      placeholder="CustomCheckboxSelect"
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      checkboxProps={{}}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
    >
      {(items) => (
        <Row gutter={[16, 24]}>
          {items.map(({ data, onChange, ...rest }) => (
            <Col key={data?.value} span={4}>
              <Checkbox
                {...(data ?? {})}
                {...rest}
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
    </Checkbox.CustomCheckboxSelect>
  );
};
