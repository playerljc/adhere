import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CalendarDialog from './CalendarDialog/CalendarDialog';
import CalendarModal from './CalendarModal/CalendarModal';
import CalendarFormatValueHOC from './CalendarModal/FormatValueHOC';
import CalendarTimestampValueHOC from './CalendarModal/TimestampValueHoc';
import CalendarPopup from './CalendarPopup/CalendarPopup';
import AsyncCascaderView from './CascaderView/AsyncCascaderView';
import AsyncCascaderViewValueHOC from './CascaderView/AsyncCascaderViewValueHOC';
import CascaderView from './CascaderView/CascaderView';
import FilterCascaderView from './CascaderView/FilterCascaderView';
import FilterCascaderViewValueHOC from './CascaderView/FilterCascaderViewValueHOC';
import AutoCompleteCheckList from './CheckList/AutoCompleteCheckList';
import AutoCompleteCheckListValueHOC from './CheckList/AutoCompleteCheckListValueHOC';
import AutoCompleteCheckboxCheckList from './CheckList/AutoCompleteCheckboxCheckList';
import AutoCompletePagingCheckList from './CheckList/AutoCompletePagingCheckList';
import AutoCompletePagingCheckListValueHOC from './CheckList/AutoCompletePagingCheckListValueHOC';
import AutoCompletePagingCheckboxCheckList from './CheckList/AutoCompletePagingCheckboxCheckList';
import CheckAllCheckList from './CheckList/CheckAllCheckList';
import CheckAllCheckListValueHOC from './CheckList/CheckAllCheckListValueHOC';
import CheckList from './CheckList/CheckList';
import CheckboxCheckAllCheckList from './CheckList/CheckboxCheckAllCheckList';
import CheckboxCheckList from './CheckList/CheckboxCheckList';
import FilterCheckAllCheckList from './CheckList/FilterCheckAllCheckList';
import FilterCheckList from './CheckList/FilterCheckList';
import FilterCheckboxCheckAllCheckList from './CheckList/FilterCheckboxCheckAllCheckList';
import FilterCheckboxCheckList from './CheckList/FilterCheckboxCheckList';
import FilterPagingCheckList from './CheckList/FilterPagingCheckList';
import FilterPagingCheckboxCheckList from './CheckList/FilterPagingCheckboxCheckList';
import PagingCheckList from './CheckList/PagingCheckList';
import PagingCheckListValueHOC from './CheckList/PagingCheckListValueHOC';
import PagingCheckboxCheckList from './CheckList/PagingCheckboxCheckList';
import AutoCompleteCheckbox from './Checkbox/AutoCompleteCheckbox';
import AutoCompletePagingCheckbox from './Checkbox/AutoCompletePagingCheckbox';
import CheckAllCheckbox from './Checkbox/CheckAllCheckbox';
import CheckboxGroup from './Checkbox/CheckboxGrooup';
import FilterCheckAllCheckbox from './Checkbox/FilterCheckAllCheckbox';
import FilterCheckbox from './Checkbox/FilterCheckbox';
import FilterPagingCheckbox from './Checkbox/FilterPagingCheckbox';
import PagingCheckbox from './Checkbox/PagingCheckbox';
import DateDialog from './DateDialog/DateDialog';
import DateDialogTimestampValueHoc from './DateDialog/TimestampValueHoc';
import DateModal from './DateModal/DateModal';
import DateModalFormatValueHOC from './DateModal/FormatValueHOC';
import DateModalTimestampValueHoc from './DateModal/TimestampValueHoc';
import DatePopup from './DatePopup/DatePopup';
import DatePopupTimestampValueHoc from './DatePopup/TimestampValueHoc';
import DialogTrigger from './Dialog/Trigger';
import DialogTriggerPrompt from './Dialog/TriggerPrompt';
import NestingFormItem from './Form/NestingFormItem';
import InputMultipleForm from './Input/Form';
import InputMultiple from './Input/InputMultiple';
import InputMultipleDialog from './Input/InputMultipleDialog';
import ModalTrigger from './Modal/Trigger';
import ModalTriggerPrompt from './Modal/TriggerPrompt';
import PopupTrigger from './Popup/Trigger';
import PopupTriggerPrompt from './Popup/TriggerPrompt';
import AutoCompletePagingRadio from './Radio/AutoCompletePagingRadio';
import AutoCompleteRadio from './Radio/AutoCompleteRadio';
import FilterPagingRadio from './Radio/FilterPagingRadio';
import FilterRadio from './Radio/FilterRadio';
import PagingRadio from './Radio/PagingRadio';
import RadioGroup from './Radio/RadioGroup';
import AutoCompletePagingSelector from './Selector/AutoCompletePagingSelector';
import AutoCompleteSelector from './Selector/AutoCompleteSelector';
import CheckAllSelector from './Selector/CheckAllSelector';
import FilterCheckAllSelector from './Selector/FilterCheckAllSelector';
import FilterPagingSelector from './Selector/FilterPagingSelector';
import FilterSelector from './Selector/FilterSelector';
import PagingSelector from './Selector/PagingSelector';
import Selector from './Selector/Selector';
import TimeDialog from './TimeDialog/TimeDialog';
import TimeModalFormatValueHOC from './TimeModal/FormatValueHOC';
import TimeModal from './TimeModal/TimeModal';
import TimeModalTimestampValueHOC from './TimeModal/TimestampValueHoc';
import TimePopup from './TimePopup/TimePopup';
import AsyncTreeLeafSelect from './TreeSelect/AsyncTreeLeafSelect';
import AsyncTreeSelect from './TreeSelect/AsyncTreeSelect';
import AutoCompleteTreeSelect from './TreeSelect/AutoCompleteTreeSelect';
import TreeLeafSelect from './TreeSelect/TreeLeafSelect';
import TreeSelect from './TreeSelect/TreeSelect';
import TreeShowAllSelect from './TreeSelect/TreeShowAllSelect';
import TreeShowChildSelect from './TreeSelect/TreeShowChildSelect';

import '@baifendian/adhere-e2e/es/index.less';

e2e.Mobile({
  children: <AutoCompleteTreeSelect />,
});
