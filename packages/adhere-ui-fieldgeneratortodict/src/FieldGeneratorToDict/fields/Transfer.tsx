import type { TransferProps } from 'antd';
import React from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteTransferSelectProps,
  TransferSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import type { SuspenseComponentProps } from '../../types';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * TransferStandard
 */
setItem<TransferProps<any>, TransferProps<any>['dataSource']>(
  'Transfer',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TransferProps<any>['dataSource']>({
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
setItem<SuspenseComponentProps<TransferProps<any>>, TransferProps<any>['dataSource']>(
  'Transfer',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<TransferProps<any>['dataSource']>({
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
 * TransferDynamicStandard
 */
setItem<TransferProps<any>, TransferProps<any>['dataSource']>(
  'TransferDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TransferProps<any>['dataSource']>({
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
setItem<SuspenseComponentProps<TransferProps<any>>, TransferProps<any>['dataSource']>(
  'TransferDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<TransferProps<any>['dataSource']>({
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
