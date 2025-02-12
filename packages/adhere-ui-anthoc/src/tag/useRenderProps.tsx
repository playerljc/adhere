import React from 'react';

import { UseTagRenderProps } from '../types';

/**
 * useTagRenderProps
 */
const useTagRenderProps: UseTagRenderProps =
  (tagProps, mode) =>
  ({ value, onChange, options }) => {
    const renderProps = {
      value,
      onChange,
      options: (options as any[]) ?? [],
      ...(tagProps ?? {}),
    };

    if (mode) {
      renderProps.mode = mode;
    }

    return renderProps;
  };

export default useTagRenderProps;
