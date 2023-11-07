import { Col } from 'antd';
import type { ColProps } from 'antd';

import { createFactory } from '../util';

const ColHOC: typeof Col & {
  defaultProps?: Partial<ColProps>;
} = createFactory<ColProps>(Col, {});

export default ColHOC;
