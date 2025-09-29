import { Divider } from 'antd';
import type { DividerProps } from 'antd';
declare const DividerHOC: typeof Divider & {
    defaultProps?: Partial<DividerProps>;
    override?: (props: Partial<DividerProps>) => Partial<DividerProps>;
};
export default DividerHOC;
