import type { TransferProps } from 'antd';
import React from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteTransferSelectProps,
  TransferSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { setItem } from '../ItemFactory';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../hooks';

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
      const options = useDynamicDict<TransferProps<any>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Transfer {...props} dataSource={options} />;
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
 * AutoCompleteTransferStandard
 */
setItem<AutoCompleteTransferSelectProps, AutoCompleteTransferSelectProps['options']>(
  'AutoCompleteTransfer',
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
