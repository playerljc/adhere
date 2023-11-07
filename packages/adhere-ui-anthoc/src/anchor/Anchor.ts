import { Anchor } from 'antd';
import type { AnchorProps } from 'antd';

import { createFactory } from '../util';

const AnchorHOC: typeof Anchor & {
  defaultProps?: Partial<AnchorProps>;
} = createFactory<AnchorProps>(Anchor, {});

export default AnchorHOC;
