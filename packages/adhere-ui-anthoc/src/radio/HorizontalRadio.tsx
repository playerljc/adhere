import type { RadioGroupProps } from 'antd/es/radio';
import React from 'react';
import type { FC } from 'react';

import Radio from './index';

/**
 * HorizontalRadio
 * @description 横向的RadioGroup
 * @param props
 * @constructor
 */
const HorizontalRadio: FC<RadioGroupProps> = (props) => <Radio.Group {...props} />;

export default HorizontalRadio;
