import { Dropdown } from 'antd';
import type { DropdownProps } from 'antd';

import { createFactory } from '../util';

const DropdownHOC: typeof Dropdown & {
  defaultProps?: Partial<DropdownProps>;
} = createFactory<DropdownProps>(Dropdown, {});

DropdownHOC.displayName = 'Dropdown';

export default DropdownHOC;
