import { Select } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { useScrollLayout } = FlexLayout;

const { Option } = Select;

function FormItemWrap() {
  const { getEl } = useScrollLayout();

  const data = Array.from({ length: 10 }).fill(1);

  return (
    <Select style={{ width: 200 }} getPopupContainer={() => getEl()}>
      {data.map((t, _index) => (
        <Option key={`${_index + 1}`} value={_index + 1}>
          {_index + 1}
        </Option>
      ))}
    </Select>
  );
}

export default FormItemWrap;
