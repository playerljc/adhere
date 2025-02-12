import { ConfigProvider } from 'antd-mobile';
import type { ConfigProviderProps } from 'antd-mobile';

import { createFactory } from '../util';

const ConfigProviderHOC: typeof ConfigProvider & {
  defaultProps?: Partial<ConfigProviderProps>;
} = createFactory<ConfigProviderProps>(ConfigProvider, {});

ConfigProviderHOC.displayName = 'ConfigProvider';

export default ConfigProviderHOC;
