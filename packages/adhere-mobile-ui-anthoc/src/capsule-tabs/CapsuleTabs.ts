import { CapsuleTabs } from 'antd-mobile';
import type { CapsuleTabsProps } from 'antd-mobile';

import { createFactory } from '../util';

const CapsuleTabsHOC: typeof CapsuleTabs & {
  defaultProps?: Partial<CapsuleTabsProps>;
} = createFactory<CapsuleTabsProps>(CapsuleTabs, {});

CapsuleTabsHOC.displayName = 'CapsuleTabs';

export default CapsuleTabsHOC;
