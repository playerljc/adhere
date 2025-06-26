import { Button, Modal } from 'antd';
import React, { memo, useCallback, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type { ModalDialogProps } from './types';

export const selectorPrefix = 'adhere-ui-message-dialog';

const { useTheme } = ConfigProvider;

const ModalDialog = memo<ModalDialogProps>((props) => {
  const { config, closeBtn, close, open, children } = props;

  const { footer = [], centered = true, ...rest } = config;

  const wrapperRef = useRef<HTMLElement | undefined>();

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'MessageDialog',
  });

  /**
   * renderCloseBtn
   * @return {ReactNode}
   */
  function renderCloseBtn() {
    const props = {
      key: 'close',
      title: Intl.get('cancel'),
      type: 'default',
      onClick: () => close?.(),
    };

    if (Array.isArray(footer) && footer.length === 0) {
      props['type'] = 'primary';
    }

    // @ts-ignore
    return <Button {...props}>{Intl.get('cancel')}</Button>;
  }

  const footerNode = useMemo(() => {
    const closeBtnNode = renderCloseBtn();

    let footerNode: any = null;

    if (footer) {
      if (closeBtn) {
        if (Array.isArray(footer)) {
          footerNode = [...footer, closeBtnNode];
        } else {
          footerNode = [footer, closeBtnNode];
        }
      } else {
        footerNode = footer;
      }
    } else {
      if (closeBtn) {
        footerNode = closeBtnNode;
      }
    }

    return footerNode;
  }, [footer, closeBtn]);

  const onCancel = useCallback(() => close?.(), []);

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
    >
      <Modal
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={onCancel}
        open={open}
        {...rest}
        footer={footerNode}
      >
        {children}
      </Modal>
    </div>
  );
});

ModalDialog.displayName = 'ModalDialog';

export default ModalDialog;
