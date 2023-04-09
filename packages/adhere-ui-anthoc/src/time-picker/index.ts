import { TimePicker } from 'antd';

import { createFactory } from '../util';

export default createFactory(TimePicker, { allowClear: true, placement: 'bottomLeft' });
