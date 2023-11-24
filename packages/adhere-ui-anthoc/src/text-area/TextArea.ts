import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

import { createFactory } from '../util';

const { TextArea } = Input;

const TextAreaHOC: typeof TextArea & {
  defaultProps?: Partial<TextAreaProps>;
} = createFactory<TextAreaProps>(TextArea, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
  autoSize: false,
});

TextAreaHOC.displayName = 'TextArea';

export default TextAreaHOC;
