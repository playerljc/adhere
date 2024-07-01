type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
/**
 * useLatestState
 * @param initialState
 */
declare function useLatestState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
/**
 * useLatestState
 */
export default useLatestState;
