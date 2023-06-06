import React, { FC } from 'react';

import { Menu } from '@baifendian/adhere-ui-anthoc';

import { MenuFormItemProps } from '../../types';

/**
 * MenuFormItem
 * @param props
 * @constructor
 */
const MenuFormItem: FC<MenuFormItemProps> = (props) => {
  return <Menu {...(props ?? {})} />;
};

export default MenuFormItem;
