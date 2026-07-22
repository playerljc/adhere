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
      placeholder="CustomRadioSelect"
      value={value}
      onChange={setValue}
      radioProps={{}}
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
          {items.map(({ data, defaultNode }) => (
            <Col key={data?.value} span={4}>
              {defaultNode}
            </Col>
          ))}
        </Row>
      )}
    </Radio.CustomRadioSelect>
  );
};
