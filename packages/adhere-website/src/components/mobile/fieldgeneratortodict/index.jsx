import React, { useEffect, useRef, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

const FUN_NAMES = [
  // 'MobileCascaderView',
  'MobileCheckbox',
  'MobileCheckList',
  'MobileList',
  'MobileRadio',
  'MobileSelector',
  '_PropsSection',
];

export default () => {
  const [elements, setElements] = useState([]);

  const index = useRef(0);

  const [MobileCascaderViewAsyncStandardCodeText, setMobileCascaderViewAsyncStandardCodeText] =
    useState('');

  const [MobileCascaderViewDynamicFilterCodeText, setMobileCascaderViewDynamicFilterCodeText] =
    useState('');

  const [MobileCascaderViewDynamicStandardCodeText, setMobileCascaderViewDynamicStandardCodeText] =
    useState('');

  const [MobileCascaderViewFilterCodeText, setMobileCascaderViewFilterCodeText] = useState('');

  const [MobileCascaderViewStandardCodeText, setMobileCascaderViewStandardCodeText] = useState('');

  const [MobileCheckboxACPagingCodeText, setMobileCheckboxACPagingCodeText] = useState('');

  const [MobileCheckboxACStandardCodeText, setMobileCheckboxACStandardCodeText] = useState('');

  const [MobileCheckboxCheckAllCodeText, setMobileCheckboxCheckAllCodeText] = useState('');

  const [MobileCheckboxDynamicCheckAllCodeText, setMobileCheckboxDynamicCheckAllCodeText] =
    useState('');

  const [MobileCheckboxDynamicFilterCodeText, setMobileCheckboxDynamicFilterCodeText] =
    useState('');

  const [
    MobileCheckboxDynamicFilterCheckAllCodeText,
    setMobileCheckboxDynamicFilterCheckAllCodeText,
  ] = useState('');

  const [MobileCheckboxDynamicStandardCodeText, setMobileCheckboxDynamicStandardCodeText] =
    useState('');

  const [MobileCheckboxFilterCodeText, setMobileCheckboxFilterCodeText] = useState('');

  const [MobileCheckboxFilterCheckAllCodeText, setMobileCheckboxFilterCheckAllCodeText] =
    useState('');

  const [
    MobileCheckboxPaginationDynamicFilterCodeText,
    setMobileCheckboxPaginationDynamicFilterCodeText,
  ] = useState('');

  const [MobileCheckboxPaginationFilterCodeText, setMobileCheckboxPaginationFilterCodeText] =
    useState('');

  const [MobileCheckboxPaginationStandardCodeText, setMobileCheckboxPaginationStandardCodeText] =
    useState('');

  const [MobileCheckboxStandardCodeText, setMobileCheckboxStandardCodeText] = useState('');

  const [
    MobileCheckboxCheckListDynamicCheckAllCodeText,
    setMobileCheckboxCheckListDynamicCheckAllCodeText,
  ] = useState('');

  const [
    MobileCheckboxCheckListDynamicFilterCodeText,
    setMobileCheckboxCheckListDynamicFilterCodeText,
  ] = useState('');

  const [
    MobileCheckboxCheckListDynamicFilterCheckAllCodeText,
    setMobileCheckboxCheckListDynamicFilterCheckAllCodeText,
  ] = useState('');

  const [
    MobileCheckboxCheckListDynamicStandardCodeText,
    setMobileCheckboxCheckListDynamicStandardCodeText,
  ] = useState('');

  const [
    MobileCheckboxCheckListPaginationDynamicFilterCodeText,
    setMobileCheckboxCheckListPaginationDynamicFilterCodeText,
  ] = useState('');

  const [
    MobileCheckboxCheckListPaginationStandardCodeText,
    setMobileCheckboxCheckListPaginationStandardCodeText,
  ] = useState('');

  const [MobileCheckListACPagingCodeText, setMobileCheckListACPagingCodeText] = useState('');

  const [MobileCheckListACStandardCodeText, setMobileCheckListACStandardCodeText] = useState('');

  const [MobileCheckListDynamicCheckAllCodeText, setMobileCheckListDynamicCheckAllCodeText] =
    useState('');

  const [MobileCheckListDynamicFilterCodeText, setMobileCheckListDynamicFilterCodeText] =
    useState('');

  const [
    MobileCheckListDynamicFilterCheckAllCodeText,
    setMobileCheckListDynamicFilterCheckAllCodeText,
  ] = useState('');

  const [MobileCheckListDynamicStandardCodeText, setMobileCheckListDynamicStandardCodeText] =
    useState('');

  const [MobileCheckListPaginationFilterCodeText, setMobileCheckListPaginationFilterCodeText] =
    useState('');

  const [MobileCheckListPaginationStandardCodeText, setMobileCheckListPaginationStandardCodeText] =
    useState('');

  const [MobileListDynamicStandardCodeText, setMobileListDynamicStandardCodeText] = useState('');

  const [MobileListStandardCodeText, setMobileListStandardCodeText] = useState('');

  const [MobileRadioACPagingCodeText, setMobileRadioACPagingCodeText] = useState('');

  const [MobileRadioACStandardCodeText, setMobileRadioACStandardCodeText] = useState('');

  const [MobileRadioDynamicFilterCodeText, setMobileRadioDynamicFilterCodeText] = useState('');

  const [MobileRadioDynamicStandardCodeText, setMobileRadioDynamicStandardCodeText] = useState('');

  const [MobileRadioFilterCodeText, setMobileRadioFilterCodeText] = useState('');

  const [
    MobileRadioPaginationDynamicFilterCodeText,
    setMobileRadioPaginationDynamicFilterCodeText,
  ] = useState('');

  const [MobileRadioPaginationFilterCodeText, setMobileRadioPaginationFilterCodeText] =
    useState('');

  const [MobileRadioPaginationStandardCodeText, setMobileRadioPaginationStandardCodeText] =
    useState('');

  const [MobileRadioStandardCodeText, setMobileRadioStandardCodeText] = useState('');

  const [MobileSelectorACPagingCodeText, setMobileSelectorACPagingCodeText] = useState('');

  const [MobileSelectorACStandardCodeText, setMobileSelectorACStandardCodeText] = useState('');

  const [MobileSelectorCheckAllCodeText, setMobileSelectorCheckAllCodeText] = useState('');

  const [MobileSelectorDynamicCheckAllCodeText, setMobileSelectorDynamicCheckAllCodeText] =
    useState('');

  const [MobileSelectorDynamicFilterCodeText, setMobileSelectorDynamicFilterCodeText] =
    useState('');

  const [
    MobileSelectorDynamicFilterCheckAllCodeText,
    setMobileSelectorDynamicFilterCheckAllCodeText,
  ] = useState('');

  const [MobileSelectorDynamicStandardCodeText, setMobileSelectorDynamicStandardCodeText] =
    useState('');

  const [MobileSelectorFilterCodeText, setMobileSelectorFilterCodeText] = useState('');

  const [MobileSelectorFilterCheckAllCodeText, setMobileSelectorFilterCheckAllCodeText] =
    useState('');

  const [
    MobileSelectorPaginationDynamicFilterCodeText,
    setMobileSelectorPaginationDynamicFilterCodeText,
  ] = useState('');

  const [MobileSelectorPaginationFilterCodeText, setMobileSelectorPaginationFilterCodeText] =
    useState('');

  const [MobileSelectorPaginationStandardCodeText, setMobileSelectorPaginationStandardCodeText] =
    useState('');

  const [MobileSelectorStandardCodeText, setMobileSelectorStandardCodeText] = useState('');

  const MobileCascaderViewCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileCascaderViewAsyncStandard`,
      cardProps: {
        description: {
          title: 'MobileCascaderViewAsyncStandard',
          info: 'MobileCascaderViewAsyncStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCascaderViewAsyncStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecascaderview/mobilecascaderviewasyncstandard`,
    },

    {
      id: `p2`,
      name: `MobileCascaderViewDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCascaderViewDynamicFilter',
          info: 'MobileCascaderViewDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCascaderViewDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecascaderview/mobilecascaderviewdynamicfilter`,
    },

    {
      id: `p3`,
      name: `MobileCascaderViewDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileCascaderViewDynamicStandard',
          info: 'MobileCascaderViewDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCascaderViewDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecascaderview/mobilecascaderviewdynamicstandard`,
    },

    {
      id: `p4`,
      name: `MobileCascaderViewFilter`,
      cardProps: {
        description: {
          title: 'MobileCascaderViewFilter',
          info: 'MobileCascaderViewFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCascaderViewFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecascaderview/mobilecascaderviewfilter`,
    },

    {
      id: `p5`,
      name: `MobileCascaderViewStandard`,
      cardProps: {
        description: {
          title: 'MobileCascaderViewStandard',
          info: 'MobileCascaderViewStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCascaderViewStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecascaderview/mobilecascaderviewstandard`,
    },
  ];

  const MobileCheckboxCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileCheckboxACPaging`,
      cardProps: {
        description: {
          title: 'MobileCheckboxACPaging',
          info: 'MobileCheckboxACPaging',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxACPagingCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxacpaging`,
    },

    {
      id: `p2`,
      name: `MobileCheckboxACStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxACStandard',
          info: 'MobileCheckboxACStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxACStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxacstandard`,
    },

    {
      id: `p3`,
      name: `MobileCheckboxCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckAll',
          info: 'MobileCheckboxCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxcheckall`,
    },

    {
      id: `p4`,
      name: `MobileCheckboxDynamicCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxDynamicCheckAll',
          info: 'MobileCheckboxDynamicCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxDynamicCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxdynamiccheckall`,
    },

    {
      id: `p5`,
      name: `MobileCheckboxDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxDynamicFilter',
          info: 'MobileCheckboxDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxdynamicfilter`,
    },

    {
      id: `p6`,
      name: `MobileCheckboxDynamicFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxDynamicFilterCheckAll',
          info: 'MobileCheckboxDynamicFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxDynamicFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxdynamicfiltercheckall`,
    },

    {
      id: `p7`,
      name: `MobileCheckboxDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxDynamicStandard',
          info: 'MobileCheckboxDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxdynamicstandard`,
    },

    {
      id: `p8`,
      name: `MobileCheckboxFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxFilter',
          info: 'MobileCheckboxFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxfilter`,
    },

    {
      id: `p9`,
      name: `MobileCheckboxFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxFilterCheckAll',
          info: 'MobileCheckboxFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxfiltercheckall`,
    },

    {
      id: `p10`,
      name: `MobileCheckboxPaginationDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxPaginationDynamicFilter',
          info: 'MobileCheckboxPaginationDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxPaginationDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxpaginationdynamicfilter`,
    },

    {
      id: `p11`,
      name: `MobileCheckboxPaginationFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxPaginationFilter',
          info: 'MobileCheckboxPaginationFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxPaginationFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxpaginationfilter`,
    },

    {
      id: `p12`,
      name: `MobileCheckboxPaginationStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxPaginationStandard',
          info: 'MobileCheckboxPaginationStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxPaginationStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxpaginationstandard`,
    },

    {
      id: `p13`,
      name: `MobileCheckboxStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxStandard',
          info: 'MobileCheckboxStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilecheckbox/mobilecheckboxstandard`,
    },
  ];

  const MobileCheckListCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileCheckboxCheckListDynamicCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListDynamicCheckAll',
          info: 'MobileCheckboxCheckListDynamicCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListDynamicCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistdynamiccheckall`,
    },

    {
      id: `p2`,
      name: `MobileCheckboxCheckListDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListDynamicFilter',
          info: 'MobileCheckboxCheckListDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistdynamicfilter`,
    },

    {
      id: `p3`,
      name: `MobileCheckboxCheckListDynamicFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListDynamicFilterCheckAll',
          info: 'MobileCheckboxCheckListDynamicFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListDynamicFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistdynamicfiltercheckall`,
    },

    {
      id: `p4`,
      name: `MobileCheckboxCheckListDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListDynamicStandard',
          info: 'MobileCheckboxCheckListDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistdynamicstandard`,
    },

    {
      id: `p5`,
      name: `MobileCheckboxCheckListPaginationDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListPaginationDynamicFilter',
          info: 'MobileCheckboxCheckListPaginationDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListPaginationDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistpaginationdynamicfilter`,
    },

    {
      id: `p6`,
      name: `MobileCheckboxCheckListPaginationStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckboxCheckListPaginationStandard',
          info: 'MobileCheckboxCheckListPaginationStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckboxCheckListPaginationStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilecheckboxchecklistpaginationstandard`,
    },

    {
      id: `p7`,
      name: `MobileCheckListACPaging`,
      cardProps: {
        description: {
          title: 'MobileCheckListACPaging',
          info: 'MobileCheckListACPaging',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListACPagingCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistacpaging`,
    },

    {
      id: `p8`,
      name: `MobileCheckListACStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckListACStandard',
          info: 'MobileCheckListACStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListACStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistacstandard`,
    },

    {
      id: `p9`,
      name: `MobileCheckListDynamicCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckListDynamicCheckAll',
          info: 'MobileCheckListDynamicCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListDynamicCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistdynamiccheckall`,
    },

    {
      id: `p10`,
      name: `MobileCheckListDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckListDynamicFilter',
          info: 'MobileCheckListDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistdynamicfilter`,
    },

    {
      id: `p11`,
      name: `MobileCheckListDynamicFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileCheckListDynamicFilterCheckAll',
          info: 'MobileCheckListDynamicFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListDynamicFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistdynamicfiltercheckall`,
    },

    {
      id: `p12`,
      name: `MobileCheckListDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckListDynamicStandard',
          info: 'MobileCheckListDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistdynamicstandard`,
    },

    {
      id: `p13`,
      name: `MobileCheckListPaginationFilter`,
      cardProps: {
        description: {
          title: 'MobileCheckListPaginationFilter',
          info: 'MobileCheckListPaginationFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListPaginationFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistpaginationfilter`,
    },

    {
      id: `p14`,
      name: `MobileCheckListPaginationStandard`,
      cardProps: {
        description: {
          title: 'MobileCheckListPaginationStandard',
          info: 'MobileCheckListPaginationStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileCheckListPaginationStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilechecklist/mobilechecklistpaginationstandard`,
    },
  ];

  const MobileListCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileListDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileListDynamicStandard',
          info: 'MobileListDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileListDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilelist/mobilelistdynamicstandard`,
    },

    {
      id: `p2`,
      name: `MobileListStandard`,
      cardProps: {
        description: {
          title: 'MobileListStandard',
          info: 'MobileListStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileListStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobilelist/mobileliststandard`,
    },
  ];

  const MobileRadioCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileRadioACPaging`,
      cardProps: {
        description: {
          title: 'MobileRadioACPaging',
          info: 'MobileRadioACPaging',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioACPagingCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradioacpaging`,
    },

    {
      id: `p2`,
      name: `MobileRadioACStandard`,
      cardProps: {
        description: {
          title: 'MobileRadioACStandard',
          info: 'MobileRadioACStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioACStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradioacstandard`,
    },

    {
      id: `p3`,
      name: `MobileRadioDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileRadioDynamicFilter',
          info: 'MobileRadioDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiodynamicfilter`,
    },

    {
      id: `p4`,
      name: `MobileRadioDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileRadioDynamicStandard',
          info: 'MobileRadioDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiodynamicstandard`,
    },

    {
      id: `p5`,
      name: `MobileRadioFilter`,
      cardProps: {
        description: {
          title: 'MobileRadioFilter',
          info: 'MobileRadioFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiofilter`,
    },

    {
      id: `p6`,
      name: `MobileRadioPaginationDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileRadioPaginationDynamicFilter',
          info: 'MobileRadioPaginationDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioPaginationDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiopaginationdynamicfilter`,
    },

    {
      id: `p7`,
      name: `MobileRadioPaginationFilter`,
      cardProps: {
        description: {
          title: 'MobileRadioPaginationFilter',
          info: 'MobileRadioPaginationFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioPaginationFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiopaginationfilter`,
    },

    {
      id: `p8`,
      name: `MobileRadioPaginationStandard`,
      cardProps: {
        description: {
          title: 'MobileRadioPaginationStandard',
          info: 'MobileRadioPaginationStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioPaginationStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiopaginationstandard`,
    },

    {
      id: `p9`,
      name: `MobileRadioStandard`,
      cardProps: {
        description: {
          title: 'MobileRadioStandard',
          info: 'MobileRadioStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileRadioStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileradio/mobileradiostandard`,
    },
  ];

  const MobileSelectorCodeBoxPanelConfig = [
    {
      id: `p1`,
      name: `MobileSelectorACPaging`,
      cardProps: {
        description: {
          title: 'MobileSelectorACPaging',
          info: 'MobileSelectorACPaging',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorACPagingCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectoracpaging`,
    },

    {
      id: `p2`,
      name: `MobileSelectorACStandard`,
      cardProps: {
        description: {
          title: 'MobileSelectorACStandard',
          info: 'MobileSelectorACStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorACStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectoracstandard`,
    },

    {
      id: `p3`,
      name: `MobileSelectorCheckAll`,
      cardProps: {
        description: {
          title: 'MobileSelectorCheckAll',
          info: 'MobileSelectorCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorcheckall`,
    },

    {
      id: `p4`,
      name: `MobileSelectorDynamicCheckAll`,
      cardProps: {
        description: {
          title: 'MobileSelectorDynamicCheckAll',
          info: 'MobileSelectorDynamicCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorDynamicCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectordynamiccheckall`,
    },

    {
      id: `p5`,
      name: `MobileSelectorDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileSelectorDynamicFilter',
          info: 'MobileSelectorDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectordynamicfilter`,
    },

    {
      id: `p6`,
      name: `MobileSelectorDynamicFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileSelectorDynamicFilterCheckAll',
          info: 'MobileSelectorDynamicFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorDynamicFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectordynamicfiltercheckall`,
    },

    {
      id: `p7`,
      name: `MobileSelectorDynamicStandard`,
      cardProps: {
        description: {
          title: 'MobileSelectorDynamicStandard',
          info: 'MobileSelectorDynamicStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorDynamicStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectordynamicstandard`,
    },

    {
      id: `p8`,
      name: `MobileSelectorFilter`,
      cardProps: {
        description: {
          title: 'MobileSelectorFilter',
          info: 'MobileSelectorFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorfilter`,
    },

    {
      id: `p9`,
      name: `MobileSelectorFilterCheckAll`,
      cardProps: {
        description: {
          title: 'MobileSelectorFilterCheckAll',
          info: 'MobileSelectorFilterCheckAll',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorFilterCheckAllCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorfiltercheckall`,
    },

    {
      id: `p10`,
      name: `MobileSelectorPaginationDynamicFilter`,
      cardProps: {
        description: {
          title: 'MobileSelectorPaginationDynamicFilter',
          info: 'MobileSelectorPaginationDynamicFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorPaginationDynamicFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorpaginationdynamicfilter`,
    },

    {
      id: `p11`,
      name: `MobileSelectorPaginationFilter`,
      cardProps: {
        description: {
          title: 'MobileSelectorPaginationFilter',
          info: 'MobileSelectorPaginationFilter',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorPaginationFilterCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorpaginationfilter`,
    },

    {
      id: `p12`,
      name: `MobileSelectorPaginationStandard`,
      cardProps: {
        description: {
          title: 'MobileSelectorPaginationStandard',
          info: 'MobileSelectorPaginationStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorPaginationStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorpaginationstandard`,
    },

    {
      id: `p13`,
      name: `MobileSelectorStandard`,
      cardProps: {
        description: {
          title: 'MobileSelectorStandard',
          info: 'MobileSelectorStandard',
        },
      },
      active: 'index.jsx',
      displayBodyStyle: {
        width: 450,
      },
      config: [
        {
          key: 'index.jsx',
          title: 'index.jsx',
          style: { height: 500 },
          theme: 'eclipse',
          codeText: MobileSelectorStandardCodeText,
        },
      ],
      type: 'PlayGroundTabMobile',
      url: `${
        Constent(CustomEvnVars).mobileOrigin
      }/#/adhere/component/ui/fieldgeneratortodict/mobileselector/mobileselectorstandard`,
    },
  ];

  const MobileCascaderView = () => {
    return (
      <CodeBoxSection
        title="MobileCascaderView"
        columnCount={1}
        config={MobileCascaderViewCodeBoxPanelConfig}
      />
    );
  };

  const MobileCheckbox = () => (
    <CodeBoxSection
      title="MobileCheckbox"
      columnCount={1}
      config={MobileCheckboxCodeBoxPanelConfig}
    />
  );

  const MobileCheckList = () => (
    <CodeBoxSection
      title="MobileCheckList"
      columnCount={1}
      config={MobileCheckListCodeBoxPanelConfig}
    />
  );

  const MobileList = () => (
    <CodeBoxSection title="MobileList" columnCount={1} config={MobileListCodeBoxPanelConfig} />
  );

  const MobileRadio = () => (
    <CodeBoxSection title="MobileRadio" columnCount={1} config={MobileRadioCodeBoxPanelConfig} />
  );

  const MobileSelector = () => (
    <CodeBoxSection
      title="MobileSelector"
      columnCount={1}
      config={MobileSelectorCodeBoxPanelConfig}
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

  function onScrollBottom() {
    return new Promise((resolve) => {
      if (index.current >= FUN_NAMES.length) return;

      setTimeout(() => {
        setElements((_elements) => [
          ..._elements,
          ...FUN_NAMES.slice(index.current++, index.current),
        ]);

        resolve();
      }, 1000);
    });
  }

  useEffect(() => {
    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewAsyncStandard.jsx',
    ).then(setMobileCascaderViewAsyncStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewDynamicFilter.jsx',
    ).then(setMobileCascaderViewDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewDynamicStandard.jsx',
    ).then(setMobileCascaderViewDynamicStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewFilter.jsx',
    ).then(setMobileCascaderViewFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCascaderView/MobileCascaderViewStandard.jsx',
    ).then(setMobileCascaderViewStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxACPaging.jsx',
    ).then(setMobileCheckboxACPagingCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxACStandard.jsx',
    ).then(setMobileCheckboxACStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxCheckAll.jsx',
    ).then(setMobileCheckboxCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicCheckAll.jsx',
    ).then(setMobileCheckboxDynamicCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicFilter.jsx',
    ).then(setMobileCheckboxDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicFilterCheckAll.jsx',
    ).then(setMobileCheckboxDynamicFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxDynamicStandard.jsx',
    ).then(setMobileCheckboxDynamicStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxFilter.jsx',
    ).then(setMobileCheckboxFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxFilterCheckAll.jsx',
    ).then(setMobileCheckboxFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationDynamicFilter.jsx',
    ).then(setMobileCheckboxPaginationDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationFilter.jsx',
    ).then(setMobileCheckboxPaginationFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxPaginationStandard.jsx',
    ).then(setMobileCheckboxPaginationStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckbox/MobileCheckboxStandard.jsx',
    ).then(setMobileCheckboxStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicCheckAll.jsx',
    ).then(setMobileCheckboxCheckListDynamicCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicFilter.jsx',
    ).then(setMobileCheckboxCheckListDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicFilterCheckAll.jsx',
    ).then(setMobileCheckboxCheckListDynamicFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListDynamicStandard.jsx',
    ).then(setMobileCheckboxCheckListDynamicStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListPaginationDynamicFilter.jsx',
    ).then(setMobileCheckboxCheckListPaginationDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckboxCheckListPaginationStandard.jsx',
    ).then(setMobileCheckboxCheckListPaginationStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListACPaging.jsx',
    ).then(setMobileCheckListACPagingCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListACStandard.jsx',
    ).then(setMobileCheckListACStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicCheckAll.jsx',
    ).then(setMobileCheckListDynamicCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicFilter.jsx',
    ).then(setMobileCheckListDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicFilterCheckAll.jsx',
    ).then(setMobileCheckListDynamicFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListDynamicStandard.jsx',
    ).then(setMobileCheckListDynamicStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListPaginationFilter.jsx',
    ).then(setMobileCheckListPaginationFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileCheckList/MobileCheckListPaginationStandard.jsx',
    ).then(setMobileCheckListPaginationStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileList/MobileListDynamicStandard.jsx',
    ).then(setMobileListDynamicStandardCodeText);

    Util.getMobileCodeText('fieldgeneratortodict/examples/MobileList/MobileListStandard.jsx').then(
      setMobileListStandardCodeText,
    );

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioACPaging.jsx',
    ).then(setMobileRadioACPagingCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioACStandard.jsx',
    ).then(setMobileRadioACStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioDynamicFilter.jsx',
    ).then(setMobileRadioDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioDynamicStandard.jsx',
    ).then(setMobileRadioDynamicStandardCodeText);

    Util.getMobileCodeText('fieldgeneratortodict/examples/MobileRadio/MobileRadioFilter.jsx').then(
      setMobileRadioFilterCodeText,
    );

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationDynamicFilter.jsx',
    ).then(setMobileRadioPaginationDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationFilter.jsx',
    ).then(setMobileRadioPaginationFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioPaginationStandard.jsx',
    ).then(setMobileRadioPaginationStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileRadio/MobileRadioStandard.jsx',
    ).then(setMobileRadioStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorACPaging.jsx',
    ).then(setMobileSelectorACPagingCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorACStandard.jsx',
    ).then(setMobileSelectorACStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorCheckAll.jsx',
    ).then(setMobileSelectorCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicCheckAll.jsx',
    ).then(setMobileSelectorDynamicCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicFilter.jsx',
    ).then(setMobileSelectorDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicFilterCheckAll.jsx',
    ).then(setMobileSelectorDynamicFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorDynamicStandard.jsx',
    ).then(setMobileSelectorDynamicStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorFilter.jsx',
    ).then(setMobileSelectorFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorFilterCheckAll.jsx',
    ).then(setMobileSelectorFilterCheckAllCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationDynamicFilter.jsx',
    ).then(setMobileSelectorPaginationDynamicFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationFilter.jsx',
    ).then(setMobileSelectorPaginationFilterCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorPaginationStandard.jsx',
    ).then(setMobileSelectorPaginationStandardCodeText);

    Util.getMobileCodeText(
      'fieldgeneratortodict/examples/MobileSelector/MobileSelectorStandard.jsx',
    ).then(setMobileSelectorStandardCodeText);
  }, []);

  return (
    <PlayGroundPage onScrollBottom={onScrollBottom}>
      <Section title="MobileFieldGeneratorToDict">
        <p>移动端 - 字典生成器</p>
      </Section>

      {MobileCascaderView()}

      {elements.map((_funName) => eval(`${_funName}()`))}
    </PlayGroundPage>
  );
};
