import { Modal, message } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { JointContent, SuccessDialog, duration } from './types';

let handler;

/**
 * openSuccessDialog
 * @param duration
 * @param props
 */
export const openSuccessDialog: SuccessDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.success({
    title: Intl.v('提示'),
    content: Intl.v('操作成功'),
    mask: false,
    maskClosable: true,
    footer: null,
    ...(props ?? {}),
  });

  if (duration) {
    if (handler) {
      clearTimeout(handler);
    }

    handler = setTimeout(() => {
      result.destroy();
    }, duration as number);
  }

  return result;
};

/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openSuccessMessage = (
  content?: JointContent,
  duration?: duration,
  onClose?: VoidFunction,
) => message.success(content ? content : Intl.v('操作成功'), duration, onClose);
