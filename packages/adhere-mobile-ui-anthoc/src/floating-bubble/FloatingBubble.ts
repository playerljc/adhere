import { FloatingBubble } from 'antd-mobile';
import type { FloatingBubbleProps } from 'antd-mobile';

import { createFactory } from '../util';

const FloatingBubbleHOC: typeof FloatingBubble & {
  defaultProps?: Partial<FloatingBubbleProps>;
} = createFactory<FloatingBubbleProps>(FloatingBubble, {});

FloatingBubbleHOC.displayName = 'FloatingBubble';

export default FloatingBubbleHOC;
