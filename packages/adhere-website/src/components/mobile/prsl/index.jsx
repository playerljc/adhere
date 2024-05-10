import React from 'react';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  const normalIndexJSCodeText = useMobileCodeText('prsl/examples/Normal/index.jsx');
  const normalIndexLessCodeText = useMobileCodeText('prsl/examples/Normal/index.less');
  const localIndexJSCodeText = useMobileCodeText('prsl/examples/Local/index.jsx');
  const localIndexLessCodeText = useMobileCodeText('prsl/examples/Local/index.less');
  const remoteIndexJSCodeText = useMobileCodeText('prsl/examples/Remote/index.jsx');
  const remoteIndexLessCodeText = useMobileCodeText('prsl/examples/Remote/index.less');
  const noPagingIndexJSCodeText = useMobileCodeText('prsl/examples/NoPaging/index.jsx');
  const noPagingIndexLessCodeText = useMobileCodeText('prsl/examples/NoPaging/index.less');
  const searchHistoryIndexJSCodeText = useMobileCodeText('prsl/examples/SearchHistory/index.jsx');
  const searchHistoryIndexLessCodeText = useMobileCodeText(
    'prsl/examples/SearchHistory/index.less',
  );
  const extraIndexJSCodeText = useMobileCodeText('prsl/examples/Extra/index.jsx');
  const extraIndexLessCodeText = useMobileCodeText('prsl/examples/Extra/index.less');
  const customToolbarItemIndexJSCodeText = useMobileCodeText(
    'prsl/examples/CustomToolbarItem/index.jsx',
  );
  const customToolbarItemIndexLessCodeText = useMobileCodeText(
    'prsl/examples/CustomToolbarItem/index.less',
  );
  const customSearchItemIndexJSCodeText = useMobileCodeText(
    'prsl/examples/CustomSearchItem/index.jsx',
  );
  const customSearchItemIndexLessCodeText = useMobileCodeText(
    'prsl/examples/CustomSearchItem/index.less',
  );
  const apiIndexJSCodeText = useMobileCodeText('prsl/examples/API/index.jsx');
  const apiIndexLessCodeText = useMobileCodeText('prsl/examples/API/index.less');
  const listIndexJSCodeText = useMobileCodeText('prsl/examples/List/index.jsx');
  const listIndexLessCodeText = useMobileCodeText('prsl/examples/List/index.less');
  //
  const cardListJSCodeText = useMobileCodeText('prsl/examples/List/List/CardList.jsx');
  const cardListLessCodeText = useMobileCodeText('prsl/examples/List/List/CardList.less');
  const gtListJSCodeText = useMobileCodeText('prsl/examples/List/List/GTList.jsx');
  const gtmListJSCodeText = useMobileCodeText('prsl/examples/List/List/GTMList.jsx');
  const gtmListLessCodeText = useMobileCodeText('prsl/examples/List/List/GTMList.less');
  const topicsListJSCodeText = useMobileCodeText('prsl/examples/List/List/TopicsList.jsx');
  const topicsListLessCodeText = useMobileCodeText('prsl/examples/List/List/TopicsList.less');
  //
  const selectionIndexJSCodeText = useMobileCodeText('prsl/examples/Selection/index.jsx');
  const selectionIndexLessCodeText = useMobileCodeText('prsl/examples/Selection/index.less');
  const dndIndexJSCodeText = useMobileCodeText('prsl/examples/DND/index.jsx');
  const dndIndexLessCodeText = useMobileCodeText('prsl/examples/DND/index.less');
  const actionSheetIndexJSCodeText = useMobileCodeText('prsl/examples/ActionSheet/index.jsx');
  const actionSheetIndexLessCodeText = useMobileCodeText('prsl/examples/ActionSheet/index.less');
  const swipeActionIndexJSCodeText = useMobileCodeText('prsl/examples/SwiperAction/index.jsx');
  const swipeActionIndexLessCodeText = useMobileCodeText('prsl/examples/SwiperAction/index.less');
  const gridListIndexJSCodeText = useMobileCodeText('prsl/examples/GridView/index.jsx');
  const gridListIndexLessCodeText = useMobileCodeText('prsl/examples/GridView/index.less');

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: normalIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: normalIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/normal`,
      },
      {
        id: `p2`,
        name: `使用本地数据`,
        cardProps: {
          description: {
            title: '使用本地数据',
            info: '使用本地数据',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: localIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: localIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/local`,
      },
      {
        id: `p3`,
        name: `使用远程数据`,
        cardProps: {
          description: {
            title: '使用远程数据',
            info: '使用远程数据',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: remoteIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: remoteIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/remote`,
      },
      {
        id: `p4`,
        name: `无分页`,
        cardProps: {
          description: {
            title: '无分页',
            info: '无分页',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: noPagingIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: noPagingIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/nopaging`,
      },
      {
        id: `p5`,
        name: `查询历史`,
        cardProps: {
          description: {
            title: '查询历史',
            info: '查询历史',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: searchHistoryIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: searchHistoryIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/searchhistory`,
      },
      {
        id: `p6`,
        name: `扩展`,
        cardProps: {
          description: {
            title: '扩展',
            info: '扩展',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: extraIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: extraIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/extra`,
      },
      {
        id: `p7`,
        name: `自定义工具栏项`,
        cardProps: {
          description: {
            title: '自定义工具栏项',
            info: '自定义工具栏项',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: customToolbarItemIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: customToolbarItemIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/customtoolbaritem`,
      },
      {
        id: `p8`,
        name: `自定义查询项`,
        cardProps: {
          description: {
            title: '自定义查询项',
            info: '自定义查询项',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: customSearchItemIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: customSearchItemIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/customsearchitem`,
      },
      {
        id: `p9`,
        name: `使用API`,
        cardProps: {
          description: {
            title: '使用API',
            info: '使用API',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: apiIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: apiIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/api`,
      },
      {
        id: `p10`,
        name: `列表`,
        cardProps: {
          description: {
            title: '列表',
            info: '列表',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: listIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: listIndexLessCodeText,
          },
          {
            key: 'CardList.jsx',
            title: 'CardList.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: cardListJSCodeText,
          },
          {
            key: 'CardList.less',
            title: 'CardList.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: cardListLessCodeText,
          },
          {
            key: 'GTList.jsx',
            title: 'GTList.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: gtListJSCodeText,
          },
          {
            key: 'GTMList.jsx',
            title: 'GTMList.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: gtmListJSCodeText,
          },
          {
            key: 'GTMList.less',
            title: 'GTMList.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: gtmListLessCodeText,
          },
          {
            key: 'TopicsList.jsx',
            title: 'TopicsList.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: topicsListJSCodeText,
          },
          {
            key: 'TopicsList.less',
            title: 'TopicsList.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: topicsListLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/list`,
      },
      {
        id: `p11`,
        name: `选择模式`,
        cardProps: {
          description: {
            title: '选择模式',
            info: '选择模式',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: selectionIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: selectionIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/selection`,
      },
      {
        id: `p12`,
        name: `排序模式`,
        cardProps: {
          description: {
            title: '排序模式',
            info: '排序模式',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: dndIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: dndIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/dnd`,
      },
      {
        id: `p13`,
        name: `使用ActionSheet进行操作`,
        cardProps: {
          description: {
            title: '使用ActionSheet进行操作',
            info: '使用ActionSheet进行操作',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: actionSheetIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: actionSheetIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/actionsheet`,
      },
      {
        id: `p14`,
        name: `使用Swipe进行操作`,
        cardProps: {
          description: {
            title: '使用Swipe进行操作',
            info: '使用Swipe进行操作',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: swipeActionIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: swipeActionIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/swipeaction`,
      },
      {
        id: `p15`,
        name: `GridList`,
        cardProps: {
          description: {
            title: 'GridList',
            info: 'GridList',
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
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: gridListIndexJSCodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: gridListIndexLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/prsl/gridview`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobilePRSL">
        <p>下拉重置，上拉刷新的操作</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
