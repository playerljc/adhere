import { Input } from 'antd';

import { createFactory } from '../util';

export default createFactory(Input, { allowClear: true, maxLength: 1000, showCount: true });
