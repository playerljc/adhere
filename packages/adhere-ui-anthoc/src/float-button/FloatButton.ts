import { FloatButton } from 'antd';
import type { FloatButtonProps } from 'antd';

import { createFactory } from '../util';

const FloatButtonHOC: typeof FloatButton & {
  defaultProps?: Partial<FloatButtonProps>;
} = createFactory<FloatButtonProps>(FloatButton, {});

FloatButtonHOC.displayName = 'FloatButton';

export default FloatButtonHOC;
