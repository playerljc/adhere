import React, { forwardRef, useImperativeHandle } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { ForceUpdateProps, ForceUpdateRefHandle } from './types';

const { useSetState } = Hooks;

const ForceUpdate = forwardRef<ForceUpdateRefHandle, ForceUpdateProps>((props, ref) => {
  const { children } = props;
  const [display, setDisplay] = useSetState<boolean>(true);

  useImperativeHandle(ref, () => ({
    reMount: () =>
      new Promise<void>((resolve) => setDisplay(false, () => setDisplay(true, () => resolve()))),
  }));

  return display ? children : null;
});

export default ForceUpdate;
