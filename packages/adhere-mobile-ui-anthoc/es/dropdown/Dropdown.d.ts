import { Dropdown } from 'antd-mobile';
import type { DropdownProps } from 'antd-mobile';
declare const DropdownHOC: typeof Dropdown & {
    defaultProps?: Partial<DropdownProps>;
    override?: (props: Partial<DropdownProps>) => Partial<DropdownProps>;
};
export default DropdownHOC;
