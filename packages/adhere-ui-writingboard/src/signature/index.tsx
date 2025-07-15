import { Button } from 'antd';
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

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
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

const { useTheme } = ConfigProvider;

/**
 * 签名组件
 * @description 提供签名功能，支持在模态框中编辑签名并保存为base64格式
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 签名组件实例
 */
const InternalSignature = memo<PropsWithoutRef<SignatureProps> & RefAttributes<SignatureHandle>>(
  forwardRef<SignatureHandle, SignatureProps>(
    ({ className, style, value, onChange, modalProps, coreProps }, ref) => {
      const coreRef = useRef<SignatureCoreHandle>(null);

      const wrapperRef = useRef<HTMLElement | undefined>();

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'normal',
        displayName: 'WritingBoard',
      });

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
                          onChange?.('');
                          dialog?.close();
                          return;
                        }

                        const base64 = coreRef.current.save();
                        onChange?.(base64);
                        dialog?.close();
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
      }, [coreProps, modalProps, onChange]);

      const renderInner = useCallback(() => {
        return value ? <img src={value} alt="签名" /> : null;
      }, [value]);

      useImperativeHandle(ref, () => ({
        isEmpty: () => !value,
      }));

      return (
        <div
          //@ts-ignore
          ref={wrapperRef}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
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
