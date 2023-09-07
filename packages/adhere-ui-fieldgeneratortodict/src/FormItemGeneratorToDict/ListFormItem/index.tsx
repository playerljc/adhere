import React, { FC, useEffect, useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import type { LabelValue, ListFormItemProps } from '../../types';

/**
 * ListFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param isEmpty
 * @param dataSource
 * @param renderNormalLoading
 * @param props
 * @constructor
 */
const ListFormItem: FC<ListFormItemProps> = ({
  firstLoading,
  renderEmpty,
  isEmpty,
  dataSource,
  renderNormalLoading,
  ...props
}) => {
  const [data, setData] = useState<LabelValue[]>([]);

  useEffect(() => {
    setData(dataSource || []);
  }, [dataSource]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => (isEmpty ? isEmpty?.(data) : data.length === 0)}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty ? renderEmpty(data) : <List />}
      renderNormalLoading={renderNormalLoading}
    >
      <List dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    </Suspense.Sync>
  );
};

export default ListFormItem;
