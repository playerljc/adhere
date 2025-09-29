import { SwipeAction } from 'antd-mobile';
import type { SwipeActionProps } from 'antd-mobile';

import { createFactory } from '../util';

const SwipeActionHOC: typeof SwipeAction & {
  defaultProps?: Partial<SwipeActionProps>;
  override?: (props: Partial<SwipeActionProps>) => Partial<SwipeActionProps>;
} = createFactory<SwipeActionProps>(SwipeAction, {});

SwipeActionHOC.displayName = 'SwipeAction';

export default SwipeActionHOC;
