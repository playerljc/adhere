import React from 'react';

import Hooks from '../src';

const { useSetState } = Hooks;

export default () => {
  const [val, setVal] = useSetState(0);

  return (
    <div
      onClick={() => {
        setVal(1, () => {
          console.log('val11', val.current);
        });
      }}
    >
      111
    </div>
  );
};
