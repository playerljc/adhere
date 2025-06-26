import type { ForwardedRef, MutableRefObject } from 'react';
/**
 * useTheme
 * @description 将Provider中组件的注入
 * @param {
 *   elRef: MutableRefObject<T | undefined>;
 *   group: string;
 *   displayName: string;
 * }
 */
declare function useTheme<T extends HTMLElement>({ elRef, group, displayName, }: {
    elRef: MutableRefObject<T | null | undefined> | ForwardedRef<T | null | undefined> | MutableRefObject<T | null | undefined>[];
    group: string;
    displayName?: string;
}): void;
export default useTheme;
