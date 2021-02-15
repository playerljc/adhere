import { useRef } from 'react';

export default () => {
  const isFirst = useRef(true);

  return [
    isFirst.current,
    (first) => {
      isFirst.current = first;
    },
  ];
};
