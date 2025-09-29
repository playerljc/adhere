import { Anchor } from 'antd';
import type { AnchorProps } from 'antd';

import { createFactory } from '../util';

const AnchorHOC: typeof Anchor & {
  defaultProps?: Partial<AnchorProps>;
  override?: (props: Partial<AnchorProps>) => Partial<AnchorProps>;
} = createFactory<AnchorProps>(Anchor, {});

AnchorHOC.displayName = 'Anchor';

export default AnchorHOC;
