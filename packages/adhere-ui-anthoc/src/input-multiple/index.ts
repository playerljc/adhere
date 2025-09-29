import type { InputMultipleSelectProps } from '../types';
import { createFactory } from '../util';
import InputMultiple from './InputMultipleHOC';
import InputMultipleSelect from './InputMultipleSelect';

InputMultiple.Select = createFactory<InputMultipleSelectProps>(InputMultipleSelect, {});

InputMultiple.Select.displayName = 'InputMultipleSelect';

export default InputMultiple;
