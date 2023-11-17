import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoCompleteTest from './AutoComplete/AutoCompleteSelectInput';
import CascaderTest from './Cascader/FlatAsyncCascader.tsx';
import CheckboxTest from './Checkbox/AutoCompleteCheckAllCheckboxSelect.tsx';
import ListTest from './List/RadioListPagingSelect';
import RadioTest from './Radio/AutoCompleteCustomRadioSelect.tsx';
import SelectTest from './Select/AutoCompleteCheckAllMultipleSelect';
import TableTest from './Table/RadioTablePaging.tsx';
import TagTest from './Tag/AutoCompleteCheckAllTagSelect';
import TransferTest from './Transfer/AutoCompleteTransferSelect.tsx';
import TreeSelectTest from './TreeSelect/AsyncTreeSelect';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <AutoCompleteTest />,
});
