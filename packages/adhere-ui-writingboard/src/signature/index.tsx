import { Card } from 'antd';
import React, { forwardRef, memo, useImperativeHandle } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import type { SignatureHandle, SignatureProps } from '../types';

/**
 * Signature
 * @description 签名
 * @param {SignatureProps} props
 * @param ref
 * @constructor
 */
const Signature: ForwardRefRenderFunction<SignatureHandle, SignatureProps> = (props, ref) => {
  useImperativeHandle(ref, () => ({}));

  return (
    <FlexLayout.TRBLC.LCLayout
      gutter={20}
      lProps={{
        fit: true,
        span: 3,
        render: () => <Card>Left</Card>,
      }}
      cProps={{
        autoFixed: true,
        render: () => (
          <Card>
            {Array.from({ length: 100 }).map((t) => (
              <p>
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
              </p>
            ))}
          </Card>
        ),
      }}
    />
  );
};

export default memo(forwardRef<SignatureHandle, SignatureProps>(Signature));
