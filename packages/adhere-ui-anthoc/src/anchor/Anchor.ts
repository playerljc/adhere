import { Anchor } from 'antd';
import type { AnchorProps } from 'antd';
import type { FC } from 'react';

import { createFactory } from '../util';

const AnchorHOC: FC<AnchorProps> & {
  defaultProps?: Partial<AnchorProps>;
} = createFactory<AnchorProps>(Anchor, {});

export default AnchorHOC;
