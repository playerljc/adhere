import TabsHome from '@/components/ui/tabs/examples/p10/Home';
import TabsMessage from '@/components/ui/tabs/examples/p10/Message';
import TabsPersonalCenter from '@/components/ui/tabs/examples/p10/PersonalCenter';
import TabsTodo from '@/components/ui/tabs/examples/p10/Todo';
import Components from '@/config/router/routerComponentRegister';

const {
  SuccessPrompt,
  ErrorPrompt,
  WarnPrompt,
  GlobalIndicator,
  DelConfirm,
  ImportantConfirm,
  TabsP1,
  TabsP2,
  TimePickerView,
  AutoCompleteP1,
  AutoCompleteP2,
  AutoCompleteP3,
  Popup,
  AntHOCCalendarDialog,
  AntHOCCalendarModal,
  AntHOCCalendarModalFormatValueHOC,
  AntHOCCalendarModalTimestampValueHoc,
  AntHOCCalendarPopup,
  AntHOCAsyncCascaderView,
  AntHOCAsyncCascaderViewValueHOC,
  AntHOCCascaderView,
  AntHOCFilterCascaderView,
  AntHOCFilterCascaderViewValueHOC,
  AntHOCindex,
  AntHOCAutoCompleteCheckbox,
  AntHOCAutoCompletePagingCheckbox,
  AntHOCCheckAllCheckbox,
  AntHOCCheckboxGrooup,
  AntHOCFilterCheckAllCheckbox,
  AntHOCFilterCheckbox,
  AntHOCFilterPagingCheckbox,
  AntHOCPagingCheckbox,
  AntHOCAutoCompleteCheckboxCheckList,
  AntHOCAutoCompleteCheckList,
  AntHOCAutoCompleteCheckListValueHOC,
  AntHOCAutoCompletePagingCheckboxCheckList,
  AntHOCAutoCompletePagingCheckList,
  AntHOCAutoCompletePagingCheckListValueHOC,
  AntHOCCheckAllCheckList,
  AntHOCCheckAllCheckListValueHOC,
  AntHOCCheckboxCheckAllCheckList,
  AntHOCCheckboxCheckList,
  AntHOCCheckList,
  AntHOCFilterCheckAllCheckList,
  AntHOCFilterCheckboxCheckAllCheckList,
  AntHOCFilterCheckboxCheckList,
  AntHOCFilterCheckList,
  AntHOCFilterPagingCheckboxCheckList,
  AntHOCFilterPagingCheckList,
  AntHOCPagingCheckboxCheckList,
  AntHOCPagingCheckList,
  AntHOCPagingCheckListValueHOC,
  AntHOCDateDialog,
  AntHOCDateDialogFormatValueHOC,
  AntHOCDateDialogTimestampValueHoc,
  AntHOCDateModal,
  AntHOCDateModalFormatValueHOC,
  AntHOCDateModalTimestampValueHoc,
  AntHOCDatePopup,
  AntHOCDatePopupFormatValueHOC,
  AntHOCDatePopupTimestampValueHoc,
  AntHOCDialogTrigger,
  AntHOCDialogTriggerPrompt,
  AntHOCModalTrigger,
  AntHOCModalTriggerPrompt,
  AntHOCTrigger,
  AntHOCTriggerPrompt,
  AntHOCAutoCompletePagingRadio,
  AntHOCAutoCompleteRadio,
  AntHOCFilterPagingRadio,
  AntHOCFilterRadio,
  AntHOCPagingRadio,
  AntHOCRadioGroup,
  AntHOCAutoCompletePagingSelector,
  AntHOCAutoCompleteSelector,
  AntHOCCheckAllSelector,
  AntHOCFilterCheckAllSelector,
  AntHOCFilterPagingSelector,
  AntHOCFilterSelector,
  AntHOCPagingSelector,
  AntHOCSelector,
  AntHOCTimeDialog,
  AntHOCFormatValueHOC,
  AntHOCTimeModal,
  AntHOCTimestampValueHoc,
  AntHOCTimePopup,
} = Components;

export default () => [
  {
    path: '/',
    routes: [
      {
        path: '/',
        redirect: '/adhere/component/ui/successprompt',
      },
      {
        path: '/adhere/component/ui/successprompt',
        component: SuccessPrompt,
      },
      {
        path: '/adhere/component/ui/errorprompt',
        component: ErrorPrompt,
      },
      {
        path: '/adhere/component/ui/warnprompt',
        component: WarnPrompt,
      },
      {
        path: '/adhere/component/ui/globalindicator',
        component: GlobalIndicator,
      },
      {
        path: '/adhere/component/ui/delconfirm',
        component: DelConfirm,
      },
      {
        path: '/adhere/component/ui/importantconfirm',
        component: ImportantConfirm,
      },
      {
        path: '/adhere/component/ui/tabs/p1',
        component: TabsP1,
      },
      {
        path: '/adhere/component/ui/tabs/p2',
        component: TabsP2,
        routes: [
          {
            path: '/',
            redirect: '/adhere/component/ui/tabs/p2/home',
          },
          {
            path: '/adhere/component/ui/tabs/p2/home',
            component: TabsHome,
          },
          {
            path: '/adhere/component/ui/tabs/p2/todo',
            component: TabsTodo,
          },
          {
            path: '/adhere/component/ui/tabs/p2/message',
            component: TabsMessage,
          },
          {
            path: '/adhere/component/ui/tabs/p2/personalcenter',
            component: TabsPersonalCenter,
          },
        ],
      },
      {
        path: '/adhere/component/ui/timepickerview',
        component: TimePickerView,
      },
      {
        path: '/adhere/component/ui/autocomplete/p1',
        component: AutoCompleteP1,
      },
      {
        path: '/adhere/component/ui/autocomplete/p2',
        component: AutoCompleteP2,
      },
      {
        path: '/adhere/component/ui/autocomplete/p3',
        component: AutoCompleteP3,
      },
      {
        path: '/adhere/component/ui/popup',
        component: Popup,
      },

      {
        path: '/adhere/component/ui/anthoc/calendardialog/calendardialog',
        component: AntHOCCalendarDialog,
      },

      {
        path: '/adhere/component/ui/anthoc/calendarmodal/calendarmodal',
        component: AntHOCCalendarModal,
      },

      {
        path: '/adhere/component/ui/anthoc/calendarmodal/formatvaluehoc',
        component: AntHOCCalendarModalFormatValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/calendarmodal/timestampvaluehoc',
        component: AntHOCCalendarModalTimestampValueHoc,
      },

      {
        path: '/adhere/component/ui/anthoc/calendarpopup/calendarpopup',
        component: AntHOCCalendarPopup,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/asynccascaderview',
        component: AntHOCAsyncCascaderView,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/asynccascaderviewvaluehoc',
        component: AntHOCAsyncCascaderViewValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/cascaderview',
        component: AntHOCCascaderView,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/filtercascaderview',
        component: AntHOCFilterCascaderView,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/filtercascaderviewvaluehoc',
        component: AntHOCFilterCascaderViewValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/cascaderview/index',
        component: AntHOCindex,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/autocompletecheckbox',
        component: AntHOCAutoCompleteCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/autocompletepagingcheckbox',
        component: AntHOCAutoCompletePagingCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/checkallcheckbox',
        component: AntHOCCheckAllCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/checkboxgrooup',
        component: AntHOCCheckboxGrooup,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/filtercheckallcheckbox',
        component: AntHOCFilterCheckAllCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/filtercheckbox',
        component: AntHOCFilterCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/filterpagingcheckbox',
        component: AntHOCFilterPagingCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checkbox/pagingcheckbox',
        component: AntHOCPagingCheckbox,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletecheckboxchecklist',
        component: AntHOCAutoCompleteCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletechecklist',
        component: AntHOCAutoCompleteCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletechecklistvaluehoc',
        component: AntHOCAutoCompleteCheckListValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletepagingcheckboxchecklist',
        component: AntHOCAutoCompletePagingCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletepagingchecklist',
        component: AntHOCAutoCompletePagingCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/autocompletepagingchecklistvaluehoc',
        component: AntHOCAutoCompletePagingCheckListValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/checkallchecklist',
        component: AntHOCCheckAllCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/checkallchecklistvaluehoc',
        component: AntHOCCheckAllCheckListValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/checkboxcheckallchecklist',
        component: AntHOCCheckboxCheckAllCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/checkboxchecklist',
        component: AntHOCCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/checklist',
        component: AntHOCCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filtercheckallchecklist',
        component: AntHOCFilterCheckAllCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filtercheckboxcheckallchecklist',
        component: AntHOCFilterCheckboxCheckAllCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filtercheckboxchecklist',
        component: AntHOCFilterCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filterchecklist',
        component: AntHOCFilterCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filterpagingcheckboxchecklist',
        component: AntHOCFilterPagingCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/filterpagingchecklist',
        component: AntHOCFilterPagingCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/pagingcheckboxchecklist',
        component: AntHOCPagingCheckboxCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/pagingchecklist',
        component: AntHOCPagingCheckList,
      },

      {
        path: '/adhere/component/ui/anthoc/checklist/pagingchecklistvaluehoc',
        component: AntHOCPagingCheckListValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/datedialog/datedialog',
        component: AntHOCDateDialog,
      },

      {
        path: '/adhere/component/ui/anthoc/datedialog/formatvaluehoc',
        component: AntHOCDateDialogFormatValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/datedialog/timestampvaluehoc',
        component: AntHOCDateDialogTimestampValueHoc,
      },

      {
        path: '/adhere/component/ui/anthoc/datemodal/datemodal',
        component: AntHOCDateModal,
      },

      {
        path: '/adhere/component/ui/anthoc/datemodal/formatvaluehoc',
        component: AntHOCDateModalFormatValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/datemodal/timestampvaluehoc',
        component: AntHOCDateModalTimestampValueHoc,
      },

      {
        path: '/adhere/component/ui/anthoc/datepopup/datepopup',
        component: AntHOCDatePopup,
      },

      {
        path: '/adhere/component/ui/anthoc/datepopup/formatvaluehoc',
        component: AntHOCDatePopupFormatValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/datepopup/timestampvaluehoc',
        component: AntHOCDatePopupTimestampValueHoc,
      },

      {
        path: '/adhere/component/ui/anthoc/dialog/trigger',
        component: AntHOCDialogTrigger,
      },

      {
        path: '/adhere/component/ui/anthoc/dialog/triggerprompt',
        component: AntHOCDialogTriggerPrompt,
      },

      {
        path: '/adhere/component/ui/anthoc/modal/trigger',
        component: AntHOCModalTrigger,
      },

      {
        path: '/adhere/component/ui/anthoc/modal/triggerprompt',
        component: AntHOCModalTriggerPrompt,
      },

      {
        path: '/adhere/component/ui/anthoc/popup/trigger',
        component: AntHOCTrigger,
      },

      {
        path: '/adhere/component/ui/anthoc/popup/triggerprompt',
        component: AntHOCTriggerPrompt,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/autocompletepagingradio',
        component: AntHOCAutoCompletePagingRadio,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/autocompleteradio',
        component: AntHOCAutoCompleteRadio,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/filterpagingradio',
        component: AntHOCFilterPagingRadio,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/filterradio',
        component: AntHOCFilterRadio,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/pagingradio',
        component: AntHOCPagingRadio,
      },

      {
        path: '/adhere/component/ui/anthoc/radio/radiogroup',
        component: AntHOCRadioGroup,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/autocompletepagingselector',
        component: AntHOCAutoCompletePagingSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/autocompleteselector',
        component: AntHOCAutoCompleteSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/checkallselector',
        component: AntHOCCheckAllSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/filtercheckallselector',
        component: AntHOCFilterCheckAllSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/filterpagingselector',
        component: AntHOCFilterPagingSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/filterselector',
        component: AntHOCFilterSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/pagingselector',
        component: AntHOCPagingSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/selector/selector',
        component: AntHOCSelector,
      },

      {
        path: '/adhere/component/ui/anthoc/timedialog/timedialog',
        component: AntHOCTimeDialog,
      },

      {
        path: '/adhere/component/ui/anthoc/timemodal/formatvaluehoc',
        component: AntHOCFormatValueHOC,
      },

      {
        path: '/adhere/component/ui/anthoc/timemodal/timemodal',
        component: AntHOCTimeModal,
      },

      {
        path: '/adhere/component/ui/anthoc/timemodal/timestampvaluehoc',
        component: AntHOCTimestampValueHoc,
      },

      {
        path: '/adhere/component/ui/anthoc/timepopup/timepopup',
        component: AntHOCTimePopup,
      },
    ],
  },
];
