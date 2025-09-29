import { TextArea } from 'antd-mobile';
import type { TextAreaProps } from 'antd-mobile';
declare const TextAreaHOC: typeof TextArea & {
    defaultProps?: Partial<TextAreaProps>;
    override?: (props: Partial<TextAreaProps>) => Partial<TextAreaProps>;
};
export default TextAreaHOC;
