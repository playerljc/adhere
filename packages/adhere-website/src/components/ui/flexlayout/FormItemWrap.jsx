import { Select } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './index.less';

const { useScrollLayout } = FlexLayout;

const { Option } = Select;

function FormItemWrap() {
  const { getEl } = useScrollLayout();

  const data = Array.from({ length: 10 }).fill(1);

  return (
    <Select className={styles.Select} getPopupContainer={() => getEl()}>
      {data.map((t, _index) => (
        <Option key={`${_index + 1}`} value={_index + 1}>
          {_index + 1}
        </Option>
      ))}
    </Select>
  );
}

export default FormItemWrap;
