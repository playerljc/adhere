import { Switch } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FewTable from '../fewTable';

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

      <div className={styles.Wrapper}>
        <FewTable
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          fixedTableSpaceBetween
          pagination={pagination}
        />
      </div>
    </>
  );
};
