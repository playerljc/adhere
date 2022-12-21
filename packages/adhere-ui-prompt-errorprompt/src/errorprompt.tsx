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
export const openErrorDialog = (props: ModalProps) =>
  Modal.error({
    title: Intl.v('提示'),
    content: Intl.v('系统异常'),
    mask: false,
    maskClosable: true,
    ...props,
  });

/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openErrorMessage = (
  content?: JointContent,
  duration?: ConfigDuration,
  onClose?: ConfigOnClose,
) => message.error(content ? content : Intl.v('系统异常'), duration, onClose);
