import { lazy } from 'react';

export const AdapterScreen = lazy(() =>
  import(/* webpackChunkName: "adapterscreen" */ '@/components/util/adapterscreen'),
);
export const Decorators = lazy(() =>
  import(/* webpackChunkName: "decorators" */ '@/components/util/decorators'),
);
export const Dict = lazy(() => import(/* webpackChunkName: "dict" */ '@/components/util/dict'));
export const Emitter = lazy(() =>
  import(/* webpackChunkName: "emitter" */ '@/components/util/emitter'),
);
export const Preferences = lazy(() =>
  import(/* webpackChunkName: "preferences" */ '@/components/util/preferences'),
);
export const Intl = lazy(() => import(/* webpackChunkName: "intl" */ '@/components/util/intl'));
export const NotNull = lazy(() =>
  import(/* webpackChunkName: "notnull" */ '@/components/util/notnull'),
);
export const Util = lazy(() => import(/* webpackChunkName: "util" */ '@/components/util/util'));
export const WatchMemoized = lazy(() =>
  import(/* webpackChunkName: "watchmemoized" */ '@/components/util/watchmemoized'),
);
export const Ajax = lazy(() => import(/* webpackChunkName: "ajax" */ '@/components/util/ajax'));
export const Domain = lazy(() =>
  import(/* webpackChunkName: "domain" */ '@/components/util/domain'),
);
export const Resource = lazy(() =>
  import(/* webpackChunkName: "resource" */ '@/components/util/resource'),
);
export const Browsersniff = lazy(() =>
  import(/* webpackChunkName: "browsersniff" */ '@/components/util/browsersniff'),
);
export const Validator = lazy(() =>
  import(/* webpackChunkName: "validator" */ '@/components/util/validator'),
);
export const ReactUtil = lazy(() =>
  import(/* webpackChunkName: "reactutil" */ '@/components/util/reactutil'),
);
