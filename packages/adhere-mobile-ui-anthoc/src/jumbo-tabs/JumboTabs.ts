import { JumboTabs } from 'antd-mobile';
import type { JumboTabsProps } from 'antd-mobile';

import { createFactory } from '../util';

const JumboTabsHOC: typeof JumboTabs & {
  defaultProps?: Partial<JumboTabsProps>;
} = createFactory<JumboTabsProps>(JumboTabs, {});

JumboTabsHOC.displayName = 'JumboTabs';

export default JumboTabsHOC;
