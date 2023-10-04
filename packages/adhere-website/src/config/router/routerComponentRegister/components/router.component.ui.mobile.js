import { lazy } from 'react';

export const MobileSuccessPrompt = lazy(() =>
  import(/* webpackChunkName: "mobilesuccessprompt" */ '@/components/mobile/successprompt'),
);
export const MobileErrorPrompt = lazy(() =>
  import(/* webpackChunkName: "mobileerrorprompt" */ '@/components/mobile/errorprompt'),
);
export const MobileWarnPrompt = lazy(() =>
  import(/* webpackChunkName: "mobilewarnprompt" */ '@/components/mobile/warnprompt'),
);
