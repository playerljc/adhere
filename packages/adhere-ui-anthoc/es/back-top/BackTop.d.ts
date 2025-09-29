import { BackTop } from 'antd';
import type { BackTopProps } from 'antd';
declare const BackTopHOC: typeof BackTop & {
    defaultProps?: Partial<BackTopProps>;
    override?: (props: Partial<BackTopProps>) => Partial<BackTopProps>;
};
export default BackTopHOC;
