import React, { memo } from 'react';

import type { DisplayNameInternal, VerticalCheckableTagGroupProps } from '../types';
import CheckableTagGroup from './CheckableTagGroup';

const InternalVerticalCheckableTagGroup = memo<VerticalCheckableTagGroupProps>((props) => (
  <CheckableTagGroup {...props} direction="vertical" />
));

const VerticalCheckableTagGroup = InternalVerticalCheckableTagGroup as DisplayNameInternal<
  typeof InternalVerticalCheckableTagGroup
>;
VerticalCheckableTagGroup.displayName = 'VerticalCheckableTagGroup';

export default VerticalCheckableTagGroup;
