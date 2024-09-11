import { Loading } from 'antd-mobile';
import type { LoadingProps } from 'antd-mobile';

import { createFactory } from '../util';

const LoadingHOC: typeof Loading & {
  defaultProps?: Partial<LoadingProps>;
} = createFactory<LoadingProps>(Loading, {});

LoadingHOC.displayName = 'Loading';

export default LoadingHOC;
