import { DatePicker } from 'antd';

import { createFactory } from '../util';

const { RangePicker } = DatePicker;

export default createFactory(RangePicker, { allowClear: true, placement: 'bottomLeft' });
