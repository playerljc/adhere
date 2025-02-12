import { QRCode } from 'antd';
import type { QRCodeProps } from 'antd';
declare const QRCodeHOC: typeof QRCode & {
    defaultProps?: Partial<QRCodeProps>;
};
export default QRCodeHOC;
