import React, { FC } from 'react';

import { Dropdown } from '@baifendian/adhere-ui-anthoc';

import { DropdownFormItemProps } from '../../types';

/**
 * DropdownFormItem
 * @param props
 * @constructor
 */
const DropdownFormItem: FC<DropdownFormItemProps> = (props) => {
  return <Dropdown {...(props || {})} />;
};

export default DropdownFormItem;
