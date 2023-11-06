import { HooksComponent } from './types';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import usePrevious from './usePrevious';
import useSetState from './useSetState';

const Hooks: HooksComponent = {
  useFirst,
  usePrevious,
  useForceUpdate,
  useSetState,
};

export default Hooks;
