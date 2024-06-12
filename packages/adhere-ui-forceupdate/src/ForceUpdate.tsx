import { cloneElement, forwardRef, useImperativeHandle } from 'react';
import { v1 } from 'uuid';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { ForceUpdateProps, ForceUpdateRefHandle } from './types';

const { useSetState } = Hooks;

const ForceUpdate = forwardRef<ForceUpdateRefHandle, ForceUpdateProps>((props, ref) => {
  const { children } = props;

  const [key, setKey] = useSetState<string>(v1());

  useImperativeHandle(ref, () => ({
    reMount: () => new Promise<void>((resolve) => setKey(v1(), () => resolve())),
  }));

  return cloneElement(children, {
    key,
    ...(children.props ?? {}),
  });
});

ForceUpdate.displayName = 'ForceUpdate';

export default ForceUpdate;
