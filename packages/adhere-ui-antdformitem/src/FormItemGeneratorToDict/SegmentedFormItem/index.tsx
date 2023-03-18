import React, { FC } from 'react';

import { Segmented } from '../../AntFormItemNormalize';
import { SegmentedFormItemProps } from '../../types';

/**
 * SegmentedFormItem
 * @param props
 * @constructor
 */
const SegmentedFormItem: FC<SegmentedFormItemProps> = (props) => {
  return <Segmented {...(props || {})} />;
};

export default SegmentedFormItem;
