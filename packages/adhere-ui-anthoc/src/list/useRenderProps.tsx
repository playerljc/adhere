import React from 'react';

import { UseListRenderProps } from '../types';

/**
 * useListRenderProps
 */
const useListRenderProps: UseListRenderProps =
  (listProps) =>
  ({ value, onChange, options }) => ({
    value,
    onChange: (v) => onChange?.(v, []),
    options,
    ...(listProps ?? {}),
  });

export default useListRenderProps;
