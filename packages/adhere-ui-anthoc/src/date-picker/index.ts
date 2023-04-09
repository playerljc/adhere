import { DatePicker } from 'antd';

import { createFactory } from '../util';

export default createFactory(DatePicker, { allowClear: true, placement: 'bottomLeft' });
