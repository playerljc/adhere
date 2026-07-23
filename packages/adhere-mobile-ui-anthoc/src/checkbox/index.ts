import {
  AutoCompleteCheckboxProps,
  AutoCompletePagingCheckboxProps,
  type CheckAllCheckboxProps,
  type CheckboxGroupProps,
  type FilterCheckAllCheckboxProps,
  type FilterCheckboxProps,
  type FilterPagingCheckboxProps,
  type PagingCheckboxProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckbox from './AutoCompleteCheckbox';
import AutoCompletePagingCheckbox from './AutoCompletePagingCheckbox';
import CheckAllCheckbox from './CheckAllCheckbox';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import FilterCheckAllCheckbox from './FilterCheckAllCheckbox';
import FilterCheckbox from './FilterCheckbox';
import FilterPagingCheckbox from './FilterPagingCheckbox';
import PagingCheckbox from './PagingCheckbox';

Checkbox.AutoCompleteCheckbox = createFactory<AutoCompleteCheckboxProps>(AutoCompleteCheckbox, {});
Checkbox.CheckboxGroup = createFactory<CheckboxGroupProps>(CheckboxGroup, {});
Checkbox.CheckAllCheckbox = createFactory<CheckAllCheckboxProps>(CheckAllCheckbox, {});
Checkbox.FilterCheckbox = createFactory<FilterCheckboxProps>(FilterCheckbox, {});
Checkbox.FilterCheckAllCheckbox = createFactory<FilterCheckAllCheckboxProps>(
  FilterCheckAllCheckbox,
  {},
);
Checkbox.PagingCheckbox = createFactory<PagingCheckboxProps>(PagingCheckbox, {});
Checkbox.FilterPagingCheckbox = createFactory<FilterPagingCheckboxProps>(FilterPagingCheckbox, {});
Checkbox.AutoCompletePagingCheckbox = createFactory<AutoCompletePagingCheckboxProps>(
  AutoCompletePagingCheckbox,
  {},
);

Checkbox.CheckboxGroup.displayName = 'CheckboxGroup';
Checkbox.CheckAllCheckbox.displayName = 'CheckAllCheckbox';
Checkbox.FilterCheckbox.displayName = 'FilterCheckbox';
Checkbox.FilterCheckAllCheckbox.displayName = 'FilterCheckAllCheckbox';
Checkbox.PagingCheckbox.displayName = 'PagingCheckbox';
Checkbox.FilterPagingCheckbox.displayName = 'FilterPagingCheckbox';
Checkbox.AutoCompleteCheckbox.displayName = 'AutoCompleteCheckbox';
Checkbox.AutoCompletePagingCheckbox.displayName = 'AutoCompletePagingCheckbox';

export default Checkbox;
