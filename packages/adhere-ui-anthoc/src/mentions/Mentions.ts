import { Mentions } from 'antd';
import type { MentionProps } from 'antd';

import { createFactory } from '../util';

const MentionsHOC: typeof Mentions & {
  defaultProps?: Partial<MentionProps>;
} = createFactory<MentionProps>(Mentions, {});

MentionsHOC.displayName = 'Mentions';

export default MentionsHOC;
