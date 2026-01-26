import Input from './Input';
import OptimizedInput from './OptimizedInput';
import OptimizedTextArea from './OptimizedTextArea';

// 将 OptimizedInput 和 OptimizedTextArea 作为静态属性添加到 Input 组件上
const InputWithStaticProps = Input as typeof Input & {
  OptimizedInput: typeof OptimizedInput;
  OptimizedTextArea: typeof OptimizedTextArea;
};

InputWithStaticProps.OptimizedInput = OptimizedInput;
InputWithStaticProps.OptimizedTextArea = OptimizedTextArea;

export default InputWithStaticProps;
