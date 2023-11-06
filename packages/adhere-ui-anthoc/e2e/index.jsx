import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoCompleteTest from './AutoComplete/AutoCompleteSelectInput';
import CascaderTest from './Cascader/AsyncCascaderMultiEcho';
import CheckboxTest from './Checkbox/AutoCompleteCheckAllCustomCheckboxSelect.tsx';
import ListTest from './List/CheckboxListPaging';
import RadioTest from './Radio/AutoCompleteCustomRadioSelect.tsx';
import SelectTest from './Select/DropdownRenderSelect.jsx';
import TableTest from './Table/CheckboxTablePaging.tsx';
import TagTest from './Tag/TagSelect';
import TransferTest from './Transfer/AutoCompleteTransferSelect.tsx';
import TreeSelectTest from './TreeSelect/AsyncTreeSelect';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <TableTest />,
});
