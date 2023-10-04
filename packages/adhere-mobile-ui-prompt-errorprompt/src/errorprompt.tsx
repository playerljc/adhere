import { Modal, Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { ErrorDialog } from './types';

const selectorPrefix = 'adhere-mobile-error-prompt';

let handler;

export const openErrorMessage = (props?: ToastShowProps) =>
  Toast.show({
    content: Intl.v('系统异常'),
    maskClickable: false,
    icon: 'fail',
    ...(props ?? {}),
  });

export const openErrorDialog: ErrorDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.show({
    title: Intl.v('提示'),
    actions: [],
    closeOnMaskClick: true,
    ...(props ?? {}),
    content: (
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-dialog-icon`}>
          <CloseCircleFill />
        </div>

        <div className={`${selectorPrefix}-dialog-content`}>
          {props.content ?? Intl.v('系统异常')}
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
