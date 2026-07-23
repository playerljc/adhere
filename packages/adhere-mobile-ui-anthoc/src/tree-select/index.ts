import type { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import type { AsyncTreeLeafSelectProps, AsyncTreeSelectProps } from '../types';
import { createFactory } from '../util';
import AsyncTreeLeafSelect from './AsyncTreeLeafSelect';
import AsyncTreeSelect from './AsyncTreeSelect';
import AsyncTreeShowAllSelect from './AsyncTreeShowAllSelect';
import AsyncTreeShowChildSelect from './AsyncTreeShowChildSelect';
import AutoCompleteTreeLeafSelect from './AutoCompleteTreeLeafSelect';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';
import AutoCompleteTreeShowAllSelect from './AutoCompleteTreeShowAllSelect';
import AutoCompleteTreeShowChildSelect from './AutoCompleteTreeShowChildSelect';
import TreeLeafSelect from './TreeLeafSelect';
import TreeSelect from './TreeSelect';
import TreeShowAllSelect from './TreeShowAllSelect';
import TreeShowChildSelect from './TreeShowChildSelect';

TreeSelect.TreeLeafSelect = createFactory<TreeSelectProps>(TreeLeafSelect, {});
TreeSelect.TreeShowAllSelect = createFactory<TreeSelectProps>(TreeShowAllSelect, {});
TreeSelect.TreeShowChildSelect = createFactory<TreeSelectProps>(TreeShowChildSelect, {});
TreeSelect.AsyncTreeSelect = createFactory<AsyncTreeSelectProps>(AsyncTreeSelect, {});
TreeSelect.AsyncTreeLeafSelect = createFactory<AsyncTreeLeafSelectProps>(AsyncTreeLeafSelect, {});
TreeSelect.AsyncTreeShowAllSelect = createFactory<AsyncTreeSelectProps>(AsyncTreeShowAllSelect, {});
TreeSelect.AsyncTreeShowChildSelect = createFactory<AsyncTreeSelectProps>(
  AsyncTreeShowChildSelect,
  {},
);
TreeSelect.AutoCompleteTreeSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeSelect,
  {},
);
TreeSelect.AutoCompleteTreeLeafSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeLeafSelect,
  {},
);
TreeSelect.AutoCompleteTreeShowAllSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeShowAllSelect,
  {},
);
TreeSelect.AutoCompleteTreeShowChildSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeShowChildSelect,
  {},
);

TreeSelect.TreeLeafSelect.displayName = 'TreeLeafSelect';
TreeSelect.TreeShowAllSelect.displayName = 'TreeShowAllSelect';
TreeSelect.TreeShowChildSelect.displayName = 'TreeShowChildSelect';
TreeSelect.AsyncTreeSelect.displayName = 'AsyncTreeSelect';
TreeSelect.AsyncTreeLeafSelect.displayName = 'AsyncTreeLeafSelect';
TreeSelect.AsyncTreeShowAllSelect.displayName = 'AsyncTreeShowAllSelect';
TreeSelect.AsyncTreeShowChildSelect.displayName = 'AsyncTreeShowChildSelect';
TreeSelect.AutoCompleteTreeSelect.displayName = 'AutoCompleteTreeSelect';
TreeSelect.AutoCompleteTreeLeafSelect.displayName = 'AutoCompleteTreeLeafSelect';
TreeSelect.AutoCompleteTreeShowAllSelect.displayName = 'AutoCompleteTreeShowAllSelect';
TreeSelect.AutoCompleteTreeShowChildSelect.displayName = 'AutoCompleteTreeShowChildSelect';

export default TreeSelect;
