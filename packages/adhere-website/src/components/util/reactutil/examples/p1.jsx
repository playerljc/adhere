import { Select } from 'antd';
import React, { useState } from 'react';

import { ReactUtil, Resource, Space } from '@baifendian/adhere';

import styles from './examples.less';

const { Option } = Select;

export default () => {
  const [data] = useState([
    { label: 'java', value: 'java' },
    { label: 'javascript', value: 'javascript' },
    { label: 'css', value: 'css' },
    { label: 'git', value: 'git' },
  ]);

  return (
    <>
      <div>
        <Select
          className={styles.Select}
          getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
        >
          {data.map((t) => (
            <Option key={t.value} value={t.value}>
              {t.label}
            </Option>
          ))}
        </Select>
      </div>

      <Space direction="vertical" />

      <div>
        <Select
          className={styles.Select}
          getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
        >
          {ReactUtil.keyMap(data, (t) => (
            <Option value={t.value}>{t.label}</Option>
          ))}
        </Select>
      </div>
    </>
  );
};
