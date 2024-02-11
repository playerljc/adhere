import { Divider } from 'antd-mobile';
import type { DividerProps } from 'antd-mobile';

import { createFactory } from '../util';

const DividerHOC: typeof Divider & {
  defaultProps?: Partial<DividerProps>;
} = createFactory<DividerProps>(Divider, {});

DividerHOC.displayName = 'Divider';

export default DividerHOC;
