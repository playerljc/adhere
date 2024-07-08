import type { MutableRefObject } from 'react';
type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
/**
 * useLatestState
 * @param initialState
 */
declare function useLatestState<S>(initialState: S | (() => S)): [MutableRefObject<S>, Dispatch<SetStateAction<S>>];
/**
 * useLatestState
 */
export default useLatestState;
