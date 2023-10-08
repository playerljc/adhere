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

export const GlobalIndicator = lazy(() =>
  import(/* webpackChunkName: "globalindicator" */ '@/components/ui/globalindicator'),
);

export const DelConfirm = lazy(() =>
  import(/* webpackChunkName: "delconfirm" */ '@/components/ui/delconfirm'),
);

export const ImportantConfirm = lazy(() =>
  import(/* webpackChunkName: "importantconfirm" */ '@/components/ui/importantconfirm'),
);

export const Tabs = lazy(() => import(/* webpackChunkName: "tabs" */ '@/components/ui/tabs'));

export const TimePickerView = lazy(() =>
  import(/* webpackChunkName: "timepickerview" */ '@/components/ui/timepickerview'),
);

export const AutoComplete = lazy(() =>
  import(/* webpackChunkName: "autocomplete" */ '@/components/ui/autocomplete'),
);
