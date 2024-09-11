import React, { useEffect, useRef, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

const FUN_NAMES = [
  'CalendarModal',
  'CalendarPopup',
  'CalendarDialog',
  'CascaderView',
  'Checkbox',
  'CheckList',
  'DateDialog',
  'DateModal',
  'DatePopup',
  'Dialog',
  'Modal',
  'Popup',
  'Radio',
  'Selector',
  'TimeDialog',
  'TimeModal',
  'TimePopup',
  'InputMultipleTrigger',
  'InputMultipleTriggerForm',
  '_PropsSection',
];

export default () => {
  const [CalendarDialogCodeText, setCalendarDialogCodeText] = useState('');

  const [CalendarModalCodeText, setCalendarModalCodeText] = useState('');

  const [CalendarFormatValueHOCCodeText, setCalendarFormatValueHOCCodeText] = useState('');

  const [CalendarTimestampValueHocCodeText, setCalendarTimestampValueHocCodeText] = useState('');

  const [CalendarPopupCodeText, setCalendarPopupCodeText] = useState('');

  const [AsyncCascaderViewCodeText, setAsyncCascaderViewCodeText] = useState('');

  const [AsyncCascaderViewValueHOCCodeText, setAsyncCascaderViewValueHOCCodeText] = useState('');

  const [CascaderViewCodeText, setCascaderViewCodeText] = useState('');

  const [FilterCascaderViewCodeText, setFilterCascaderViewCodeText] = useState('');

  const [FilterCascaderViewValueHOCCodeText, setFilterCascaderViewValueHOCCodeText] = useState('');

  const [AutoCompleteCheckboxCodeText, setAutoCompleteCheckboxCodeText] = useState('');

  const [AutoCompletePagingCheckboxCodeText, setAutoCompletePagingCheckboxCodeText] = useState('');

  const [CheckAllCheckboxCodeText, setCheckAllCheckboxCodeText] = useState('');

  const [CheckboxGrooupCodeText, setCheckboxGrooupCodeText] = useState('');

  const [FilterCheckAllCheckboxCodeText, setFilterCheckAllCheckboxCodeText] = useState('');

  const [FilterCheckboxCodeText, setFilterCheckboxCodeText] = useState('');

  const [FilterPagingCheckboxCodeText, setFilterPagingCheckboxCodeText] = useState('');

  const [PagingCheckboxCodeText, setPagingCheckboxCodeText] = useState('');

  const [AutoCompleteCheckboxCheckListCodeText, setAutoCompleteCheckboxCheckListCodeText] =
    useState('');

  const [AutoCompleteCheckListCodeText, setAutoCompleteCheckListCodeText] = useState('');

  const [AutoCompleteCheckListValueHOCCodeText, setAutoCompleteCheckListValueHOCCodeText] =
    useState('');

  const [
    AutoCompletePagingCheckboxCheckListCodeText,
    setAutoCompletePagingCheckboxCheckListCodeText,
  ] = useState('');

  const [AutoCompletePagingCheckListCodeText, setAutoCompletePagingCheckListCodeText] =
    useState('');

  const [
    AutoCompletePagingCheckListValueHOCCodeText,
    setAutoCompletePagingCheckListValueHOCCodeText,
  ] = useState('');

  const [CheckAllCheckListCodeText, setCheckAllCheckListCodeText] = useState('');

  const [CheckAllCheckListValueHOCCodeText, setCheckAllCheckListValueHOCCodeText] = useState('');

  const [CheckboxCheckAllCheckListCodeText, setCheckboxCheckAllCheckListCodeText] = useState('');

  const [CheckboxCheckListCodeText, setCheckboxCheckListCodeText] = useState('');

  const [CheckListCodeText, setCheckListCodeText] = useState('');

  const [FilterCheckAllCheckListCodeText, setFilterCheckAllCheckListCodeText] = useState('');

  const [FilterCheckboxCheckAllCheckListCodeText, setFilterCheckboxCheckAllCheckListCodeText] =
    useState('');

  const [FilterCheckboxCheckListCodeText, setFilterCheckboxCheckListCodeText] = useState('');

  const [FilterCheckListCodeText, setFilterCheckListCodeText] = useState('');

  const [FilterPagingCheckboxCheckListCodeText, setFilterPagingCheckboxCheckListCodeText] =
    useState('');

  const [FilterPagingCheckListCodeText, setFilterPagingCheckListCodeText] = useState('');

  const [PagingCheckboxCheckListCodeText, setPagingCheckboxCheckListCodeText] = useState('');

  const [PagingCheckListCodeText, setPagingCheckListCodeText] = useState('');

  const [PagingCheckListValueHOCCodeText, setPagingCheckListValueHOCCodeText] = useState('');

  const [DateDialogCodeText, setDateDialogCodeText] = useState('');

  const [DateDialogFormatValueHOCCodeText, setDateDialogFormatValueHOCCodeText] = useState('');

  const [DateDialogTimestampValueHocCodeText, setDateDialogTimestampValueHocCodeText] =
    useState('');

  const [DateModalCodeText, setDateModalCodeText] = useState('');

  const [DateModalFormatValueHOCCodeText, setDateModalFormatValueHOCCodeText] = useState('');

  const [DateModalTimestampValueHocCodeText, setDateModalTimestampValueHocCodeText] = useState('');

  const [DatePopupCodeText, setDatePopupCodeText] = useState('');

  const [DatePopupFormatValueHOCCodeText, setDatePopupFormatValueHOCCodeText] = useState('');

  const [DatePopupTimestampValueHocCodeText, setDatePopupTimestampValueHocCodeText] = useState('');

  const [DialogTriggerCodeText, setDialogTriggerCodeText] = useState('');

  const [DialogTriggerPromptCodeText, setDialogTriggerPromptCodeText] = useState('');

  const [ModalTriggerCodeText, setModalTriggerCodeText] = useState('');

  const [ModalTriggerPromptCodeText, setModalTriggerPromptCodeText] = useState('');

  const [PopupTriggerCodeText, setPopupTriggerCodeText] = useState('');

  const [PopupTriggerPromptCodeText, setPopupTriggerPromptCodeText] = useState('');

  const [AutoCompletePagingRadioCodeText, setAutoCompletePagingRadioCodeText] = useState('');

  const [AutoCompleteRadioCodeText, setAutoCompleteRadioCodeText] = useState('');

  const [FilterPagingRadioCodeText, setFilterPagingRadioCodeText] = useState('');

  const [FilterRadioCodeText, setFilterRadioCodeText] = useState('');

  const [PagingRadioCodeText, setPagingRadioCodeText] = useState('');

  const [RadioGroupCodeText, setRadioGroupCodeText] = useState('');

  const [AutoCompletePagingSelectorCodeText, setAutoCompletePagingSelectorCodeText] = useState('');

  const [AutoCompleteSelectorCodeText, setAutoCompleteSelectorCodeText] = useState('');

  const [CheckAllSelectorCodeText, setCheckAllSelectorCodeText] = useState('');

  const [FilterCheckAllSelectorCodeText, setFilterCheckAllSelectorCodeText] = useState('');

  const [FilterPagingSelectorCodeText, setFilterPagingSelectorCodeText] = useState('');

  const [FilterSelectorCodeText, setFilterSelectorCodeText] = useState('');

  const [PagingSelectorCodeText, setPagingSelectorCodeText] = useState('');

  const [SelectorCodeText, setSelectorCodeText] = useState('');

  const [TimeDialogCodeText, setTimeDialogCodeText] = useState('');

  const [FormatValueHOCCodeText, setFormatValueHOCCodeText] = useState('');

  const [TimeModalCodeText, setTimeModalCodeText] = useState('');

  const [TimestampValueHocCodeText, setTimestampValueHocCodeText] = useState('');

  const [TimePopupCodeText, setTimePopupCodeText] = useState('');

  const [InputMultipleTriggerCodeText, setInputMultipleTriggerCodeText] = useState('');

  const [InputMultipleTriggerFormCodeText, setInputMultipleTriggerFormCodeText] = useState('');

  const CalendarModal = () => (
    <CodeBoxSection
      title="CalendarModal"
      columnCount={1}
      config={CalendarModalCodeBoxPanelConfig}
    />
  );

  const CalendarPopup = () => (
    <CodeBoxSection
      title="CalendarPopup"
      columnCount={1}
      config={CalendarPopupCodeBoxPanelConfig}
    />
  );

  const CascaderView = () => (
    <CodeBoxSection title="CascaderView" columnCount={1} config={CascaderViewCodeBoxPanelConfig} />
  );

  const Checkbox = () => (
    <CodeBoxSection title="Checkbox" columnCount={1} config={CheckboxCodeBoxPanelConfig} />
  );

  const CheckList = () => (
    <CodeBoxSection title="CheckList" columnCount={1} config={CheckListCodeBoxPanelConfig} />
  );

  const DateDialog = () => (
    <CodeBoxSection title="DateDialog" columnCount={1} config={DateDialogCodeBoxPanelConfig} />
  );

  const DateModal = () => (
    <CodeBoxSection title="DateModal" columnCount={1} config={DateModalCodeBoxPanelConfig} />
  );

  const DatePopup = () => (
    <CodeBoxSection title="DatePopup" columnCount={1} config={DatePopupCodeBoxPanelConfig} />
  );

  const Dialog = () => (
    <CodeBoxSection title="Dialog" columnCount={1} config={DialogCodeBoxPanelConfig} />
  );

  const Modal = () => (
    <CodeBoxSection title="Modal" columnCount={1} config={ModalCodeBoxPanelConfig} />
  );

  const Popup = () => (
    <CodeBoxSection title="Popup" columnCount={1} config={PopupCodeBoxPanelConfig} />
  );

  const Radio = () => (
    <CodeBoxSection title="Radio" columnCount={1} config={RadioCodeBoxPanelConfig} />
  );

  const Selector = () => (
    <CodeBoxSection title="Selector" columnCount={1} config={SelectorCodeBoxPanelConfig} />
  );

  const TimeDialog = () => (
    <CodeBoxSection title="TimeDialog" columnCount={1} config={TimeDialogCodeBoxPanelConfig} />
  );

  const TimeModal = () => (
    <CodeBoxSection title="TimeModal" columnCount={1} config={TimeModalCodeBoxPanelConfig} />
  );

  const TimePopup = () => (
    <CodeBoxSection title="TimePopup" columnCount={1} config={TimePopupCodeBoxPanelConfig} />
  );

  const InputMultipleTrigger = () => (
    <CodeBoxSection
      title="InputMultipleTrigger"
      columnCount={1}
      config={InputMultipleTriggerCodeBoxPanelConfig}
    />
  );

  const InputMultipleTriggerForm = () => (
    <CodeBoxSection
      title="InputMultipleTriggerForm"
      columnCount={1}
      config={InputMultipleTriggerFormCodeBoxPanelConfig}
    />
  );

  const CalendarDialog = () => (
    <CodeBoxSection
      title="CalendarDialog"
      columnCount={1}
      config={CalendarDialogCodeBoxPanelConfig}
    />
  );

  const _PropsSection = () => (
    <PropsSection
      title="Props"
      config={[
        {
          border: true,
          title: 'AutoCompleteProps',
          data: [
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'searchBarProps',
              desc: '',
              type: 'SearchBarProps',
              defaultVal: '',
            },
            {
              params: 'loadData',
              desc: '',
              type: '(kw?: string) => Promise<Record<any, any>>',
              defaultVal: '',
            },
            {
              params: 'rowKey',
              desc: '',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'labelProp',
              desc: '',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'valueProp',
              desc: '',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'renderResultItem',
              desc: '',
              type: '(record: any) => ReactNode',
              defaultVal: '',
            },
            {
              params: 'renderEmpty',
              desc: '',
              type: '() => ReactNode',
              defaultVal: '',
            },
            {
              params: 'searchDataSource',
              desc: '',
              type: 'any[]',
              defaultVal: '',
            },
            {
              params: 'value',
              desc: '',
              type: 'CheckListValue[]',
              defaultVal: '',
            },
            {
              params: 'onChange',
              desc: '',
              type: '(val: CheckListValue[]) => void',
              defaultVal: '',
            },
            {
              params: 'children',
              desc: '',
              type: `
                 (arg: {
                  value?: CheckListValue[];
                  onChange?: (_values: CheckListValue[]) => void;
                  searchDataSource?: any[];
                }) => ReactNode
              `,
              defaultVal: '',
            },
          ],
        },
      ]}
    />
  );

  const CalendarDialogCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `CalendarDialog`,
      cardProps: {
        description: {
          title: 'CalendarDialog',
          info: 'CalendarDialog',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CalendarDialogCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/calendardialog/calendardialog`,
    },
  ];

  const CalendarModalCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `CalendarModal`,
      cardProps: {
        description: {
          title: 'CalendarModal',
          info: 'CalendarModal',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CalendarModalCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/calendarmodal/calendarmodal`,
    },

    {
      id: `p2`,
      name: `CalendarFormatValueHOC`,
      cardProps: {
        description: {
          title: 'CalendarFormatValueHOC',
          info: 'CalendarFormatValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CalendarFormatValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/calendarmodal/formatvaluehoc`,
    },

    {
      id: `p3`,
      name: `CalendarTimestampValueHoc`,
      cardProps: {
        description: {
          title: 'CalendarTimestampValueHoc',
          info: 'CalendarTimestampValueHoc',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CalendarTimestampValueHocCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/calendarmodal/timestampvaluehoc`,
    },
  ];

  const CalendarPopupCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `CalendarPopup`,
      cardProps: {
        description: {
          title: 'CalendarPopup',
          info: 'CalendarPopup',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CalendarPopupCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/calendarpopup/calendarpopup`,
    },
  ];

  const CascaderViewCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `AsyncCascaderView`,
      cardProps: {
        description: {
          title: 'AsyncCascaderView',
          info: 'AsyncCascaderView',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AsyncCascaderViewCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/cascaderview/asynccascaderview`,
    },

    {
      id: `p2`,
      name: `AsyncCascaderViewValueHOC`,
      cardProps: {
        description: {
          title: 'AsyncCascaderViewValueHOC',
          info: 'AsyncCascaderViewValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AsyncCascaderViewValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/cascaderview/asynccascaderviewvaluehoc`,
    },

    {
      id: `p3`,
      name: `CascaderView`,
      cardProps: {
        description: {
          title: 'CascaderView',
          info: 'CascaderView',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CascaderViewCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/cascaderview/cascaderview`,
    },

    {
      id: `p4`,
      name: `FilterCascaderView`,
      cardProps: {
        description: {
          title: 'FilterCascaderView',
          info: 'FilterCascaderView',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCascaderViewCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/cascaderview/filtercascaderview`,
    },

    {
      id: `p5`,
      name: `FilterCascaderViewValueHOC`,
      cardProps: {
        description: {
          title: 'FilterCascaderViewValueHOC',
          info: 'FilterCascaderViewValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCascaderViewValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/cascaderview/filtercascaderviewvaluehoc`,
    },
  ];

  const CheckboxCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `AutoCompleteCheckbox`,
      cardProps: {
        description: {
          title: 'AutoCompleteCheckbox',
          info: 'AutoCompleteCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/autocompletecheckbox`,
    },

    {
      id: `p2`,
      name: `AutoCompletePagingCheckbox`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingCheckbox',
          info: 'AutoCompletePagingCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/autocompletepagingcheckbox`,
    },

    {
      id: `p3`,
      name: `CheckAllCheckbox`,
      cardProps: {
        description: {
          title: 'CheckAllCheckbox',
          info: 'CheckAllCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckAllCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/checkallcheckbox`,
    },

    {
      id: `p4`,
      name: `CheckboxGrooup`,
      cardProps: {
        description: {
          title: 'CheckboxGrooup',
          info: 'CheckboxGrooup',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckboxGrooupCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/checkboxgrooup`,
    },

    {
      id: `p5`,
      name: `FilterCheckAllCheckbox`,
      cardProps: {
        description: {
          title: 'FilterCheckAllCheckbox',
          info: 'FilterCheckAllCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckAllCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/filtercheckallcheckbox`,
    },

    {
      id: `p6`,
      name: `FilterCheckbox`,
      cardProps: {
        description: {
          title: 'FilterCheckbox',
          info: 'FilterCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/filtercheckbox`,
    },

    {
      id: `p7`,
      name: `FilterPagingCheckbox`,
      cardProps: {
        description: {
          title: 'FilterPagingCheckbox',
          info: 'FilterPagingCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterPagingCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/filterpagingcheckbox`,
    },

    {
      id: `p8`,
      name: `PagingCheckbox`,
      cardProps: {
        description: {
          title: 'PagingCheckbox',
          info: 'PagingCheckbox',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingCheckboxCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checkbox/pagingcheckbox`,
    },
  ];

  const CheckListCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `AutoCompleteCheckboxCheckList`,
      cardProps: {
        description: {
          title: 'AutoCompleteCheckboxCheckList',
          info: 'AutoCompleteCheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteCheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletecheckboxchecklist`,
    },

    {
      id: `p2`,
      name: `AutoCompleteCheckList`,
      cardProps: {
        description: {
          title: 'AutoCompleteCheckList',
          info: 'AutoCompleteCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletechecklist`,
    },

    {
      id: `p3`,
      name: `AutoCompleteCheckListValueHOC`,
      cardProps: {
        description: {
          title: 'AutoCompleteCheckListValueHOC',
          info: 'AutoCompleteCheckListValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteCheckListValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletechecklistvaluehoc`,
    },

    {
      id: `p4`,
      name: `AutoCompletePagingCheckboxCheckList`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingCheckboxCheckList',
          info: 'AutoCompletePagingCheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingCheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletepagingcheckboxchecklist`,
    },

    {
      id: `p5`,
      name: `AutoCompletePagingCheckList`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingCheckList',
          info: 'AutoCompletePagingCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletepagingchecklist`,
    },

    {
      id: `p6`,
      name: `AutoCompletePagingCheckListValueHOC`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingCheckListValueHOC',
          info: 'AutoCompletePagingCheckListValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingCheckListValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/autocompletepagingchecklistvaluehoc`,
    },

    {
      id: `p7`,
      name: `CheckAllCheckList`,
      cardProps: {
        description: {
          title: 'CheckAllCheckList',
          info: 'CheckAllCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckAllCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/checkallchecklist`,
    },

    {
      id: `p8`,
      name: `CheckAllCheckListValueHOC`,
      cardProps: {
        description: {
          title: 'CheckAllCheckListValueHOC',
          info: 'CheckAllCheckListValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckAllCheckListValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/checkallchecklistvaluehoc`,
    },

    {
      id: `p9`,
      name: `CheckboxCheckAllCheckList`,
      cardProps: {
        description: {
          title: 'CheckboxCheckAllCheckList',
          info: 'CheckboxCheckAllCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckboxCheckAllCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/checkboxcheckallchecklist`,
    },

    {
      id: `p10`,
      name: `CheckboxCheckList`,
      cardProps: {
        description: {
          title: 'CheckboxCheckList',
          info: 'CheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/checkboxchecklist`,
    },

    {
      id: `p11`,
      name: `CheckList`,
      cardProps: {
        description: {
          title: 'CheckList',
          info: 'CheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/checklist`,
    },

    {
      id: `p12`,
      name: `FilterCheckAllCheckList`,
      cardProps: {
        description: {
          title: 'FilterCheckAllCheckList',
          info: 'FilterCheckAllCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckAllCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filtercheckallchecklist`,
    },

    {
      id: `p13`,
      name: `FilterCheckboxCheckAllCheckList`,
      cardProps: {
        description: {
          title: 'FilterCheckboxCheckAllCheckList',
          info: 'FilterCheckboxCheckAllCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckboxCheckAllCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filtercheckboxcheckallchecklist`,
    },

    {
      id: `p14`,
      name: `FilterCheckboxCheckList`,
      cardProps: {
        description: {
          title: 'FilterCheckboxCheckList',
          info: 'FilterCheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filtercheckboxchecklist`,
    },

    {
      id: `p15`,
      name: `FilterCheckList`,
      cardProps: {
        description: {
          title: 'FilterCheckList',
          info: 'FilterCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filterchecklist`,
    },

    {
      id: `p16`,
      name: `FilterPagingCheckboxCheckList`,
      cardProps: {
        description: {
          title: 'FilterPagingCheckboxCheckList',
          info: 'FilterPagingCheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterPagingCheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filterpagingcheckboxchecklist`,
    },

    {
      id: `p17`,
      name: `FilterPagingCheckList`,
      cardProps: {
        description: {
          title: 'FilterPagingCheckList',
          info: 'FilterPagingCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterPagingCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/filterpagingchecklist`,
    },

    {
      id: `p18`,
      name: `PagingCheckboxCheckList`,
      cardProps: {
        description: {
          title: 'PagingCheckboxCheckList',
          info: 'PagingCheckboxCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingCheckboxCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/pagingcheckboxchecklist`,
    },

    {
      id: `p19`,
      name: `PagingCheckList`,
      cardProps: {
        description: {
          title: 'PagingCheckList',
          info: 'PagingCheckList',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingCheckListCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/pagingchecklist`,
    },

    {
      id: `p20`,
      name: `PagingCheckListValueHOC`,
      cardProps: {
        description: {
          title: 'PagingCheckListValueHOC',
          info: 'PagingCheckListValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingCheckListValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/checklist/pagingchecklistvaluehoc`,
    },
  ];

  const DateDialogCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `DateDialog`,
      cardProps: {
        description: {
          title: 'DateDialog',
          info: 'DateDialog',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateDialogCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datedialog/datedialog`,
    },

    {
      id: `p2`,
      name: `DateDialogFormatValueHOC`,
      cardProps: {
        description: {
          title: 'DateDialogFormatValueHOC',
          info: 'DateDialogFormatValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateDialogFormatValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datedialog/formatvaluehoc`,
    },

    {
      id: `p3`,
      name: `DateDialogTimestampValueHoc`,
      cardProps: {
        description: {
          title: 'DateDialogTimestampValueHoc',
          info: 'DateDialogTimestampValueHoc',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateDialogTimestampValueHocCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datedialog/timestampvaluehoc`,
    },
  ];

  const DateModalCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `DateModal`,
      cardProps: {
        description: {
          title: 'DateModal',
          info: 'DateModal',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateModalCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datemodal/datemodal`,
    },

    {
      id: `p2`,
      name: `DateModalFormatValueHOC`,
      cardProps: {
        description: {
          title: 'DateModalFormatValueHOC',
          info: 'DateModalFormatValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateModalFormatValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datemodal/formatvaluehoc`,
    },

    {
      id: `p3`,
      name: `DateModalTimestampValueHoc`,
      cardProps: {
        description: {
          title: 'DateModalTimestampValueHoc',
          info: 'DateModalTimestampValueHoc',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DateModalTimestampValueHocCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datemodal/timestampvaluehoc`,
    },
  ];

  const DatePopupCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `DatePopup`,
      cardProps: {
        description: {
          title: 'DatePopup',
          info: 'DatePopup',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DatePopupCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datepopup/datepopup`,
    },

    {
      id: `p2`,
      name: `DatePopupFormatValueHOC`,
      cardProps: {
        description: {
          title: 'DatePopupFormatValueHOC',
          info: 'DatePopupFormatValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DatePopupFormatValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datepopup/formatvaluehoc`,
    },

    {
      id: `p3`,
      name: `DatePopupTimestampValueHoc`,
      cardProps: {
        description: {
          title: 'DatePopupTimestampValueHoc',
          info: 'DatePopupTimestampValueHoc',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DatePopupTimestampValueHocCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/datepopup/timestampvaluehoc`,
    },
  ];

  const DialogCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `DialogTrigger`,
      cardProps: {
        description: {
          title: 'DialogTrigger',
          info: 'DialogTrigger',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DialogTriggerCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/dialog/trigger`,
    },

    {
      id: `p2`,
      name: `DialogTriggerPrompt`,
      cardProps: {
        description: {
          title: 'DialogTriggerPrompt',
          info: 'DialogTriggerPrompt',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: DialogTriggerPromptCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/dialog/triggerprompt`,
    },
  ];

  const ModalCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `ModalTrigger`,
      cardProps: {
        description: {
          title: 'ModalTrigger',
          info: 'ModalTrigger',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: ModalTriggerCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/modal/trigger`,
    },

    {
      id: `p2`,
      name: `ModalTriggerPrompt`,
      cardProps: {
        description: {
          title: 'ModalTriggerPrompt',
          info: 'ModalTriggerPrompt',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: ModalTriggerPromptCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/modal/triggerprompt`,
    },
  ];

  const PopupCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `PopupTrigger`,
      cardProps: {
        description: {
          title: 'PopupTrigger',
          info: 'PopupTrigger',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PopupTriggerCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/popup/trigger`,
    },

    {
      id: `p2`,
      name: `PopupTriggerPrompt`,
      cardProps: {
        description: {
          title: 'PopupTriggerPrompt',
          info: 'PopupTriggerPrompt',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PopupTriggerPromptCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/popup/triggerprompt`,
    },
  ];

  const RadioCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `AutoCompletePagingRadio`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingRadio',
          info: 'AutoCompletePagingRadio',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingRadioCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/radio/autocompletepagingradio`,
    },

    {
      id: `p2`,
      name: `AutoCompleteRadio`,
      cardProps: {
        description: {
          title: 'AutoCompleteRadio',
          info: 'AutoCompleteRadio',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteRadioCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/radio/autocompleteradio`,
    },

    {
      id: `p3`,
      name: `FilterPagingRadio`,
      cardProps: {
        description: {
          title: 'FilterPagingRadio',
          info: 'FilterPagingRadio',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterPagingRadioCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/radio/filterpagingradio`,
    },

    {
      id: `p4`,
      name: `FilterRadio`,
      cardProps: {
        description: {
          title: 'FilterRadio',
          info: 'FilterRadio',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterRadioCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/radio/filterradio`,
    },

    {
      id: `p5`,
      name: `PagingRadio`,
      cardProps: {
        description: {
          title: 'PagingRadio',
          info: 'PagingRadio',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingRadioCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/radio/pagingradio`,
    },

    {
      id: `p6`,
      name: `RadioGroup`,
      cardProps: {
        description: {
          title: 'RadioGroup',
          info: 'RadioGroup',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: RadioGroupCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/radio/radiogroup`,
    },
  ];

  const SelectorCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `AutoCompletePagingSelector`,
      cardProps: {
        description: {
          title: 'AutoCompletePagingSelector',
          info: 'AutoCompletePagingSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompletePagingSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/autocompletepagingselector`,
    },

    {
      id: `p2`,
      name: `AutoCompleteSelector`,
      cardProps: {
        description: {
          title: 'AutoCompleteSelector',
          info: 'AutoCompleteSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: AutoCompleteSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/autocompleteselector`,
    },

    {
      id: `p3`,
      name: `CheckAllSelector`,
      cardProps: {
        description: {
          title: 'CheckAllSelector',
          info: 'CheckAllSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: CheckAllSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/checkallselector`,
    },

    {
      id: `p4`,
      name: `FilterCheckAllSelector`,
      cardProps: {
        description: {
          title: 'FilterCheckAllSelector',
          info: 'FilterCheckAllSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterCheckAllSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/filtercheckallselector`,
    },

    {
      id: `p5`,
      name: `FilterPagingSelector`,
      cardProps: {
        description: {
          title: 'FilterPagingSelector',
          info: 'FilterPagingSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterPagingSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/filterpagingselector`,
    },

    {
      id: `p6`,
      name: `FilterSelector`,
      cardProps: {
        description: {
          title: 'FilterSelector',
          info: 'FilterSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FilterSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/filterselector`,
    },

    {
      id: `p7`,
      name: `PagingSelector`,
      cardProps: {
        description: {
          title: 'PagingSelector',
          info: 'PagingSelector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: PagingSelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/selector/pagingselector`,
    },

    {
      id: `p8`,
      name: `Selector`,
      cardProps: {
        description: {
          title: 'Selector',
          info: 'Selector',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: SelectorCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/selector/selector`,
    },
  ];

  const TimeDialogCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `TimeDialog`,
      cardProps: {
        description: {
          title: 'TimeDialog',
          info: 'TimeDialog',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: TimeDialogCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/timedialog/timedialog`,
    },
  ];

  const TimeModalCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `FormatValueHOC`,
      cardProps: {
        description: {
          title: 'FormatValueHOC',
          info: 'FormatValueHOC',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: FormatValueHOCCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/timemodal/formatvaluehoc`,
    },

    {
      id: `p2`,
      name: `TimeModal`,
      cardProps: {
        description: {
          title: 'TimeModal',
          info: 'TimeModal',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: TimeModalCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/timemodal/timemodal`,
    },

    {
      id: `p3`,
      name: `TimestampValueHoc`,
      cardProps: {
        description: {
          title: 'TimestampValueHoc',
          info: 'TimestampValueHoc',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: TimestampValueHocCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/timemodal/timestampvaluehoc`,
    },
  ];

  const TimePopupCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `TimePopup`,
      cardProps: {
        description: {
          title: 'TimePopup',
          info: 'TimePopup',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: TimePopupCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/timepopup/timepopup`,
    },
  ];

  const InputMultipleTriggerCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `InputMultipleTrigger`,
      cardProps: {
        description: {
          title: 'InputMultipleTrigger',
          info: 'InputMultipleTrigger',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: InputMultipleTriggerCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/inputmultiple/inputmultipletrigger`,
    },
  ];

  const InputMultipleTriggerFormCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `InputMultipleTriggerForm`,
      cardProps: {
        description: {
          title: 'InputMultipleTriggerForm',
          info: 'InputMultipleTriggerForm',
        },
      },
      displayBodyStyle: {
        width: 450,
      },
      active: 'index.jsx',
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: InputMultipleTriggerFormCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/anthoc/inputmultiple/inputmultipletriggerform`,
    },
  ];

  // function onScrollBottom() {
  //   return new Promise((resolve) => {
  //     if (index.current >= FUN_NAMES.length) return;
  //
  //     setTimeout(() => {
  //       setElements((_elements) => [
  //         ..._elements,
  //         ...FUN_NAMES.slice(index.current++, index.current),
  //       ]);
  //
  //       resolve();
  //     }, 1000);
  //   });
  // }

  useEffect(() => {
    Util.getMobileCodeText('anthoc/examples/CalendarDialog/CalendarDialog.jsx').then(
      setCalendarDialogCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CalendarModal/CalendarModal.jsx').then((r) => {
      setCalendarModalCodeText(r);
    });

    Util.getMobileCodeText('anthoc/examples/CalendarModal/FormatValueHOC.jsx').then(
      setCalendarFormatValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CalendarModal/TimestampValueHoc.jsx').then(
      setCalendarTimestampValueHocCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CalendarPopup/CalendarPopup.jsx').then(
      setCalendarPopupCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CascaderView/AsyncCascaderView.jsx').then(
      setAsyncCascaderViewCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CascaderView/AsyncCascaderViewValueHOC.jsx').then(
      setAsyncCascaderViewValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CascaderView/CascaderView.jsx').then(
      setCascaderViewCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CascaderView/FilterCascaderView.jsx').then(
      setFilterCascaderViewCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CascaderView/FilterCascaderViewValueHOC.jsx').then(
      setFilterCascaderViewValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/AutoCompleteCheckbox.jsx').then(
      setAutoCompleteCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/AutoCompletePagingCheckbox.jsx').then(
      setAutoCompletePagingCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/CheckAllCheckbox.jsx').then(
      setCheckAllCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/CheckboxGrooup.jsx').then(
      setCheckboxGrooupCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/FilterCheckAllCheckbox.jsx').then(
      setFilterCheckAllCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/FilterCheckbox.jsx').then(
      setFilterCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/FilterPagingCheckbox.jsx').then(
      setFilterPagingCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Checkbox/PagingCheckbox.jsx').then(
      setPagingCheckboxCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/AutoCompleteCheckboxCheckList.jsx').then(
      setAutoCompleteCheckboxCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/AutoCompleteCheckList.jsx').then(
      setAutoCompleteCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/AutoCompleteCheckListValueHOC.jsx').then(
      setAutoCompleteCheckListValueHOCCodeText,
    );

    Util.getMobileCodeText(
      'anthoc/examples/CheckList/AutoCompletePagingCheckboxCheckList.jsx',
    ).then(setAutoCompletePagingCheckboxCheckListCodeText);

    Util.getMobileCodeText('anthoc/examples/CheckList/AutoCompletePagingCheckList.jsx').then(
      setAutoCompletePagingCheckListCodeText,
    );

    Util.getMobileCodeText(
      'anthoc/examples/CheckList/AutoCompletePagingCheckListValueHOC.jsx',
    ).then(setAutoCompletePagingCheckListValueHOCCodeText);

    Util.getMobileCodeText('anthoc/examples/CheckList/CheckAllCheckList.jsx').then(
      setCheckAllCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/CheckAllCheckListValueHOC.jsx').then(
      setCheckAllCheckListValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/CheckboxCheckAllCheckList.jsx').then(
      setCheckboxCheckAllCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/CheckboxCheckList.jsx').then(
      setCheckboxCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/CheckList.jsx').then(setCheckListCodeText);

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterCheckAllCheckList.jsx').then(
      setFilterCheckAllCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterCheckboxCheckAllCheckList.jsx').then(
      setFilterCheckboxCheckAllCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterCheckboxCheckList.jsx').then(
      setFilterCheckboxCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterCheckList.jsx').then(
      setFilterCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterPagingCheckboxCheckList.jsx').then(
      setFilterPagingCheckboxCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/FilterPagingCheckList.jsx').then(
      setFilterPagingCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/PagingCheckboxCheckList.jsx').then(
      setPagingCheckboxCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/PagingCheckList.jsx').then(
      setPagingCheckListCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/CheckList/PagingCheckListValueHOC.jsx').then(
      setPagingCheckListValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DateDialog/DateDialog.jsx').then(setDateDialogCodeText);

    Util.getMobileCodeText('anthoc/examples/DateDialog/FormatValueHOC.jsx').then(
      setDateDialogFormatValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DateDialog/TimestampValueHoc.jsx').then(
      setDateDialogTimestampValueHocCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DateModal/DateModal.jsx').then(setDateModalCodeText);

    Util.getMobileCodeText('anthoc/examples/DateModal/FormatValueHOC.jsx').then(
      setDateModalFormatValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DateModal/TimestampValueHoc.jsx').then(
      setDateModalTimestampValueHocCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DatePopup/DatePopup.jsx').then(setDatePopupCodeText);

    Util.getMobileCodeText('anthoc/examples/DatePopup/FormatValueHOC.jsx').then(
      setDatePopupFormatValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/DatePopup/TimestampValueHoc.jsx').then(
      setDatePopupTimestampValueHocCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Dialog/Trigger.jsx').then(setDialogTriggerCodeText);

    Util.getMobileCodeText('anthoc/examples/Dialog/TriggerPrompt.jsx').then(
      setDialogTriggerPromptCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Modal/Trigger.jsx').then(setModalTriggerCodeText);

    Util.getMobileCodeText('anthoc/examples/Modal/TriggerPrompt.jsx').then(
      setModalTriggerPromptCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Popup/Trigger.jsx').then(setPopupTriggerCodeText);

    Util.getMobileCodeText('anthoc/examples/Popup/TriggerPrompt.jsx').then(
      setPopupTriggerPromptCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Radio/AutoCompletePagingRadio.jsx').then(
      setAutoCompletePagingRadioCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Radio/AutoCompleteRadio.jsx').then(
      setAutoCompleteRadioCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Radio/FilterPagingRadio.jsx').then(
      setFilterPagingRadioCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Radio/FilterRadio.jsx').then(setFilterRadioCodeText);

    Util.getMobileCodeText('anthoc/examples/Radio/PagingRadio.jsx').then(setPagingRadioCodeText);

    Util.getMobileCodeText('anthoc/examples/Radio/RadioGroup.jsx').then(setRadioGroupCodeText);

    Util.getMobileCodeText('anthoc/examples/Selector/AutoCompletePagingSelector.jsx').then(
      setAutoCompletePagingSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/AutoCompleteSelector.jsx').then(
      setAutoCompleteSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/CheckAllSelector.jsx').then(
      setCheckAllSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/FilterCheckAllSelector.jsx').then(
      setFilterCheckAllSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/FilterPagingSelector.jsx').then(
      setFilterPagingSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/FilterSelector.jsx').then(
      setFilterSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/PagingSelector.jsx').then(
      setPagingSelectorCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/Selector/Selector.jsx').then(setSelectorCodeText);

    Util.getMobileCodeText('anthoc/examples/TimeDialog/TimeDialog.jsx').then(setTimeDialogCodeText);

    Util.getMobileCodeText('anthoc/examples/TimeModal/FormatValueHOC.jsx').then(
      setFormatValueHOCCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/TimeModal/TimeModal.jsx').then(setTimeModalCodeText);

    Util.getMobileCodeText('anthoc/examples/TimeModal/TimestampValueHoc.jsx').then(
      setTimestampValueHocCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/TimePopup/TimePopup.jsx').then(setTimePopupCodeText);

    Util.getMobileCodeText('anthoc/examples/InputMultiple/InputMultipleTrigger.jsx').then(
      setInputMultipleTriggerCodeText,
    );

    Util.getMobileCodeText('anthoc/examples/InputMultiple/InputMultipleTriggerForm.jsx').then(
      setInputMultipleTriggerFormCodeText,
    );
  }, []);

  return (
    <PlayGroundPage>
      <Section title="AntMobileHOC">
        <p>AntdMobile组件HOC和增强</p>
      </Section>

      {FUN_NAMES.map((_funName) => eval(`${_funName}()`))}
    </PlayGroundPage>
  );
};
