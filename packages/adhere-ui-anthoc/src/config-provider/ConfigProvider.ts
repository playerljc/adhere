import { ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';

import { createFactory } from '../util';
import DatePicker from './DatePicker';

const reducer = [DatePicker];

const ConfigProviderHOC: typeof ConfigProvider & {
  defaultProps?: Partial<ConfigProviderProps>;
  override?: (props: Partial<ConfigProviderProps>) => Partial<ConfigProviderProps>;
} = createFactory<ConfigProviderProps>(
  ConfigProvider,
  {},
  /*(props) => {
    return produce(props, (draft) => {
      reducer.forEach((reduce) => reduce(props, draft));
    });
  }*/
  (props) => {
    reducer.forEach((reduce) => reduce(props));

    return props;
  },
);

ConfigProviderHOC.displayName = 'ConfigProvider';

export default ConfigProviderHOC;
