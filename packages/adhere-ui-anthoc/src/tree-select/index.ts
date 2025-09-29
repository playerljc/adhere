import type { TreeSelectProps } from 'antd';

import { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete';

import type {
  AsyncTreeLeafSelectProps,
  AsyncTreeMultiLeafSelectProps,
  AsyncTreeMultiSelectProps,
  AsyncTreeSelectProps,
  TreeDropdownRenderSelectProps,
} from '../types';
import { createFactory } from '../util';
import AsyncTreeCheckedShowAllSelect from './AsyncTreeCheckedShowAllSelect';
import AsyncTreeCheckedShowChildSelect from './AsyncTreeCheckedShowChildSelect';
import AsyncTreeCheckedShowParentSelect from './AsyncTreeCheckedShowParentSelect';
import AsyncTreeLeafSelect from './AsyncTreeLeafSelect';
import AsyncTreeMultiLeafSelect from './AsyncTreeMultiLeafSelect';
import AsyncTreeMultiSelect from './AsyncTreeMultiSelect';
import AsyncTreeSelect from './AsyncTreeSelect';
// import AutoCompleteTreeCheckedShowAllSelect from './AutoCompleteTreeCheckedShowAllSelect';
// import AutoCompleteTreeCheckedShowChildSelect from './AutoCompleteTreeCheckedShowChildSelect';
// import AutoCompleteTreeCheckedShowParentSelect from './AutoCompleteTreeCheckedShowParentSelect';
import AutoCompleteTreeLeafSelect from './AutoCompleteTreeLeafSelect';
import AutoCompleteTreeMultiLeafSelect from './AutoCompleteTreeMultiLeafSelect';
import AutoCompleteTreeMultiSelect from './AutoCompleteTreeMultiSelect';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';
import DropdownRenderSelect from './DropdownRenderSelect';
import TreeCheckedShowAllSelect from './TreeCheckedShowAllSelect';
import TreeCheckedShowChildSelect from './TreeCheckedShowChildSelect';
import TreeCheckedShowParentSelect from './TreeCheckedShowParentSelect';
import TreeLeafSelect from './TreeLeafSelect';
import TreeMultiLeafSelect from './TreeMultiLeafSelect';
import TreeMultiSelect from './TreeMultiSelect';
import TreeSelect from './TreeSelect';

TreeSelect.AsyncTreeCheckedShowAllSelect = createFactory<AsyncTreeSelectProps>(
  AsyncTreeCheckedShowAllSelect,
  {},
);
TreeSelect.AsyncTreeCheckedShowChildSelect = createFactory<AsyncTreeSelectProps>(
  AsyncTreeCheckedShowChildSelect,
  {},
);
TreeSelect.AsyncTreeCheckedShowParentSelect = createFactory<AsyncTreeSelectProps>(
  AsyncTreeCheckedShowParentSelect,
  {},
);
TreeSelect.AsyncTreeLeafSelect = createFactory<AsyncTreeLeafSelectProps>(AsyncTreeLeafSelect, {});
TreeSelect.AsyncTreeMultiLeafSelect = createFactory<AsyncTreeMultiLeafSelectProps>(
  AsyncTreeMultiLeafSelect,
  {},
);
TreeSelect.AsyncTreeMultiSelect = createFactory<AsyncTreeMultiSelectProps>(
  AsyncTreeMultiSelect,
  {},
);
TreeSelect.AsyncTreeSelect = createFactory<AsyncTreeSelectProps>(AsyncTreeSelect, {});
TreeSelect.TreeMultiSelect = createFactory<TreeSelectProps>(TreeMultiSelect, {});
TreeSelect.TreeLeafSelect = createFactory<TreeSelectProps>(TreeLeafSelect, {});
TreeSelect.TreeMultiLeafSelect = createFactory<TreeSelectProps>(TreeMultiLeafSelect, {});
TreeSelect.TreeCheckedShowAllSelect = createFactory<TreeSelectProps>(TreeCheckedShowAllSelect, {});
TreeSelect.TreeCheckedShowChildSelect = createFactory<TreeSelectProps>(
  TreeCheckedShowChildSelect,
  {},
);
TreeSelect.TreeCheckedShowParentSelect = createFactory<TreeSelectProps>(
  TreeCheckedShowParentSelect,
  {},
);
TreeSelect.AutoCompleteTreeLeafSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeLeafSelect,
  {},
);
TreeSelect.AutoCompleteTreeMultiLeafSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeMultiLeafSelect,
  {},
);
TreeSelect.AutoCompleteTreeMultiSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeMultiSelect,
  {},
);
TreeSelect.AutoCompleteTreeSelect = createFactory<TreeAutoCompleteProps>(
  AutoCompleteTreeSelect,
  {},
);
TreeSelect.DropdownRenderSelect = createFactory<TreeDropdownRenderSelectProps>(
  DropdownRenderSelect,
  {},
);

export default TreeSelect;
