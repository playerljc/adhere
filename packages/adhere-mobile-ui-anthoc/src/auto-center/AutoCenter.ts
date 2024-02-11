import { AutoCenter } from 'antd-mobile';
import type { AutoCenterProps } from 'antd-mobile';

import { createFactory } from '../util';

const AutoCenterHOC: typeof AutoCenter & {
  defaultProps?: Partial<AutoCenterProps>;
} = createFactory<AutoCenterProps>(AutoCenter, {});

AutoCenterHOC.displayName = 'AutoCenter';

export default AutoCenterHOC;
