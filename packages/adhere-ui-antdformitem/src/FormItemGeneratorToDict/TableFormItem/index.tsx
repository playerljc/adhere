import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import React, { FC, useEffect, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';

import { Table } from '../../AntFormItemNormalize';
import { TableFormItemProps } from '../../types';

/**
 * TableFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param dataSource
 * @param props
 * @constructor
 */
const TableFormItem: FC<TableFormItemProps> = ({
  firstLoading,
  renderEmpty,
  dataSource,
  ...props
}) => {
  const [data, setData] = useState<RcTableProps['data']>([]);

  useEffect(() => {
    setData(dataSource || []);
  }, [dataSource]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => data?.length === 0}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty}
    >
      <Table dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    </Suspense.Sync>
  );
};

export default TableFormItem;
