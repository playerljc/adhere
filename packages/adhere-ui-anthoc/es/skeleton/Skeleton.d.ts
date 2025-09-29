import { Skeleton } from 'antd';
import type { SkeletonProps } from 'antd';
declare const SkeletonHOC: typeof Skeleton & {
    defaultProps?: Partial<SkeletonProps>;
    override?: (props: Partial<SkeletonProps>) => Partial<SkeletonProps>;
};
export default SkeletonHOC;
