import { HooksComponent } from './types';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import usePrevious from './usePrevious';
import usePropToState from './usePropToState';
import useSetState from './useSetState';
import useTriggerQuery from './useTriggerQuery';

const Hooks: HooksComponent = {
  useFirst,
  usePrevious,
  useForceUpdate,
  useSetState,
  useTriggerQuery,
  usePropToState,
};

export default Hooks;
