import { ErrorBlock } from 'antd-mobile';
import type { ErrorBlockProps } from 'antd-mobile';

import { createFactory } from '../util';

const ErrorBlockHOC: typeof ErrorBlock & {
  defaultProps?: Partial<ErrorBlockProps>;
} = createFactory<ErrorBlockProps>(ErrorBlock, {});

ErrorBlockHOC.displayName = 'ErrorBlock';

export default ErrorBlockHOC;
