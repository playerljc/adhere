import React from 'react';



import e2e from '@baifendian/adhere-e2e';



import ArrayEntityValueHOC from './ArrayEntityValueHOC';
import AsyncTreeEntityValueHOC from './AsyncTreeEntityValueHOC';
import AutoCompleteTest from './AutoComplete/AutoCompleteSelectInput';
import Cascader from './Cascader/Cascader';
import CascaderMulti from './Cascader/CascaderMulti';
import CascaderTest from './Cascader/FlatAsyncCascader.tsx';
import AutoCompleteCheckboxSelect from './Checkbox/AutoCompleteCheckboxSelect';
import AutoCompleteCheckAllCheckboxSelect from './Checkbox/AutoCompleteCheckAllCheckboxSelect';
import AutoCompleteCheckAllCustomCheckboxSelect from './Checkbox/AutoCompleteCheckAllCustomCheckboxSelect';
import AutoCompleteCustomCheckboxSelect from './Checkbox/AutoCompleteCustomCheckboxSelect';
import CheckAllCheckboxSelect from './Checkbox/CheckAllCheckboxSelect';
import CheckAllCheckboxSelectRender from './Checkbox/CheckAllCheckboxSelectRender';
import CheckAllCustomCheckboxSelect from './Checkbox/CheckAllCustomCheckboxSelect';
import CheckboxBase from './Checkbox/Checkbox';
import CheckboxGroupExt from './Checkbox/CheckboxGroupExt';
import CheckboxSelect from './Checkbox/CheckboxSelect';
import CustomCheckAllCheckbox from './Checkbox/CustomCheckAllCheckbox';
import CustomCheckbox from './Checkbox/CustomCheckbox';
import CustomCheckboxSelect from './Checkbox/CustomCheckboxSelect';
import HorizontalCheckAllCheckbox from './Checkbox/HorizontalCheckAllCheckbox';
import HorizontalCheckbox from './Checkbox/HorizontalCheckbox';
import VerticalCheckAllCheckbox from './Checkbox/VerticalCheckAllCheckbox';
import VerticalCheckbox from './Checkbox/VerticalCheckbox';
import DatePickerValueHOCInFormTest from './DatePickerValueHOCInFormTest';
import DatePickerValueHOCTest from './DatePickerValueHOCTest';
import FormErrorContainer from './Form/FormErrorContainer';
import NestingFormItem from './Form/NestingFormItem';
import ScrollFirstError from './Form/ScrollFirstError';
import InputMultipleForm from './Input/Form';
import InputMultiple from './Input/InputMultiple';
import InputMultipleSelect from './Input/InputMultipleSelect';
import InputNegativeNumberDecimal1 from './InputNumber/InputNegativeNumberDecimal1';
import InputNegativeNumberDecimal2 from './InputNumber/InputNegativeNumberDecimal2';
import InputNegativeNumberInteger from './InputNumber/InputNegativeNumberInteger';
import InputPositiveNumberDecimal1 from './InputNumber/InputPositiveNumberDecimal1';
import InputPositiveNumberDecimal2 from './InputNumber/InputPositiveNumberDecimal2';
import InputPositiveNumberInteger from './InputNumber/InputPositiveNumberInteger';
import AutoCompleteCheckAllListSelect from './List/AutoCompleteCheckAllListSelect';
import AutoCompleteListPagingSelect from './List/AutoCompleteListPagingSelect.tsx';
import AutoCompleteListSelect from './List/AutoCompleteListSelect.tsx';
import CheckAllListSelect from './List/CheckAllListSelect.tsx';
import ListTest from './List/CheckboxListPaging';
import CheckboxListPaging from './List/CheckboxListPaging.tsx';
import CheckboxListPagingSelect from './List/CheckboxListPagingSelect';
import CheckboxListSelect from './List/CheckboxListSelect';
import PagingEntityValueHOC from './PagingEntityValueHOC';
import RadioTest from './Radio/AutoCompleteButtonRadioSelect.tsx';
import RangePickerValueHOCInFormTest from './RangePickerValueHOCInFormTest';
import RangePickerValueHOCTest from './RangePickerValueHOCTest';
import RevolvingTableGallery from './RevolvingTable/gallery';
import RevolvingTableNormal from './RevolvingTable/normal';
import SelectTest from './Select/AutoCompleteCheckAllMultipleSelect';
import AutoCompleteMultipleSelect from './Select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from './Select/AutoCompleteSelect';
import CheckAllMultipleSelect from './Select/CheckAllMultipleSelect';
import CheckAllMultipleSelectCustom from './Select/CheckAllMultipleSelectCustom';
import CheckAllMultipleSelectRender from './Select/CheckAllMultipleSelectRender';
import DropdownRenderSelect from './Select/DropdownRenderSelect';
import DropdownRenderSelectEmpty from './Select/DropdownRenderSelectEmpty';
import DropdownRenderSelectSingle from './Select/DropdownRenderSelectSingle';
import MultipleSelect from './Select/MultipleSelect';
import Select from './Select/Select';
import SelectHideInvalidValue from './Select/SelectHideInvalidValue';
import StepsSwiper from './Steps/StepsSwiper';
import AutoCompleteTablePagingSelect from './Table/AutoCompleteTablePagingSelect.tsx';
import AutoCompleteTableSelect from './Table/AutoCompleteTableSelect.tsx';
import AutoCompleteTableSelectValueHOC from './Table/AutoCompleteTableSelectValueHOC.tsx';
import AutoCompleteTreeTablePagingSelect from './Table/AutoCompleteTreeTablePagingSelect';
import TableTest from './Table/AutoCompleteTreeTablePagingSelectValueHOC.jsx';
import AutoCompleteTreeTableSelect from './Table/AutoCompleteTreeTableSelect.jsx';
import CheckboxTablePaging from './Table/CheckboxTablePaging';
import CheckboxTablePagingSelect from './Table/CheckboxTablePagingSelect.tsx';
import CheckboxTableSelect from './Table/CheckboxTableSelect.tsx';
import TableExt from './Table/TableExt';
import TreeTablePagingSelect from './Table/TreeTablePagingSelect.jsx';
import TreeTableSelect from './Table/TreeTableSelect';
import SegmentedTabs from './Tabs/SegmentedTabs';
import TagTest from './Tag/HorizontalCheckableTagGroup';
import TagTypesGallery from './Tag/TagTypesGallery';
import TimePickerValueHOCInFormTest from './TimePickerValueHOCInFormTest';
import TimePickerValueHOCTest from './TimePickerValueHOCTest';
import TransferTest from './Transfer/AutoCompleteTransferSelect.tsx';
import TableTransfer from './Transfer/TableTransfer';
import TableTransferSelect from './Transfer/TableTransferSelect';
import Transfer from './Transfer/Transfer';
import TransferSelect from './Transfer/TransferSelect';
import TreeTransfer from './Transfer/TreeTransfer';
import TreeTransferSelect from './Transfer/TreeTransferSelect';
import TreeEntityValueHOC from './TreeEntityValueHOC';
import AutoCompleteTreeMultiSelectValueHOC from './TreeSelect/AutoCompleteTreeMultiSelectValueHOC';
import FlatTreeSelect from './TreeSelect/FlatTreeSelect';
import Anchor from './anchor';
import FormRulesTest from './formRulesTest';
import AntHOC from './test';



import '../src/index.less';


// const isTagGallery =
//   typeof window !== 'undefined' &&
//   new URLSearchParams(window.location.search).get('tagGallery') === '1';

e2e.PC({
  // children: <TransferSelect />,
  // children: isTagGallery ? <TableTransfer /> : <ScrollFirstError />,
  children: <RevolvingTableGallery />,
  // children: <RevolvingTableNormal />,
});
