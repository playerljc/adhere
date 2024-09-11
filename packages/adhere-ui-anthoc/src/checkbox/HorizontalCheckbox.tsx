import React, { memo } from 'react';

import type { CheckboxGroupExtProps, DisplayNameInternal } from '../types';
import CheckboxGroup from './CheckboxGroup';

/**
 * HorizontalCheckbox
 * @description 横向的CheckboxGroup
 * @param props
 * @constructor
 */
const InternalHorizontalCheckbox = memo<CheckboxGroupExtProps>((props) => (
  <CheckboxGroup {...props} direction="horizontal" />
));

const HorizontalCheckbox = InternalHorizontalCheckbox as DisplayNameInternal<
  typeof InternalHorizontalCheckbox
>;
HorizontalCheckbox.displayName = 'HorizontalCheckbox';

export default HorizontalCheckbox;
