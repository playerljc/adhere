import { Divider } from 'antd';
import type { DividerProps } from 'antd';

import { createFactory } from '../util';

const DividerHOC: typeof Divider & {
  defaultProps?: Partial<DividerProps>;
  override?: (props: Partial<DividerProps>) => Partial<DividerProps>;
} = createFactory<DividerProps>(Divider, {});

DividerHOC.displayName = 'Divider';

export default DividerHOC;
