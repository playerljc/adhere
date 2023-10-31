import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CascaderTest from './Cascader/AsyncCascaderMultiEcho';
import CheckboxTest from './Checkbox/AutoCompleteCheckAllCheckboxSelect.tsx';
import ListTest from './List/AutoCompleteListPagingSelect.tsx';
import RadioTest from './Radio/AutoCompleteRadioSelect';
import SelectTest from './Select/AutoCompleteMultipleSelect';
import TableTest from './Table/CheckboxTablePagingSelect';
import TagTest from './Tag/AutoCompleteCheckAllTagSelect';
import TransferTest from './Transfer/TransferSelect';
import TreeSelectTest from './TreeSelect/AsyncTreeSelect';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <ListTest />,
});
