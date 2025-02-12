import { Skeleton } from 'antd-mobile';
import type { SkeletonProps } from 'antd-mobile';

import { createFactory } from '../util';

const SkeletonHOC: typeof Skeleton & {
  defaultProps?: Partial<SkeletonProps>;
} = createFactory<SkeletonProps>(Skeleton, {});

SkeletonHOC.displayName = 'Skeleton';

export default SkeletonHOC;
