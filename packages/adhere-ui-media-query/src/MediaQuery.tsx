import React, { memo, useMemo } from 'react';

import type { MediaQueryComponent, MediaQueryProps } from './types';
import { useMediaQuery } from './useMediaQuery';
import { formatConditionKey } from './utils';

const InternalMediaQuery = memo<MediaQueryProps<any>>(
  ({ children, noMatch, breakPoint, breakPoints }) => {
    const mediaQuery = useMediaQuery(breakPoints);

    const errorUI = useMemo(() => (noMatch ? noMatch?.() : null), [noMatch]);

    const value = useMemo(
      () => mediaQuery[formatConditionKey(String(breakPoint))],
      [mediaQuery, breakPoint],
    );

    return (
      <>
        {!!value && children}
        {!value && errorUI}
      </>
    );
  },
);

const MediaQuery = InternalMediaQuery as MediaQueryComponent<any>;

MediaQuery.displayName = 'MediaQuery';

MediaQuery.useMediaQuery = useMediaQuery;

export default MediaQuery;
