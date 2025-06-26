import type { ForwardedRef, MutableRefObject } from 'react';

import { themeCSSVariablesInjectToTheme } from './themeCSSVariablesInjectToTheme';
import type { ConfigProviderContext } from './types';

export default function theme<T extends HTMLElement>({
  elRef,
  group,
  displayName,
  theme,
}: {
  elRef:
    | MutableRefObject<T | null | undefined>
    | ForwardedRef<T | null | undefined>
    | MutableRefObject<T | null | undefined>[];
  group: string;
  displayName?: string;
  theme: ConfigProviderContext['theme'];
}) {
  if (!elRef) return;

  if (Array.isArray(elRef)) {
    if (!(elRef as MutableRefObject<T | null | undefined>[]).length) return;
  }

  if (!(elRef as MutableRefObject<T | null | undefined>).current) return;

  if (!group) return;

  // if (!displayName) return;

  if (!theme) return;

  const components = theme?.components;

  if (!components) return;

  if (!components[group]) return;

  let componentTheme: any;

  if (displayName) {
    componentTheme = components?.[group]?.[displayName];
  } else {
    componentTheme = components?.[group];
  }

  if (!componentTheme) return;

  let els: HTMLElement[] = [];

  if (Array.isArray(elRef)) {
    els = (elRef as MutableRefObject<HTMLElement>[]).map((ref) => ref.current);
  } else {
    els = [(elRef as MutableRefObject<HTMLElement>).current];
  }

  themeCSSVariablesInjectToTheme({
    componentTheme,
    els,
  });
}
