import { Flex } from 'antd';
import type { FlexProps } from 'antd';

import { createFactory } from '../util';

const FlexHOC: typeof Flex & {
  defaultProps?: Partial<FlexProps>;
} = createFactory<FlexProps>(Flex, {});

export default FlexHOC;
