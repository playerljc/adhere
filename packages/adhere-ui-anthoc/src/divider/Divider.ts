import { Divider } from 'antd';
import type { DividerProps } from 'antd';

import { createFactory } from '../util';

const DividerHOC: typeof Divider & {
  defaultProps?: Partial<DividerProps>;
} = createFactory<DividerProps>(Divider, {});

export default DividerHOC;
