import { Select } from 'antd';
import React, { useState } from 'react';

import { ReactUtil, Resource, Space } from '@baifendian/adhere';

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
          style={{ width: 200 }}
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
          style={{ width: 200 }}
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