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
            title: 'PRSLProps',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'rowKey',
                desc: '',
                type: 'string',
                defaultVal: 'dataSource中的primary key',
              },
              {
                params: 'isUseLocal',
                desc: '是否使用本地数据',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'loadData',
                desc: '首次加载数据',
                type: '(params: LoadDataSourceParams) => Promise<DataSource>',
                defaultVal: '',
              },
              {
                params: 'renderEmpty',
                desc: '自定义无数据UI',
                type: '() => ReactElement',
                defaultVal: '',
              },
              {
                params: 'renderOffLine',
                desc: '自定义无网络UI',
                type: '() => ReactElement',
                defaultVal: '',
              },
              {
                params: 'isUseFirstLoading',
                desc: '是否使用首次加载loading',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'firstLoading',
                desc: '首次渲染UI',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'isLoading',
                desc: '是否是加载中',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'pullToRefreshProps',
                desc: '下拉刷新的配置',
                type: "Omit<PullToRefreshProps, 'onRefresh'>",
                defaultVal: '',
              },
              {
                params: 'onRefreshBefore',
                desc: '下拉刷新之前(返回then则执行onRefresh)',
                type: '(params: LoadDataSourceParams) => Promise<void>',
                defaultVal: '',
              },
              {
                params: 'onRefresh',
                desc: '下拉刷新(完全重置)',
                type: '(params: LoadDataSourceParams) => Promise<DataSource>',
                defaultVal: '',
              },
              {
                params: 'scrollLoadProps',
                desc: 'ScrollLoad的配置',
                type: 'ScrollLoadProps',
                defaultVal: '',
              },
              {
                params: 'onLoadMore',
                desc: '加载更多hook',
                type: `
                  (
                    params: LoadDataSourceParams & {
                      handle?: (status?: string) => void;
                    },
                  ) => Promise<DataSource>
                `,
                defaultVal: '',
              },
              {
                params: 'loadMoreLoading',
                desc: '自定义加载更多loading',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'backTopAnimationProps',
                desc: '',
                type: 'BackTopAnimationProps',
                defaultVal: '',
              },
              {
                params: 'isUseBackTopAnimation',
                desc: '是否使用backTopAnimation',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'scrollLoadBeforeRender',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'scrollLoadAfterRender',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerBeforeRender',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerAfterRender',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'scrollLoadBeforeRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'scrollLoadBeforeRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'scrollLoadAfterRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'scrollLoadAfterRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerBeforeRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerBeforeRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerAfterRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'scrollLoadInnerAfterRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'paging',
                desc: '',
                type: `
                  | boolean
                  | {
                      page: number;
                      defaultPageSize: number;
                    }
                `,
                defaultVal: '',
              },
              {
                params: 'showKeyWordSearchBar',
                desc: '是否显示搜索框',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'searchKeyWordWrapperClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'searchKeyWordWrapperStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'showToolBar',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'actionTriggerMode',
                desc: '操作项弹出模式',
                type: "'ActionSheet' | 'Swipe'",
                defaultVal: '',
              },
              {
                params: 'renderActionSheetTrigger',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'onAction',
                desc: '',
                type: '(record: Record<string, any>, rowIndex: number) => ActionsConfig',
                defaultVal: '',
              },
              {
                params: 'selectionLabel',
                desc: '控制选择的名称',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'selectionFinishLabel',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'selectionCancelLabel',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'isUseSelection',
                desc: '是否有选择的功能',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'selectedRowKeys',
                desc: '选择的数据',
                type: '(string | number)[]',
                defaultVal: '',
              },
              {
                params: 'selectionMultiple',
                desc: '是否是多选模式',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'onSelectChange',
                desc: '选择发生改变的hook',
                type: `
                  (
                  // 选择的keys
                  selectedRowKeys: (string | number)[],
                  // 选择的rows
                  selectedRows: Record<string, any>[],
                  // 发生改变的keys
                  changeRowKeys: (string | number)[],
                  info: {
                    type: 'select' | 'unselect';
                  },
                ) => void
                `,
                defaultVal: '',
              },

              {
                params: 'dndLabel',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'dndFinishLabel',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'dndCancelLabel',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'isUseDND',
                desc: '是否有DND的功能',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'dndDragHandle',
                desc: '自定义dragHandle',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'onDNDChange',
                desc: '排序的改变',
                type: '(sortChangeValue: DNDChangeValue) => void',
                defaultVal: '',
              },
              {
                params: 'headerExtra',
                desc: '头的扩展',
                type: '(defaultUI: ReactElement[], mode: ModeType) => ReactNode',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '内容体',
                type: '(params: { dataSource: Record<string, any>[] }) => ReactNode',
                defaultVal: '',
              },
              {
                params: 'beforeRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'beforeRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'afterRenderClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'afterRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'beforeRender',
                desc: '内容体之前的渲染',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'afterRender',
                desc: '内容体之后的渲染',
                type: '() => ReactNode',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FilterConfigItem',
            data: [
              {
                params: 'key',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'name',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'label',
                desc: '',
                type: 'string | ReactElement',
                defaultVal: '',
              },
              {
                params: 'formItemProps',
                desc: '',
                type: 'FormItemProps',
                defaultVal: '',
              },
              {
                params: 'render',
                desc: '',
                type: '(formIns: FormInstance<any>) => ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SortConfigItem',
            data: [
              {
                params: 'name',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'label',
                desc: '',
                type: 'string | ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'DefaultSortValue',
            data: [
              {
                params: 'name',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'order',
                desc: '',
                type: "'asc' | 'desc' | '' | undefined | null",
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ViewSettingConfigItem',
            data: [
              {
                params: 'name',
                desc: '',
                type: "'normal' | 'multi' | 'waterfal' | string",
                defaultVal: '',
              },
              {
                params: 'label',
                desc: '',
                type: 'string | ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ActionConfigItem',
            data: [
              {
                params: '',
                desc: '',
                type: 'SheetAction | SwiperAction',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerMode',
            data: [
              {
                params: '',
                desc: '',
                type: "'popup-top' | 'popup-bottom' | 'modal' | 'dialog' | 'adhere-popup'",
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerProps',
            data: [
              {
                params: '',
                desc: '',
                type: `
                  | PopupTriggerProps<any>
                  | ModalTriggerProps<any>
                  | DialogTriggerProps<any>
                  | AdherePopupTriggerProps
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SearchKeyWordProps',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'searchKeyWordBarProps',
                desc: '',
                type: 'SearchBarProps',
                defaultVal: '',
              },
              {
                params: 'searchKeyWordMode',
                desc: '关键字搜索模式',
                type: "'normal' | 'history'",
                defaultVal: '',
              },
              {
                params: 'searchKeyWordHistoryMaxSize',
                desc: '搜索历史最大历史数量，超过则替换最早的',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'isSearchKeyWordHistoryIntoStore',
                desc: '是否将搜索历史放入store',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'searchKeyWordHistoryStoreType',
                desc: '存入store的类型',
                type: "'session' | 'local'",
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'defaultSearchKeyWord',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onSearch',
                desc: '',
                type: '(value: string) => void',
                defaultVal: '',
              },
              {
                params: 'onSearchClear',
                desc: '',
                type: '() => void',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ToolbarConfigItem',
            data: [
              {
                params: 'key',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'label',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'onClick',
                desc: '',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ToolBarProps',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'showTotal',
                desc: '是否显示总条数',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'toolbarWrapperClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'toolbarWrapperStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderToolBar',
                desc: '渲染工具栏',
                type: `
                  (
                    defaultToolItems: ReactElement[],
                    defaultShowTotalElement?: ReactNode,
                    disabled?: boolean,
                  ) => ReactNode
                `,
                defaultVal: '',
              },
              {
                params: 'afterToolBarRender',
                desc: '工具栏之前的渲染',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'beforeToolBarRender',
                desc: '工具栏之后的渲染',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'beforeToolBarRenderClassName',
                desc: '工具栏之前的渲染',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'beforeToolBarRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'afterToolBarRenderClassName',
                desc: '工具栏之后的渲染',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'afterToolBarRenderStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'toolbarCollapseCount',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'toolbarConfig',
                desc: '',
                type: '(defaultElements: ReactElement[]) => (ToolbarConfigItem | ReactElement)[]',
                defaultVal: '',
              },
              {
                params: 'isShowFilterTrigger',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'renderFilterTrigger',
                desc: '渲染筛选按钮',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'isShowSortTrigger',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'renderSortTrigger',
                desc: '渲染排序按钮',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'isShowViewSettingTrigger',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'renderViewSettingTrigger',
                desc: '渲染视图设置按钮',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'total',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FilterItemProps',
            data: [
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'filterTriggerMode',
                desc: 'Trigger的弹出方式',
                type: 'TriggerMode',
                defaultVal: '',
              },
              {
                params: 'filterTriggerProps',
                desc: 'Trigger的配置',
                type: 'TriggerProps',
                defaultVal: '',
              },
              {
                params: 'renderFilter',
                desc: '渲染筛选UI',
                type: '(defaultFilterValues: Record<string, any>) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'filterFormProps',
                desc: '搜索表单的props',
                type: 'FormProps',
                defaultVal: '',
              },
              {
                params: 'filterConfig',
                desc: '筛选配置',
                type: 'FilterConfigItem[]',
                defaultVal: '',
              },
              {
                params: 'defaultFilterValues',
                desc: '缺省的筛选数据',
                type: 'Record<string, any>',
                defaultVal: '',
              },
              {
                params: 'onFilter',
                desc: '',
                type: `
                  (
                    filterData?: FilterItemProps['defaultFilterValues'],
                  ) => Promise<DataSource> | Promise<void>
                `,
                defaultVal: '',
              },
              {
                params: 'onFilterReset',
                desc: '',
                type: '() => Promise<DataSource> | Promise<void>',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SortItemProps',
            data: [
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'sortTriggerMode',
                desc: '排序UI的弹出方式',
                type: 'TriggerMode',
                defaultVal: '',
              },
              {
                params: 'filterTriggerProps',
                desc: 'Trigger的配置',
                type: 'TriggerProps',
                defaultVal: '',
              },
              {
                params: 'renderSort',
                desc: '渲染排序UI',
                type: '(defaultFilterValues: DefaultSortValue) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'sortConfig',
                desc: '排序配置',
                type: 'SortConfigItem[]',
                defaultVal: '',
              },
              {
                params: 'defaultSortValues',
                desc: '缺省的排序数据',
                type: 'DefaultSortValue[]',
                defaultVal: '',
              },
              {
                params: 'onSort',
                desc: '进行排序的hook',
                type: '(values: DefaultSortValue[]) => Promise<DataSource> | Promise<void>',
                defaultVal: '',
              },
              {
                params: 'onSortReset',
                desc: '重置排序的hook',
                type: `
                  () => Promise<DataSource> | Promise<void>
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ViewSettingProps',
            data: [
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: '(defaultUI: ReactElement) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'viewSettingTriggerMode',
                desc: '视图设置UI的弹出方式',
                type: 'TriggerMode',
                defaultVal: '',
              },
              {
                params: 'viewSettingTriggerProps',
                desc: 'Trigger的配置',
                type: 'TriggerProps',
                defaultVal: '',
              },
              {
                params: 'renderViewSetting',
                desc: '渲染视图设置UI',
                type: '(defaultViewSettingValue: string) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'viewSettingConfig',
                desc: '视图设置配置',
                type: 'ViewSettingConfigItem[]',
                defaultVal: '',
              },
              {
                params: 'defaultViewSettingValue',
                desc: '缺省的视图设置数据',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onViewSetting',
                desc: '视图设置切换的hook',
                type: '(values: string) => Promise<void>',
                defaultVal: '',
              },
              {
                params: 'onViewSettingReset',
                desc: '视图设置重置的hook',
                type: `
                  () => Promise<void>
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PRSLItemProps',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'actions',
                desc: '',
                type: 'ActionConfigItem[]',
                defaultVal: '',
              },
              {
                params: 'record',
                desc: '',
                type: 'Record<string, any>',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: '(params: { actionSheetTrigger?: ReactNode }) => ReactNode',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'DataSource',
            data: [
              {
                params: 'data',
                desc: '',
                type: 'Record<string, any>[]',
                defaultVal: '',
              },
              {
                params: 'total',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'LoadDataSourceParams',
            data: [
              {
                params: 'page',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'pageSize',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'searchKeyWord',
                desc: '',
                type: "SearchKeyWordProps['defaultSearchKeyWord']",
                defaultVal: '',
              },
              {
                params: 'filterValues',
                desc: '',
                type: "FilterItemProps['defaultFilterValues']",
                defaultVal: '',
              },
              {
                params: 'sortValues',
                desc: '',
                type: "SortItemProps['defaultSortValues']",
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'getScrollEl',
                desc: '',
                modifier: 'global',
                params: [],
                returnType: 'HTMLElement',
                returnDesc: '',
              },
              {
                name: 'scrollLoadHideAll',
                desc: '',
                modifier: 'global',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'resetAll',
                desc: '',
                modifier: 'global',
                params: [],
                returnType: 'any',
                returnDesc: '',
              },
              {
                name: 'resetPagination',
                desc: '',
                modifier: 'global',
                params: [],
                returnType: 'any',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
