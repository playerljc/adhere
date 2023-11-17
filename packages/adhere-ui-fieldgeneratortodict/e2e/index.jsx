import React from 'react';

import e2e from '@baifendian/adhere-e2e';
import Dict from '@baifendian/adhere-util-dict';

import DictConfig from '@/dict/dict.config';

import AutoCompleteTest from './AutoComplete/SelectInput';
import BreadcrumbTest from './Breadcrumb/SuspenseStandard';
import CascaderTest from './Cascader/CascaderAsyncFlatChangeOnSelect';
import CheckboxTest from './Checkbox/Vertical.tsx';
import DropdownTest from './Dropdown/Standard';
import ListTest from './List/AutoCompleteCheckboxPagin';
import MentionsTest from './Mentions/Standard';
import MenuTest from './Menu/Standard';
import RadioTest from './Radio/AutoCompleteButtonRadioSelect';
import SegmentedTest from './Segmented/SuspenseStandard';
// import Test from './test';
import SelectTest from './Select/AutoCompleteCheckAllMultipleSelect';
import StepsTest from './Steps/SuspenseStandard';
import TableTest from './Table/AutoCompleteCheckboxPagin';
import TagTest from './Tag/AutoCompleteTagCheckAllSelect';
import TimelineTest from './Timeline/SuspenseStandard';
import TransferTest from './Transfer/AutoComplete';
import TreeTest from './Tree/TreeAsyncFlatCheckedShowParent';

import '../src/index.less';

// 配置字典
DictConfig();

console.log('Dict', Dict);

e2e.PC({
  children: <TimelineTest />,
});
