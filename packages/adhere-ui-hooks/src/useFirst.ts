import { useRef } from 'react';

import { UseFirst } from './types';

const useFirst: UseFirst = () => {
  const isFirst = useRef(true);

  return [
    isFirst.current,
    (first) => {
      isFirst.current = first;
    },
  ];
};

export default useFirst;
