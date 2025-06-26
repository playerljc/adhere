import type { ForwardedRef, MutableRefObject } from 'react';
import type { ConfigProviderContext } from './types';
export default function theme<T extends HTMLElement>({ elRef, group, displayName, theme, }: {
    elRef: MutableRefObject<T | null | undefined> | ForwardedRef<T | null | undefined> | MutableRefObject<T | null | undefined>[];
    group: string;
    displayName?: string;
    theme: ConfigProviderContext['theme'];
}): void;
