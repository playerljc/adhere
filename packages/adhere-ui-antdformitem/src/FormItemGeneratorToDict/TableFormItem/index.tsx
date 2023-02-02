import React, { FC } from 'react';

import { Table } from '../../AntFormItemNormalize';
import { TableFormItemProps } from '../../types';

/**
 * TableFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TableFormItem: FC<TableFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Table dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
  );
};

export default TableFormItem;
