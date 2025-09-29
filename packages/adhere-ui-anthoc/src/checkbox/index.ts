import {
  AutoCompleteCheckAllCheckboxSelectProps,
  AutoCompleteCheckAllCustomCheckboxSelectProps,
  AutoCompleteCheckboxSelectProps,
  AutoCompleteCustomCheckboxSelectProps,
  type CheckAllCheckboxSelectProps,
  type CheckAllCustomCheckboxSelectProps,
  type CheckboxGroupExtProps,
  type CheckboxSelectProps,
  type CustomCheckAllCheckboxProps,
  type CustomCheckboxProps,
  type CustomCheckboxSelectProps,
  type HorizontalCheckAllCheckboxProps,
  type VerticalCheckAllCheckboxProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckAllCheckboxSelect from './AutoCompleteCheckAllCheckboxSelect';
import AutoCompleteCheckAllCustomCheckboxSelect from './AutoCompleteCheckAllCustomCheckboxSelect';
import AutoCompleteCheckboxSelect from './AutoCompleteCheckboxSelect';
import AutoCompleteCustomCheckboxSelect from './AutoCompleteCustomCheckboxSelect';
import CheckAllCheckboxSelect from './CheckAllCheckboxSelect';
import CheckAllCustomCheckboxSelect from './CheckAllCustomCheckboxSelect';
import Checkbox from './Checkbox';
import CheckboxGroupExt from './CheckboxGroup';
import CheckboxSelect from './CheckboxSelect';
import CustomCheckAllCheckbox from './CustomCheckAllCheckbox';
import CustomCheckbox from './CustomCheckbox';
import CustomCheckboxSelect from './CustomCheckboxSelect';
import HorizontalCheckAllCheckbox from './HorizontalCheckAllCheckbox';
import HorizontalCheckbox from './HorizontalCheckbox';
import VerticalCheckAllCheckbox from './VerticalCheckAllCheckbox';
import VerticalCheckbox from './VerticalCheckbox';

Checkbox.AutoCompleteCheckAllCheckboxSelect =
  createFactory<AutoCompleteCheckAllCheckboxSelectProps>(AutoCompleteCheckAllCheckboxSelect, {});
Checkbox.AutoCompleteCheckAllCustomCheckboxSelect =
  createFactory<AutoCompleteCheckAllCustomCheckboxSelectProps>(
    AutoCompleteCheckAllCustomCheckboxSelect,
    {},
  );
Checkbox.AutoCompleteCheckboxSelect = createFactory<AutoCompleteCheckboxSelectProps>(
  AutoCompleteCheckboxSelect,
  {},
);
Checkbox.AutoCompleteCustomCheckboxSelect = createFactory<AutoCompleteCustomCheckboxSelectProps>(
  AutoCompleteCustomCheckboxSelect,
  {},
);
Checkbox.CheckAllCheckboxSelect = createFactory<CheckAllCheckboxSelectProps>(
  CheckAllCheckboxSelect,
  {},
);
Checkbox.CheckAllCustomCheckboxSelect = createFactory<CheckAllCustomCheckboxSelectProps>(
  CheckAllCustomCheckboxSelect,
  {},
);
Checkbox.CheckboxSelect = createFactory<CheckboxSelectProps>(CheckboxSelect, {});
Checkbox.CustomCheckbox = createFactory<CustomCheckboxProps>(CustomCheckbox, {});
Checkbox.CustomCheckAllCheckbox = createFactory<CustomCheckAllCheckboxProps>(
  CustomCheckAllCheckbox,
  {},
);
Checkbox.CustomCheckboxSelect = createFactory<CustomCheckboxSelectProps>(CustomCheckboxSelect, {});
Checkbox.HorizontalCheckAllCheckbox = createFactory<HorizontalCheckAllCheckboxProps>(
  HorizontalCheckAllCheckbox,
  {},
);
Checkbox.HorizontalCheckbox = createFactory<CheckboxGroupExtProps>(HorizontalCheckbox, {});
Checkbox.VerticalCheckAllCheckbox = createFactory<VerticalCheckAllCheckboxProps>(
  VerticalCheckAllCheckbox,
  {},
);
Checkbox.VerticalCheckbox = createFactory<CheckboxGroupExtProps>(VerticalCheckbox, {});
Checkbox.CheckboxGroupExt = createFactory<CheckboxGroupExtProps>(CheckboxGroupExt, {});

export default Checkbox;
