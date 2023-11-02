import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';

import { createFactory } from '../util';

export default createFactory<ConfigProviderProps>(ConfigProvider, {});
