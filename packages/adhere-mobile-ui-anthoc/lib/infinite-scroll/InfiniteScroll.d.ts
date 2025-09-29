import { InfiniteScroll } from 'antd-mobile';
import type { InfiniteScrollProps } from 'antd-mobile';
declare const InfiniteScrollHOC: typeof InfiniteScroll & {
    defaultProps?: Partial<InfiniteScrollProps>;
    override?: (props: Partial<InfiniteScrollProps>) => Partial<InfiniteScrollProps>;
};
export default InfiniteScrollHOC;
