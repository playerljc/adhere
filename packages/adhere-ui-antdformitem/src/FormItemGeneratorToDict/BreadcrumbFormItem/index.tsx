import React, { FC } from 'react';

import { Breadcrumb } from '../../AntFormItemNormalize';
import { BreadcrumbFormItemProps } from '../../types';

/**
 * BreadcrumbFormItem
 * @param props
 * @constructor
 */
const BreadcrumbFormItem: FC<BreadcrumbFormItemProps> = (props) => {
  return <Breadcrumb {...(props || {})} />;
};

export default BreadcrumbFormItem;
