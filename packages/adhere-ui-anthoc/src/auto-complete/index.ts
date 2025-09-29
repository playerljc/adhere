import type { AutoCompleteSelectInputProps } from '../types';
import { createFactory } from '../util';
import AutoComplete from './AutoComplete';
import AutoCompleteSelectInput from './AutoCompleteSelectInput';

AutoComplete.AutoCompleteSelectInput = createFactory<AutoCompleteSelectInputProps>(
  AutoCompleteSelectInput,
  {},
);

export default AutoComplete;
