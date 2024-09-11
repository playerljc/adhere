import { FloatingPanel } from 'antd-mobile';
import type { FloatingPanelProps } from 'antd-mobile';

import { createFactory } from '../util';

const FloatingPanelHOC: typeof FloatingPanel & {
  defaultProps?: Partial<FloatingPanelProps>;
} = createFactory<FloatingPanelProps>(FloatingPanel, {});

FloatingPanelHOC.displayName = 'FloatingPanel';

export default FloatingPanelHOC;
