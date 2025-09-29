import type {
  AutoCompleteTablePagingSelectProps,
  AutoCompleteTableSelectProps,
  AutoCompleteTreeTablePagingSelectProps,
  AutoCompleteTreeTableSelectProps,
  CheckboxTableProps,
  CheckboxTreeTableProps,
  RadioTableProps,
  RadioTreeTableProps,
  TableExtProps,
  TablePagingProps,
  TablePagingSelectProps,
  TableSelectProps,
  TreeTablePagingSelectProps,
  TreeTableSelectProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteTablePagingSelect from './AutoCompleteTablePagingSelect';
import AutoCompleteTableSelect from './AutoCompleteTableSelect';
import AutoCompleteTreeTablePagingSelect from './AutoCompleteTreeTablePagingSelect';
import AutoCompleteTreeTableSelect from './AutoCompleteTreeTableSelect';
import CheckboxTable from './CheckboxTable';
import CheckboxTreeTable from './CheckboxTreeTable';
import RadioTable from './RadioTable';
import RadioTreeTable from './RadioTreeTable';
import Table from './Table';
import TableExt from './TableExt';
import TablePaging from './TablePaging';
import TablePagingSelect from './TablePagingSelect';
import TableSelect from './TableSelect';
import TreeTablePagingSelect from './TreeTablePagingSelect';
import TreeTableSelect from './TreeTableSelect';

Table.AutoCompleteTablePagingSelect = createFactory<AutoCompleteTablePagingSelectProps>(
  AutoCompleteTablePagingSelect,
  {},
);
Table.AutoCompleteTreeTablePagingSelect = createFactory<AutoCompleteTreeTablePagingSelectProps>(
  AutoCompleteTreeTablePagingSelect,
  {},
);
Table.AutoCompleteTableSelect = createFactory<AutoCompleteTableSelectProps>(
  AutoCompleteTableSelect,
  {},
);
Table.AutoCompleteTreeTableSelect = createFactory<AutoCompleteTreeTableSelectProps>(
  AutoCompleteTreeTableSelect,
  {},
);
Table.TableSelect = createFactory<TableSelectProps>(TableSelect, {});
Table.TablePagingSelect = createFactory<TablePagingSelectProps<any>>(TablePagingSelect, {});
Table.TablePaging = createFactory<TablePagingProps<any>>(TablePaging, {});
Table.RadioTable = createFactory<RadioTableProps>(RadioTable, {});
Table.CheckboxTable = createFactory<CheckboxTableProps>(CheckboxTable, {});
Table.RadioTreeTable = createFactory<RadioTreeTableProps>(RadioTreeTable, {});
Table.CheckboxTreeTable = createFactory<CheckboxTreeTableProps>(CheckboxTreeTable, {});
Table.TreeTableSelect = createFactory<TreeTableSelectProps>(TreeTableSelect, {});
Table.TreeTablePagingSelect = createFactory<TreeTablePagingSelectProps>(TreeTablePagingSelect, {});
Table.TableExt = createFactory<TableExtProps>(TableExt, {});

export default Table;
