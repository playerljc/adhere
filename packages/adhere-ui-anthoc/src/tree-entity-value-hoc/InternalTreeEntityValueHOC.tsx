import { memo } from 'react';

import type { DisplayNameInternal, TreeEntityValueHOCProps } from '../types';
import useTreeEntityValueHOC from '../useTreeEntityValueHOC';

const treeDataProps = ['treeData'];

const DEFAULT_TREE_DATA_PROP = 'treeData';

const InternalTreeEntityValueHOC = memo<TreeEntityValueHOCProps>((props) => {
  function getTreeDataByEntity(entity) {
    if ((props.treeDataProp ?? DEFAULT_TREE_DATA_PROP) in entity) {
      return entity[props.treeDataProp ?? DEFAULT_TREE_DATA_PROP];
    }

    let treeData = entity[DEFAULT_TREE_DATA_PROP];

    for (let i = 0; i < treeDataProps.length; i++) {
      if (treeDataProps[i] in entity) {
        treeData = entity[treeDataProps[i]];
        break;
      }
    }

    return treeData;
  }

  const treeData = getTreeDataByEntity(props.children.props);

  return useTreeEntityValueHOC({ ...props, treeData });
});

const TreeEntityValueHOC = InternalTreeEntityValueHOC as DisplayNameInternal<
  typeof InternalTreeEntityValueHOC
>;

export default TreeEntityValueHOC;
