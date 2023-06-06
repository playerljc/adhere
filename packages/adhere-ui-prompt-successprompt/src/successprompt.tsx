import { Modal, message } from 'antd';
import { ArgsProps } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

type ConfigContent = React.ReactNode;
type JointContent = ConfigContent | ArgsProps;

/**
 * openSuccessDialog
 * @param props
 */
export const openSuccessDialog = (props?: ModalProps) =>
  Modal.success({
    title: Intl.v('提示'),
    content: Intl.v('操作成功'),
    mask: false,
    maskClosable: true,
    ...(props ?? {}),
  });

/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openSuccessMessage = (
  content?: JointContent,
  duration?: number | VoidFunction,
  onClose?: VoidFunction,
) => message.success(content ? content : Intl.v('操作成功'), duration, onClose);
