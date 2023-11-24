import { Row } from 'antd';
import type { RowProps } from 'antd';

import { createFactory } from '../util';

const RowHOC: typeof Row & {
  defaultProps?: Partial<RowProps>;
} = createFactory<RowProps>(Row, {});

RowHOC.displayName = 'Row';

export default RowHOC;