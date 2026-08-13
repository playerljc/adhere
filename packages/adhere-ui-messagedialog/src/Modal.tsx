import { Button, Modal } from 'antd';
import type { ButtonProps } from 'antd';
import React, { ReactNode, memo, useCallback, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type { ModalDialogProps } from './types';

/** CSS选择器前缀 */
export const selectorPrefix = 'adhere-ui-message-dialog';

const { useTheme } = ConfigProvider;

/**
 * 模态对话框组件
 * 提供可配置的模态对话框功能，支持自定义按钮、主题等
 */
const ModalDialog = memo<ModalDialogProps>((props) => {
  const { config, closeBtn, close, open, closeBtnText, children } = props;

  const { footer = [], centered = true, onCancel: onCancelFromConfig, ...rest } = config;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'MessageDialog',
  });

  /**
   * 渲染关闭按钮
   * @returns 关闭按钮元素
   */
  const renderCloseBtn = useCallback((): ReactNode => {
    const buttonProps: Omit<ButtonProps, 'key'> = {
      title: closeBtnText ?? Intl.get('cancel'),
      type: 'default',
      onClick: () => close?.(),
    };

    // 如果没有其他按钮，将关闭按钮设为主要按钮
    if (Array.isArray(footer) && footer.length === 0) {
      buttonProps.type = 'primary';
    }

    return (
      <Button key="close" {...buttonProps}>
        {closeBtnText ?? Intl.get('cancel')}
      </Button>
    );
  }, [footer, closeBtnText, close]);

  /**
   * 计算底部按钮区域
   */
  const footerNode = useMemo((): ReactNode => {
    const closeBtnNode = renderCloseBtn();

    if (footer) {
      if (closeBtn) {
        if (Array.isArray(footer)) {
          return [...footer, closeBtnNode] as ReactNode;
        } else {
          return [footer, closeBtnNode] as ReactNode;
        }
      } else {
        return footer as ReactNode;
      }
    } else {
      if (closeBtn) {
        return closeBtnNode;
      }
    }

    return null;
  }, [footer, closeBtn, closeBtnText, renderCloseBtn]);

  /**
   * 取消回调：先执行用户 onCancel，再走内部 close，避免 config.onCancel 覆盖后 portal 泄漏
   */
  const onCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLElement>): void => {
      onCancelFromConfig?.(e);
      close?.();
    },
    [onCancelFromConfig, close],
  );

  return (
    <div ref={wrapperRef}>
      <Modal
        centered={centered}
        wrapClassName={selectorPrefix}
        open={open}
        {...rest}
        getContainer={() => wrapperRef.current ?? document.body}
        footer={footerNode}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </div>
  );
});

ModalDialog.displayName = 'ModalDialog';

export default ModalDialog;
