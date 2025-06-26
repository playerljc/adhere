import { useMount, useUpdateEffect } from 'ahooks';
import { useContext } from 'react';
import type { ForwardedRef, MutableRefObject } from 'react';

import { Context } from './Context';
import { themeCSSVariablesInjectToTheme } from './themeCSSVariablesInjectToTheme';

/**
 * useTheme
 * @description 将Provider中组件的注入
 * @param {
 *   elRef: MutableRefObject<T | undefined>;
 *   group: string;
 *   displayName: string;
 * }
 */
function useTheme<T extends HTMLElement>({
  elRef,
  group,
  displayName,
}: {
  elRef:
    | MutableRefObject<T | null | undefined>
    | ForwardedRef<T | null | undefined>
    | MutableRefObject<T | null | undefined>[];
  group: string;
  displayName?: string;
}) {
  const context = useContext(Context);

  function injectCSSVariables() {
    if (!elRef) return;

    if (Array.isArray(elRef)) {
      if (!(elRef as MutableRefObject<T | null | undefined>[]).length) return;
    }

    if (!(elRef as MutableRefObject<T | null | undefined>).current) return;

    if (!group) return;

    // if (!displayName) return;

    const theme = context.theme;

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

  useMount(() => {
    injectCSSVariables();
  });

  useUpdateEffect(() => {
    injectCSSVariables();
  }, [context.theme]);
}

export default useTheme;
