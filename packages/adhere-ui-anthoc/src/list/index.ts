import {
  AutoCompleteCheckAllListSelectProps,
  AutoCompleteListPagingSelectProps,
  AutoCompleteListSelectProps,
  CheckAllListSelectProps,
  CheckboxListProps,
  ListPagingProps,
  ListPagingSelectProps,
  ListSelectProps,
  RadioListProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckAllListSelect from './AutoCompleteCheckAllListSelect';
import AutoCompleteListPagingSelect from './AutoCompleteListPagingSelect';
import AutoCompleteListSelect from './AutoCompleteListSelect';
import CheckAllListSelect from './CheckAllListSelect';
import CheckboxList from './CheckboxList';
import List from './List';
import ListPaging from './ListPaging';
import ListPagingSelect from './ListPagingSelect';
import ListSelect from './ListSelect';
import RadioList from './RadioList';

List.AutoCompleteCheckAllListSelect = createFactory<AutoCompleteCheckAllListSelectProps>(
  AutoCompleteCheckAllListSelect,
  {},
);
List.AutoCompleteListPagingSelect = createFactory<AutoCompleteListPagingSelectProps>(
  AutoCompleteListPagingSelect,
  {},
);
List.AutoCompleteListSelect = createFactory<AutoCompleteListSelectProps>(
  AutoCompleteListSelect,
  {},
);
List.ListSelect = createFactory<ListSelectProps>(ListSelect, {});
List.CheckAllListSelect = createFactory<CheckAllListSelectProps>(CheckAllListSelect, {});
List.ListPagingSelect = createFactory<ListPagingSelectProps<any>>(ListPagingSelect, {});
List.ListPaging = createFactory<ListPagingProps<any>>(ListPaging, {});
List.RadioList = createFactory<RadioListProps>(RadioList, {});
List.CheckboxList = createFactory<CheckboxListProps>(CheckboxList, {});

export default List;
