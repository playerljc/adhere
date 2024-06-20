import { ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
declare const ConfigProviderHOC: typeof ConfigProvider & {
    defaultProps?: Partial<ConfigProviderProps>;
};
export default ConfigProviderHOC;
