import TabsHome from '@/components/ui/tabs/Home';
import TabsMessage from '@/components/ui/tabs/Message';
import TabsPersonalCenter from '@/components/ui/tabs/PersonalCenter';
import TabsTodo from '@/components/ui/tabs/Todo';
import Components from '@/config/router/routerComponentRegister';

const {
  SuccessPrompt,
  ErrorPrompt,
  WarnPrompt,
  GlobalIndicator,
  DelConfirm,
  ImportantConfirm,
  Tabs,
  TimePickerView,
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
        path: '/adhere/component/ui/tabs',
        component: Tabs,
        routes: [
          {
            path: '/',
            redirect: '/adhere/component/ui/tabs/home',
          },
          {
            path: '/adhere/component/ui/tabs/home',
            component: TabsHome,
          },
          {
            path: '/adhere/component/ui/tabs/todo',
            component: TabsTodo,
          },
          {
            path: '/adhere/component/ui/tabs/message',
            component: TabsMessage,
          },
          {
            path: '/adhere/component/ui/tabs/personalcenter',
            component: TabsPersonalCenter,
          },
        ],
      },
      {
        path: '/adhere/component/ui/timepickerview',
        component: TimePickerView,
      },
    ],
  },
];
