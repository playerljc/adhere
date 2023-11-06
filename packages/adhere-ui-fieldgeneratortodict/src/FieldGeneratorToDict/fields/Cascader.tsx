import { CascaderProps } from 'antd';
import React from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';
import type {
  AsyncCascaderProps,
  CascaderTreeSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { setItem } from '../ItemFactory';
import { useAsyncTree, useDict, useDynamicDict } from '../hooks';

/**
 * CascaderStandard
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader {...props} options={options} />;
    },
);

/**
 * CascaderMulti
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'Cascader',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderMulti {...props} options={options} />;
    },
);

/**
 * CascaderShowChild
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'ShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowChild {...props} options={options} />;
    },
);

/**
 * CascaderShowParent
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'ShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowParent {...props} options={options} />;
    },
);

/**
 * CascaderChangeOnSelect
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'ChangeOnSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderChangeOnSelect {...props} options={options} />;
    },
);

/**
 * CascaderTreeSelect
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'Cascader',
  'TreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderTreeSelect {...props} options={options} />;
    },
);

/**
 * CascaderFlatStandard
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'FlatStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderFlatMulti
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'Cascader',
  'FlatMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderMulti {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderFlatShowChild
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'FlatShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowChild {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderFlatShowParent
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'FlatShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowParent {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderFlatChangeOnSelect
 */
setItem<CascaderProps, CascaderProps['options']>(
  'Cascader',
  'FlatChangeOnSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderChangeOnSelect {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderFlatTreeSelect
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'Cascader',
  'FlatTreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderTreeSelect {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicStandard
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader {...props} options={options} />;
    },
);

/**
 * CascaderDynamicMulti
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'CascaderDynamic',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderMulti {...props} options={options} />;
    },
);

/**
 * CascaderDynamicShowChild
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'ShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowChild {...props} options={options} />;
    },
);

/**
 * CascaderDynamicShowParent
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'ShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowParent {...props} options={options} />;
    },
);

/**
 * CascaderDynamicChangeOnSelect
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'ChangeOnSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderChangeOnSelect {...props} options={options} />;
    },
);

/**
 * CascaderDynamicTreeSelect
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'CascaderDynamic',
  'TreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderTreeSelect {...props} options={options} />;
    },
);

/**
 * CascaderDynamicFlatStandard
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'FlatStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicFlatMulti
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'CascaderDynamic',
  'FlatMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderMulti {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicFlatShowChild
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'FlatShowChild',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowChild {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicFlatShowParent
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'FlatShowParent',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderShowParent {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicFlatChangeOnSelect
 */
setItem<CascaderProps, CascaderProps['options']>(
  'CascaderDynamic',
  'FlatChangeOnSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderChangeOnSelect {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderDynamicFlatTreeSelect
 */
setItem<CascaderTreeSelectProps, CascaderTreeSelectProps['options']>(
  'CascaderDynamic',
  'FlatTreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CascaderTreeSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Cascader.CascaderTreeSelect {...props} options={options} treeDataSimpleMode />;
    },
);

/**
 * CascaderAsyncStandard
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'Standard',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascader {...props} fetchData={fetchData} />;
  },
);

/**
 * CascaderAsyncMulti
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'Multi',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderMulti {...props} fetchData={fetchData} />;
  },
);

/**
 * CascaderAsyncShowChild
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'ShowChild',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderShowChild {...props} fetchData={fetchData} />;
  },
);

/**
 * CascaderAsyncShowParent
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'ShowParent',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderShowParent {...props} fetchData={fetchData} />;
  },
);

/**
 * CascaderAsyncChangeOnSelect
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'ChangeOnSelect',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderChangeOnSelect {...props} fetchData={fetchData} />;
  },
);

/**
 * CascaderAsyncFlatStandard
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'FlatStandard',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascader {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * CascaderAsyncFlatMulti
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'FlatMulti',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderMulti {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * CascaderAsyncFlatShowChild
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'FlatShowChild',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderShowChild {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * CascaderAsyncFlatShowParent
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'FlatShowParent',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return <Cascader.AsyncCascaderShowParent {...props} fetchData={fetchData} treeDataSimpleMode />;
  },
);

/**
 * CascaderAsyncFlatChangeOnSelect
 */
setItem<AsyncCascaderProps, CascaderProps['options']>(
  'CascaderAsync',
  'FlatChangeOnSelect',
  (dictName) => (props) => {
    const fetchData = useAsyncTree<CascaderProps['options']>({
      dictName,
    });

    return (
      <Cascader.AsyncCascaderChangeOnSelect {...props} fetchData={fetchData} treeDataSimpleMode />
    );
  },
);
