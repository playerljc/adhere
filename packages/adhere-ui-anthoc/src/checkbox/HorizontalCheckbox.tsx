import type { CheckboxGroupProps } from 'antd/es/checkbox';
import React from 'react';
import type { FC } from 'react';

import Checkbox from './index';

/**
 * HorizontalCheckbox
 * @description 横向的CheckboxGroup
 * @param props
 * @constructor
 */
const HorizontalCheckbox: FC<CheckboxGroupProps> = (props) => <Checkbox.Group {...props} />;

export default HorizontalCheckbox;
