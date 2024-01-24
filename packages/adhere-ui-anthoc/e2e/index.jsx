import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ArrayEntityValueHOC from './ArrayEntityValueHOC';
import AsyncTreeEntityValueHOC from './AsyncTreeEntityValueHOC';
import AutoCompleteTest from './AutoComplete/AutoCompleteSelectInput';
import CascaderTest from './Cascader/FlatAsyncCascader.tsx';
import CheckboxTest from './Checkbox/AutoCompleteCheckAllCheckboxSelect.tsx';
import DatePickerValueHOCInFormTest from './DatePickerValueHOCInFormTest';
import DatePickerValueHOCTest from './DatePickerValueHOCTest';
import ListTest from './List/RadioListPagingSelect';
import PagingEntityValueHOC from './PagingEntityValueHOC';
import RadioTest from './Radio/AutoCompleteCustomRadioSelect.tsx';
import RangePickerValueHOCInFormTest from './RangePickerValueHOCInFormTest';
import RangePickerValueHOCTest from './RangePickerValueHOCTest';
import SelectTest from './Select/AutoCompleteCheckAllMultipleSelect';
import TableTest from './Table/CheckboxTablePagingSelect';
import TagTest from './Tag/AutoCompleteCheckAllTagSelect';
import TimePickerValueHOCInFormTest from './TimePickerValueHOCInFormTest';
import TimePickerValueHOCTest from './TimePickerValueHOCTest';
import TransferTest from './Transfer/AutoCompleteTransferSelect.tsx';
import TreeEntityValueHOC from './TreeEntityValueHOC';
import TreeSelectTest from './TreeSelect/AsyncTreeSelect';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';

import '../src/index.less';

e2e.PC({
  children: <PagingEntityValueHOC />,
});
