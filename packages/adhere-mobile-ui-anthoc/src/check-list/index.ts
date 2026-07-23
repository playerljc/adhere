import type {
  AutoCompleteCheckboxCheckListProps,
  AutoCompletePagingCheckListProps,
  AutoCompletePagingCheckboxCheckListProps,
  CheckAllCheckListProps,
  CheckboxCheckAllCheckListProps,
  CheckboxCheckListProps,
  FilterCheckAllCheckListProps,
  FilterCheckListProps,
  FilterCheckboxCheckAllCheckListProps,
  FilterCheckboxCheckListProps,
  FilterPagingCheckListProps,
  FilterPagingCheckboxCheckListProps,
  PagingCheckListProps,
  PagingCheckboxCheckListProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckList from './AutoCompleteCheckList';
import AutoCompleteCheckboxCheckList from './AutoCompleteCheckboxCheckList';
import AutoCompletePagingCheckList from './AutoCompletePagingCheckList';
import AutoCompletePagingCheckboxCheckList from './AutoCompletePagingCheckboxCheckList';
import CheckAllCheckList from './CheckAllCheckList';
import CheckList from './CheckList';
import CheckboxCheckAllCheckList from './CheckboxCheckAllCheckList';
import CheckboxCheckList from './CheckboxCheckList';
import FilterCheckAllCheckList from './FilterCheckAllCheckList';
import FilterCheckList from './FilterCheckList';
import FilterCheckboxCheckAllCheckList from './FilterCheckboxCheckAllCheckList';
import FilterCheckboxCheckList from './FilterCheckboxCheckList';
import FilterPagingCheckList from './FilterPagingCheckList';
import FilterPagingCheckboxCheckList from './FilterPagingCheckboxCheckList';
import PagingCheckList from './PagingCheckList';
import PagingCheckboxCheckList from './PagingCheckboxCheckList';

CheckList.AutoCompleteCheckboxCheckList = createFactory<AutoCompleteCheckboxCheckListProps>(
  AutoCompleteCheckboxCheckList,
  {},
);
CheckList.AutoCompleteCheckList = createFactory(AutoCompleteCheckList, {});
CheckList.CheckAllCheckList = createFactory<CheckAllCheckListProps>(CheckAllCheckList, {});
CheckList.FilterCheckList = createFactory<FilterCheckListProps>(FilterCheckList, {});
CheckList.FilterCheckAllCheckList = createFactory<FilterCheckAllCheckListProps>(
  FilterCheckAllCheckList,
  {},
);
CheckList.CheckboxCheckAllCheckList = createFactory<CheckboxCheckAllCheckListProps>(
  CheckboxCheckAllCheckList,
  {},
);
CheckList.CheckboxCheckList = createFactory<CheckboxCheckListProps>(CheckboxCheckList, {});
CheckList.FilterCheckboxCheckAllCheckList = createFactory<FilterCheckboxCheckAllCheckListProps>(
  FilterCheckboxCheckAllCheckList,
  {},
);
CheckList.FilterCheckboxCheckList = createFactory<FilterCheckboxCheckListProps>(
  FilterCheckboxCheckList,
  {},
);
CheckList.PagingCheckList = createFactory<PagingCheckListProps>(PagingCheckList, {});
CheckList.PagingCheckboxCheckList = createFactory<PagingCheckboxCheckListProps>(
  PagingCheckboxCheckList,
  {},
);
CheckList.FilterPagingCheckList = createFactory<FilterPagingCheckListProps>(
  FilterPagingCheckList,
  {},
);
CheckList.FilterPagingCheckboxCheckList = createFactory<FilterPagingCheckboxCheckListProps>(
  FilterPagingCheckboxCheckList,
  {},
);
CheckList.AutoCompletePagingCheckList = createFactory<AutoCompletePagingCheckListProps>(
  AutoCompletePagingCheckList,
  {},
);
CheckList.AutoCompletePagingCheckboxCheckList =
  createFactory<AutoCompletePagingCheckboxCheckListProps>(AutoCompletePagingCheckboxCheckList, {});

export default CheckList;
