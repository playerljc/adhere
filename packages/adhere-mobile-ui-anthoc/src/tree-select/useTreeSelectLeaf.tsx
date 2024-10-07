import { useMemo } from 'react';

import type { UseTreeSelectLeaf } from '../types';

/**
 * useTreeSelectLeaf
 * @description 处理Tree数据的isLeaf
 * @param treeData
 */
const useTreeSelectLeaf: UseTreeSelectLeaf = (treeData = []) =>
  useMemo(() => {
    debugger;

    function loop(nodes) {
      (nodes || []).forEach((node) => {
        if ('isLeaf' in node) {
          node.disabled = !node.isLeaf;
        } else {
          node.disabled = !!node?.children?.length;
        }

        loop(node.children);
      });
    }

    const source = [...(treeData ?? [])];

    loop(source);

    return source;
  }, [treeData]);

export default useTreeSelectLeaf;
