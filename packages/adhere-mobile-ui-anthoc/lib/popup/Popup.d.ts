import { Popup } from 'antd-mobile';
import type { PopupProps } from 'antd-mobile';
declare const PopupHOC: typeof Popup & {
    defaultProps?: Partial<PopupProps>;
};
export default PopupHOC;
