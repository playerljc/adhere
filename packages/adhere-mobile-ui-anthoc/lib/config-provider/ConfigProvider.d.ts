import { ConfigProvider } from 'antd-mobile';
import type { ConfigProviderProps } from 'antd-mobile';
declare const ConfigProviderHOC: typeof ConfigProvider & {
    defaultProps?: Partial<ConfigProviderProps>;
    override?: (props: Partial<ConfigProviderProps>) => Partial<ConfigProviderProps>;
};
export default ConfigProviderHOC;
