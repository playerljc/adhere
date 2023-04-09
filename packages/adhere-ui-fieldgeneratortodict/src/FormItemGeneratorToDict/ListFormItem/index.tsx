import React, { FC, useEffect, useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import type { LabelValue, ListFormItemProps } from '../../types';

/**
 * ListFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param dataSource
 * @param props
 * @constructor
 */
const ListFormItem: FC<ListFormItemProps> = ({
  firstLoading,
  renderEmpty,
  dataSource,
  ...props
}) => {
  const [data, setData] = useState<LabelValue[]>([]);

  useEffect(() => {
    setData(dataSource || []);
  }, [dataSource]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => data.length === 0}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty}
    >
      <List dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    </Suspense.Sync>
  );
};

export default ListFormItem;
