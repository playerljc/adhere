import type { DropdownRenderSelectProps } from '../types';
import { createFactory } from '../util';
import AutoCompleteSelect, { InternalAutoCompleteSelectType } from './AutoCompleteSelect';
import DropdownRenderSelect from './DropdownRenderSelect';
import Select from './Select';

Select.DropdownRenderSelect = createFactory<DropdownRenderSelectProps>(DropdownRenderSelect, {});
Select.AutoCompleteSelect = createFactory<InternalAutoCompleteSelectType>(AutoCompleteSelect, {});

export default Select;
