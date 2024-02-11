import { DotLoading } from 'antd-mobile';
import type { DotLoadingProps } from 'antd-mobile';

import { createFactory } from '../util';

const DotLoadingHOC: typeof DotLoading & {
  defaultProps?: Partial<DotLoadingProps>;
} = createFactory<DotLoadingProps>(DotLoading, {});

DotLoadingHOC.displayName = 'DotLoading';

export default DotLoadingHOC;
