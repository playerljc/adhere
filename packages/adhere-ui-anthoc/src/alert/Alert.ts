import { Alert } from 'antd';
import type { AlertProps } from 'antd';

import { createFactory } from '../util';

const AlertHOC: typeof Alert & {
  defaultProps?: Partial<AlertProps>;
  override?: (props: Partial<AlertProps>) => Partial<AlertProps>;
} = createFactory<AlertProps>(Alert, {});

AlertHOC.displayName = 'Alert';

export default AlertHOC;
