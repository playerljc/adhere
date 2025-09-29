import { VirtualInput } from 'antd-mobile';
import type { VirtualInputProps } from 'antd-mobile';

import { createFactory } from '../util';

const VirtualInputHOC: typeof VirtualInput & {
  defaultProps?: Partial<VirtualInputProps>;
  override?: (props: Partial<VirtualInputProps>) => Partial<VirtualInputProps>;
} = createFactory<VirtualInputProps>(VirtualInput, {});

VirtualInputHOC.displayName = 'VirtualInput';

export default VirtualInputHOC;
