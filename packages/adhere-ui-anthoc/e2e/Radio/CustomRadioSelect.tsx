import React, { useState } from 'react';

import Col from '../../src/col';
import Radio from '../../src/radio';
import Row from '../../src/row';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Radio.CustomRadioSelect
      style={{ width: 300 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      placeholder="A-Z"
      value={value}
      onChange={setValue}
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
    </Radio.CustomRadioSelect>
  );
};
