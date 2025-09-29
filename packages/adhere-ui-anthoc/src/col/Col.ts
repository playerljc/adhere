import { Col } from 'antd';
import type { ColProps } from 'antd';

import { createFactory } from '../util';

const ColHOC: typeof Col & {
  defaultProps?: Partial<ColProps>;
  override?: (props: Partial<ColProps>) => Partial<ColProps>;
} = createFactory<ColProps>(Col, {});

ColHOC.displayName = 'Col';

export default ColHOC;
