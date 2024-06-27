/// <reference types="react" />
/**
 * usePropToState
 * @description 将props中的某值转换成state，用户在组件中对props进行更新使用
 */
declare function usePropToState<T>(propValue: T): (T | import("react").Dispatch<import("react").SetStateAction<T>>)[];
export default usePropToState;
