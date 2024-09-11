import { Switch } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import Table from '../table';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <Switch
        checkedChildren="分页"
        checked={pagination}
        onChange={() => {
          setPagination(!pagination);
        }}
      />

      <Space direction="vertical" />

      <div className={styles.Wrapper2}>
        <Table
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          autoFixed
          pagination={pagination}
        />
      </div>
    </>
  );
};
