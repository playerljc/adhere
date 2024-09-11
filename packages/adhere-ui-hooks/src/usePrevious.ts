import { useEffect, useRef } from 'react';

import type { UsePrevious } from './types';

const usePrevious: UsePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
