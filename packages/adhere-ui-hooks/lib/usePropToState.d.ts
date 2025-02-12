import { Dispatch, SetStateAction } from 'react';
/**
 * usePropToState
 * @description 将props中的某值转换成state，用户在组件中对props进行更新使用，用props同步state
 */
declare function usePropToState<T>(propValue: T): [T, Dispatch<SetStateAction<T>>];
export default usePropToState;
