import use from './use';
import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import useItemsRef from './useItemsRef';
import useLatestState from './useLatestState';
import usePrevious from './usePrevious';
import usePropToState from './usePropToState';
import useSetState from './useSetState';
import useTriggerQuery from './useTriggerQuery';

export type UseFirst = () => [boolean, (first: boolean) => void];
export type UseForceUpdate = () => () => void;
export type UsePrevious = (value: any) => any;

export type UseType = 'reset' | 'reload';

export type Use = (
  p: (...args: any[]) => Promise<any>,
  defaultArgs?: any[],
) => {
  data: any;
  isPending: boolean;
  isValidate: boolean;
  type: UseType;
  reset: (...args: any[]) => void;
  reload: (...args: any[]) => void;
};

export type HooksComponent = {
  use: typeof use;
  useFirst: typeof useFirst;
  useForceUpdate: typeof useForceUpdate;
  usePrevious: typeof usePrevious;
  useSetState: typeof useSetState;
  useTriggerQuery: typeof useTriggerQuery;
  usePropToState: typeof usePropToState;
  useLatestState: typeof useLatestState;
  useItemsRef: typeof useItemsRef;
};
