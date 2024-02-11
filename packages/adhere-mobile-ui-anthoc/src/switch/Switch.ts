import { Switch } from 'antd-mobile';
import type { SwitchProps } from 'antd-mobile';

import { createFactory } from '../util';

const SwitchHOC: typeof Switch & {
  defaultProps?: Partial<SwitchProps>;
} = createFactory<SwitchProps>(Switch, {});

SwitchHOC.displayName = 'Switch';

export default SwitchHOC;
