import { Modal, message } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { ErrorDialog, JointContent, duration } from './types';

let handler;

/**
 * openErrorDialog
 * @param duration
 * @param props
 */
export const openErrorDialog: ErrorDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.error({
    title: Intl.v('提示'),
    content: Intl.v('系统异常'),
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
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openErrorMessage = (
  content?: JointContent,
  duration?: duration,
  onClose?: VoidFunction,
) => message.error(content ? content : Intl.v('系统异常'), duration, onClose);
