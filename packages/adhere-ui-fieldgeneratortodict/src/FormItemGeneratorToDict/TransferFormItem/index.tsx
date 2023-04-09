import React, { FC } from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';

import { TransferFormItemProps } from '../../types';

/**
 * TransferFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TransferFormItem: FC<TransferFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Transfer
      // @ts-ignore
      dataSource={dataSource.map((t) => ({
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
  );
};

export default TransferFormItem;
