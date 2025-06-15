import { Button } from 'antd';
import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';

import type {
  SignatureComponent,
  SignatureCoreHandle,
  SignatureHandle,
  SignatureProps,
} from '../types';
import SignatureCore from './SignatureCore';

const selectorPrefix = 'adhere-ui-signature';

/**
 * Signature
 * @param props
 * @param ref
 * @constructor
 */
const InternalSignature = memo<PropsWithoutRef<SignatureProps> & RefAttributes<SignatureHandle>>(
  forwardRef<SignatureHandle, SignatureProps>(
    ({ className, style, value, onChange, modalProps, coreProps }, ref) => {
      const coreRef = useRef<SignatureCoreHandle>(null);

      const renderMask = useCallback(() => {
        return (
          <div
            className={classNames(`${selectorPrefix}-mask`)}
            onClick={() => {
              const dialog = MessageDialog.Modal({
                config: {
                  title: Intl.get('edit_signature'),
                  width: '60%',
                  maskClosable: false,
                  footer: [
                    <Button
                      key="submit"
                      type="primary"
                      title={Intl.get('save')}
                      onClick={() => {
                        if (!coreRef.current) return;

                        const isEmpty = coreRef.current.isEmpty();
                        if (isEmpty) {
                          if (onChange) {
                            onChange('');
                            dialog?.close();
                          }

                          return;
                        }

                        const base64 = coreRef.current.save();

                        if (onChange) {
                          onChange(base64);
                          dialog?.close();
                        }
                      }}
                    >
                      {Intl.get('save')}
                    </Button>,
                  ],
                  ...(modalProps ?? {}),
                },
                children: <SignatureCore ref={coreRef} {...coreProps} />,
              });
            }}
          >
            {Intl.get('edit_signature')}
          </div>
        );
      }, [coreProps, value, onChange]);

      const renderInner = useCallback(() => {
        return value ? <img src={value} alt="" /> : null;
      }, [value]);

      useImperativeHandle(ref, () => ({
        isEmpty: () => {
          return !value;
        },
      }));

      return (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {renderMask()}
          {renderInner()}
        </div>
      );
    },
  ),
);

const Signature = InternalSignature as SignatureComponent;

Signature.SignatureCore = SignatureCore;

export default Signature;
