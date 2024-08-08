import { type MutableRefObject } from 'react';
type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;
/**
 * useSetState
 * @description 带有更新成功回调函数, 返回的是最新的值
 * @param initialState
 */
declare function useSetState<S>(initialState: S | (() => S)): [MutableRefObject<S>, Dispatch<SetStateAction<S>>];
/**
 * useSetState
 * @param defaultValue - 初始值
 */
export default useSetState;
