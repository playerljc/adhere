import React, { FC, useMemo } from 'react';

import { CascaderLeafMulitFormItemProps } from '../../types';
import CascaderMulitFormItem from '../CascaderMulitFormItem';

/**
 * CascaderLeafMulitFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CascaderLeafMulitFormItem: FC<CascaderLeafMulitFormItemProps> = ({
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

  return <CascaderMulitFormItem {...props} options={targetDataSource} />;
};

export default CascaderLeafMulitFormItem;
