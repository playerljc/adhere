import { Tag as AntdTag } from 'antd';

import { TagHOCComponent } from '../types';
import { createFactory } from '../util';
import InternalTag from './InternalTag';
import type { InternalTagProps } from './types';

const TagHOC: TagHOCComponent = createFactory<InternalTagProps>(InternalTag, {});

Object.assign(TagHOC, AntdTag);

TagHOC.displayName = 'Tag';

export default TagHOC;
