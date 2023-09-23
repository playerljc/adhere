import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import React, { FC, useEffect, useState } from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import { TableFormItemProps } from '../../types';

/**
 * TableFormItem
 * @param firstLoading
 * @param isEmpty
 * @param renderEmpty
 * @param dataSource
 * @param renderNormalLoading
 * @param props
 * @constructor
 */
const TableFormItem: FC<TableFormItemProps> = ({
  firstLoading,
  isEmpty,
  renderEmpty,
  renderNormalLoading,
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
      isEmpty={() => (isEmpty ? isEmpty?.(data) : data?.length === 0)}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty ? renderEmpty(data) : () => <Table />}
      renderNormalLoading={renderNormalLoading}
    >
      <Table dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    </Suspense.Sync>
  );
};

export default TableFormItem;
