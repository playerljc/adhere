import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
declare const CollapseHOC: typeof Collapse & {
    defaultProps?: Partial<CollapseProps>;
    override?: (props: Partial<CollapseProps>) => Partial<CollapseProps>;
};
export default CollapseHOC;
