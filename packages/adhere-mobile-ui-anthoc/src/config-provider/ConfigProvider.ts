import { createFactory } from '../util';
import Context from './Context';
import InternalConfigProvider, { getToken } from './InternalConfigProvider';
import type { InternalConfigProviderProps } from './types';

const ConfigProvider: typeof InternalConfigProvider & {
  Context: typeof Context;
  getToken: typeof getToken;
  defaultProps?: Partial<InternalConfigProviderProps>;
  override?: (props: Partial<InternalConfigProviderProps>) => Partial<InternalConfigProviderProps>;
} = createFactory<InternalConfigProviderProps>(InternalConfigProvider, {});

ConfigProvider.displayName = 'ConfigProvider';
ConfigProvider.Context = Context;
ConfigProvider.getToken = getToken;

export default ConfigProvider;
