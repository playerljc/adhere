import { Alert } from 'antd';
import type { AlertProps } from 'antd';

import { createFactory } from '../util';

const AlertHOC: typeof Alert & {
  defaultProps?: Partial<AlertProps>;
} = createFactory<AlertProps>(Alert, {});

AlertHOC.displayName = 'Alert';

export default AlertHOC;
