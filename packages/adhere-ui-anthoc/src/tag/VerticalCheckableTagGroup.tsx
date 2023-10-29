import React, { memo } from 'react';
import type { FC } from 'react';

import type { VerticalCheckableTagGroupProps } from '../types';
import CheckableTagGroup from './CheckableTagGroup';

const VerticalCheckableTagGroup: FC<VerticalCheckableTagGroupProps> = (props) => (
  <CheckableTagGroup {...props} direction="vertical" />
);

export default memo(VerticalCheckableTagGroup);
