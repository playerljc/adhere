import Components from '@/config/router/routerComponentRegister';

const { SuccessPrompt, ErrorPrompt, WarnPrompt, GlobalIndicator, DelConfirm, ImportantConfirm } =
  Components;

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
    ],
  },
];
