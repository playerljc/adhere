import { lazy } from 'react';

export const SuccessPrompt = lazy(() =>
  import(/* webpackChunkName: "successprompt" */ '@/components/ui/successprompt'),
);

export const ErrorPrompt = lazy(() =>
  import(/* webpackChunkName: "errorprompt" */ '@/components/ui/errorprompt'),
);

export const WarnPrompt = lazy(() =>
  import(/* webpackChunkName: "warnprompt" */ '@/components/ui/warnprompt'),
);
