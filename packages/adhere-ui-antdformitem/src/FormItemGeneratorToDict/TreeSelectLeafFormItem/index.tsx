import React, { FC, useMemo } from 'react';

import { TreeSelectLeafFormItemProps } from '../../types';
import TreeSelectFormItem from '../TreeSelectFormItem';

/**
 * TreeSelectLeafFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectLeafFormItem: FC<TreeSelectLeafFormItemProps> = ({ dataSource, ...props }) => {
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

  return <TreeSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
};

export default TreeSelectLeafFormItem;
