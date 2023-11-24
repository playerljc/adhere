import { Tag, TagProps } from 'antd';

import { TagHOCComponent } from '../types';
import { createFactory } from '../util';

const TagHOC: TagHOCComponent = createFactory<TagProps>(Tag, {});

TagHOC.displayName = 'Tag';

export default TagHOC;
