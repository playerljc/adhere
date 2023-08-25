import React, { FC, useMemo } from 'react';

import { CascaderLeafFormItemProps } from '../../types';
import CascaderFormItem from '../CascaderFormItem';

/**
 * CascaderLeafFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CascaderLeafFormItem: FC<CascaderLeafFormItemProps> = ({ dataSource, ...props }) => {
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

  return <CascaderFormItem {...props} options={targetDataSource} />;
};

export default CascaderLeafFormItem;
