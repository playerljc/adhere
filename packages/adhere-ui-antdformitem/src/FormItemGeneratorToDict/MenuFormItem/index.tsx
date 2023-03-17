import React, { FC } from 'react';

import { Menu } from '../../AntFormItemNormalize';
import { MenuFormItemProps } from '../../types';

/**
 * MenuFormItem
 * @param props
 * @constructor
 */
const MenuFormItem: FC<MenuFormItemProps> = (props) => {
  return <Menu {...(props || {})} />;
};

export default MenuFormItem;
