import React from 'react';

import { UseTreeTableRenderProps } from '../types';

/**
 * useTreeTableRenderProps
 */
const useTreeTableRenderProps: UseTreeTableRenderProps =
  (tableProps) =>
  ({ value, onChange, options }) => ({
    value,
    onChange: (...params) => onChange?.(...params),
    options,
    ...(tableProps ?? {}),
  });

export default useTreeTableRenderProps;
