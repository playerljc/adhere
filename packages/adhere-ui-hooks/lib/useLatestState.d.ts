import type { MutableRefObject } from 'react';
type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
/**
 * useLatestState
 * @description 返回的是最新的值(防止了闭包的问题)，返回的值用useLatest
 * @param initialState
 */
declare function useLatestState<S>(initialState: S | (() => S)): [MutableRefObject<S>, Dispatch<SetStateAction<S>>];
/**
 * useLatestState
 */
export default useLatestState;
