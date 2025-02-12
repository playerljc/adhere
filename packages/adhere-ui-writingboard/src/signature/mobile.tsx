import SignatureCore from './MobileSignatureCore';

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

import { Modal } from '@baifendian/adhere-mobile-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import type {
  SignatureComponent,
  SignatureCoreHandle,
  SignatureHandle,
  SignatureProps,
} from '../types';

const selectorPrefix = 'adhere-ui-mobile-signature';

/**
 * MobileSignature
 * @param props
 * @param ref
 */
const InternalMobileSignature = memo<
  PropsWithoutRef<SignatureProps> & RefAttributes<SignatureHandle>
>(
  forwardRef<SignatureHandle, SignatureProps>(
    ({ className, style, value, onChange, modalProps, coreProps }, ref) => {
      const coreRef = useRef<SignatureCoreHandle>(null);

      const renderMask = useCallback(() => {
        return (
          <Modal.TriggerPrompt
            title={Intl.v('编辑签名')}
            popoverTriggerProps={{
              renderTrigger: () =>
                value ? (
                  <img src={value} alt="" />
                ) : (
                  <div className={classNames(`${selectorPrefix}-mask`)}>{Intl.v('编辑签名')}</div>
                ),
            }}
            actions={[
              {
                key: 'submit',
                text: Intl.v('保存'),
                primary: true,
                onClick: () =>
                  new Promise((resolve) => {
                    if (!coreRef.current) return;

                    const isEmpty = coreRef.current.isEmpty();
                    if (isEmpty) {
                      if (onChange) onChange('');
                      resolve('');
                      return;
                    }

                    const base64 = coreRef.current.save();
                    if (onChange) onChange(base64);
                    resolve(base64);
                  }),
              },
            ]}
          >
            <SignatureCore ref={coreRef} {...coreProps} />
          </Modal.TriggerPrompt>
        );
      }, [coreProps, value, onChange]);

      useImperativeHandle(ref, () => ({
        isEmpty: () => {
          return !value;
        },
      }));

      return (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {renderMask()}
        </div>
      );
    },
  ),
);

const MobileSignature = InternalMobileSignature as SignatureComponent;

MobileSignature.SignatureCore = SignatureCore;

export default MobileSignature;
