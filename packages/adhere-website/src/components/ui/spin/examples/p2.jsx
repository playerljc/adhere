import { Button, Select } from 'antd';
import React, { useState } from 'react';

import { Space, Spin } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  const [show2, setShow2] = useState(false);
  const [size, setSize] = useState('default');

  return (
    <div>
      <div className={styles.Wrapper}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
        <Spin spinning={show2} text="处理中..." size={size} />
      </div>

      <div>
        <Space.Group direction="horizontal" size={5}>
          <Select value={size} onChange={(e) => setSize(e)}>
            <Select.Option value="small">small</Select.Option>
            <Select.Option value="default">default</Select.Option>
            <Select.Option value="large">large</Select.Option>
          </Select>

          <Button
            type="primary"
            onClick={() => {
              setShow2(true);
            }}
          >
            显示
          </Button>

          <Button
            onClick={() => {
              setShow2(false);
            }}
          >
            取消
          </Button>
        </Space.Group>
      </div>
    </div>
  );
};
