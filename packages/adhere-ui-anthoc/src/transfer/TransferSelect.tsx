import React, { memo, useState } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TransferSelectProps } from '../types';
import Transfer from './Transfer';

/**
 * TransferSelect
 * @param transferProps
 * @param props
 * @constructor
 */
const TransferSelect: FC<TransferSelectProps> = ({ transferProps, ...props }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
      {({ value, onChange, options }) => (
        <Transfer
          render={(item) => item.title}
          selectedKeys={selectedKeys}
          targetKeys={value}
          dataSource={
            options?.map?.((option) => ({
              key: option.value,
              title: option.label,
              description: option.label,
            })) ?? []
          }
          onChange={(targetKeys) => {
            onChange?.(targetKeys, []);
          }}
          onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
            setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
          }}
          {...(transferProps ?? {})}
          {...props}
        />
      )}
    </DropdownRenderSelect>
  );
};

export default memo(TransferSelect);
