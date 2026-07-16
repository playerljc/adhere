import { useState } from 'react';

import type { UseTableTransferRenderProps } from '../types';
import { toTableTransferDataSource } from './transferUtils';

const useTableTransferRenderProps: UseTableTransferRenderProps = (
  transferProps,
  { leftColumns, rightColumns },
) => {
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

  return ({ value, onChange, options }) => ({
    render: (item) => item.title,
    selectedKeys: [...selectedKeys],
    targetKeys: value,
    leftColumns,
    rightColumns,
    dataSource: toTableTransferDataSource(
      options?.map?.((option) => ({
        ...option,
        key: option.value,
        title: option.label,
        description: option.description ?? option.label,
      })) ?? [],
    ),
    onChange: (targetKeys) => onChange?.(targetKeys, []),
    onSelectChange: (sourceSelectedKeys, targetSelectedKeys) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    },
    showSelectAll: false,
    ...(transferProps ?? {}),
  });
};

export default useTableTransferRenderProps;
