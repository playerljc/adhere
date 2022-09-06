import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import Hooks from '@baifendian/adhere-ui-hooks';

import { ForceUpdateRefHandle, ForceUpdateProps } from './types';

const { useSetState } = Hooks;

const ForceUpdate: ForwardRefRenderFunction<ForceUpdateRefHandle, ForceUpdateProps> = (
  props,
  ref,
) => {
  const { children } = props;
  const [display, setDisplay] = useSetState<boolean>(true);

  useImperativeHandle(ref, () => ({
    reMount: () =>
      new Promise<void>((resolve) => setDisplay(false, () => setDisplay(true, () => resolve()))),
  }));

  return display ? children : null;
};

export default forwardRef<ForceUpdateRefHandle, ForceUpdateProps>(ForceUpdate);
