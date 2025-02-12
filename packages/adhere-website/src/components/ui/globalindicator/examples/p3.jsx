import { Button, Select } from 'antd';
import React, { useRef, useState } from 'react';

import { GlobalIndicator, Space } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  let handler = null;

  const ref = useRef();

  const [size, setSize] = useState('default');

  return (
    <div>
      <div
        ref={ref}
        className={styles.Wrapper}
        style={{ position: 'relative', wordBreak: 'break-all' }}
      >
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties
        and duplication and reduce the efficiency of development.
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
              handler = GlobalIndicator.show(ref.current, '处理中...', undefined, size);
            }}
          >
            显示
          </Button>

          <Button
            onClick={() => {
              GlobalIndicator.hide(handler);
            }}
          >
            取消
          </Button>
        </Space.Group>
      </div>
    </div>
  );
};
