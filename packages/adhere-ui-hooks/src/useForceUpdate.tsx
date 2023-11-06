import { useRef, useState } from 'react';

import type { UseForceUpdate } from './types';

const useForceUpdate: UseForceUpdate = () => {
  const count = useRef(0);
  const state = useState(count.current);

  return () => {
    state[1](++count.current);
  };
};

export default useForceUpdate;
