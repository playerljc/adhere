import { Modal, message } from 'antd';
import { ArgsProps, ConfigOnClose } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

type ConfigContent = React.ReactNode;
type JointContent = ConfigContent | ArgsProps;
type ConfigDuration = number | (() => void);

/**
 * openErrorDialog
 * @param props
 */
export const openWarnDialog = (props?: ModalProps) =>
  Modal.warning({
    title: Intl.v('提示'),
    mask: false,
    maskClosable: true,
    ...(props || {}),
  });

/**
 * 警告的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openWarnMessage = (
  content?: JointContent,
  duration?: ConfigDuration,
  onClose?: ConfigOnClose,
) => message.warning(content, duration, onClose);
