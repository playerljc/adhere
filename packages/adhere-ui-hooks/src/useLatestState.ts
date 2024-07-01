import { useLatest } from 'ahooks';
import { useState } from 'react';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

/**
 * useLatestState
 * @param initialState
 */
function useLatestState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(initialState);

  const latestRef = useLatest(value);

  return [latestRef.current, setValue];
}

/**
 * useLatestState
 */
export default useLatestState;
