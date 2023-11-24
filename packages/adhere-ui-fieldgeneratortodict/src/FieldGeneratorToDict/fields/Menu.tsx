import { MenuProps } from 'antd';
import React from 'react';

import { Menu } from '@baifendian/adhere-ui-anthoc';

import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MenuStandard
 */
setItem<MenuProps, MenuProps['items']>(
  'Menu',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<MenuProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Menu {...props} items={options} />;
    },
);

/**
 * MenuDynamicStandard
 */
setItem<MenuProps, MenuProps['items']>(
  'MenuDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<MenuProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Menu {...props} items={options} />;
    },
);