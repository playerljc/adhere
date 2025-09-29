import { QRCode } from 'antd';
import type { QRCodeProps } from 'antd';
declare const QRCodeHOC: typeof QRCode & {
    defaultProps?: Partial<QRCodeProps>;
    override?: (props: Partial<QRCodeProps>) => Partial<QRCodeProps>;
};
export default QRCodeHOC;
