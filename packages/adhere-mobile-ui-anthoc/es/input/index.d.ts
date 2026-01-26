import Input from './Input';
import OptimizedInput from './OptimizedInput';
import OptimizedTextArea from './OptimizedTextArea';
declare const InputWithStaticProps: typeof Input & {
    OptimizedInput: typeof OptimizedInput;
    OptimizedTextArea: typeof OptimizedTextArea;
};
export default InputWithStaticProps;
