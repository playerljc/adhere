import use from './use';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import useHistoryBack from './useHistoryBack';
import useItemsRef from './useItemsRef';
import useLatestState from './useLatestState';
import usePrevious from './usePrevious';
import usePropToState from './usePropToState';
import useSafeRef from './useSafeRef';
import useSetState from './useSetState';
import useTriggerQuery from './useTriggerQuery';

const Hooks = {
  use,
  useFirst,
  usePrevious,
  useForceUpdate,
  useSetState,
  useTriggerQuery,
  usePropToState,
  useLatestState,
  useItemsRef,
  useSafeRef,
  useHistoryBack,
} as const;

export default Hooks;
