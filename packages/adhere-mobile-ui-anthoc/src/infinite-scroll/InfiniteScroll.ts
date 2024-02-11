import { InfiniteScroll } from 'antd-mobile';
import type { InfiniteScrollProps } from 'antd-mobile';

import { createFactory } from '../util';

const InfiniteScrollHOC: typeof InfiniteScroll & {
  defaultProps?: Partial<InfiniteScrollProps>;
} = createFactory<InfiniteScrollProps>(InfiniteScroll, {});

InfiniteScrollHOC.displayName = 'InfiniteScroll';

export default InfiniteScrollHOC;
