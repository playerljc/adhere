import Context from './Context';
import InternalConfigProvider, { getToken } from './InternalConfigProvider';
import type { InternalConfigProviderProps } from './types';
declare const ConfigProvider: typeof InternalConfigProvider & {
    Context: typeof Context;
    getToken: typeof getToken;
    defaultProps?: Partial<InternalConfigProviderProps>;
    override?: (props: Partial<InternalConfigProviderProps>) => Partial<InternalConfigProviderProps>;
};
export default ConfigProvider;
