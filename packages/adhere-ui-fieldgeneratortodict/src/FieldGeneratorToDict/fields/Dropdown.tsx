import { DropdownProps, MenuProps } from 'antd';
import React from 'react';

import { Dropdown } from '@baifendian/adhere-ui-anthoc';

import { setItem } from '../ItemFactory';
import { useDict, useDynamicDict } from '../hooks';

/**
 * DropdownStandard
 */
setItem<DropdownProps, MenuProps['items']>(
  'Dropdown',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<MenuProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const menu = {
        ...(props.menu ?? {}),
        items: options,
      };

      return <Dropdown {...props} menu={menu} />;
    },
);

/**
 * DropdownDynamicStandard
 */
setItem<DropdownProps, MenuProps['items']>(
  'DropdownDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<MenuProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const menu = {
        ...(props.menu ?? {}),
        items: options,
      };

      return <Dropdown {...props} menu={menu} />;
    },
);
