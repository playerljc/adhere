import { CenterPopup } from 'antd-mobile';
import type { CenterPopupProps } from 'antd-mobile';
declare const CenterPopupHOC: typeof CenterPopup & {
    defaultProps?: Partial<CenterPopupProps>;
    override?: (props: Partial<CenterPopupProps>) => Partial<CenterPopupProps>;
};
export default CenterPopupHOC;
