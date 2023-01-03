import { Button, Modal } from 'antd';
import React, { FC, memo, useCallback, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { ModalDialogProps } from './types';

export const selectorPrefix = 'adhere-ui-messagedialog';

const ModalDialog: FC<ModalDialogProps> = (props) => {
  const { config, closeBtn, close, children } = props;

  const { footer = [], centered = true, ...other } = config;

  /**
   * renderCloseBtn
   * @return {ReactNode}
   */
  function renderCloseBtn() {
    const props = {
      key: 'close',
      title: Intl.v('取消'),
      type: 'default',
      onClick: () => close?.(),
    };

    if (Array.isArray(footer) && footer.length === 0) {
      props['type'] = 'primary';
    }

    // @ts-ignore
    return <Button {...props}>{Intl.v('取消')}</Button>;
  }

  const footerNode = useMemo(() => {
    const closeBtnNode = renderCloseBtn();

    let footerNode;

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
    <Modal
      {...other}
      footer={footerNode}
      centered={centered}
      wrapClassName={selectorPrefix}
      onCancel={onCancel}
      open
    >
      {children}
    </Modal>
  );
};

export default memo(ModalDialog);
