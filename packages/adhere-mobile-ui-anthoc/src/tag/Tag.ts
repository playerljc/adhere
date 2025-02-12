import { Tag } from 'antd-mobile';
import type { TagProps } from 'antd-mobile';

import { createFactory } from '../util';

const TagHOC: typeof Tag & {
  defaultProps?: Partial<TagProps>;
} = createFactory<TagProps>(Tag, {});

TagHOC.displayName = 'Tag';

export default TagHOC;
