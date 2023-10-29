import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CascaderTest from './Cascader/AsyncCascaderMultiEcho';
import CheckboxTest from './Checkbox/AutoCompleteCheckAllCustomCheckboxSelect.tsx';
import ListTest from './List/CheckboxListPagingSelect';
import RadioTest from './Radio/ButtonRadioSelect';
import SelectTest from './Select/CheckAllMultipleSelect';
import TableTest from './Table/CheckboxTablePagingSelect';
import TagTest from './Tag/CheckAllTagSelect';
import TransferTest from './Transfer/TransferSelect';
import TreeSelectTest from './TreeSelect/AsyncTreeSelect';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <CheckboxTest />,
});
