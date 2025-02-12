import type { RadioGroupProps } from 'antd/es/radio';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import Radio from './index';

/**
 * HorizontalRadio
 * @description 横向的RadioGroup
 * @param props
 * @constructor
 */
const InternalHorizontalRadio = memo<RadioGroupProps>((props) => <Radio.Group {...props} />);

const HorizontalRadio = InternalHorizontalRadio as DisplayNameInternal<
  typeof InternalHorizontalRadio
>;
HorizontalRadio.displayName = 'HorizontalRadio';

export default HorizontalRadio;
