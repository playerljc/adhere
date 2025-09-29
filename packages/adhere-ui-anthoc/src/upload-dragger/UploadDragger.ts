import { Upload } from 'antd';
import type { UploadProps } from 'antd';

import { createFactory } from '../util';

const UploadDraggerHOC: typeof Upload.Dragger & {
  defaultProps?: Partial<UploadProps>;
  override?: (props: Partial<UploadProps>) => Partial<UploadProps>;
} = createFactory<UploadProps>(Upload.Dragger, { name: 'file', withCredentials: true });

UploadDraggerHOC.displayName = 'UploadDragger';

export default UploadDraggerHOC;
