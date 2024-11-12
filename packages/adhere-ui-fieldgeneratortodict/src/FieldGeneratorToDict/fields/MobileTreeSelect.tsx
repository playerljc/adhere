import React from 'react';

import { TreeSelect } from '@baifendian/adhere-mobile-ui-anthoc';
import type {
  AsyncTreeLeafSelectProps,
  AsyncTreeSelectProps,
  TreeSelectHOCComponent,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import { useDict, useDynamicDict, useMobileAsyncTree, useTreeAutoCompleteDict } from '../Hooks';
import { setItem } from '../ItemFactory';

// MobileTreeSelect --------------------------
/**
 * MobileTreeSelectStandard
 */
setItem<TreeSelectHOCComponent, TreeSelectHOCComponent['treeData']>(
  'MobileTreeSelect',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeSelectHOCComponent['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelect',
  'Leaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelect',
  'ShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeShowAllSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelect',
  'ShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeShowChildSelect {...props} treeData={dataSource} />;
    },
);

// MobileTreeSelectDynamic --------------------------

/**
 * MobileTreeSelectDynamicStandard
 */
setItem<TreeSelectHOCComponent, TreeSelectHOCComponent['treeData']>(
  'MobileTreeSelectDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeSelectHOCComponent['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectDynamicLeaf
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelectDynamic',
  'Leaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeLeafSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectDynamicShowAll
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelectDynamic',
  'ShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeShowAllSelect {...props} treeData={dataSource} />;
    },
);

/**
 * MobileTreeSelectDynamicShowChild
 */
setItem<TreeSelectProps, TreeSelectProps['treeData']>(
  'MobileTreeSelectDynamic',
  'ShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <TreeSelect.TreeShowChildSelect {...props} treeData={dataSource} />;
    },
);

// MobileTreeSelectAC --------------------------

// Standard
setItem<TreeAutoCompleteProps, TreeAutoCompleteProps['searchDataSource']>(
  'MobileTreeSelectAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        TreeAutoCompleteProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.AutoCompleteTreeSelect
          {...props}
          searchDataSource={treeData}
          loadData={loadData}
        />
      );
    },
);

// Leaf
setItem<TreeAutoCompleteProps, TreeAutoCompleteProps['searchDataSource']>(
  'MobileTreeSelectAC',
  'Leaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        TreeAutoCompleteProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.AutoCompleteTreeLeafSelect
          {...props}
          searchDataSource={treeData}
          loadData={loadData}
        />
      );
    },
);

// ShowAll
setItem<TreeAutoCompleteProps, TreeAutoCompleteProps['searchDataSource']>(
  'MobileTreeSelectAC',
  'ShowAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        TreeAutoCompleteProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.AutoCompleteTreeShowAllSelect
          {...props}
          searchDataSource={treeData}
          loadData={loadData}
        />
      );
    },
);

// ShowChild
setItem<TreeAutoCompleteProps, TreeAutoCompleteProps['searchDataSource']>(
  'MobileTreeSelectAC',
  'ShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        TreeAutoCompleteProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <TreeSelect.AutoCompleteTreeShowChildSelect
          {...props}
          searchDataSource={treeData}
          loadData={loadData}
        />
      );
    },
);

// MobileTreeSelectAsync --------------------------
/**
 * MobileTreeSelectAsyncStandard
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'MobileTreeSelectAsync',
  'Standard',
  (dictName) => (props) => {
    const { loadData, treeData } = useMobileAsyncTree({
      dictName,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return <TreeSelect.AsyncTreeSelect {...props} treeData={treeData} loadData={loadData} />;
  },
);

/**
 * MobileTreeSelectAsyncLeaf
 */
setItem<AsyncTreeLeafSelectProps, AsyncTreeLeafSelectProps['treeData']>(
  'MobileTreeSelectAsync',
  'Leaf',
  (dictName) => (props) => {
    const { loadData, treeData } = useMobileAsyncTree({
      dictName,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return <TreeSelect.AsyncTreeLeafSelect {...props} treeData={treeData} loadData={loadData} />;
  },
);

/**
 * MobileTreeSelectAsyncShowAll
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'MobileTreeSelectAsync',
  'ShowAll',
  (dictName) => (props) => {
    const { loadData, treeData } = useMobileAsyncTree({
      dictName,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return <TreeSelect.AsyncTreeShowAllSelect {...props} treeData={treeData} loadData={loadData} />;
  },
);

/**
 * MobileTreeSelectAsyncShowChild
 */
setItem<AsyncTreeSelectProps, AsyncTreeSelectProps['treeData']>(
  'MobileTreeSelectAsync',
  'ShowChild',
  (dictName) => (props) => {
    const { loadData, treeData } = useMobileAsyncTree({
      dictName,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return (
      <TreeSelect.AsyncTreeShowChildSelect {...props} treeData={treeData} loadData={loadData} />
    );
  },
);
