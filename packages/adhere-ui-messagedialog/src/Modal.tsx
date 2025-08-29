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
  const { config, closeBtn, close, open, children } = props;

  const { footer = [], centered = true, ...rest } = config;

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
      title: Intl.get('cancel'),
      type: 'default',
      onClick: () => close?.(),
    };

    // 如果没有其他按钮，将关闭按钮设为主要按钮
    if (Array.isArray(footer) && footer.length === 0) {
      buttonProps.type = 'primary';
    }

    return (
      <Button key="close" {...buttonProps}>
        {Intl.get('cancel')}
      </Button>
    );
  }, [footer, close]);

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
  }, [footer, closeBtn, renderCloseBtn]);

  /**
   * 取消回调函数
   */
  const onCancel = useCallback((): void => {
    close?.();
  }, [close]);

  return (
    <div ref={wrapperRef}>
      <Modal
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={onCancel}
        open={open}
        {...rest}
        getContainer={() => wrapperRef.current ?? document.body}
        footer={footerNode}
      >
        {children}
      </Modal>
    </div>
  );
});

ModalDialog.displayName = 'ModalDialog';

export default ModalDialog;
