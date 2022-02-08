// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import React from 'react';

import { lazy } from 'react';

import BasicLayout from '@/lib/BasicLayout';

const App = lazy(() => import(/* webpackChunkName: "app" */ '@/app'));
const Introduction = lazy(() => import(/* webpackChunkName: "introduction" */ '@/introduction'));
const Changelog = lazy(() => import(/* webpackChunkName: "changelog" */ '@/changelog'));

const Split = lazy(() => import(/* webpackChunkName: "split" */ '@/components/ui/split'));
const Space = lazy(() => import(/* webpackChunkName: "space" */ '@/components/ui/space'));
const ConditionalRender = lazy(() =>
  import(/* webpackChunkName: "conditionalrender" */ '@/components/ui/conditionalrender'),
);
const DelConfirm = lazy(() =>
  import(/* webpackChunkName: "delconfirm" */ '@/components/ui/delconfirm'),
);
const ImportantConfirm = lazy(() =>
  import(/* webpackChunkName: "importantconfirm" */ '@/components/ui/importantconfirm'),
);
const GlobalIndicator = lazy(() =>
  import(/* webpackChunkName: "globalindicator" */ '@/components/ui/globalindicator'),
);
const Spin = lazy(() => import(/* webpackChunkName: "spin" */ '@/components/ui/spin'));
const HistoryBack = lazy(() =>
  import(/* webpackChunkName: "historyback" */ '@/components/ui/historyback'),
);
const SuccessPrompt = lazy(() =>
  import(/* webpackChunkName: "successprompt" */ '@/components/ui/successprompt'),
);
const ErrorPrompt = lazy(() =>
  import(/* webpackChunkName: "errorprompt" */ '@/components/ui/errorprompt'),
);
const WarnPrompt = lazy(() =>
  import(/* webpackChunkName: "warnprompt" */ '@/components/ui/warnprompt'),
);
const ImageLazy = lazy(() =>
  import(/* webpackChunkName: "imagelazy" */ '@/components/ui/imagelazy'),
);
const MessageDialog = lazy(() =>
  import(/* webpackChunkName: "messagedialog" */ '@/components/ui/messagedialog'),
);
const Permission = lazy(() =>
  import(/* webpackChunkName: "permission" */ '@/components/ui/permission'),
);
const Suspense = lazy(() => import(/* webpackChunkName: "suspense" */ '@/components/ui/suspense'));
const TableHeadSearch = lazy(() =>
  import(/* webpackChunkName: "tableheadsearch" */ '@/components/ui/tableheadsearch'),
);
const CSS = lazy(() => import(/* webpackChunkName: "css" */ '@/components/ui/css'));
const OLMap = lazy(() => import(/* webpackChunkName: "olmap" */ '@/components/ui/olmap'));
const FlexLayout = lazy(() =>
  import(/* webpackChunkName: "flexlayout" */ '@/components/ui/flexlayout'),
);
const SplitLayout = lazy(() =>
  import(/* webpackChunkName: "splitlayout" */ '@/components/ui/splitlayout'),
);
const StickupLayout = lazy(() =>
  import(/* webpackChunkName: "stickuplayout" */ '@/components/ui/stickuplayout'),
);
const Surnames = lazy(() => import(/* webpackChunkName: "surnames" */ '@/components/ui/surnames'));
const SliderScale = lazy(() =>
  import(/* webpackChunkName: "sliderscale" */ '@/components/ui/sliderscale'),
);
const Revolving = lazy(() =>
  import(/* webpackChunkName: "revolving" */ '@/components/ui/revolving'),
);
const ScrollLoad = lazy(() =>
  import(/* webpackChunkName: "scrollload" */ '@/components/ui/scrollload'),
);
const JDCategoryTab = lazy(() =>
  import(/* webpackChunkName: "jcategorytab" */ '@/components/ui/jdcategorytab'),
);
const CascadeCompared = lazy(() =>
  import(/* webpackChunkName: "cascadecompared" */ '@/components/ui/cascadecompared'),
);
const SlideLayout = lazy(() =>
  import(/* webpackChunkName: "slidelayout" */ '@/components/ui/slidelayout'),
);
const ContextMenu = lazy(() =>
  import(/* webpackChunkName: "contextmenu" */ '@/components/ui/contextmenu'),
);
const FontSizeSetting = lazy(() =>
  import(/* webpackChunkName: "fontsizesetting" */ '@/components/ui/fontsizesetting'),
);
const SearchTable = lazy(() =>
  import(/* webpackChunkName: "searchtable" */ '@/components/ui/searchtable'),
);
const FormItemCreator = lazy(() =>
  import(/* webpackChunkName: "formitemcreator" */ '@/components/ui/formitemcreator'),
);
const TableList = lazy(() =>
  import(/* webpackChunkName: "tablelist" */ '@/components/ui/tablelist'),
);
const Popup = lazy(() => import(/* webpackChunkName: "popup" */ '@/components/ui/popup'));
const BackTopAnimation = lazy(() =>
  import(/* webpackChunkName: "backtopanimation" */ '@/components/ui/backtopanimation'),
);
const PullRefresh = lazy(() =>
  import(/* webpackChunkName: "pullrefresh" */ '@/components/ui/pullrefresh'),
);
const Notification = lazy(() =>
  import(/* webpackChunkName: "notification" */ '@/components/ui/notification'),
);
const SwipeOut = lazy(() => import(/* webpackChunkName: "swipeout" */ '@/components/ui/swipeout'));
const PolygonSelection = lazy(() =>
  import(/* webpackChunkName: "swipeout" */ '@/components/ui/polygonselection'),
);
const PlayGround = lazy(() =>
  import(/* webpackChunkName: "playground" */ '@/components/ui/playground'),
);
const BMap = lazy(() => import(/* webpackChunkName: "bmap" */ '@/components/ui/bmap'));

const Hooks = lazy(() => import(/* webpackChunkName: "hooks" */ '@/components/ui/hooks'));

const AdapterScreen = lazy(() =>
  import(/* webpackChunkName: "adapterscreen" */ '@/components/util/adapterscreen'),
);
const Decorators = lazy(() =>
  import(/* webpackChunkName: "decorators" */ '@/components/util/decorators'),
);
const Dict = lazy(() => import(/* webpackChunkName: "dict" */ '@/components/util/dict'));
const Emitter = lazy(() => import(/* webpackChunkName: "emitter" */ '@/components/util/emitter'));
const Preferences = lazy(() =>
  import(/* webpackChunkName: "preferences" */ '@/components/util/preferences'),
);
const Intl = lazy(() => import(/* webpackChunkName: "intl" */ '@/components/util/intl'));
const NotNull = lazy(() => import(/* webpackChunkName: "notnull" */ '@/components/util/notnull'));
const Util = lazy(() => import(/* webpackChunkName: "util" */ '@/components/util/util'));
const WatchMemoized = lazy(() =>
  import(/* webpackChunkName: "watchmemoized" */ '@/components/util/watchmemoized'),
);
const Ajax = lazy(() => import(/* webpackChunkName: "ajax" */ '@/components/util/ajax'));
const Domain = lazy(() => import(/* webpackChunkName: "domain" */ '@/components/util/domain'));
const Resource = lazy(() =>
  import(/* webpackChunkName: "resource" */ '@/components/util/resource'),
);
const Browsersniff = lazy(() =>
  import(/* webpackChunkName: "browsersniff" */ '@/components/util/browsersniff'),
);
const Validator = lazy(() =>
  import(/* webpackChunkName: "validator" */ '@/components/util/validator'),
);
const ReactUtil = lazy(() =>
  import(/* webpackChunkName: "reactutil" */ '@/components/util/reactutil'),
);

const Echarts = lazy(() =>
  import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'),
);
const MapTalks = lazy(() =>
  import(/* webpackChunkName: "gis" */ '@/components/gallery/gis/maptalks'),
);
const BMaps = lazy(() => import(/* webpackChunkName: "gis" */ '@/components/gallery/gis/bmap'));

const Graph = lazy(() => import(/* webpackChunkName: "graph" */ '@/components/gallery/graph'));

const Demo = lazy(() => import(/* webpackChunkName: "demo" */ '@/components/ui/demo'));

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
            ],
          },
        ],
      },
    ],
  },
];
