import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoCompleteCheckList from './CheckList/AutoCompleteCheckList';
import AutoCompleteCheckboxCheckList from './CheckList/AutoCompleteCheckboxCheckList';
import AutoCompletePagingCheckList from './CheckList/AutoCompletePagingCheckList';
import AutoCompletePagingCheckboxCheckList from './CheckList/AutoCompletePagingCheckboxCheckList';
import CheckAllCheckList from './CheckList/CheckAllCheckList';
import CheckList from './CheckList/CheckList';
import CheckboxCheckAllCheckList from './CheckList/CheckboxCheckAllCheckList';
import CheckboxCheckList from './CheckList/CheckboxCheckList';
import FilterCheckAllCheckList from './CheckList/FilterCheckAllCheckList';
import FilterCheckList from './CheckList/FilterCheckList';
import FilterCheckboxCheckAllCheckList from './CheckList/FilterCheckboxCheckAllCheckList';
import FilterCheckboxCheckList from './CheckList/FilterCheckboxCheckList';
import FilterPagingCheckList from './CheckList/FilterPagingCheckList';
import FilterPagingCheckboxCheckList from './CheckList/FilterPagingCheckboxCheckList';
import PagingCheckList from './CheckList/PagingCheckList';
import PagingCheckboxCheckList from './CheckList/PagingCheckboxCheckList';
import AutoCompleteCheckbox from './Checkbox/AutoCompleteCheckbox';
import AutoCompletePagingCheckbox from './Checkbox/AutoCompletePagingCheckbox';
import CheckAllCheckbox from './Checkbox/CheckAllCheckbox';
import CheckboxGroup from './Checkbox/CheckboxGrooup';
import FilterCheckAllCheckbox from './Checkbox/FilterCheckAllCheckbox';
import FilterCheckbox from './Checkbox/FilterCheckbox';
import FilterPagingCheckbox from './Checkbox/FilterPagingCheckbox';
import PagingCheckbox from './Checkbox/PagingCheckbox';
import AutoCompletePagingRadio from './Radio/AutoCompletePagingRadio';
import AutoCompleteRadio from './Radio/AutoCompleteRadio';
import FilterPagingRadio from './Radio/FilterPagingRadio';
import FilterRadio from './Radio/FilterRadio';
import PagingRadio from './Radio/PagingRadio';
import RadioGroup from './Radio/RadioGroup';
import AutoCompletePagingSelector from './Selector/AutoCompletePagingSelector';
import AutoCompleteSelector from './Selector/AutoCompleteSelector';
import CheckAllSelector from './Selector/CheckAllSelector';
import FilterCheckAllSelector from './Selector/FilterCheckAllSelector';
import FilterPagingSelector from './Selector/FilterPagingSelector';
import FilterSelector from './Selector/FilterSelector';
import PagingSelector from './Selector/PagingSelector';
import Selector from './Selector/Selector';

e2e.Mobile({
  children: <AutoCompletePagingRadio />,
});
