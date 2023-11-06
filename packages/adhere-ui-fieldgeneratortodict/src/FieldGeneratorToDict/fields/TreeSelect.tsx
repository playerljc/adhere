import { TreeSelectProps } from 'antd';
import React from 'react';

import { TreeSelect } from '@baifendian/adhere-ui-anthoc';
import type {
  AsyncTreeLeafSelectProps,
  AsyncTreeMultiLeafSelectProps,
  AsyncTreeMultiSelectProps,
  AsyncTreeSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { setItem } from '../ItemFactory';
import { useAsyncTree, useDict, useDynamicDict } from '../hooks';

/**
 * TreeStandard
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'Leaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeLeafMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'LeafMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tree.TreeMultiLeafSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeCheckedShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'CheckedShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowAllSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeCheckedShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'CheckedShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowChildSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeCheckedShowParent
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'CheckedShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowParentSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeFlatStandard
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeFlatMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeFlatLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeFlatLeafMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatLeafMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiLeafSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeFlatCheckedShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatCheckedShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowAllSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeFlatCheckedShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatCheckedShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowChildSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeFlatCheckedShowParent
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'Tree',
  'FlatCheckedShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowParentSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeDynamicStandard
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'Leaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicLeafMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'LeafMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tree.TreeMultiLeafSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicCheckedShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'CheckedShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowAllSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicCheckedShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'CheckedShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowChildSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicCheckedShowParent
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'CheckedShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeCheckedShowParentSelect {...props} treeData={treeData} />;
    },
);

/**
 * TreeDynamicFlatStandard
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeDynamicFlatMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeDynamicFlatLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeDynamicFlatLeafMulti
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatLeafMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeMultiLeafSelect {...props} treeData={treeData} treeDataSimpleMode />;
    },
);

/**
 * TreeDynamicFlatCheckedShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatCheckedShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowAllSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeDynamicFlatCheckedShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatCheckedShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowChildSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeDynamicFlatCheckedShowParent
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'TreeDynamic',
  'FlatCheckedShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.TreeCheckedShowParentSelect {...props} treeData={treeData} treeDataSimpleMode />
      );
    },
);

/**
 * TreeAsyncStandard
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'Standard',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncMulti
 */
setItem<AsyncTreeMultiSelectProps, AsyncTreeMultiSelectProps['treeData']>(
  'TreeAsync',
  'Multi',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeMultiSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeMultiSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncLeaf
 */
setItem<AsyncTreeLeafSelectProps, AsyncTreeLeafSelectProps['treeData']>(
  'TreeAsync',
  'Leaf',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeLeafSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeLeafSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncLeafMulti
 */
setItem<AsyncTreeMultiLeafSelectProps, AsyncTreeMultiLeafSelectProps['treeData']>(
  'TreeAsync',
  'LeafMulti',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeMultiLeafSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeMultiLeafSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncCheckedShowAll
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'CheckedShowAll',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeCheckedShowAllSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncChCheckedShowChild
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'CheckedShowChild',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeCheckedShowChildSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncCheckedShowParent
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'CheckedShowParent',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeCheckedShowParentSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * TreeAsyncFlatStandard
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'FlatStandard',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeSelect {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * TreeAsyncFlatMulti
 */
setItem<AsyncTreeMultiSelectProps, AsyncTreeMultiSelectProps['treeData']>(
  'TreeAsync',
  'FlatMulti',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeMultiSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeMultiSelect {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * TreeAsyncFlatLeaf
 */
setItem<AsyncTreeLeafSelectProps, AsyncTreeLeafSelectProps['treeData']>(
  'TreeAsync',
  'FlatLeaf',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeLeafSelectProps['treeData']>({
      dictName,
    });

    return <TreeSelect.AsyncTreeLeafSelect {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * TreeAsyncFlatLeafMulti
 */
setItem<AsyncTreeMultiLeafSelectProps, AsyncTreeMultiLeafSelectProps['treeData']>(
  'TreeAsync',
  'FlatLeafMulti',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeMultiLeafSelectProps['treeData']>({
      dictName,
    });

    return (
      <TreeSelect.AsyncTreeMultiLeafSelect {...props} fetchData={fetchData} treeDataSimpleMode />
    );
  },
);

/**
 * TreeAsyncFlatCheckedShowAll
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'FlatCheckedShowAll',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return (
      <TreeSelect.AsyncTreeCheckedShowAllSelect
        {...props}
        fetchData={fetchData}
        treeDataSimpleMode
      />
    );
  },
);

/**
 * TreeAsyncFlatChCheckedShowChild
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'FlatCheckedShowChild',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return (
      <TreeSelect.AsyncTreeCheckedShowChildSelect
        {...props}
        fetchData={fetchData}
        treeDataSimpleMode
      />
    );
  },
);

/**
 * TreeAsyncFlatCheckedShowParent
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'TreeAsync',
  'FlatCheckedShowParent',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<AsyncTreeSelectProps['treeData']>({
      dictName,
    });

    return (
      <TreeSelect.AsyncTreeCheckedShowParentSelect
        {...props}
        fetchData={fetchData}
        treeDataSimpleMode
      />
    );
  },
);
