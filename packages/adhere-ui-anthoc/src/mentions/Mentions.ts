import { Mentions } from 'antd';
import type { MentionProps } from 'antd';

import { createFactory } from '../util';

const MentionsHOC: typeof Mentions & {
  defaultProps?: Partial<MentionProps>;
  override?: (props: Partial<MentionProps>) => Partial<MentionProps>;
} = createFactory<MentionProps>(Mentions, {});

MentionsHOC.displayName = 'Mentions';

export default MentionsHOC;
