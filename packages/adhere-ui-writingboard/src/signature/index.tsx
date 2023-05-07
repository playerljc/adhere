import { Button } from 'antd';
import classNames from 'classnames';
import React, { forwardRef, memo, useCallback, useImperativeHandle, useRef } from 'react';
import type { ForwardRefRenderFunction } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';

import type { SignatureCoreHandle, SignatureHandle, SignatureProps } from '../types';
import SignatureCore from './SignatureCore';

const selectorPrefix = 'adhere-ui-signature';

const emptyStr =
  'data:image/png;base64,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';

/**
 * Signature
 * @param props
 * @param ref
 * @constructor
 */
const Signature: ForwardRefRenderFunction<SignatureHandle, SignatureProps> = (
  { className, style, value, onChange, modalProps, coreProps },
  ref,
) => {
  const coreRef = useRef<SignatureCoreHandle>(null);

  const renderMask = useCallback(() => {
    return (
      <div
        className={classNames(`${selectorPrefix}-mask`)}
        onClick={() => {
          const dialog = MessageDialog.Modal({
            config: {
              title: Intl.v('编辑签名'),
              width: '60%',
              maskClosable: false,
              footer: [
                <Button
                  key="submit"
                  type="primary"
                  title={Intl.v('保存')}
                  onClick={() => {
                    if (!coreRef.current) return;

                    const base64 = coreRef.current.save();

                    if (onChange) {
                      onChange(base64);
                      dialog.close();
                    }
                  }}
                >
                  {Intl.v('保存')}
                </Button>,
              ],
              ...(modalProps || {}),
            },
            children: <SignatureCore ref={coreRef} {...coreProps} />,
          });
        }}
      >
        {Intl.v('编辑签名')}
      </div>
    );
  }, [coreProps, value, onChange]);

  const renderInner = useCallback(() => {
    return value ? <img src={value} alt="" /> : null;
  }, [value]);

  useImperativeHandle(ref, () => ({
    isEmpty: (value) => {
      if (!value) return true;

      return value === emptyStr;
    },
  }));

  return (
    <div className={classNames(selectorPrefix, className)} style={style || {}}>
      {renderMask()}
      {renderInner()}
    </div>
  );
};

const SignatureHOC = memo(forwardRef<SignatureHandle, SignatureProps>(Signature));

// @ts-ignore
SignatureHOC.SignatureCore = SignatureCore;

export default SignatureHOC;