import startCase from 'lodash/startCase';
import React, { memo, useMemo } from 'react';

import type { MediaQueryComponent, MediaQueryProps } from './types';
import { useMediaQuery } from './useMediaQuery';

const InternalMediaQuery = memo<MediaQueryProps<any>>(
  ({ children, noMatch, breakPoint, breakPoints }) => {
    const mediaQuery = useMediaQuery(breakPoints);

    const errorUI = useMemo(() => (noMatch ? noMatch?.() : null), [noMatch]);

    const value = useMemo(
      () => mediaQuery[`is${startCase(breakPoint).replace(/\s/g, '')}`],
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
