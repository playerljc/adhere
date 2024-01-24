import React from 'react';

import e2e from '@baifendian/adhere-e2e';
import Dict from '@baifendian/adhere-util-dict';

import DictConfig from '@/dict/dict.config';

import AutoCompleteTest from './AutoComplete/SelectInput';
import BreadcrumbTest from './Breadcrumb/SuspenseStandard';
import CascaderAsyncEntityValueHOC from './Cascader/CascaderAsyncEntityValueHOC';
import CascaderTest from './Cascader/CascaderAsyncFlatChangeOnSelect';
import CascaderAsyncFlatEntityValueHOC from './Cascader/CascaderAsyncFlatEntityValueHOC';
import CascaderEntityValueHOC from './Cascader/CascaderEntityValueHOC';
import CascaderFlatEntityValueHOC from './Cascader/CascaderFlatEntityValueHOC';
import CascaderMulitEntityValueHOC from './Cascader/CascaderMulitEntityValueHOC';
import CheckboxTest from './Checkbox/Vertical.tsx';
import DropdownTest from './Dropdown/Standard';
import ListTest from './List/AutoCompleteCheckboxPagin';
import MentionsTest from './Mentions/Standard';
import MenuTest from './Menu/Standard';
import RadioTest from './Radio/AutoCompleteButtonRadioSelect';
import SegmentedTest from './Segmented/SuspenseStandard';
// import Test from './test';
import SelectTest from './Select/ArrayEntityValueHOC';
import StepsTest from './Steps/SuspenseStandard';
import TableTest from './Table/AutoCompleteCheckboxPagin';
import CheckboxTablePagingEntityValueHOC from './Table/CheckboxTablePagingEntityValueHOC';
import CheckboxTablePagingSelectEntityValueHOC from './Table/CheckboxTablePagingSelectEntityValueHOC';
import RadioTablePagingEntityValueHOC from './Table/RadioTablePagingEntityValueHOC';
import RadioTablePagingSelectEntityValueHOC from './Table/RadioTablePagingSelectEntityValueHOC';
import TagTest from './Tag/AutoCompleteTagCheckAllSelect';
import TimelineTest from './Timeline/SuspenseStandard';
import TransferTest from './Transfer/AutoComplete';
import TreeAsyncEntityValueHOC from './Tree/TreeAsyncEntityValueHOC';
import TreeTest from './Tree/TreeAsyncFlatCheckedShowParent';
import TreeAsyncFlatEntityValueHOC from './Tree/TreeAsyncFlatEntityValueHOC';
import TreeAsyncFlatMulitEntityValueHOC from './Tree/TreeAsyncFlatMulitEntityValueHOC';
import TreeAsyncMulitEntityValueHOC from './Tree/TreeAsyncMulitEntityValueHOC';
import TreeEntityValueHOC from './Tree/TreeEntityValueHOC';
import TreeFlatCheckedShowAllEntityValueHOC from './Tree/TreeFlatCheckedShowAllEntityValueHOC';
import TreeFlatEntityValueHOC from './Tree/TreeFlatEntityValueHOC';
import TreeFlatMultiEntityValueHOC from './Tree/TreeFlatMultiEntityValueHOC';
import TreeLeafEntityValueHOC from './Tree/TreeLeafEntityValueHOC';
import TreeMultiEntityValueHOC from './Tree/TreeMultiEntityValueHOC';

import '../src/index.less';

// 配置字典
DictConfig();

e2e.PC({
  children: <CascaderAsyncFlatEntityValueHOC />,
});
