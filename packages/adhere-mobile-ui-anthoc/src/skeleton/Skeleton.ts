import { Skeleton } from 'antd-mobile';
import type { SkeletonProps } from 'antd-mobile';

import { createFactory } from '../util';

const SkeletonHOC: typeof Skeleton & {
  defaultProps?: Partial<SkeletonProps>;
  override?: (props: Partial<SkeletonProps>) => Partial<SkeletonProps>;
} = createFactory<SkeletonProps>(Skeleton, {});

SkeletonHOC.displayName = 'Skeleton';

export default SkeletonHOC;
