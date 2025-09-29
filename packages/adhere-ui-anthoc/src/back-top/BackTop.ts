import { BackTop } from 'antd';
import type { BackTopProps } from 'antd';

import { createFactory } from '../util';

const BackTopHOC: typeof BackTop & {
  defaultProps?: Partial<BackTopProps>;
  override?: (props: Partial<BackTopProps>) => Partial<BackTopProps>;
} = createFactory<BackTopProps>(BackTop, {});

BackTopHOC.displayName = 'BackTop';

export default BackTopHOC;
