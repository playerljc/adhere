import useFirst from './useFirst';
import useForceUpdate from './useForceUpdate';
import usePrevious from './usePrevious';
import useSetState from './useSetState';

export type UseFirst = () => [boolean, (first: boolean) => void];
export type UseForceUpdate = () => () => void;
export type UsePrevious = (value: any) => any;

export type HooksComponent = {
  useFirst: typeof useFirst;
  useForceUpdate: typeof useForceUpdate;
  usePrevious: typeof usePrevious;
  useSetState: typeof useSetState;
};
