import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CheckAllCustomCheckboxSelect
      style={{ width: 280 }}
      placeholder="CheckAllCustomCheckboxSelect"
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
      render={(checkAllOrigin, childrenOrigin) => {
        return (
          <div>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {checkAllOrigin}
            </div>
            <div style={{ padding: 12 }}>{childrenOrigin}</div>
          </div>
        );
      }}
    >
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
    </Checkbox.CheckAllCustomCheckboxSelect>
  );
};
