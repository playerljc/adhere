import { Modal, message } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { JointContent, WarnDialog, duration } from './types';

let handler;

/**
 * openWarnDialog
 * @param duration
 * @param props
 */
export const openWarnDialog: WarnDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.warning({
    title: Intl.v('提示'),
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
 * 警告的提示
 * @param content
 * @param duration
 * @param onClose
 */
export const openWarnMessage = (
  content?: JointContent,
  duration?: duration,
  onClose?: VoidFunction,
) => message.warning(content, duration, onClose);
