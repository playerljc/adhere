import { QRCode } from 'antd';
import type { QRCodeProps } from 'antd';

import { createFactory } from '../util';

const QRCodeHOC: typeof QRCode & {
  defaultProps?: Partial<QRCodeProps>;
} = createFactory<QRCodeProps>(QRCode, {});

export default QRCodeHOC;
