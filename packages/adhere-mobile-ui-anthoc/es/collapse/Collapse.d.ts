import { Collapse } from 'antd-mobile';
import type { CollapseProps } from 'antd-mobile';
declare const CollapseHOC: typeof Collapse & {
    defaultProps?: Partial<CollapseProps>;
    override?: (props: Partial<CollapseProps>) => Partial<CollapseProps>;
};
export default CollapseHOC;
