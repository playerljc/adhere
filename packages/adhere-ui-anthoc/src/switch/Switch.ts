import { Switch } from 'antd';
import type { SwitchProps } from 'antd';

import { createFactory } from '../util';

const SwitchHOC: typeof Switch & {
  defaultProps?: Partial<SwitchProps>;
} = createFactory<SwitchProps>(Switch, {});

SwitchHOC.displayName = 'Switch';

export default SwitchHOC;
