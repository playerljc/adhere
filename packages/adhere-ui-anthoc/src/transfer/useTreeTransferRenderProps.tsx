import { useState } from 'react';

import type { UseTreeTransferRenderProps } from '../types';

const useTreeTransferRenderProps: UseTreeTransferRenderProps = (transferProps) => {
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

  return ({ value, onChange, treeData }) => ({
    render: (item) => item.title,
    selectedKeys: [...selectedKeys],
    targetKeys: value,
    dataSource: treeData ?? [],
    onChange: (targetKeys) => onChange?.(targetKeys, []),
    onSelectChange: (sourceSelectedKeys, targetSelectedKeys) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    },
    showSelectAll: false,
    ...(transferProps ?? {}),
  });
};

export default useTreeTransferRenderProps;
