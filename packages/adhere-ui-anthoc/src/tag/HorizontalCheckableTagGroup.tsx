import React, { memo } from 'react';

import type { DisplayNameInternal, HorizontalCheckableTagGroupProps } from '../types';
import CheckableTagGroup from './CheckableTagGroup';

const InrernalHorizontalCheckableTagGroup = memo<HorizontalCheckableTagGroupProps>((props) => (
  <CheckableTagGroup {...props} direction="horizontal" />
));

const HorizontalCheckableTagGroup = InrernalHorizontalCheckableTagGroup as DisplayNameInternal<
  typeof InrernalHorizontalCheckableTagGroup
>;
HorizontalCheckableTagGroup.displayName = 'HorizontalCheckableTagGroup';

export default HorizontalCheckableTagGroup;
