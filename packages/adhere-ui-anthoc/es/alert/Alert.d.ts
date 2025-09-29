import { Alert } from 'antd';
import type { AlertProps } from 'antd';
declare const AlertHOC: typeof Alert & {
    defaultProps?: Partial<AlertProps>;
    override?: (props: Partial<AlertProps>) => Partial<AlertProps>;
};
export default AlertHOC;
