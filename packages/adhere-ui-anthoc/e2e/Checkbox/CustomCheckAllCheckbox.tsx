import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CustomCheckAllCheckbox
      value={value}
      onChange={setValue}
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
            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', marginBottom: 12 }}>
              {checkAllOrigin}
            </div>
            <div>{childrenOrigin}</div>
          </div>
        );
      }}
    >
      {(items) => (
        <Row gutter={[16, 24]}>
          {items.map(({ data, onChange, checked, disabled }) => (
            <Col span={4} key={data?.value}>
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
    </Checkbox.CustomCheckAllCheckbox>
  );
};
