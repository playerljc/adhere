import { Upload } from 'antd';
import type { UploadProps } from 'antd';

import { createFactory } from '../util';

const UploadHOC: typeof Upload & {
  defaultProps?: Partial<UploadProps>;
} = createFactory<UploadProps>(Upload, { name: 'file', withCredentials: true });

UploadHOC.displayName = 'Upload';

export default UploadHOC;
