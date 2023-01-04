type Dispatch<A> = (value: A, callback?: () => void) => void;
declare function useSetState<T>(defaultValue: T): [T, Dispatch<T>];
/**
 * useSetState
 * @param defaultValue - 初始值
 */
export default useSetState;
