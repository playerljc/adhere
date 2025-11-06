import SignatureCore from './MobileSignatureCore';

import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

import { Modal } from '@baifendian/adhere-mobile-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type {
  SignatureComponent,
  SignatureCoreHandle,
  SignatureHandle,
  SignatureProps,
} from '../types';

const selectorPrefix = 'adhere-ui-mobile-signature';

const { useTheme } = ConfigProvider;

/**
 * 移动端签名组件
 * @description 提供移动端适配的签名功能，使用移动端模态框进行签名编辑
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 移动端签名组件实例
 */
const InternalMobileSignature = memo<
  PropsWithoutRef<SignatureProps> & RefAttributes<SignatureHandle>
>(
  forwardRef<SignatureHandle, SignatureProps>(
    ({ className, style, value, onChange, modalProps, coreProps }, ref) => {
      const coreRef = useRef<SignatureCoreHandle>(null);

      const wrapperRef = useRef<HTMLElement | undefined>(undefined);

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'normal',
        displayName: 'WritingBoard',
      });

      const renderMask = useCallback(() => {
        return (
          <Modal.TriggerPrompt
            title={Intl.get('edit_signature')}
            popoverTriggerProps={{
                              renderTrigger: () =>
                  value ? (
                    <img src={value} alt="签名" />
                  ) : (
                    <div className={classNames(`${selectorPrefix}-mask`)}>
                      {Intl.get('edit_signature')}
                    </div>
                  ),
            }}
            actions={[
              {
                key: 'submit',
                text: Intl.get('save'),
                primary: true,
                onClick: () =>
                  new Promise<string>((resolve) => {
                    if (!coreRef.current) {
                      resolve('');
                      return;
                    }

                    const isEmpty = coreRef.current.isEmpty();
                    if (isEmpty) {
                      onChange?.('');
                      resolve('');
                      return;
                    }

                    const base64 = coreRef.current.save();
                    onChange?.(base64);
                    resolve(base64 || '');
                  }),
              },
            ]}
          >
            <SignatureCore ref={coreRef} {...coreProps} />
          </Modal.TriggerPrompt>
        );
      }, [coreProps, value, onChange]);

      useImperativeHandle(ref, () => ({
        isEmpty: () => !value,
      }));

      return (
        <div
          // @ts-ignore
          ref={wrapperRef}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {renderMask()}
        </div>
      );
    },
  ),
);

const MobileSignature = InternalMobileSignature as SignatureComponent;

MobileSignature.SignatureCore = SignatureCore;

export default MobileSignature;
