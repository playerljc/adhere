import Suspense from './SuspenseImpl';
export default Suspense;
export type { ISuspense, SuspenseProps, SuspenseState, ISuspenseSync, SuspenseSyncProps, SuspenseSyncState, SuspenseASyncProps, SuspenseASyncState, fetchData, showLoading, renderInner, ConfigProviderContext, } from './types';
export { default as SuspenseSync } from './Sync';
export { default as SuspenseAsync } from './Async';
