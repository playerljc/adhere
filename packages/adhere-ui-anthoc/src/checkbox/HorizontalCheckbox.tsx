import React, { memo } from 'react';
import type { FC } from 'react';

import type { CheckboxGroupExtProps } from '../types';
import CheckboxGroup from './CheckboxGroup';

/**
 * HorizontalCheckbox
 * @description 横向的CheckboxGroup
 * @param props
 * @constructor
 */
const HorizontalCheckbox: FC<CheckboxGroupExtProps> = (props) => (
  <CheckboxGroup {...props} direction="horizontal" />
);

export default memo(HorizontalCheckbox);
