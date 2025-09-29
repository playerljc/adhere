import { Dropdown } from 'antd';
import type { DropdownProps } from 'antd';
declare const DropdownHOC: typeof Dropdown & {
    defaultProps?: Partial<DropdownProps>;
    override?: (props: Partial<DropdownProps>) => Partial<DropdownProps>;
};
export default DropdownHOC;
