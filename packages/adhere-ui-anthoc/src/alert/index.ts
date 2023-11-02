import { Alert } from 'antd';
import type { AlertProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<AlertProps>(Alert, {});
