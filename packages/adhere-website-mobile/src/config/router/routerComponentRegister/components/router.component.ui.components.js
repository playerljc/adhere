import { lazy } from 'react';

export const SuccessPrompt = lazy(() =>
  import(/* webpackChunkName: "successprompt" */ '@/components/ui/successprompt'),
);

export const ErrorPrompt = lazy(() =>
  import(/* webpackChunkName: "errorprompt" */ '@/components/ui/errorprompt'),
);

export const WarnPrompt = lazy(() =>
  import(/* webpackChunkName: "warnprompt" */ '@/components/ui/warnprompt'),
);

export const GlobalIndicator = lazy(() =>
  import(/* webpackChunkName: "globalindicator" */ '@/components/ui/globalindicator'),
);

export const DelConfirm = lazy(() =>
  import(/* webpackChunkName: "delconfirm" */ '@/components/ui/delconfirm'),
);

export const ImportantConfirm = lazy(() =>
  import(/* webpackChunkName: "importantconfirm" */ '@/components/ui/importantconfirm'),
);

export const TabsP1 = lazy(() => import(/* webpackChunkName: "tabs" */ '@/components/ui/tabs/P1'));

export const TabsP2 = lazy(() => import(/* webpackChunkName: "tabs" */ '@/components/ui/tabs/P2'));

export const TimePickerView = lazy(() =>
  import(/* webpackChunkName: "timepickerview" */ '@/components/ui/timepickerview'),
);

export const AutoCompleteP1 = lazy(() =>
  import(/* webpackChunkName: "autocomplete" */ '@/components/ui/autocomplete/P1'),
);
export const AutoCompleteP2 = lazy(() =>
  import(/* webpackChunkName: "autocomplete" */ '@/components/ui/autocomplete/P2'),
);
export const AutoCompleteP3 = lazy(() =>
  import(/* webpackChunkName: "autocomplete" */ '@/components/ui/autocomplete/P3'),
);

export const Popup = lazy(() => import(/* webpackChunkName: "popup" */ '@/components/ui/popup'));

export const AntHOCCalendarDialog = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CalendarDialog/CalendarDialog.jsx'
  ),
);

export const AntHOCCalendarModal = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CalendarModal/CalendarModal.jsx'
  ),
);
export const AntHOCCalendarModalFormatValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CalendarModal/FormatValueHOC.jsx'
  ),
);
export const AntHOCCalendarModalTimestampValueHoc = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CalendarModal/TimestampValueHoc.jsx'
  ),
);
export const AntHOCCalendarPopup = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CalendarPopup/CalendarPopup.jsx'
  ),
);

export const AntHOCAsyncCascaderView = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/AsyncCascaderView.jsx'
  ),
);

export const AntHOCAsyncCascaderViewValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/AsyncCascaderViewValueHOC.jsx'
  ),
);

export const AntHOCCascaderView = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/CascaderView.jsx'
  ),
);

export const AntHOCFilterCascaderView = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/FilterCascaderView.jsx'
  ),
);

export const AntHOCFilterCascaderViewValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/FilterCascaderViewValueHOC.jsx'
  ),
);

export const AntHOCindex = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CascaderView/index.less'
  ),
);

export const AntHOCAutoCompleteCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/AutoCompleteCheckbox.jsx'
  ),
);

export const AntHOCAutoCompletePagingCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/AutoCompletePagingCheckbox.jsx'
  ),
);

export const AntHOCCheckAllCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/CheckAllCheckbox.jsx'
  ),
);

export const AntHOCCheckboxGrooup = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/CheckboxGrooup.jsx'
  ),
);

export const AntHOCFilterCheckAllCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/FilterCheckAllCheckbox.jsx'
  ),
);

export const AntHOCFilterCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/FilterCheckbox.jsx'
  ),
);

export const AntHOCFilterPagingCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/FilterPagingCheckbox.jsx'
  ),
);

export const AntHOCPagingCheckbox = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Checkbox/PagingCheckbox.jsx'
  ),
);

export const AntHOCAutoCompleteCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompleteCheckboxCheckList.jsx'
  ),
);

export const AntHOCAutoCompleteCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompleteCheckList.jsx'
  ),
);

export const AntHOCAutoCompleteCheckListValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompleteCheckListValueHOC.jsx'
  ),
);

export const AntHOCAutoCompletePagingCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompletePagingCheckboxCheckList.jsx'
  ),
);

export const AntHOCAutoCompletePagingCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompletePagingCheckList.jsx'
  ),
);

export const AntHOCAutoCompletePagingCheckListValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/AutoCompletePagingCheckListValueHOC.jsx'
  ),
);

export const AntHOCCheckAllCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/CheckAllCheckList.jsx'
  ),
);

export const AntHOCCheckAllCheckListValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/CheckAllCheckListValueHOC.jsx'
  ),
);

export const AntHOCCheckboxCheckAllCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/CheckboxCheckAllCheckList.jsx'
  ),
);

export const AntHOCCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/CheckboxCheckList.jsx'
  ),
);

export const AntHOCCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/CheckList.jsx'
  ),
);

export const AntHOCFilterCheckAllCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterCheckAllCheckList.jsx'
  ),
);

export const AntHOCFilterCheckboxCheckAllCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterCheckboxCheckAllCheckList.jsx'
  ),
);

export const AntHOCFilterCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterCheckboxCheckList.jsx'
  ),
);

export const AntHOCFilterCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterCheckList.jsx'
  ),
);

export const AntHOCFilterPagingCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterPagingCheckboxCheckList.jsx'
  ),
);

export const AntHOCFilterPagingCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/FilterPagingCheckList.jsx'
  ),
);

export const AntHOCPagingCheckboxCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/PagingCheckboxCheckList.jsx'
  ),
);

export const AntHOCPagingCheckList = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/PagingCheckList.jsx'
  ),
);

export const AntHOCPagingCheckListValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/CheckList/PagingCheckListValueHOC.jsx'
  ),
);

export const AntHOCDateDialog = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateDialog/DateDialog.jsx'
  ),
);

export const AntHOCDateDialogFormatValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateDialog/FormatValueHOC.jsx'
  ),
);

export const AntHOCDateDialogTimestampValueHoc = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateDialog/TimestampValueHoc.jsx'
  ),
);

export const AntHOCDateModal = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateModal/DateModal.jsx'
  ),
);

export const AntHOCDateModalFormatValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateModal/FormatValueHOC.jsx'
  ),
);

export const AntHOCDateModalTimestampValueHoc = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DateModal/TimestampValueHoc.jsx'
  ),
);

export const AntHOCDatePopup = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DatePopup/DatePopup.jsx'
  ),
);

export const AntHOCDatePopupFormatValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DatePopup/FormatValueHOC.jsx'
  ),
);

export const AntHOCDatePopupTimestampValueHoc = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/DatePopup/TimestampValueHoc.jsx'
  ),
);

export const AntHOCDialogTrigger = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Dialog/Trigger.jsx'),
);

export const AntHOCDialogTriggerPrompt = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Dialog/TriggerPrompt.jsx'
  ),
);

export const AntHOCModalTrigger = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Modal/Trigger.jsx'),
);

export const AntHOCModalTriggerPrompt = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Modal/TriggerPrompt.jsx'
  ),
);

export const AntHOCTrigger = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Popup/Trigger.jsx'),
);

export const AntHOCTriggerPrompt = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Popup/TriggerPrompt.jsx'
  ),
);

export const AntHOCAutoCompletePagingRadio = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/AutoCompletePagingRadio.jsx'
  ),
);

export const AntHOCAutoCompleteRadio = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/AutoCompleteRadio.jsx'
  ),
);

export const AntHOCFilterPagingRadio = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/FilterPagingRadio.jsx'
  ),
);

export const AntHOCFilterRadio = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/FilterRadio.jsx'),
);

export const AntHOCPagingRadio = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/PagingRadio.jsx'),
);

export const AntHOCRadioGroup = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Radio/RadioGroup.jsx'),
);

export const AntHOCAutoCompletePagingSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/AutoCompletePagingSelector.jsx'
  ),
);

export const AntHOCAutoCompleteSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/AutoCompleteSelector.jsx'
  ),
);

export const AntHOCCheckAllSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/CheckAllSelector.jsx'
  ),
);

export const AntHOCFilterCheckAllSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/FilterCheckAllSelector.jsx'
  ),
);

export const AntHOCFilterPagingSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/FilterPagingSelector.jsx'
  ),
);

export const AntHOCFilterSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/FilterSelector.jsx'
  ),
);

export const AntHOCPagingSelector = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/PagingSelector.jsx'
  ),
);

export const AntHOCSelector = lazy(() =>
  import(/* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/Selector/Selector.jsx'),
);

export const AntHOCTimeDialog = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/TimeDialog/TimeDialog.jsx'
  ),
);

export const AntHOCFormatValueHOC = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/TimeModal/FormatValueHOC.jsx'
  ),
);

export const AntHOCTimeModal = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/TimeModal/TimeModal.jsx'
  ),
);

export const AntHOCTimestampValueHoc = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/TimeModal/TimestampValueHoc.jsx'
  ),
);

export const AntHOCTimePopup = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/TimePopup/TimePopup.jsx'
  ),
);
