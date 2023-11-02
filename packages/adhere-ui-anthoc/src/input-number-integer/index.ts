import { InputNumber, InputNumberProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<InputNumberProps>(InputNumber, { precision: 0 });
