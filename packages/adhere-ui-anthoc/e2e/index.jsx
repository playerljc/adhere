import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ArrayEntityValueHOC from './ArrayEntityValueHOC';
import AsyncTreeEntityValueHOC from './AsyncTreeEntityValueHOC';
import AutoCompleteTest from './AutoComplete/AutoCompleteSelectInput';
import CascaderTest from './Cascader/FlatAsyncCascader.tsx';
import CheckboxTest from './Checkbox/VerticalCheckAllCheckbox.tsx';
import DatePickerValueHOCInFormTest from './DatePickerValueHOCInFormTest';
import DatePickerValueHOCTest from './DatePickerValueHOCTest';
import ListTest from './List/CheckboxListPaging';
import PagingEntityValueHOC from './PagingEntityValueHOC';
import RadioTest from './Radio/AutoCompleteButtonRadioSelect.tsx';
import RangePickerValueHOCInFormTest from './RangePickerValueHOCInFormTest';
import RangePickerValueHOCTest from './RangePickerValueHOCTest';
import SelectTest from './Select/AutoCompleteCheckAllMultipleSelect';
import AutoCompleteTablePagingSelectValueHOC from './Table/AutoCompleteTablePagingSelectValueHOC.tsx';
import AutoCompleteTableSelectValueHOC from './Table/AutoCompleteTableSelectValueHOC.tsx';
import TableTest from './Table/AutoCompleteTreeTablePagingSelectValueHOC.jsx';
import TagTest from './Tag/VerticalCheckAllCheckableTagGroup';
import TimePickerValueHOCInFormTest from './TimePickerValueHOCInFormTest';
import TimePickerValueHOCTest from './TimePickerValueHOCTest';
import TransferTest from './Transfer/AutoCompleteTransferSelect.tsx';
import TreeEntityValueHOC from './TreeEntityValueHOC';
import TreeSelectTest from './TreeSelect/AutoCompleteTreeMultiSelectValueHOC.jsx';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <AutoCompleteTablePagingSelectValueHOC />,
});
