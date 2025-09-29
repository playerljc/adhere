import { Progress } from 'antd';
import type { ProgressProps } from 'antd';
declare const ProgressHOC: typeof Progress & {
    defaultProps?: Partial<ProgressProps>;
    override?: (props: Partial<ProgressProps>) => Partial<ProgressProps>;
};
export default ProgressHOC;
