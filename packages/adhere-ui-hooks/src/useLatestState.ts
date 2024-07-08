import { useLatest } from 'ahooks';
import { useState } from 'react';
import type { MutableRefObject } from 'react';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

/**
 * useLatestState
 * @param initialState
 */
function useLatestState<S>(
  initialState: S | (() => S),
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(initialState);

  const latestRef = useLatest(value);

  return [latestRef, setValue];
}

/**
 * useLatestState
 */
export default useLatestState;
