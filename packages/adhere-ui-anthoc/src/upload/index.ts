import { Upload, UploadProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<UploadProps>(Upload, { name: 'file', withCredentials: true });
