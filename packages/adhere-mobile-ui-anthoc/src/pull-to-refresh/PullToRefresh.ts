import { PullToRefresh } from 'antd-mobile';
import type { PullToRefreshProps } from 'antd-mobile';

import { createFactory } from '../util';

const PullToRefreshHOC: typeof PullToRefresh & {
  defaultProps?: Partial<PullToRefreshProps>;
} = createFactory<PullToRefreshProps>(PullToRefresh, {});

PullToRefreshHOC.displayName = 'PullToRefresh';

export default PullToRefreshHOC;
