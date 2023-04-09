import { Upload } from 'antd';

import { createFactory } from '../util';

export default createFactory(Upload, { name: 'file', withCredentials: true });
