import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import React, { FC, useEffect, useState } from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import { TableFormItemProps } from '../../types';

/**
 * TableFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param dataSource
 * @param renderNormalLoading
 * @param props
 * @constructor
 */
const TableFormItem: FC<TableFormItemProps> = ({
  firstLoading,
  renderEmpty,
  dataSource,
  renderNormalLoading,
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
      renderNormalLoading={renderNormalLoading}
    >
      <Table dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    </Suspense.Sync>
  );
};

export default TableFormItem;
