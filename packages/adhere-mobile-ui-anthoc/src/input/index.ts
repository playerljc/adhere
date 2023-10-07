import { Input } from 'antd-mobile';

import { createFactory } from '../util';

export default createFactory(Input, { clearable: true, maxLength: 1000 });
