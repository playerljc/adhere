import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoCompleteCheckList from './CheckList/AutoCompleteCheckList';
import AutoCompleteCheckboxCheckList from './CheckList/AutoCompleteCheckboxCheckList';
import CheckAllCheckList from './CheckList/CheckAllCheckList';
import CheckList from './CheckList/CheckList';
import CheckboxCheckAllCheckList from './CheckList/CheckboxCheckAllCheckList';
import CheckboxCheckList from './CheckList/CheckboxCheckList';
import FilterCheckAllCheckList from './CheckList/FilterCheckAllCheckList';
import FilterCheckList from './CheckList/FilterCheckList';
import FilterCheckboxCheckAllCheckList from './CheckList/FilterCheckboxCheckAllCheckList';
import FilterCheckboxCheckList from './CheckList/FilterCheckboxCheckList';
import AutoCompleteCheckbox from './Checkbox/AutoCompleteCheckbox';
import CheckAllCheckbox from './Checkbox/CheckAllCheckbox';
import CheckboxGroup from './Checkbox/CheckboxGrooup';
import FilterCheckAllCheckbox from './Checkbox/FilterCheckAllCheckbox';
import FilterCheckbox from './Checkbox/FilterCheckbox';
import AutoCompleteRadio from './Radio/AutoCompleteRadio';
import FilterRadio from './Radio/FilterRadio';
import RadioGroup from './Radio/RadioGroup';
import AutoCompleteSelector from './Selector/AutoCompleteSelector';
import CheckAllSelector from './Selector/CheckAllSelector';
import FilterCheckAllSelector from './Selector/FilterCheckAllSelector';
import FilterSelector from './Selector/FilterSelector';
import Selector from './Selector/Selector';

e2e.Mobile({
  children: <AutoCompleteSelector />,
});
