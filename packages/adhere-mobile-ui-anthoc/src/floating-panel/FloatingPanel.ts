import { FloatingPanel } from 'antd-mobile';
import type { FloatingPanelProps } from 'antd-mobile';

import { createFactory } from '../util';

const FloatingPanelHOC: typeof FloatingPanel & {
  defaultProps?: Partial<FloatingPanelProps>;
  override?: (props: Partial<FloatingPanelProps>) => Partial<FloatingPanelProps>;
} = createFactory<FloatingPanelProps>(FloatingPanel, {});

FloatingPanelHOC.displayName = 'FloatingPanel';

export default FloatingPanelHOC;
