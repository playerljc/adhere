import { ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
declare const ConfigProviderHOC: typeof ConfigProvider & {
    defaultProps?: Partial<ConfigProviderProps>;
    override?: (props: Partial<ConfigProviderProps>) => Partial<ConfigProviderProps>;
};
export default ConfigProviderHOC;
