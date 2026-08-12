import { useMemo } from 'react';

import type { UseTreeSelectLeaf } from '../types';

/**
 * useTreeSelectLeaf
 * @description 处理TreeSelect数据的isLeaf
 * @param treeData
 */
const useTreeSelectLeaf: UseTreeSelectLeaf = (treeData) =>
  useMemo(() => {
    function loop(nodes): any[] {
      return (nodes || []).map((node) => {
        const disabled = 'isLeaf' in node ? !node.isLeaf : !!node?.children?.length;
        const cloned: any = { ...node, disabled };

        if (node.children) {
          cloned.children = loop(node.children);
        }

        return cloned;
      });
    }

    return loop(treeData ?? []);
  }, [treeData]);

export default useTreeSelectLeaf;
