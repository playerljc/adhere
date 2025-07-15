import Suspense from './SuspenseImpl';

// 导出主组件
export default Suspense;

// 导出类型定义
export type {
  ISuspense,
  SuspenseProps,
  SuspenseState,
  ISuspenseSync,
  SuspenseSyncProps,
  SuspenseSyncState,
  SuspenseASyncProps,
  SuspenseASyncState,
  fetchData,
  showLoading,
  renderInner,
  ConfigProviderContext,
} from './types';

// 导出子组件
export { default as SuspenseSync } from './Sync';
export { default as SuspenseAsync } from './Async';
