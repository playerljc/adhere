import React, { FC } from 'react';

import { List } from '../../AntFormItemNormalize';
import { ListFormItemProps } from '../../types';

/**
 * ListFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const ListFormItem: FC<ListFormItemProps> = ({ dataSource, ...props }) => {
  return (
    // @ts-ignore
    <List dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
  );
};

export default ListFormItem;
