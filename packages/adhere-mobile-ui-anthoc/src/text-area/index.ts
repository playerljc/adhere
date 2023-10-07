import { TextArea } from 'antd-mobile';

import { createFactory } from '../util';

export default createFactory(TextArea, {
  maxLength: 1000,
  showCount: true,
  autoSize: false,
});
