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

export const AntHOCInputMultipleTrigger = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/InputMultiple/InputMultipleTrigger.jsx'
  ),
);

export const AntHOCInputMultipleTriggerForm = lazy(() =>
  import(
    /* webpackChunkName: "anthoc" */ '@/components/ui/anthoc/examples/InputMultiple/InputMultipleTriggerForm.jsx'
  ),
);

export const Spin = lazy(() =>
  import(/* webpackChunkName: "spin" */ '@/components/ui/spin/examples/p1.jsx'),
);

export const FGTDMobileCascaderViewAsyncStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewAsyncStandard.jsx'
  ),
);

export const FGTDMobileCascaderViewDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewDynamicFilter.jsx'
  ),
);

export const FGTDMobileCascaderViewDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewDynamicStandard.jsx'
  ),
);

export const FGTDMobileCascaderViewFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewFilter.jsx'
  ),
);

export const FGTDMobileCascaderViewStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewStandard.jsx'
  ),
);

export const FGTDMobileCheckboxACPaging = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxACPaging.jsx'
  ),
);

export const FGTDMobileCheckboxACStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxACStandard.jsx'
  ),
);

export const FGTDMobileCheckboxCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxDynamicCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicFilter.jsx'
  ),
);

export const FGTDMobileCheckboxDynamicFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicFilterCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicStandard.jsx'
  ),
);

export const FGTDMobileCheckboxFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxFilter.jsx'
  ),
);

export const FGTDMobileCheckboxFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxFilterCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxPaginationDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationDynamicFilter.jsx'
  ),
);

export const FGTDMobileCheckboxPaginationFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationFilter.jsx'
  ),
);

export const FGTDMobileCheckboxPaginationStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationStandard.jsx'
  ),
);

export const FGTDMobileCheckboxStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxStandard.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListDynamicCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicFilter.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListDynamicFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicFilterCheckAll.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicStandard.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListPaginationDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListPaginationDynamicFilter.jsx'
  ),
);

export const FGTDMobileCheckboxCheckListPaginationStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListPaginationStandard.jsx'
  ),
);

export const FGTDMobileCheckListACPaging = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListACPaging.jsx'
  ),
);

export const FGTDMobileCheckListACStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListACStandard.jsx'
  ),
);

export const FGTDMobileCheckListDynamicCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicCheckAll.jsx'
  ),
);

export const FGTDMobileCheckListDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicFilter.jsx'
  ),
);

export const FGTDMobileCheckListDynamicFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicFilterCheckAll.jsx'
  ),
);

export const FGTDMobileCheckListDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicStandard.jsx'
  ),
);

export const FGTDMobileCheckListPaginationFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListPaginationFilter.jsx'
  ),
);

export const FGTDMobileCheckListPaginationStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileCheckList/MobileCheckListPaginationStandard.jsx'
  ),
);

export const FGTDMobileListDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileList/MobileListDynamicStandard.jsx'
  ),
);

export const FGTDMobileListStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileList/MobileListStandard.jsx'
  ),
);

export const FGTDMobileRadioACPaging = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioACPaging.jsx'
  ),
);

export const FGTDMobileRadioACStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioACStandard.jsx'
  ),
);

export const FGTDMobileRadioDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioDynamicFilter.jsx'
  ),
);

export const FGTDMobileRadioDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioDynamicStandard.jsx'
  ),
);

export const FGTDMobileRadioFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioFilter.jsx'
  ),
);

export const FGTDMobileRadioPaginationDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationDynamicFilter.jsx'
  ),
);

export const FGTDMobileRadioPaginationFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationFilter.jsx'
  ),
);

export const FGTDMobileRadioPaginationStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationStandard.jsx'
  ),
);

export const FGTDMobileRadioStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileRadio/MobileRadioStandard.jsx'
  ),
);

export const FGTDMobileSelectorACPaging = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorACPaging.jsx'
  ),
);

export const FGTDMobileSelectorACStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorACStandard.jsx'
  ),
);

export const FGTDMobileSelectorCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorCheckAll.jsx'
  ),
);

export const FGTDMobileSelectorDynamicCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicCheckAll.jsx'
  ),
);

export const FGTDMobileSelectorDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicFilter.jsx'
  ),
);

export const FGTDMobileSelectorDynamicFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicFilterCheckAll.jsx'
  ),
);

export const FGTDMobileSelectorDynamicStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicStandard.jsx'
  ),
);

export const FGTDMobileSelectorFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorFilter.jsx'
  ),
);

export const FGTDMobileSelectorFilterCheckAll = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorFilterCheckAll.jsx'
  ),
);

export const FGTDMobileSelectorPaginationDynamicFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationDynamicFilter.jsx'
  ),
);

export const FGTDMobileSelectorPaginationFilter = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationFilter.jsx'
  ),
);

export const FGTDMobileSelectorPaginationStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationStandard.jsx'
  ),
);

export const FGTDMobileSelectorStandard = lazy(() =>
  import(
    /* webpackChunkName: "fgtd" */ '@/components/ui/fieldgeneratortodict/examples/MobileSelector/MobileSelectorStandard.jsx'
  ),
);

export const PRSLMobileNormal = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/Normal.jsx'),
);

export const PRSLMobileRemote = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/Remote.jsx'),
);

export const PRSLMobileLocal = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/Local.jsx'),
);

export const PRSLMobileNoPaging = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/NoPaging.jsx'),
);

export const PRSLMobileSearchHistory = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/SearchHistory.jsx'),
);

export const PRSLMobileExtra = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/Extra.jsx'),
);

export const PRSLMobileCustomToolbarItem = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/CustomToolbarItem.jsx'),
);

export const PRSLMobileCustomSearchItem = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/CustomSearchItem.jsx'),
);

export const PRSLMobileAPI = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/API.jsx'),
);

export const PRSLMobileList = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/List.jsx'),
);

export const PRSLMobileSelection = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/Selection.jsx'),
);

export const PRSLMobileDND = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/DND.jsx'),
);

export const PRSLMobileActionSheet = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/ActionSheet.jsx'),
);

export const PRSLMobileSwipeAction = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/SwiperAction.jsx'),
);

export const PRSLMobileGridView = lazy(() =>
  import(/* webpackChunkName: "prsl" */ '@/components/ui/prsl/GridView.jsx'),
);

export const QuickRangeDate = lazy(() =>
  import(/* webpackChunkName: "quickrangedate" */ '@/components/ui/quickrangedate'),
);

export const PopoverMenuBase = lazy(() =>
  import(/* webpackChunkName: "popovermenu" */ '@/components/ui/popovermenu/Base'),
);

export const PopoverMenuTabs = lazy(() =>
  import(/* webpackChunkName: "popovermenu" */ '@/components/ui/popovermenu/Tabs'),
);

export const PopoverMenuSliderTabs = lazy(() =>
  import(/* webpackChunkName: "popovermenu" */ '@/components/ui/popovermenu/SliderTabs'),
);
