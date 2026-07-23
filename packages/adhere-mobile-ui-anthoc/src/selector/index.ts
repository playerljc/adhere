import type {
  AutoCompletePagingSelectorProps,
  AutoCompleteSelectorProps,
  CheckAllSelectorProps,
  FilterCheckAllSelectorProps,
  FilterPagingSelectorProps,
  FilterSelectorProps,
  PagingSelectorProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompletePagingSelector from './AutoCompletePagingSelector';
import AutoCompleteSelector from './AutoCompleteSelector';
import CheckAllSelector from './CheckAllSelector';
import FilterCheckAllSelector from './FilterCheckAllSelector';
import FilterPagingSelector from './FilterPagingSelector';
import FilterSelector from './FilterSelector';
import PagingSelector from './PagingSelector';
import Selector from './Selector';

Selector.AutoCompleteSelector = createFactory<AutoCompleteSelectorProps>(AutoCompleteSelector, {});
Selector.CheckAllSelector = createFactory<CheckAllSelectorProps>(CheckAllSelector, {});
Selector.FilterSelector = createFactory<FilterSelectorProps>(FilterSelector, {});
Selector.FilterCheckAllSelector = createFactory<FilterCheckAllSelectorProps>(
  FilterCheckAllSelector,
  {},
);
Selector.PagingSelector = createFactory<PagingSelectorProps>(PagingSelector, {});
Selector.FilterPagingSelector = createFactory<FilterPagingSelectorProps>(FilterPagingSelector, {});
Selector.AutoCompletePagingSelector = createFactory<AutoCompletePagingSelectorProps>(
  AutoCompletePagingSelector,
  {},
);

Selector.AutoCompleteSelector.displayName = 'AutoCompleteSelector';
Selector.CheckAllSelector.displayName = 'CheckAllSelector';
Selector.FilterSelector.displayName = 'FilterSelector';
Selector.FilterCheckAllSelector.displayName = 'FilterCheckAllSelector';
Selector.PagingSelector.displayName = 'PagingSelector';
Selector.FilterPagingSelector.displayName = 'FilterPagingSelector';
Selector.AutoCompletePagingSelector.displayName = 'AutoCompletePagingSelector';

export default Selector;
