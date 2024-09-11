import React from 'react';

import { List } from '@baifendian/adhere-mobile-ui-anthoc';
import { DataSourceListProps } from '@baifendian/adhere-mobile-ui-anthoc/src/types';

import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MobileListStandard
 */
setItem<DataSourceListProps, DataSourceListProps['dataSource']>(
  'MobileList',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<DataSourceListProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.DataSourceList {...props} dataSource={dataSource} />;
    },
);

// -----------------------
/**
 * MobileListDynamicStandard
 */
setItem<DataSourceListProps, DataSourceListProps['dataSource']>(
  'MobileListDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<DataSourceListProps['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.DataSourceList {...props} dataSource={dataSource} />;
    },
);
