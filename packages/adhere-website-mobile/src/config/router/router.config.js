import Components from '@/config/router/routerComponentRegister';

const { SuccessPrompt, ErrorPrompt, WarnPrompt } = Components;

export default () => [
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
];
