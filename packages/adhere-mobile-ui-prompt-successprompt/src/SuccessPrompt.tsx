import { Modal, Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import { CheckCircleFill } from 'antd-mobile-icons';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SuccessDialog } from './types';

const selectorPrefix = 'adhere-mobile-success-prompt';

let handler;

export const openSuccessMessage = (props?: ToastShowProps) =>
  Toast.show({
    content: Intl.v('操作成功'),
    maskClickable: false,
    icon: 'success',
    ...(props ?? {}),
  });

export const openSuccessDialog: SuccessDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.show({
    title: Intl.v('提示'),
    actions: [],
    closeOnMaskClick: true,
    ...(props ?? {}),
    content: (
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-dialog-icon`}>
          <CheckCircleFill />
        </div>

        <div className={`${selectorPrefix}-dialog-content`}>
          {props.content ?? Intl.v('操作成功')}
        </div>
      </div>
    ),
  });

  if (duration) {
    if (handler) {
      clearTimeout(handler);
    }

    handler = setTimeout(() => {
      result.close();
    }, duration as number);
  }

  return result;
};
