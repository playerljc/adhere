import React from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteTransferSelectProps,
  TableTransferProps,
  TableTransferSelectProps,
  TransferHOCProps,
  TransferSelectProps,
  TreeTransferProps,
  TreeTransferSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import type { SuspenseComponentProps } from '../../types';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * TransferStandard
 */
setItem<TransferHOCProps, TransferHOCProps['dataSource']>(
  'Transfer',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TransferHOCProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer {...props} dataSource={options} />;
    },
);

/**
 * TransferSuspenseStandard
 */
setItem<SuspenseComponentProps<TransferHOCProps>, TransferHOCProps['dataSource']>(
  'Transfer',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<TransferHOCProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options} emptyComponent={<Transfer />}>
          <Transfer {...props} dataSource={options} />
        </Suspense>
      );
    },
);

/**
 * TransferSelect
 */
setItem<TransferSelectProps, TransferSelectProps['options']>(
  'Transfer',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TransferSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TransferSelect {...props} options={options} />;
    },
);

/**
 * TransferTree
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'Transfer',
  'Tree',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} />;
    },
);

/**
 * TransferTreeFlat
 * @description 简单格式（扁平）树数据
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'Transfer',
  'TreeFlat',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} treeDataSimpleMode />;
    },
);

/**
 * TransferTreeLeaf
 * @description 只能选择叶子节点
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'Transfer',
  'TreeLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} leafOnly />;
    },
);

/**
 * TransferTreeCascade
 * @description 级联选择（父子节点选中关联）
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'Transfer',
  'TreeCascade',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} checkStrictly={false} />;
    },
);

/**
 * TransferTable
 */
setItem<TableTransferProps, TableTransferProps['dataSource']>(
  'Transfer',
  'Table',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TableTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TableTransfer {...props} dataSource={dataSource} />;
    },
);

/**
 * TransferTreeSelect
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'Transfer',
  'TreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransferSelect {...props} treeData={treeData} />;
    },
);

/**
 * TransferTreeSelectFlat
 * @description 简单格式（扁平）树数据
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'Transfer',
  'TreeSelectFlat',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            treeDataSimpleMode: true,
          }}
        />
      );
    },
);

/**
 * TransferTreeSelectLeaf
 * @description 只能选择叶子节点
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'Transfer',
  'TreeSelectLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            leafOnly: true,
          }}
        />
      );
    },
);

/**
 * TransferTreeSelectCascade
 * @description 级联选择（父子节点选中关联）
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'Transfer',
  'TreeSelectCascade',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            checkStrictly: false,
          }}
        />
      );
    },
);

/**
 * TransferTableSelect
 */
setItem<TableTransferSelectProps, TableTransferSelectProps['options']>(
  'Transfer',
  'TableSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TableTransferSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TableTransferSelect {...props} options={options} />;
    },
);

/**
 * TransferDynamicStandard
 */
setItem<TransferHOCProps, TransferHOCProps['dataSource']>(
  'TransferDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TransferHOCProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer {...props} dataSource={options} />;
    },
);

/**
 * TransferDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<TransferHOCProps>, TransferHOCProps['dataSource']>(
  'TransferDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<TransferHOCProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options} emptyComponent={<Transfer />}>
          <Transfer {...props} dataSource={options} />
        </Suspense>
      );
    },
);

/**
 * TransferDynamicSelect
 */
setItem<TransferSelectProps, TransferSelectProps['options']>(
  'TransferDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TransferSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TransferSelect {...props} options={options} />;
    },
);

/**
 * TransferDynamicTree
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'TransferDynamic',
  'Tree',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} />;
    },
);

/**
 * TransferDynamicTreeFlat
 * @description 简单格式（扁平）树数据
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'TransferDynamic',
  'TreeFlat',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} treeDataSimpleMode />;
    },
);

/**
 * TransferDynamicTreeLeaf
 * @description 只能选择叶子节点
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'TransferDynamic',
  'TreeLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} leafOnly />;
    },
);

/**
 * TransferDynamicTreeCascade
 * @description 级联选择（父子节点选中关联）
 */
setItem<TreeTransferProps, TreeTransferProps['dataSource']>(
  'TransferDynamic',
  'TreeCascade',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TreeTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransfer {...props} dataSource={dataSource} checkStrictly={false} />;
    },
);

/**
 * TransferDynamicTable
 */
setItem<TableTransferProps, TableTransferProps['dataSource']>(
  'TransferDynamic',
  'Table',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TableTransferProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TableTransfer {...props} dataSource={dataSource} />;
    },
);

/**
 * TransferDynamicTreeSelect
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'TransferDynamic',
  'TreeSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TreeTransferSelect {...props} treeData={treeData} />;
    },
);

/**
 * TransferDynamicTreeSelectFlat
 * @description 简单格式（扁平）树数据
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'TransferDynamic',
  'TreeSelectFlat',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            treeDataSimpleMode: true,
          }}
        />
      );
    },
);

/**
 * TransferDynamicTreeSelectLeaf
 * @description 只能选择叶子节点
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'TransferDynamic',
  'TreeSelectLeaf',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            leafOnly: true,
          }}
        />
      );
    },
);

/**
 * TransferDynamicTreeSelectCascade
 * @description 级联选择（父子节点选中关联）
 */
setItem<TreeTransferSelectProps, TreeTransferSelectProps['treeData']>(
  'TransferDynamic',
  'TreeSelectCascade',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const treeData = useDynamicDict<TreeTransferSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });
      const { transferProps, ...restProps } = props;

      return (
        <Transfer.TreeTransferSelect
          {...restProps}
          treeData={treeData}
          transferProps={{
            ...(transferProps ?? {}),
            checkStrictly: false,
          }}
        />
      );
    },
);

/**
 * TransferDynamicTableSelect
 */
setItem<TableTransferSelectProps, TableTransferSelectProps['options']>(
  'TransferDynamic',
  'TableSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TableTransferSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer.TableTransferSelect {...props} options={options} />;
    },
);

/**
 * TransferACStandard
 */
setItem<AutoCompleteTransferSelectProps, AutoCompleteTransferSelectProps['options']>(
  'TransferAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteTransferSelectProps['options']>(
        {
          dictName,
          cascadeParams,
          onDataSourceChange,
        },
      );

      return (
        <Transfer.AutoCompleteTransferSelect {...props} options={options} loadData={loadData} />
      );
    },
);
