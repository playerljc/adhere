import { ConfigProvider } from 'antd-mobile';
import type { ConfigProviderProps } from 'antd-mobile';
declare const ConfigProviderHOC: typeof ConfigProvider & {
    defaultProps?: Partial<ConfigProviderProps>;
};
export default ConfigProviderHOC;
