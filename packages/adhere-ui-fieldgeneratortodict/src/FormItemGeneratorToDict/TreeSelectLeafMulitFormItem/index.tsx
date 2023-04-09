import React, { FC, useMemo } from 'react';

import { TreeSelectLeafMulitFormItemProps } from '../../types';
import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';

/**
 * TreeSelectLeafMulitFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectLeafMulitFormItem: FC<TreeSelectLeafMulitFormItemProps> = ({
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

  return <TreeMulitSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
};

export default TreeSelectLeafMulitFormItem;
