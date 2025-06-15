import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import EditorCellUseKeepEditStateSearchTable from '../editorCellUseKeepEditStateSearchTable';

import styles from './examples.less';

export default () => {
  const [pagination, setPagination] = useState(false);

  return (
    <div className={styles.Wrapper}>
      <EditorCellUseKeepEditStateSearchTable
        FieldGeneratorToDict={FieldGeneratorToDict}
        style={{ height: '100%' }}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        pagination={pagination}
      />
    </div>
  );
};
