import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

import { createFactory } from '../util';

const DescriptionsHOC: typeof Descriptions & {
  defaultProps?: Partial<DescriptionsProps>;
} = createFactory<DescriptionsProps>(Descriptions, {});

export default DescriptionsHOC;
