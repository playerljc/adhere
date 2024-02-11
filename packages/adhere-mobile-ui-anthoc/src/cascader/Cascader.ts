import { Cascader } from 'antd-mobile';
import type { CascaderProps } from 'antd-mobile';

import { createFactory } from '../util';

const CascaderHOC: typeof Cascader & {
  defaultProps?: Partial<CascaderProps>;
} = createFactory<CascaderProps>(Cascader, {});

CascaderHOC.displayName = 'Cascader';

export default CascaderHOC;
