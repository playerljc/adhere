import React, { memo } from 'react';
import type { FC } from 'react';

import type { CheckboxGroupExtProps } from '../types';
import CheckboxGroup from './CheckboxGroup';

/**
 * VerticalCheckbox
 * @description 竖向的CheckboxGroup
 * @param props
 * @constructor
 */
const VerticalCheckbox: FC<CheckboxGroupExtProps> = (props) => (
  <CheckboxGroup {...props} direction="vertical" />
);

export default memo(VerticalCheckbox);
