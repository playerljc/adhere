import React, { FC, useMemo } from 'react';

import { CascaderLeafMultiFormItemProps } from '../../types';
import CascaderMultiFormItem from '../CascaderMultiFormItem';

/**
 * CascaderLeafMultiFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CascaderLeafMultiFormItem: FC<CascaderLeafMultiFormItemProps> = ({
  dataSource,
  ...props
}) => {
  const targetDataSource = useMemo(() => {
    function loop(nodes) {
      (nodes || []).forEach((node) => {
        node.disabled = !('isLeaf' in node && node.isLeaf);

        loop(node.children);
      });
    }

    const source = JSON.parse(JSON.stringify(dataSource));

    loop(source);

    return source;
  }, [dataSource]);

  return <CascaderMultiFormItem {...props} options={targetDataSource} />;
};

export default CascaderLeafMultiFormItem;
