import type { InputMultipleHOCComponent, InputMultipleProps } from '../types';
import { createFactory } from '../util';
import InputMultiple from './InputMultiple';

const InputMultipleHOC: InputMultipleHOCComponent = createFactory<InputMultipleProps<string>>(
  InputMultiple,
  {},
);

InputMultipleHOC.displayName = 'InputMultiple';

export default InputMultipleHOC;
