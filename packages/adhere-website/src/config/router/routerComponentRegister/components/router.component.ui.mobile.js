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
export const MobileGlobalIndicator = lazy(() =>
  import(/* webpackChunkName: "mobileglobalindicator" */ '@/components/mobile/globalindicator'),
);
export const MobileDelConfirm = lazy(() =>
  import(/* webpackChunkName: "mobiledelconfirm" */ '@/components/mobile/delconfirm'),
);
export const MobileImportantConfirm = lazy(() =>
  import(/* webpackChunkName: "mobileimportantconfirm" */ '@/components/mobile/importantconfirm'),
);
export const MobileTabs = lazy(() =>
  import(/* webpackChunkName: "mobiletabs" */ '@/components/mobile/tabs'),
);
export const MobileTimePickerView = lazy(() =>
  import(/* webpackChunkName: "mobiletimepickerview" */ '@/components/mobile/timepickerview'),
);
export const MobileAutoComplete = lazy(() =>
  import(/* webpackChunkName: "mobileautocomplete" */ '@/components/mobile/autocomplete'),
);

export const MobileAntHOC = lazy(() =>
  import(/* webpackChunkName: "mobileanthoc" */ '@/components/mobile/anthoc'),
);
