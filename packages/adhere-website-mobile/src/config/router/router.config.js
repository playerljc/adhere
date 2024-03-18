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
    ],
  },
];
