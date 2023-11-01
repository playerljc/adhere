import React, { useState } from 'react';

import { UseTransferRenderProps } from '../types';

/**
 * useTransferRenderProps
 */
const useTransferRenderProps: UseTransferRenderProps = (transferProps) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return ({ value, onChange, options }) => ({
    render: (item) => item.title,
    selectedKeys: [...selectedKeys],
    targetKeys: value,
    dataSource:
      options?.map?.((option) => ({
        key: option.value,
        title: option.label,
        description: option.label,
      })) ?? [],
    onChange: (targetKeys) => onChange?.(targetKeys, []),
    onSelectChange: (sourceSelectedKeys, targetSelectedKeys) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    },
    ...(transferProps ?? {}),
  });
};

export default useTransferRenderProps;
