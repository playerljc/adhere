import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import useLatestState from './useLatestState';
import usePrevious from './usePrevious';
import usePropToState from './usePropToState';
import useSetState from './useSetState';
import useTriggerQuery from './useTriggerQuery';
export type UseFirst = () => [boolean, (first: boolean) => void];
export type UseForceUpdate = () => () => void;
export type UsePrevious = (value: any) => any;
export type HooksComponent = {
    useFirst: typeof useFirst;
    useForceUpdate: typeof useForceUpdate;
    usePrevious: typeof usePrevious;
    useSetState: typeof useSetState;
    useTriggerQuery: typeof useTriggerQuery;
    usePropToState: typeof usePropToState;
    useLatestState: typeof useLatestState;
};
