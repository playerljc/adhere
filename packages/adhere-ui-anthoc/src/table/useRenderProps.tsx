import React from 'react';

import { UseTableRenderProps } from '../types';

/**
 * useTableRenderProps
 */
const useTableRenderProps: UseTableRenderProps =
  (tableProps) =>
  ({ value, onChange, options }) => ({
    value,
    onChange: (v) => onChange?.(v, []),
    options,
    ...(tableProps ?? {}),
  });

export default useTableRenderProps;
