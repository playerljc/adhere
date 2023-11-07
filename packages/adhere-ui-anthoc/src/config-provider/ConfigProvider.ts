import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';

import { createFactory } from '../util';

const ConfigProviderHOC: typeof ConfigProvider & {
  defaultProps?: Partial<ConfigProviderProps>;
} = createFactory<ConfigProviderProps>(ConfigProvider, {});

export default ConfigProviderHOC;
