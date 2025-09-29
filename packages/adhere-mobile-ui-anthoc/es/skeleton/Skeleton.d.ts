import { Skeleton } from 'antd-mobile';
import type { SkeletonProps } from 'antd-mobile';
declare const SkeletonHOC: typeof Skeleton & {
    defaultProps?: Partial<SkeletonProps>;
    override?: (props: Partial<SkeletonProps>) => Partial<SkeletonProps>;
};
export default SkeletonHOC;
