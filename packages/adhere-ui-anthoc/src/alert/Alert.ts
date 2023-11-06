import { Alert } from 'antd';
import type { AlertProps } from 'antd';
import type { FC } from 'react';

import { createFactory } from '../util';

const AlertHOC: FC<AlertProps> & {
  defaultProps?: Partial<AlertProps>;
} = createFactory<AlertProps>(Alert, {});

export default AlertHOC;
