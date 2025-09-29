import { TextArea } from 'antd-mobile';
import type { TextAreaProps } from 'antd-mobile';

import { createFactory } from '../util';

const TextAreaHOC: typeof TextArea & {
  defaultProps?: Partial<TextAreaProps>;
  override?: (props: Partial<TextAreaProps>) => Partial<TextAreaProps>;
} = createFactory<TextAreaProps>(TextArea, {
  maxLength: 1000,
  showCount: true,
  autoSize: true,
});

TextAreaHOC.displayName = 'TextArea';

export default TextAreaHOC;
