import { useState, useRef } from 'react';

export default () => {
  const count = useRef(0);
  const state = useState(count.current);

  return () => {
    state[1](++count.current);
  };
};
