type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;
declare function useSetState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
/**
 * useSetState
 * @param defaultValue - 初始值
 */
export default useSetState;
