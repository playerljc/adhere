import React from 'react';

import { lazy } from 'react';

import BasicLayout from '@/lib/BasicLayout';

const App = lazy(() => import(/* webpackChunkName: "app" */ '@/app'));
const Introduction = lazy(() => import(/* webpackChunkName: "introduction" */ '@/introduction'));
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
const JCategoryTab = lazy(() =>
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
const Echarts = lazy(() =>
  import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'),
);
const MapTalks = lazy(() =>
  import(/* webpackChunkName: "echarts" */ '@/components/gallery/gis/maptalks'),
);

const Graph = lazy(() => import(/* webpackChunkName: "graph" */ '@/components/gallery/graph'));

export default () => [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/adhere',
      },
      {
        path: '/adhere',
        component: BasicLayout,
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
            path: '/adhere/ui',
            name: 'UI',
            routes: [
              {
                path: '/',
                redirect: '/adhere/ui/split',
              },
              {
                path: '/adhere/ui/split',
                name: 'Split',
                component: Split,
              },
              {
                path: '/adhere/ui/space',
                name: 'Space',
                component: Space,
              },
              {
                path: '/adhere/ui/conditionalrender',
                name: 'ConditionalRender',
                component: ConditionalRender,
              },
              {
                path: '/adhere/ui/delconfirm',
                name: 'DelConfirm',
                component: DelConfirm,
              },
              {
                path: '/adhere/ui/importantconfirm',
                name: 'ImportantConfirm',
                component: ImportantConfirm,
              },
              {
                path: '/adhere/ui/globalindicator',
                name: 'GlobalIndicator',
                component: GlobalIndicator,
              },
              {
                path: '/adhere/ui/spin',
                name: 'Spin',
                component: Spin,
              },
              {
                path: '/adhere/ui/historyback',
                name: 'HistoryBack',
                component: HistoryBack,
              },
              {
                path: '/adhere/ui/successprompt',
                name: 'SuccessPrompt',
                component: SuccessPrompt,
              },
              {
                path: '/adhere/ui/errorprompt',
                name: 'ErrorPrompt',
                component: ErrorPrompt,
              },
              {
                path: '/adhere/ui/warnprompt',
                name: 'WarnPrompt',
                component: WarnPrompt,
              },
              {
                path: '/adhere/ui/imagelazy',
                name: 'ImageLazy',
                component: ImageLazy,
              },
              {
                path: '/adhere/ui/messagedialog',
                name: 'MessageDialog',
                component: MessageDialog,
              },
              {
                path: '/adhere/ui/permission',
                name: 'Permission',
                component: Permission,
              },
              {
                path: '/adhere/ui/suspense',
                name: 'Suspense',
                component: Suspense,
              },
              {
                path: '/adhere/ui/tableheadsearch',
                name: 'TableHeadSearch',
                component: TableHeadSearch,
              },
              {
                path: '/adhere/ui/css',
                name: 'CSS',
                component: CSS,
              },
              {
                path: '/adhere/ui/olmap',
                name: 'OLMap',
                component: OLMap,
              },
              {
                path: '/adhere/ui/flexlayout',
                name: 'FlexLayout',
                component: FlexLayout,
              },
              {
                path: '/adhere/ui/splitlayout',
                name: 'SplitLayout',
                component: SplitLayout,
              },
              {
                path: '/adhere/ui/stickuplayout',
                name: 'StickupLayout',
                component: StickupLayout,
              },
              {
                path: '/adhere/ui/surnames',
                name: 'Surnames',
                component: Surnames,
              },
              {
                path: '/adhere/ui/sliderscale',
                name: 'SliderScale',
                component: SliderScale,
              },
              {
                path: '/adhere/ui/revolving',
                name: 'Revolving',
                component: Revolving,
              },
              {
                path: '/adhere/ui/scrollload',
                name: 'ScrollLoad',
                component: ScrollLoad,
              },
              {
                path: '/adhere/ui/jcategorytab',
                name: 'JCategoryTab',
                component: JCategoryTab,
              },
              {
                path: '/adhere/ui/cascadecompared',
                name: 'CascadeCompared',
                component: CascadeCompared,
              },
              {
                path: '/adhere/ui/slidelayout',
                name: 'SlideLayout',
                component: SlideLayout,
              },
              {
                path: '/adhere/ui/contextmenu',
                name: 'ContextMenu',
                component: ContextMenu,
              },
              {
                path: '/adhere/ui/fontsizesetting',
                name: 'FontSizeSetting',
                component: FontSizeSetting,
              },
              {
                path: '/adhere/ui/searchtable',
                name: 'SearchTable',
                component: SearchTable,
              },
              {
                path: '/adhere/ui/formitemcreator',
                name: 'FormItemCreator',
                component: FormItemCreator,
              },
              {
                path: '/adhere/ui/tablelist',
                name: 'TableList',
                component: TableList,
              },
              {
                path: '/adhere/ui/popup',
                name: 'Popup',
                component: Popup,
              },
              {
                path: '/adhere/ui/backtopanimation',
                name: 'BackTopAnimation',
                component: BackTopAnimation,
              },
              {
                path: '/adhere/ui/pullrefresh',
                name: 'PullRefresh',
                component: PullRefresh,
              },
              {
                path: '/adhere/ui/notification',
                name: 'Notification',
                component: Notification,
              },
              {
                path: '/adhere/ui/swipeout',
                name: 'SwipeOut',
                component: SwipeOut,
              },
              {
                path: '/adhere/ui/polygonselection',
                name: 'PolygonSelection',
                component: PolygonSelection,
              },
              {
                path: '/adhere/ui/playground',
                name: 'PlayGround',
                component: PlayGround,
              },
              {
                path: '/adhere/ui/bmap',
                name: 'BMap',
                component: BMap,
              },
            ],
          },
          {
            path: '/adhere/util',
            name: 'Util',
            routes: [
              {
                path: '/',
                redirect: '/adhere/util/adapterscreen',
              },
              {
                path: '/adhere/util/adapterscreen',
                name: 'AdapterScreen',
                component: AdapterScreen,
              },
              {
                path: '/adhere/util/decorators',
                name: 'Decorators',
                component: Decorators,
              },
              {
                path: '/adhere/util/dict',
                name: 'Dict',
                component: Dict,
              },
              {
                path: '/adhere/util/emitter',
                name: 'Emitter',
                component: Emitter,
              },
              {
                path: '/adhere/util/preferences',
                name: 'Preferences',
                component: Preferences,
              },
              {
                path: '/adhere/util/intl',
                name: 'Intl',
                component: Intl,
              },
              {
                path: '/adhere/util/notnull',
                name: 'NotNull',
                component: NotNull,
              },
              {
                path: '/adhere/util/util',
                name: 'Util',
                component: Util,
              },
              {
                path: '/adhere/util/watchmemoized',
                name: 'WatchMemoized',
                component: WatchMemoized,
              },
              {
                path: '/adhere/util/ajax',
                name: 'Ajax',
                component: Ajax,
              },
              {
                path: '/adhere/util/domain',
                name: 'Domain',
                component: Domain,
              },
            ],
          },
          {
            path: '/adhere/gallery',
            name: 'Gallery',
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
        ],
      },
    ],
  },
];
