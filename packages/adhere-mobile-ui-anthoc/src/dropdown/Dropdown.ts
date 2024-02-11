import { Dropdown } from 'antd-mobile';
import type { DropdownProps } from 'antd-mobile';

import { createFactory } from '../util';

const DropdownHOC: typeof Dropdown & {
  defaultProps?: Partial<DropdownProps>;
} = createFactory<DropdownProps>(Dropdown, {});

DropdownHOC.displayName = 'Dropdown';

export default DropdownHOC;
