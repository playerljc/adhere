import React, { FC, useEffect, useState } from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import { LabelValue, TransferFormItemProps } from '../../types';

/**
 * TransferFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param dataSource
 * @param props
 * @constructor
 */
const TransferFormItem: FC<TransferFormItemProps> = ({
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
      <Transfer
        // @ts-ignore
        dataSource={data.map((t) => ({
          ...t,
          key: t.value,
          title: t.label,
          description: t.label,
        }))}
        // @ts-ignore
        render={(item) => item.title}
        targetKeys={props.value}
        {...props}
      />
    </Suspense.Sync>
  );
};

export default TransferFormItem;
