import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';
declare const PopconfirmHOC: typeof Popconfirm & {
    defaultProps?: Partial<PopconfirmProps>;
    override?: (props: Partial<PopconfirmProps>) => Partial<PopconfirmProps>;
};
export default PopconfirmHOC;
