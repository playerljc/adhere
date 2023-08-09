import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import ForceUpdate from '@baifendian/adhere-ui-forceupdate';
import type { ForceUpdateRefHandle } from '@baifendian/adhere-ui-forceupdate/es/types';

import { DictRefreshWrapperFunction } from '../types';

export default (FieldComponent) =>
  forwardRef<DictRefreshWrapperFunction, any>((props, ref) => {
    const fuRef = useRef<ForceUpdateRefHandle | null>(null);

    useImperativeHandle(ref, () => ({
      refresh: () => fuRef?.current?.reMount?.(),
    }));

    return (
      <ForceUpdate ref={fuRef}>
        <FieldComponent {...props} />
      </ForceUpdate>
    );
  });
