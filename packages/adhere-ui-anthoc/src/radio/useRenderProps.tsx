import React from 'react';

import { UseRadioRenderProps } from '../types';

/**
 * useRadioRenderProps
 */
const useRadioRenderProps: UseRadioRenderProps =
  (radioProps) =>
  ({ value, onChange, options }) => ({
    value,
    onChange: (e) => onChange?.(e.target.value, []),
    options:
      options?.map?.((t) => ({
        ...t,
        label: t.label,
        value: t.value as string,
      })) ?? [],
    ...(radioProps ?? {}),
  });

export default useRadioRenderProps;
