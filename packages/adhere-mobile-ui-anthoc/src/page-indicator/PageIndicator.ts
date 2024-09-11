import { PageIndicator } from 'antd-mobile';
import type { PageIndicatorProps } from 'antd-mobile';

import { createFactory } from '../util';

const PageIndicatorHOC: typeof PageIndicator & {
  defaultProps?: Partial<PageIndicatorProps>;
} = createFactory<PageIndicatorProps>(PageIndicator, {});

PageIndicatorHOC.displayName = 'PageIndicator';

export default PageIndicatorHOC;
