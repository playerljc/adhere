import { SpinLoading } from 'antd-mobile';
import type { SpinLoadingProps } from 'antd-mobile';

import { createFactory } from '../util';

const SpinLoadingHOC: typeof SpinLoading & {
  defaultProps?: Partial<SpinLoadingProps>;
  override?: (props: Partial<SpinLoadingProps>) => Partial<SpinLoadingProps>;
} = createFactory<SpinLoadingProps>(SpinLoading, {});

SpinLoadingHOC.displayName = 'SpinLoading';

export default SpinLoadingHOC;
