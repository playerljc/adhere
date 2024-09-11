import { Dropdown } from 'antd';
import type { DropdownProps } from 'antd';
declare const DropdownHOC: typeof Dropdown & {
    defaultProps?: Partial<DropdownProps>;
};
export default DropdownHOC;
