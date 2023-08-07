import React, { FC, useMemo } from 'react';

import { TreeSelectLeafMultiFormItemProps } from '../../types';
import TreeMultiSelectFormItem from '../TreeMultiSelectFormItem';

/**
 * TreeSelectLeafMultiFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectLeafMultiFormItem: FC<TreeSelectLeafMultiFormItemProps> = ({
  dataSource,
  ...props
}) => {
  const targetDataSource = useMemo(() => {
    function loop(nodes) {
      (nodes || []).forEach((node) => {
        node.disabled = !('leaf' in node && node.leaf);

        loop(node.children);
      });
    }

    const source = JSON.parse(JSON.stringify(dataSource));

    loop(source);

    return source;
  }, [dataSource]);

  return <TreeMultiSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
};

export default TreeSelectLeafMultiFormItem;
