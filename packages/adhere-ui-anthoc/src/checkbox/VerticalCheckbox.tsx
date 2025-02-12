import React, { memo } from 'react';

import type { CheckboxGroupExtProps, DisplayNameInternal } from '../types';
import CheckboxGroup from './CheckboxGroup';

/**
 * VerticalCheckbox
 * @description 竖向的CheckboxGroup
 * @param props
 * @constructor
 */
const InternalVerticalCheckbox = memo<CheckboxGroupExtProps>((props) => (
  <CheckboxGroup {...props} direction="vertical" />
));

const VerticalCheckbox = InternalVerticalCheckbox as DisplayNameInternal<
  typeof InternalVerticalCheckbox
>;
VerticalCheckbox.displayName = 'VerticalCheckbox';

export default VerticalCheckbox;
