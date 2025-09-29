import { SafeArea } from 'antd-mobile';
import type { SafeAreaProps } from 'antd-mobile';

import { createFactory } from '../util';

const SafeAreaHOC: typeof SafeArea & {
  defaultProps?: Partial<SafeAreaProps>;
  override?: (props: Partial<SafeAreaProps>) => Partial<SafeAreaProps>;
} = createFactory<SafeAreaProps>(SafeArea, {});

SafeAreaHOC.displayName = 'SafeArea';

export default SafeAreaHOC;
