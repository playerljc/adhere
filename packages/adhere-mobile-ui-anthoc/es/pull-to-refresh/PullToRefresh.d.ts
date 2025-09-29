import { PullToRefresh } from 'antd-mobile';
import type { PullToRefreshProps } from 'antd-mobile';
declare const PullToRefreshHOC: typeof PullToRefresh & {
    defaultProps?: Partial<PullToRefreshProps>;
    override?: (props: Partial<PullToRefreshProps>) => Partial<PullToRefreshProps>;
};
export default PullToRefreshHOC;
