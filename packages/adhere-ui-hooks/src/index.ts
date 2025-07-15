import { HooksComponent } from './types';
import use from './use';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import useItemsRef from './useItemsRef';
import useLatestState from './useLatestState';
import useMediaQuery from './useMediaQuery';
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
  useMediaQuery,
  useSafeRef,
} as const;

export default Hooks;
