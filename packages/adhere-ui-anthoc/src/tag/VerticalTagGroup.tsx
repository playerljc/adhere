import React, { memo } from 'react';

import type { DisplayNameInternal, VerticalTagGroupProps } from '../types';
import TagGroup from './TagGroup';

/**
 * VerticalTagGroup
 * @description 纵向的Tag
 * @constructor
 */
const InternalVerticalTagGroup = memo<VerticalTagGroupProps>((props) => (
  <TagGroup {...props} direction="vertical" />
));

const VerticalTagGroup = InternalVerticalTagGroup as DisplayNameInternal<
  typeof InternalVerticalTagGroup
>;
VerticalTagGroup.displayName = 'VerticalTagGroup';

export default VerticalTagGroup;
