import React from 'react';

import { UseCheckboxRenderProps } from '../types';

/**
 * useCheckboxRenderProps
 */
const useCheckboxRenderProps: UseCheckboxRenderProps =
  (checkboxProps) =>
  ({ value, onChange, options }) => ({
    value,
    onChange,
    options:
      options?.map?.((t) => ({
        label: t.label,
        value: t.value as string,
      })) ?? [],
    ...(checkboxProps ?? {}),
  });

export default useCheckboxRenderProps;
