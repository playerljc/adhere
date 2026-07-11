import { Button } from 'antd';

import { createFactory } from '../util';
import InternalDebounceButton, { DebounceButtonProps } from './InternalDebounceButton';

const DebounceButtonHOC: typeof Button & {
  defaultProps?: Partial<DebounceButtonProps>;
  override?: (props: Partial<DebounceButtonProps>) => Partial<DebounceButtonProps>;
} = createFactory<DebounceButtonProps>(InternalDebounceButton, {});

DebounceButtonHOC.displayName = 'DebounceButton';

export default DebounceButtonHOC;
