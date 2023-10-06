// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import IframeServer from '@/components/util/iframeio/server';
import Components from '@/config/router/routerComponentRegister';
import BasicLayout from '@/lib/BasicLayout';

const {
  App,
  Introduction,
  Changelog,
  Split,
  Space,
  ConditionalRender,
  DelConfirm,
  ImportantConfirm,
  GlobalIndicator,
  Spin,
  HistoryBack,
  SuccessPrompt,
  ErrorPrompt,
  WarnPrompt,
  ImageLazy,
  MessageDialog,
  Permission,
  Suspense,
  TableHeadSearch,
  CSS,
  OLMap,
  FlexLayout,
  SplitLayout,
  StickupLayout,
  Surnames,
  SliderScale,
  Revolving,
  ScrollLoad,
  JDCategoryTab,
  CascadeCompared,
  SlideLayout,
  ContextMenu,
  FontSizeSetting,
  SearchTable,
  SearchList,
  FormItemCreator,
  TableList,
  Popup,
  BackTopAnimation,
  PullRefresh,
  Notification,
  SwipeOut,
  PolygonSelection,
  PlayGround,
  BMap,
  Hooks,
  AdapterScreen,
  Decorators,
  Dict,
  Emitter,
  FieldGeneratorToDict,
  AntHOC,
  Preferences,
  Intl,
  NotNull,
  Util,
  WatchMemoized,
  Ajax,
  Domain,
  Resource,
  Browsersniff,
  Validator,
  ReactUtil,
  Echarts,
  MapTalks,
  BMaps,
  Graph,
  Demo,
  ForceUpdate,
  TableGridLayout,
  WritingBoard,
  ContourBlock,
  DateDisplay,
  Comment,
  ConfigProvider,
  IframeIO,
  RichTextSandBox,
  Ellipsis,
  Expression,
  MobileSuccessPrompt,
  MobileErrorPrompt,
  MobileWarnPrompt,
  MobileGlobalIndicator,
  MobileDelConfirm,
  MobileImportantConfirm,
  MobileTabs,
} = Components;

export default () => [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/adhere/introduction',
      },
      {
        path: '/adhere/introduction',
        name: '简介',
        component: Introduction,
      },
      {
        path: '/adhere/changelog',
        name: '更新日志',
        component: Changelog,
      },
      {
        path: '/adhere/gallery',
        component: BasicLayout,
        routes: [
          {
            path: '/',
            redirect: '/adhere/gallery/echarts',
          },
          {
            path: '/adhere/gallery/echarts',
            name: 'Echarts',
            component: Echarts,
          },
          {
            path: '/adhere/gallery/gis',
            name: 'GIS',
            routes: [
              {
                path: '/',
                redirect: '/adhere/gallery/gis/maptalks',
              },
              {
                path: '/adhere/gallery/gis/bmap',
                name: 'BMaps',
                component: BMaps,
              },
              {
                path: '/adhere/gallery/gis/maptalks',
                name: 'MapTalks',
                component: MapTalks,
              },
            ],
          },
          {
            path: '/adhere/gallery/graph',
            name: 'Graph',
            component: Graph,
          },
        ],
      },
      {
        path: '/adhere/component',
        component: BasicLayout,
        routes: [
          {
            path: '/',
            redirect: '/adhere/component/ui',
          },
          {
            path: '/adhere/component/ui',
            name: 'UI',
            routes: [
              {
                path: '/',
                redirect: '/adhere/component/ui/split',
              },
              {
                path: '/adhere/component/ui/demo',
                name: 'Demo',
                component: Demo,
              },
              {
                path: '/adhere/component/ui/split',
                name: 'Split',
                component: Split,
              },
              {
                path: '/adhere/component/ui/space',
                name: 'Space',
                component: Space,
              },
              {
                path: '/adhere/component/ui/conditionalrender',
                name: 'ConditionalRender',
                component: ConditionalRender,
              },
              {
                path: '/adhere/component/ui/delconfirm',
                name: 'DelConfirm',
                component: DelConfirm,
              },
              {
                path: '/adhere/component/ui/importantconfirm',
                name: 'ImportantConfirm',
                component: ImportantConfirm,
              },
              {
                path: '/adhere/component/ui/globalindicator',
                name: 'GlobalIndicator',
                component: GlobalIndicator,
              },
              {
                path: '/adhere/component/ui/spin',
                name: 'Spin',
                component: Spin,
              },
              {
                path: '/adhere/component/ui/historyback',
                name: 'HistoryBack',
                component: HistoryBack,
              },
              {
                path: '/adhere/component/ui/successprompt',
                name: 'SuccessPrompt',
                component: SuccessPrompt,
              },
              {
                path: '/adhere/component/ui/errorprompt',
                name: 'ErrorPrompt',
                component: ErrorPrompt,
              },
              {
                path: '/adhere/component/ui/warnprompt',
                name: 'WarnPrompt',
                component: WarnPrompt,
              },
              {
                path: '/adhere/component/ui/imagelazy',
                name: 'ImageLazy',
                component: ImageLazy,
              },
              {
                path: '/adhere/component/ui/messagedialog',
                name: 'MessageDialog',
                component: MessageDialog,
              },
              {
                path: '/adhere/component/ui/permission',
                name: 'Permission',
                component: Permission,
              },
              {
                path: '/adhere/component/ui/suspense',
                name: 'Suspense',
                component: Suspense,
              },
              {
                path: '/adhere/component/ui/tableheadsearch',
                name: 'TableHeadSearch',
                component: TableHeadSearch,
              },
              {
                path: '/adhere/component/ui/css',
                name: 'CSS',
                component: CSS,
              },
              {
                path: '/adhere/component/ui/olmap',
                name: 'OLMap',
                component: OLMap,
              },
              {
                path: '/adhere/component/ui/flexlayout',
                name: 'FlexLayout',
                component: FlexLayout,
              },
              {
                path: '/adhere/component/ui/splitlayout',
                name: 'SplitLayout',
                component: SplitLayout,
              },
              {
                path: '/adhere/component/ui/stickuplayout',
                name: 'StickupLayout',
                component: StickupLayout,
              },
              {
                path: '/adhere/component/ui/surnames',
                name: 'Surnames',
                component: Surnames,
              },
              {
                path: '/adhere/component/ui/sliderscale',
                name: 'SliderScale',
                component: SliderScale,
              },
              {
                path: '/adhere/component/ui/revolving',
                name: 'Revolving',
                component: Revolving,
              },
              {
                path: '/adhere/component/ui/scrollload',
                name: 'ScrollLoad',
                component: ScrollLoad,
              },
              {
                path: '/adhere/component/ui/jdcategorytab',
                name: 'JDCategoryTab',
                component: JDCategoryTab,
              },
              {
                path: '/adhere/component/ui/cascadecompared',
                name: 'CascadeCompared',
                component: CascadeCompared,
              },
              {
                path: '/adhere/component/ui/slidelayout',
                name: 'SlideLayout',
                component: SlideLayout,
              },
              {
                path: '/adhere/component/ui/contextmenu',
                name: 'ContextMenu',
                component: ContextMenu,
              },
              {
                path: '/adhere/component/ui/fontsizesetting',
                name: 'FontSizeSetting',
                component: FontSizeSetting,
              },
              {
                path: '/adhere/component/ui/searchtable',
                name: 'SearchTable',
                component: SearchTable,
              },
              {
                path: '/adhere/component/ui/searchlist',
                name: 'SearchList',
                component: SearchList,
              },
              {
                path: '/adhere/component/ui/formitemcreator',
                name: 'FormItemCreator',
                component: FormItemCreator,
              },
              {
                path: '/adhere/component/ui/tablelist',
                name: 'TableList',
                component: TableList,
              },
              {
                path: '/adhere/component/ui/popup',
                name: 'Popup',
                component: Popup,
              },
              {
                path: '/adhere/component/ui/backtopanimation',
                name: 'BackTopAnimation',
                component: BackTopAnimation,
              },
              {
                path: '/adhere/component/ui/pullrefresh',
                name: 'PullRefresh',
                component: PullRefresh,
              },
              {
                path: '/adhere/component/ui/notification',
                name: 'Notification',
                component: Notification,
              },
              {
                path: '/adhere/component/ui/swipeout',
                name: 'SwipeOut',
                component: SwipeOut,
              },
              {
                path: '/adhere/component/ui/polygonselection',
                name: 'PolygonSelection',
                component: PolygonSelection,
              },
              {
                path: '/adhere/component/ui/playground',
                name: 'PlayGround',
                component: PlayGround,
              },
              {
                path: '/adhere/component/ui/bmap',
                name: 'BMap',
                component: BMap,
              },
              {
                path: '/adhere/component/ui/hooks',
                name: 'Hooks',
                component: Hooks,
              },
              {
                path: '/adhere/component/ui/forceupdate',
                name: 'ForceUpdate',
                component: ForceUpdate,
              },
              {
                path: '/adhere/component/ui/tablegridlayout',
                name: 'TableGridLayout',
                component: TableGridLayout,
              },
              {
                path: '/adhere/component/ui/writingboard',
                name: 'WritingBoard',
                component: WritingBoard,
              },
              {
                path: '/adhere/component/ui/contourblock',
                name: 'ContourBlock',
                component: ContourBlock,
              },
              {
                path: '/adhere/component/ui/datedisplay',
                name: 'DateDisplay',
                component: DateDisplay,
              },
              {
                path: '/adhere/component/ui/comment',
                name: 'Comment',
                component: Comment,
              },
              {
                path: '/adhere/component/ui/configprovider',
                name: 'ConfigProvider',
                component: ConfigProvider,
              },
              // {
              //   path: '/adhere/component/ui/antdformitem',
              //   name: 'AntdFormItem',
              //   component: AntdFormItem,
              // },
              {
                path: '/adhere/component/ui/anthoc',
                name: 'AntHOC',
                component: AntHOC,
              },
              {
                path: '/adhere/component/ui/fieldgeneratortodict',
                name: 'FieldGeneratorToDict',
                component: FieldGeneratorToDict,
              },
              {
                path: '/adhere/component/ui/richtextsandbox',
                name: 'RichTextSandBox',
                component: RichTextSandBox,
              },
              {
                path: '/adhere/component/ui/ellipsis',
                name: 'Ellipsis',
                component: Ellipsis,
              },
              {
                path: '/adhere/component/ui/expression',
                name: 'Expression',
                component: Expression,
              },
            ],
          },
          {
            path: '/adhere/component/util',
            name: 'Util',
            routes: [
              {
                path: '/',
                redirect: '/adhere/component/util/adapterscreen',
              },
              {
                path: '/adhere/component/util/adapterscreen',
                name: 'AdapterScreen',
                component: AdapterScreen,
              },
              {
                path: '/adhere/component/util/decorators',
                name: 'Decorators',
                component: Decorators,
              },
              {
                path: '/adhere/component/util/dict',
                name: 'Dict',
                component: Dict,
              },
              {
                path: '/adhere/component/util/emitter',
                name: 'Emitter',
                component: Emitter,
              },
              {
                path: '/adhere/component/util/preferences',
                name: 'Preferences',
                component: Preferences,
              },
              {
                path: '/adhere/component/util/intl',
                name: 'Intl',
                component: Intl,
              },
              {
                path: '/adhere/component/util/notnull',
                name: 'NotNull',
                component: NotNull,
              },
              {
                path: '/adhere/component/util/util',
                name: 'Util',
                component: Util,
              },
              {
                path: '/adhere/component/util/watchmemoized',
                name: 'WatchMemoized',
                component: WatchMemoized,
              },
              {
                path: '/adhere/component/util/ajax',
                name: 'Ajax',
                component: Ajax,
              },
              {
                path: '/adhere/component/util/domain',
                name: 'Domain',
                component: Domain,
              },
              {
                path: '/adhere/component/util/resource',
                name: 'Resource',
                component: Resource,
              },
              {
                path: '/adhere/component/util/browsersniff',
                name: 'Browsersniff',
                component: Browsersniff,
              },
              {
                path: '/adhere/component/util/validator',
                name: 'Validator',
                component: Validator,
              },
              {
                path: '/adhere/component/util/reactutil',
                name: 'ReactUtil',
                component: ReactUtil,
              },
              {
                path: '/adhere/component/util/iframeio',
                name: 'IframeIO',
                component: IframeIO,
              },
            ],
          },
          {
            path: '/adhere/component/mobile',
            name: 'Mobile',
            routes: [
              {
                path: '/',
                redirect: '/adhere/component/mobile/successprompt',
              },
              {
                path: '/adhere/component/mobile/successprompt',
                name: 'SuccessPrompt',
                component: MobileSuccessPrompt,
              },
              {
                path: '/adhere/component/mobile/errorprompt',
                name: 'ErrorPrompt',
                component: MobileErrorPrompt,
              },
              {
                path: '/adhere/component/mobile/warnprompt',
                name: 'WarnPrompt',
                component: MobileWarnPrompt,
              },
              {
                path: '/adhere/component/mobile/globalindicator',
                name: 'GlobalIndicator',
                component: MobileGlobalIndicator,
              },
              {
                path: '/adhere/component/mobile/delconfirm',
                name: 'DelConfirm',
                component: MobileDelConfirm,
              },
              {
                path: '/adhere/component/mobile/importantconfirm',
                name: 'ImportantConfirm',
                component: MobileImportantConfirm,
              },
              {
                path: '/adhere/component/mobile/tabs',
                name: 'Tabs',
                component: MobileTabs,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/iframeServer',
    component: IframeServer,
  },
];
