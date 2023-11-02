import React, { memo } from 'react';
import type { FC } from 'react';

import type { HorizontalCheckableTagGroupProps } from '../types';
import CheckableTagGroup from './CheckableTagGroup';

const HorizontalCheckableTagGroup: FC<HorizontalCheckableTagGroupProps> = (props) => (
  <CheckableTagGroup {...props} direction="horizontal" />
);

export default memo(HorizontalCheckableTagGroup);
