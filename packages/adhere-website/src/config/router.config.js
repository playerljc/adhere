import { lazy } from 'react';

import BasicLayout from '@/lib/BasicLayout';

// const App = lazy(() => import('@/app'));
// const Introduction = lazy(() => import('@/introduction'));
// const Split = lazy(() => import('@/components/ui/split'));
// const Space = lazy(() => import('@/components/ui/space'));
// const ConditionalRender = lazy(() => import('@/components/ui/conditionalrender'));
// const DelConfirm = lazy(() => import('@/components/ui/delconfirm'));
// const ImportantConfirm = lazy(() => import('@/components/ui/importantconfirm'));
// const GlobalIndicator = lazy(() => import('@/components/ui/globalindicator'));
// const Spin = lazy(() => import('@/components/ui/spin'));
// const HistoryBack = lazy(() => import('@/components/ui/historyback'));
// const SuccessPrompt = lazy(() => import('@/components/ui/successprompt'));
// const ErrorPrompt = lazy(() => import('@/components/ui/errorprompt'));
// const WarnPrompt = lazy(() => import('@/components/ui/warnprompt'));
// const ImageLazy = lazy(() => import('@/components/ui/imagelazy'));
// const MessageDialog = lazy(() => import('@/components/ui/messagedialog'));
// const Permission = lazy(() => import('@/components/ui/permission'));
// const Suspense = lazy(() => import('@/components/ui/suspense'));
// const TableHeadSearch = lazy(() => import('@/components/ui/tableheadsearch'));
// const CSS = lazy(() => import('@/components/ui/css'));
// const OLMap = lazy(() => import('@/components/ui/olmap'));
// const FlexLayout = lazy(() => import('@/components/ui/flexlayout'));
// const SplitLayout = lazy(() => import('@/components/ui/splitlayout'));
// const StickupLayout = lazy(() => import('@/components/ui/stickuplayout'));
// const Surnames = lazy(() => import('@/components/ui/surnames'));
// const SliderScale = lazy(() => import('@/components/ui/sliderscale'));
// const Revolving = lazy(() => import('@/components/ui/revolving'));
// const ScrollLoad = lazy(() => import('@/components/ui/scrollload'));
// const JCategoryTab = lazy(() => import('@/components/ui/jdcategorytab'));
// const CascadeCompared = lazy(() => import('@/components/ui/cascadecompared'));
// const SlideLayout = lazy(() => import('@/components/ui/slidelayout'));
// const ContextMenu = lazy(() => import('@/components/ui/contextmenu'));
// const FontSizeSetting = lazy(() => import('@/components/ui/fontsizesetting'));
// const SearchTable = lazy(() => import('@/components/ui/searchtable'));
//
// const AdapterScreen = lazy(() => import('@/components/util/adapterscreen'));
// const Decorators = lazy(() => import('@/components/util/decorators'));
// const Dict = lazy(() => import('@/components/util/dict'));
// const Emitter = lazy(() => import('@/components/util/emitter'));
// const Preferences = lazy(() => import('@/components/util/preferences'));
// const Intl = lazy(() => import('@/components/util/intl'));
// const NotNull = lazy(() => import('@/components/util/notnull'));
// const Util = lazy(() => import('@/components/util/util'));
// const WatchMemoized = lazy(() => import('@/components/util/watchmemoized'));
// const Ajax = lazy(() => import('@/components/util/ajax'));

import App from '@/app';
import Introduction from '@/introduction';
import Split from '@/components/ui/split';
import Space from '@/components/ui/space';
import ConditionalRender from '@/components/ui/conditionalrender';
import DelConfirm from '@/components/ui/delconfirm';
import ImportantConfirm from '@/components/ui/importantconfirm';
import GlobalIndicator from '@/components/ui/globalindicator';
import Spin from '@/components/ui/spin';
import HistoryBack from '@/components/ui/historyback';
import SuccessPrompt from '@/components/ui/successprompt';
import ErrorPrompt from '@/components/ui/errorprompt';
import WarnPrompt from '@/components/ui/warnprompt';
import ImageLazy from '@/components/ui/imagelazy';
import MessageDialog from '@/components/ui/messagedialog';
import Permission from '@/components/ui/permission';
import Suspense from '@/components/ui/suspense';
import TableHeadSearch from '@/components/ui/tableheadsearch';
import CSS from '@/components/ui/css';
import OLMap from '@/components/ui/olmap';
import FlexLayout from '@/components/ui/flexlayout';
import SplitLayout from '@/components/ui/splitlayout';
import StickupLayout from '@/components/ui/stickuplayout';
import Surnames from '@/components/ui/surnames';
import SliderScale from '@/components/ui/sliderscale';
import Revolving from '@/components/ui/revolving';
import ScrollLoad from '@/components/ui/scrollload';
import JCategoryTab from '@/components/ui/jdcategorytab';
import CascadeCompared from '@/components/ui/cascadecompared';
import SlideLayout from '@/components/ui/slidelayout';
import ContextMenu from '@/components/ui/contextmenu';
import FontSizeSetting from '@/components/ui/fontsizesetting';
import SearchTable from '@/components/ui/searchtable';

import AdapterScreen from '@/components/util/adapterscreen';
import Decorators from '@/components/util/decorators';
import Dict from '@/components/util/dict';
import Emitter from '@/components/util/emitter';
import Preferences from '@/components/util/preferences';
import Intl from '@/components/util/intl';
import NotNull from '@/components/util/notnull';
import Util from '@/components/util/util';
import WatchMemoized from '@/components/util/watchmemoized';
import Ajax from '@/components/util/ajax';

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
            ],
          },
        ],
      },
    ],
  },
];
