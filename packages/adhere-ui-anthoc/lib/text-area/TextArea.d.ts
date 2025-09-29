import { TextAreaProps } from 'antd/es/input';
declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaProps & import("react").RefAttributes<import("antd/es/input/TextArea").TextAreaRef>>;
declare const TextAreaHOC: typeof TextArea & {
    defaultProps?: Partial<TextAreaProps>;
    override?: (props: Partial<TextAreaProps>) => Partial<TextAreaProps>;
};
export default TextAreaHOC;
