import { HooksComponent } from './types';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import usePrevious from './usePrevious';
import useSetState from './useSetState';
import useTriggerQuery from './useTriggerQuery';

const Hooks: HooksComponent = {
  useFirst,
  usePrevious,
  useForceUpdate,
  useSetState,
  useTriggerQuery,
};

export default Hooks;
