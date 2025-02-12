import { Ellipsis } from 'antd-mobile';
import type { EllipsisProps } from 'antd-mobile';

import { createFactory } from '../util';

const EllipsisHOC: typeof Ellipsis & {
  defaultProps?: Partial<EllipsisProps>;
} = createFactory<EllipsisProps>(Ellipsis, {});

EllipsisHOC.displayName = 'Ellipsis';

export default EllipsisHOC;
