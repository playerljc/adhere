import { Col } from 'antd';
import type { ColProps } from 'antd';
declare const ColHOC: typeof Col & {
    defaultProps?: Partial<ColProps>;
};
export default ColHOC;
