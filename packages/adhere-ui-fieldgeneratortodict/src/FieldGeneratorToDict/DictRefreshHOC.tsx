import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import ForceUpdate from '@baifendian/adhere-ui-forceupdate';
import type { ForceUpdateRefHandle } from '@baifendian/adhere-ui-forceupdate/es/types';

import { DictRefreshWrapperFunction } from '../types';

/**
 * DictRefreshHOC
 * @param FieldComponent
 * @constructor
 */
function DictRefreshHOC<P>(FieldComponent) {
  return forwardRef<DictRefreshWrapperFunction, P>((props, ref) => {
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
}

export default DictRefreshHOC;
